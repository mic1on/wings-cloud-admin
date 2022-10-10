import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import type { IObject } from '#/interface.d';
import type { Router } from 'vue-router';
import { RouteUserEnum, RouteBaseEnum, StorageAppEnum } from '@/enums';
import { getStorage } from '@/utils/wings-storage';
import { getLoginStorageType } from '@/plugins/pinia/modules/user';

export const addRouterGuard = (router: Router): Router => {
  router.beforeEach(
    (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const token: string = getStorage(StorageAppEnum.TOKEN, {
        type: getLoginStorageType(),
      });

      const userRoles: IObject[string] = getStorage(StorageAppEnum.USER_ROLES, {
        type: getLoginStorageType(),
      });

      const requiresAuth = to.matched.some(
        (item: any) => item.meta.requiresAuth
      );

      if (requiresAuth && !token) {
        next({
          path:
            RouteUserEnum.ROUTE_LOGIN +
            '?type=' +
            import.meta.env.APP_LOGIN_TYPE,
        });
        return;
      }

      if (
        requiresAuth &&
        userRoles.filter((item: string) => item == to.path).length === 0
      ) {
        next({
          path: RouteBaseEnum.ROUTE_NO_PERMISSION,
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
