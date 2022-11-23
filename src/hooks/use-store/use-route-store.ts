import type { Routes } from '@/plugins/vue-router/index.d';
import type { ViewComponents } from '@/types/global.d';
import { defineStore } from 'pinia';
import { RouteRecordRaw, RouteRecordName } from 'vue-router';
import {
  mergeRoleRoutes,
  mergeAdminMenuRoutes,
  routerInject,
} from '@/utils/router';
import { autoImportViewComponents } from '@/utils/auto';
import { router, routes } from '@/plugins/vue-router';
import { getRoleRoutes as _getRoleRoutes } from '@/apis/system/user';
import { _t } from '@/plugins/vue-i18n';

/**
 * @name useRouteStore
 * @description 路由状态钩子函数
 */
export const useRouteStore = defineStore('route', () => {
  // 权限路由
  const roleRoutes = ref<Routes>([]);

  // 管理系统菜单路由
  const adminMenuRoutes = ref<Routes>([]);

  // 设置权限路由
  const setRolesRoutes = (data: Routes): void => {
    roleRoutes.value = data.sort((a: any, b: any) => a.meta.sort - b.meta.sort);
    roleRoutes.value.forEach((route: RouteRecordRaw) => {
      if (!router.hasRoute(route.name as RouteRecordName)) {
        router.addRoute(route);
      }
    });
  };

  // 设置管理系统菜单路由
  const setAdminMenuRoutes = (data: Routes): void => {
    adminMenuRoutes.value = data.sort(
      (a: any, b: any) => a.meta.sort - b.meta.sort
    );
    adminMenuRoutes.value.forEach((route: RouteRecordRaw) => {
      if (!router.hasRoute(route.name as RouteRecordName)) {
        router.addRoute(route);
      }
    });
  };

  // 获取权限路由（异步路由）
  const getRoleRoutes = async (): Promise<Routes> => {
    return new Promise(async (resolve) => {
      const { code, data } = await _getRoleRoutes();
      if (code == 0) {
        const viewComponents: ViewComponents = autoImportViewComponents(
          import.meta.glob('/src/views/**/*.vue')
        );
        const roleRoutes: Routes = await mergeRoleRoutes(
          data,
          viewComponents,
          _t
        );
        const adminMenuRoutes: Routes = await mergeAdminMenuRoutes(
          routerInject(routes, _t),
          roleRoutes
        );
        setAdminMenuRoutes(adminMenuRoutes);
        setRolesRoutes(roleRoutes);
        resolve(roleRoutes);
      } else {
        resolve([]);
      }
    });
  };

  return {
    adminMenuRoutes,
    roleRoutes,
    setAdminMenuRoutes,
    setRolesRoutes,
    getRoleRoutes,
  };
});
