import type { RouteState } from './route.d';
import type { RouteMeta, Routes } from '../../../plugins/vue-router/index.d';
import type { Files } from '../../../utils/auto/index.d';
import { defineStore } from 'pinia';
import { RouteRecordRaw, RouteRecordName } from 'vue-router';
import { autoImportViews } from '../../../utils/auto';
import { getStorage, setStorage } from '../../../utils/storage';
import { StorageEnum } from '../../../enums';
import { router, routes } from '../../vue-router';
import { getRoleRoutes } from '../../../apis/admin/auth';
import { getLoginStorageType } from './user';
import LayoutRouter from '../../../components/layout/layout-router.vue';

/**
 * @name useRouteStore
 * @description 导出路由状态钩子
 */
export default defineStore('route', {
  state: (): RouteState => ({
    /**
     * @name staticRoutes
     * @description 静态路由
     */
    staticRoutes: getStorage(StorageEnum.STATIC_ROUTES) || routes,

    /**
     * @name adminRoutes
     * @description 管理系统菜单路由
     */
    adminRoutes:
      getStorage(StorageEnum.ADMIN_ROUTES, {
        type: getLoginStorageType(),
      }) || [],

    /**
     * @name roleRoutes
     * @description 权限路由
     */
    roleRoutes:
      getStorage(StorageEnum.ROLE_ROUTES, {
        type: getLoginStorageType(),
      }) || [],

    /**
     * @name allRoutes
     * @description 全部路由
     */
    allRoutes:
      getStorage(StorageEnum.ALL_ROUTES, {
        type: getLoginStorageType(),
      }) || [],
  }),
  actions: {
    /**
     * @name setStaticRoutes
     * @description 设置静态路由
     */
    setStaticRoutes(data: Routes): void {
      this.staticRoutes = data;
      setStorage(StorageEnum.STATIC_ROUTES, data);
    },

    /**
     * @name setAdminRoutes
     * @description 设置管理系统菜单路由
     */
    setAdminRoutes(data: Routes): void {
      this.adminRoutes = data.sort(
        (a: any, b: any) => a.meta.sort - b.meta.sort
      );

      this.adminRoutes.map((route: RouteRecordRaw) => {
        if (!router.hasRoute(route.name as RouteRecordName)) {
          router.addRoute(route);
        }
      });

      setStorage(StorageEnum.ADMIN_ROUTES, this.adminRoutes, {
        type: getLoginStorageType(),
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

      this.roleRoutes.map((route: RouteRecordRaw) => {
        if (!router.hasRoute(route.name as RouteRecordName)) {
          router.addRoute(route);
        }
      });

      setStorage(StorageEnum.ROLE_ROUTES, this.roleRoutes, {
        type: getLoginStorageType(),
      });
    },

    /**
     * @name setAllRoutes
     * @description 设置全部路由
     */
    setAllRoutes(data: Routes): void {
      this.allRoutes = data;
      setStorage(StorageEnum.ALL_ROUTES, this.allRoutes, {
        type: getLoginStorageType(),
      });
    },

    /**
     * @name getRoleRoutes
     * @description 获取权限路由
     */
    async getRoleRoutes(): Promise<void> {
      const { data } = await getRoleRoutes();
      const views: Files = autoImportViews(
        import.meta.glob('/src/views/**/*.vue')
      );

      const roleRoutes: Routes = this.mergeRoleRoutes(data, views);
      const adminRoutes: Routes = this.mergeAdminRoutes(routes, roleRoutes);

      this.setAdminRoutes(adminRoutes);
      this.setRolesRoutes(roleRoutes);
      this.setAllRoutes(data.concat(this.staticRoutes));
    },

    /**
     * @name mergeAdminRoutes
     * @description 合并管理系统路由
     * @return adminRoutes
     */
    mergeAdminRoutes(staticRoutes: Routes, roleRoutes: Routes): Routes {
      const adminRoutes: Routes = [];
      staticRoutes.forEach((route: RouteRecordRaw) => {
        if (route.meta && route.meta.isAdmin === true) {
          adminRoutes.push(route);
        }
      });
      roleRoutes.forEach((route: RouteRecordRaw) => {
        if (route.meta && route.meta.isAdmin === true) {
          adminRoutes.push(route);
        }
      });
      return adminRoutes;
    },

    /**
     * @name mergeRoleRoutes
     * @description 合并权限路由
     * @return _routes
     */
    mergeRoleRoutes(roleRoutes: Routes, viewComponents: Files): Routes {
      const _routes: Routes = [];
      roleRoutes.forEach((item: RouteMeta) => {
        const _route: RouteMeta = item;
        if (!item.component) {
          item.component = LayoutRouter;
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
