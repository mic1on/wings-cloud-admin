import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import type { IObject } from '#/interface.d';
import type { Router } from 'vue-router';
import { RouteUserEnum, RouteBaseEnum } from '@/enums/route';
import { StorageAppEnum } from '@/enums/storage';
import { getStorage } from '@/utils/app-storage';
import { getLoginStorageType } from '@/store/app-user';

/**
 * 注入 Vue-router 路由守卫
 * @param router
 * @returns
 */
export const addRouterGuard = (router: Router): Router => {
  /**
   * 全局前置守卫
   */
  router.beforeEach(
    (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      /**
       * 获取用户凭证
       */
      const token: string = getStorage(StorageAppEnum.TOKEN, {
        type: getLoginStorageType(),
      });

      /**
       * 获取用户权限
       */
      const userRoles: IObject[string] = getStorage(StorageAppEnum.USER_ROLES, {
        type: getLoginStorageType(),
      });

      /**
       * 是否需要鉴权
       */
      const requiresAuth = to.matched.some(
        (item: any) => item.meta.requiresAuth
      );

      /**
       * 未登录时跳转登录页
       */
      if (requiresAuth && !token) {
        next({
          path:
            RouteUserEnum.ROUTE_LOGIN +
            '?type=' +
            import.meta.env.APP_LOGIN_TYPE,
        });
        return;
      }

      /**
       * 未授权时跳转 403 页面
       */
      if (
        requiresAuth &&
        userRoles.filter((item: string) => item == to.path).length === 0
      ) {
        next({
          path: RouteBaseEnum.ROUTE_NO_PERMISSION,
        });
        return;
      }

      /**
       * 正常进入路由
       */
      next();
    }
  );

  /**
   * 全局解析守卫
   */
  router.beforeResolve(async (to: RouteLocationNormalized) => {});

  /**
   * 全局后置钩子
   */
  router.afterEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized) => {}
  );

  return router;
};
