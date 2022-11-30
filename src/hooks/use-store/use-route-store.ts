import type { Routes } from '@/plugins/vue-router/index.d';
import type { ViewComponents } from '@/types/global.d';
import { defineStore } from 'pinia';
import {
  mergeAsyncRoutes,
  mergeMenuRoutes,
  routerInject,
  registerRouter,
} from '@/utils/router';
import { autoImportViewComponents } from '@/utils/auto';
import { router, routes } from '@/plugins/vue-router';
import { _t } from '@/plugins/vue-i18n';
import { getRouteAsync } from '@/apis/system/user';

/**
 * @name useRouteStore
 * @description 路由状态钩子函数
 * @return menuRoutes 菜单路由
 * @return asyncRoutes 异步路由
 * @return keepAliveNames 页面缓存
 * @return setMenuRoutes 设置菜单路由
 * @return setAsyncRoutes 设置异步路由
 * @return getAsyncRoutes 获取异步路由
 * @return keepAliveAddName 添加 keep alive 视图组件名称
 * @return keepAliveRemoveName 移除 keep alive 视图组件名称
 */
export const useRouteStore = defineStore('route', () => {
  const asyncRoutes = ref<Routes>([]);

  const menuRoutes = ref<Routes>([]);

  const setAsyncRoutes = (data: Routes): void => {
    asyncRoutes.value = data;
    registerRouter(data, router);
  };

  const setMenuRoutes = (data: Routes): void => {
    menuRoutes.value = data;
    registerRouter(data, router);
  };

  const getAsyncRoutes = async (): Promise<Routes> => {
    return new Promise(async (resolve) => {
      const { code, data } = await getRouteAsync();
      if (code == 0) {
        const viewComponents: ViewComponents = autoImportViewComponents(
          import.meta.glob('/src/views/**/*.vue')
        );
        const asyncRoutes: Routes = await mergeAsyncRoutes(
          routerInject(data, _t),
          viewComponents
        );
        setAsyncRoutes(asyncRoutes);
        const menuRoutes: Routes = await mergeMenuRoutes(
          routerInject(routes, _t),
          asyncRoutes
        );
        setMenuRoutes(menuRoutes);
        resolve(asyncRoutes);
      } else {
        resolve([]);
      }
    });
  };

  return {
    menuRoutes,
    asyncRoutes,
    setMenuRoutes,
    setAsyncRoutes,
    getAsyncRoutes,
  };
});
