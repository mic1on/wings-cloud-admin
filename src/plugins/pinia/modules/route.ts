import type { RouteState } from '#/store/app-route.d';
import { defineStore } from 'pinia';
import { RouteRecordRaw, RouteRecordName } from 'vue-router';
import { getStorage, setStorage } from '@/utils';
import { StorageRouteEnum } from '@/enums';
import { getAdminRoutes } from '@/apis/admin/auth';
import { router } from '@/plugins/vue-router';
import { getLoginStorageType } from './user';

/**
 * 导出路由状态钩子
 */
export default defineStore('route', {
  state: (): RouteState => ({
    /**
     * 静态路由
     */
    staticRoutes: getStorage(StorageRouteEnum.STATIC_ROUTES) || [],

    /**
     * 管理系统菜单路由
     */
    adminRoutes:
      getStorage(StorageRouteEnum.ADMIN_ROUTES, {
        type: getLoginStorageType(),
      }) || [],

    /**
     * 权限路由
     */
    roleRoutes:
      getStorage(StorageRouteEnum.ROLE_ROUTES, {
        type: getLoginStorageType(),
      }) || [],

    /**
     * 全部路由
     */
    allRoutes:
      getStorage(StorageRouteEnum.ALL_ROUTES, {
        type: getLoginStorageType(),
      }) || [],
  }),
  actions: {
    /**
     * 设置静态路由
     */
    setStaticRoutes(data: Array<RouteRecordRaw>): void {
      this.staticRoutes = data;
      setStorage(StorageRouteEnum.STATIC_ROUTES, data);
    },

    /**
     * 设置管理系统菜单路由
     */
    setAdminRoutes(data: Array<RouteRecordRaw>): void {
      this.adminRoutes = data.sort(
        (a: any, b: any) => a.meta.sort - b.meta.sort
      );

      this.adminRoutes.map((route: RouteRecordRaw) => {
        if (!router.hasRoute(route.name as RouteRecordName)) {
          router.addRoute(route);
        }
      });

      setStorage(StorageRouteEnum.ADMIN_ROUTES, this.adminRoutes, {
        type: getLoginStorageType(),
      });
    },

    /**
     * 设置权限路由
     */
    setRolesRoutes(data: Array<RouteRecordRaw>): void {
      this.roleRoutes = data.sort(
        (a: any, b: any) => a.meta.sort - b.meta.sort
      );

      this.roleRoutes.map((route: RouteRecordRaw) => {
        if (!router.hasRoute(route.name as RouteRecordName)) {
          router.addRoute(route);
        }
      });

      setStorage(StorageRouteEnum.ROLE_ROUTES, this.roleRoutes, {
        type: getLoginStorageType(),
      });
    },

    /**
     * 设置全部路由
     */
    setAllRoutes(data: Array<RouteRecordRaw>): void {
      this.allRoutes = data;
      setStorage(StorageRouteEnum.ALL_ROUTES, this.allRoutes, {
        type: getLoginStorageType(),
      });
    },

    /**
     * 获取权限路由
     */
    async getAdminRoutes(): Promise<void> {
      const { data } = await getAdminRoutes();

      const _adminRoutes: Array<RouteRecordRaw> = [];
      const _roleRoutes: Array<RouteRecordRaw> = data;

      this.staticRoutes.map((route: RouteRecordRaw) => {
        if (route.meta && route.meta.isMenu === true) {
          _adminRoutes.push(route);
        }
      });

      _roleRoutes.map((route: RouteRecordRaw) => {
        if (route.meta && route.meta.isMenu === true) {
          _adminRoutes.push(route);
        }
      });

      this.setAdminRoutes(_adminRoutes);
      this.setRolesRoutes(_roleRoutes);
      this.setAllRoutes(_roleRoutes.concat(this.staticRoutes));
    },
  },
});
