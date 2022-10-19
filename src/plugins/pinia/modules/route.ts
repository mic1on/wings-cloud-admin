import type { RouteMeta } from 'vue-router';
import type { RouteState } from './route.d';
import type { Routes } from '../../vue-router/index.d';
import type { ViewComponents } from '../../../views';
import { defineStore } from 'pinia';
import { RouteRecordRaw, RouteRecordName } from 'vue-router';
import { autoImportViewComponents } from '../../../utils/auto';
import { router, routes } from '../../vue-router';
import { getRoleRoutes } from '../../../apis/admin/auth';

/**
 * @name useRouteStore
 * @description 导出路由状态钩子
 */
export const useRouteStore = defineStore('route', {
  state: (): RouteState => ({
    /**
     * @name staticRoutes
     * @description 静态路由
     */
    staticRoutes: routes,

    /**
     * @name adminMenuRoutes
     * @description 管理系统菜单路由
     */
    adminMenuRoutes: [],

    /**
     * @name roleRoutes
     * @description 权限路由
     */
    roleRoutes: [],

    /**
     * @name allRoutes
     * @description 全部路由
     */
    allRoutes: [],
  }),
  actions: {
    /**
     * @name setStaticRoutes
     * @description 设置静态路由
     */
    setStaticRoutes(data: Routes): void {
      this.staticRoutes = data;
    },

    /**
     * @name setAdminMenuRoutes
     * @description 设置管理系统菜单路由
     */
    setAdminMenuRoutes(data: Routes): void {
      this.adminMenuRoutes = data.sort(
        (a: any, b: any) => a.meta.sort - b.meta.sort
      );
      this.adminMenuRoutes.forEach((route: RouteRecordRaw) => {
        if (!router.hasRoute(route.name as RouteRecordName)) {
          router.addRoute(route);
        }
      });
    },

    /**
     * @name setRolesRoutes
     * @description 设置权限路由
     */
    setRolesRoutes(data: Routes): void {
      this.roleRoutes = data.sort(
        (a: any, b: any) => a.meta.sort - b.meta.sort
      );
      this.roleRoutes.forEach((route: RouteRecordRaw) => {
        if (!router.hasRoute(route.name as RouteRecordName)) {
          router.addRoute(route);
        }
      });
    },

    /**
     * @name setAllRoutes
     * @description 设置全部路由
     */
    setAllRoutes(data: Routes): void {
      this.allRoutes = data;
    },

    /**
     * @name getRoleRoutes
     * @description 获取权限路由
     */
    async getRoleRoutes(): Promise<Routes> {
      return new Promise(async (resolve) => {
        const { code, data } = await getRoleRoutes();
        if (code == 0) {
          const viewComponents: ViewComponents = autoImportViewComponents(
            import.meta.glob('/src/views/**/*.vue')
          );
          const roleRoutes: Routes = this.mergeRoleRoutes(data, viewComponents);
          const adminMenuRoutes: Routes = this.mergeAdminMenuRoutes(
            routes,
            roleRoutes
          );
          this.setAdminMenuRoutes(adminMenuRoutes);
          this.setRolesRoutes(roleRoutes);
          this.setAllRoutes(data.concat(this.staticRoutes));
          resolve(this.roleRoutes);
        } else {
          resolve([]);
        }
      });
    },

    /**
     * @name mergeAdminMenuRoutes
     * @description 合并管理系统路由
     * @return adminMenuRoutes
     */
    mergeAdminMenuRoutes(staticRoutes: Routes, roleRoutes: Routes): Routes {
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
    },

    /**
     * @name mergeRoleRoutes
     * @description 合并权限路由
     * @return _routes
     */
    mergeRoleRoutes(
      roleRoutes: Routes,
      viewComponents: ViewComponents
    ): Routes {
      const _routes: Routes = [];
      roleRoutes.forEach((item: RouteMeta) => {
        const _route: RouteMeta = item;
        if (!item.component) {
          // TODO 切换动态路由报错
          // item.component = () =>
          //   import('@/components/layout/layout-router-view.vue');
        } else {
          item.component = viewComponents[item.component as string];
        }
        if (item.children && item.children.length > 0) {
          _route.children = this.mergeRoleRoutes(item.children, viewComponents);
        }
        _routes.push(item);
      });
      return _routes;
    },
  },
});
