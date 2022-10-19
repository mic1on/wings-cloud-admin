import type {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import type { Roles } from '../../hooks/use-store/index.d';
import { RouteEnum, StorageEnum } from '../../enums';
import { useBaseStore } from '../../hooks/use-store/use-base-store';
import { useRouteStore } from '../../hooks/use-store/use-route-store';
import { useUserStore } from '../../hooks/use-store/use-user-store';
import { getStorage } from '../../utils/storage';
import { getLoginStorageType } from '../../utils/common';

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
        type: getLoginStorageType(),
      });
      const userRoles: Roles = getStorage(StorageEnum.USER_ROLES, {
        type: getLoginStorageType(),
      });
      const requiresAuth: boolean = to.matched.some(
        (item: any) => item.meta.requiresAuth
      );

      const baseStore = useBaseStore();
      const routeStore = useRouteStore();
      const userStore = useUserStore();

      if (requiresAuth && !token) {
        next({
          path:
            RouteEnum.ROUTE_LOGIN + '?type=' + import.meta.env.APP_LOGIN_TYPE,
        });
        return;
      }

      if (token && routeStore.roleRoutes.length == 0) {
        baseStore.changeAppLoading(true);
        await userStore.getUserProfile();
        await userStore.getUserRoles();
        await routeStore.getRoleRoutes();
        baseStore.changeAppLoading(false);
        if (to.redirectedFrom) {
          next({ path: to.redirectedFrom.fullPath, replace: true });
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
