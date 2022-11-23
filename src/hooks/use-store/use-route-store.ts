import type { Routes } from '@/plugins/vue-router/index.d';
import type { ViewComponents } from '@/types/global.d';
import { defineStore } from 'pinia';
import { RouteRecordRaw, RouteRecordName } from 'vue-router';
import { autoImportViewComponents } from '@/utils/auto';
import {
  mergeRoleRoutes,
  mergeAdminMenuRoutes,
  routerInject,
} from '@/utils/router';
import { _t } from '@/plugins/vue-i18n';
import { router, routes } from '@/plugins/vue-router';
import { getRoleRoutes as _getRoleRoutes } from '@/apis/system/user';

/**
 * @name useRouteStore
 * @description 路由状态钩子函数
 * @return adminMenuRoutes
 * @return roleRoutes
 * @return setAdminMenuRoutes
 * @return setRolesRoutes
 * @return getRoleRoutes
 */
export const useRouteStore = defineStore('route', () => {
  const roleRoutes = ref<Routes>([]);

  const adminMenuRoutes = ref<Routes>([]);

  const setRolesRoutes = (data: Routes): void => {
    roleRoutes.value = data.sort((a: any, b: any) => a.meta.sort - b.meta.sort);
    roleRoutes.value.forEach((route: RouteRecordRaw) => {
      if (!router.hasRoute(route.name as RouteRecordName)) {
        router.addRoute(route);
      }
    });
  };

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
