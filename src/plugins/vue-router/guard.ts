import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import type { IObject } from '#/interface.d';
import type { Router } from 'vue-router';
import { RouteEnum, RouteEnum, StorageEnum } from '@/enums';
import { getStorage } from '@/utils';
import { getLoginStorageType } from '@/plugins/pinia/modules/user';

export const addRouterGuard = (router: Router): Router => {
  router.beforeEach(
    (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const token: string = getStorage(StorageEnum.TOKEN, {
        type: getLoginStorageType(),
      });

      const userRoles: IObject[string] = getStorage(StorageEnum.USER_ROLES, {
        type: getLoginStorageType(),
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

      if (
        requiresAuth &&
        userRoles.filter((item: string) => item == to.path).length === 0
      ) {
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
