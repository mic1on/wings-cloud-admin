import type {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import type { Roles } from '../pinia/modules/route.d';
import { RouteEnum, StorageEnum } from '../../enums';
import { stores } from '../pinia';
import { getStorage } from '../../utils/storage';

export const addRouterGuard = (router: Router): Router => {
  router.beforeEach(
    (
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

      const requiresAuth = to.matched.some(
        (item: any) => item.meta.requiresAuth
      );

      if (requiresAuth && !token) {
        next({
          path:
            RouteEnum.ROUTE_LOGIN + '?type=' + import.meta.env.APP_LOGIN_TYPE,
        });
        return;
      }

      // if (token) {
      // TODO to register router
      // }

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
