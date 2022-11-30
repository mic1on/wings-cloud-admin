import type {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import { RouteEnum, StorageEnum } from '@/constants/enums';
import { useSystemStore } from '@/hooks/use-store/use-system-store';
import { useRouteStore } from '@/hooks/use-store/use-route-store';
import { useUserStore } from '@/hooks/use-store/use-user-store';
import { getStorage } from '@/utils/storage';
import { getLoginStorageType } from '@/utils/common';

import { useNProgress } from '@vueuse/integrations/useNProgress';
import '@/assets/styles/nprogress.scss';

const { isLoading } = useNProgress();

/**
 * @name addRouterGuard
 * @description 注入路由拦截器
 * @returns
 */
export const addRouterGuard = (router: Router): Router => {
  // 前置拦截
  router.beforeEach(
    async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      isLoading.value = true;
      // 获取权限数据
      const userRoles: Array<string> = getStorage(StorageEnum.USER_ROLES, {
        type: getLoginStorageType(),
      });
      const requiresAuth: boolean = to.matched.some(
        (item: any) => item.meta.requiresAuth
      );

      // 初始化全局状态
      const systemStore = useSystemStore();
      const routeStore = useRouteStore();
      const userStore = useUserStore();

      // 未登录跳转登录页
      if (requiresAuth && !userStore.isLogin) {
        next({
          path: RouteEnum.ROUTE_SIGNIN,
        });
        return;
      }

      // 已经登录情况下跳禁止跳登录页
      if (
        userStore.isLogin &&
        (to.path === RouteEnum.ROUTE_SIGNIN ||
          to.path === RouteEnum.ROUTE_SIGNUP ||
          to.path === RouteEnum.ROUTE_PASSWORD_FORGET)
      ) {
        next({
          path: RouteEnum.ROUTE_ADMIN_FIRST,
        });
        return;
      }

      // 页面刷新时初始化路由信息
      if (userStore.isLogin && routeStore.asyncRoutes.length == 0) {
        systemStore.loading = true;
        await userStore.getUserProfile();
        await userStore.getUserRoles();
        await routeStore.getAsyncRoutes();
        systemStore.loading = false;
        if (to.redirectedFrom) {
          next({ path: to.redirectedFrom.fullPath, replace: true });
        } else {
          next({ ...to, replace: true });
        }
        return;
      }

      // 鉴权处理
      if (userStore.isLogin && requiresAuth && !userRoles.includes(to.path)) {
        next({
          path: RouteEnum.ROUTE_NO_PERMISSION,
        });
        return;
      }

      next();
    }
  );

  // 解析拦截
  router.beforeResolve(async (to: RouteLocationNormalized) => {});

  // 后置拦截
  router.afterEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      isLoading.value = false;

      // 设置浏览器标题
      const systemStore = useSystemStore();
      if (to.meta.menuName) {
        systemStore.browserTitle = to.meta.menuName;
      }
    }
  );

  return router;
};
