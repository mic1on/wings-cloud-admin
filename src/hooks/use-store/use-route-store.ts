import type { RouteMeta } from 'vue-router';
import type { Routes } from '../../plugins/vue-router/index.d';
import type { ViewComponents } from '../../views';
import { defineStore } from 'pinia';
import { RouteRecordRaw, RouteRecordName } from 'vue-router';
import { autoImportViewComponents } from '../../utils/auto';
import { router, routes } from '../../plugins/vue-router';
import { getRoleRoutes as _getRoleRoutes } from '../../apis/admin/auth';

/**
 * @name useRouteStore
 * @description 路由状态钩子函数
 */
export const useRouteStore = defineStore('route', () => {
  // 静态路由（本地路由）
  const staticRoutes = ref<Routes>(routes);

  // 管理系统菜单路由
  const adminMenuRoutes = ref<Routes>([]);

  // 权限路由（异步路由）
  const roleRoutes = ref<Routes>([]);

  // 全部路由
  const allRoutes = ref<Routes>([]);

  // 设置静态路由
  const setStaticRoutes = (data: Routes): void => {
    staticRoutes.value = data;
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

  // 设置权限路由（异步路由）
  const setRolesRoutes = (data: Routes): void => {
    roleRoutes.value = data.sort((a: any, b: any) => a.meta.sort - b.meta.sort);
    roleRoutes.value.forEach((route: RouteRecordRaw) => {
      if (!router.hasRoute(route.name as RouteRecordName)) {
        router.addRoute(route);
      }
    });
  };

  // 设置全部路由
  const setAllRoutes = (data: Routes): void => {
    allRoutes.value = data;
  };

  // 获取权限路由（异步路由）
  const getRoleRoutes = async (): Promise<Routes> => {
    return new Promise(async (resolve) => {
      const { code, data } = await _getRoleRoutes();
      if (code == 0) {
        const viewComponents: ViewComponents = autoImportViewComponents(
          import.meta.glob('/src/views/**/*.vue')
        );
        const roleRoutes: Routes = await mergeRoleRoutes(data, viewComponents);
        const adminMenuRoutes: Routes = await mergeAdminMenuRoutes(
          routes,
          roleRoutes
        );
        setAdminMenuRoutes(adminMenuRoutes);
        setRolesRoutes(roleRoutes);
        setAllRoutes(data.concat(staticRoutes));
        resolve(roleRoutes);
      } else {
        resolve([]);
      }
    });
  };

  // 合并管理系统菜单路由
  const mergeAdminMenuRoutes = (
    staticRoutes: Routes,
    roleRoutes: Routes
  ): Routes => {
    const adminMenuRoutes: Routes = [];
    staticRoutes.forEach((route: RouteRecordRaw) => {
      if (route.meta && route.meta.isAdmin === true) {
        adminMenuRoutes.push(route);
      }
    });
    roleRoutes.forEach((route: RouteRecordRaw) => {
      if (route.meta && route.meta.isAdmin === true) {
        adminMenuRoutes.push(route);
      }
    });
    return adminMenuRoutes;
  };

  // 合并权限路由
  const mergeRoleRoutes = (
    roleRoutes: Routes,
    viewComponents: ViewComponents
  ): Routes => {
    const _routes: Routes = [];
    roleRoutes.forEach((item: RouteMeta) => {
      // TODO 动态注册组件有问题，基于 keep-alive 下出现
      const _route: RouteMeta = item;
      if (item.component) {
        item.component = viewComponents[item.component as string];
      }
      if (item.children && item.children.length > 0) {
        _route.children = mergeRoleRoutes(item.children, viewComponents);
      }
      _routes.push(item);
    });
    return _routes;
  };

  return {
    staticRoutes,
    adminMenuRoutes,
    roleRoutes,
    allRoutes,
    setStaticRoutes,
    setAdminMenuRoutes,
    setRolesRoutes,
    setAllRoutes,
    getRoleRoutes,
    mergeAdminMenuRoutes,
    mergeRoleRoutes,
  };
});
