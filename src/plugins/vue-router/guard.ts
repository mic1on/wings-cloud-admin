import { useBaseStore } from '@/plugins/pinia/modules/base';
import type {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import type { Roles } from '../pinia/modules/route.d';
import { RouteEnum, StorageEnum } from '../../enums';
import { stores } from '../pinia';
import { getStorage } from '../../utils/storage';

/**
 * @name addRouterGuard
 * @description 注入路由拦截器
 * @returns
 */
export const addRouterGuard = (router: Router): Router => {
  router.beforeEach(
    async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const token: string = getStorage(StorageEnum.TOKEN, {
        type: stores.getLoginStorageType(),
      });
      const userRoles: Roles = getStorage(StorageEnum.USER_ROLES, {
        type: stores.getLoginStorageType(),
      });
      const requiresAuth: boolean = to.matched.some(
        (item: any) => item.meta.requiresAuth
      );
      const baseStore = stores.useBaseStore();
      const routeStore = stores.useRouteStore();
      const userStore = stores.useUserStore();
      if (requiresAuth && !token) {
        next({
          path:
            RouteEnum.ROUTE_LOGIN + '?type=' + import.meta.env.APP_LOGIN_TYPE,
        });
        return;
      }
      if (token && routeStore.roleRoutes.length == 0) {
        baseStore.changeGlobalLoading(true);
        await userStore.getUserInfo();
        await userStore.getUserRoles();
        await routeStore.getRoleRoutes();
        baseStore.changeGlobalLoading(false);
        if (to.redirectedFrom) {
          next({ path: to.redirectedFrom.path, replace: true });
        } else {
          next({ ...to, replace: true });
        }
        return;
      }
      if (requiresAuth && !userRoles.includes(to.path)) {
        next({
          path: RouteEnum.ROUTE_NO_PERMISSION,
        });
        return;
      }
      next();
    }
  );

  router.beforeResolve(async (to: RouteLocationNormalized) => {});

  router.afterEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized) => {}
  );

  return router;
};
