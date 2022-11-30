import type { Routes } from '@/plugins/vue-router/index.d';
import type { I18nT } from '@/plugins/vue-i18n/index.d';
import type { IObject, ViewComponents } from '@/types/global.d';
import type { Router, RouteRecordRaw, RouteRecordName } from 'vue-router';
import { useCloned } from '@vueuse/core';

/**
 * @name registerRouter
 * @description 注册路由
 * @param routes 路由
 * @param router 路由实例
 */
export const registerRouter = (routes: Routes, router: Router) => {
  routes.forEach((route: RouteRecordRaw) => {
    if (!router.hasRoute(route.name as RouteRecordName)) {
      router.addRoute(route);
    }
  });
};

/**
 * @name mergeMenuRoutes
 * @description 合并管理系统菜单路由（含递归排序）
 * @param staticRoutes 静态路由
 * @param asyncRoutes 异步路由
 * @return _routes 路由
 */
export const mergeMenuRoutes = (
  staticRoutes: Routes,
  asyncRoutes?: Routes
): Routes => {
  const _routes: Routes = [];
  const _allRoutes: Routes = staticRoutes
    .concat(asyncRoutes)
    .sort((a: any, b: any) => a.meta?.sort - b.meta?.sort);
  _allRoutes.forEach((item: RouteRecordRaw) => {
    if (item && item.meta && item.meta.isMenu === true) {
      item.children = mergeMenuRoutes(item.children || []);
      _routes.push(item);
    }
  });
  return _routes;
};

/**
 * @name mergeAsyncRoutes
 * @description 合并异步路由，注入异步视图组件
 * @param asyncRoutes 异步路由
 * @param t 国际化函数
 * @return _routes 路由
 */
export const mergeAsyncRoutes = (
  asyncRoutes: Routes,
  viewComponents: ViewComponents
): Routes => {
  const _routes: Routes = [];
  asyncRoutes.forEach((item) => {
    item.meta.async = true;
    if (item.component) {
      item.component = viewComponents[item.component as string];
    }
    item.children = mergeAsyncRoutes(item.children || [], viewComponents);
    _routes.push(item);
  });
  return _routes;
};

/**
 * @name routerInject
 * @description 路由注入，合并 国际化、面包屑 注入
 * @param routes 路由
 * @param t 国际化函数
 * @param breadcrumbList 面包屑数组
 * @return _routes 路由
 */
export const routerInject = (
  routes: Routes,
  t: I18nT,
  breadcrumbList?: Array<IObject>
): Routes => {
  const _routes: Routes = [];
  routes.forEach((item) => {
    if (!item || !item.meta || item.meta.layout !== 'admin') return;
    item.meta.breadcrumb = [];
    if (item.meta) {
      if (item.meta.i18nKey) {
        item.meta.menuName = t((item.meta.i18nKey as string) + '.menuName');
        item.meta.menuDescription = t(
          (item.meta.i18nKey as string) + '.menuDescription'
        );
      }
      if (breadcrumbList) {
        const { cloned } = useCloned(breadcrumbList);
        item.meta.breadcrumb = cloned.value;
      }
      item.meta.breadcrumb.push({
        label: item.meta.menuName,
        value: item.path,
      });
    }
    item.children = routerInject(item.children || [], t, item.meta.breadcrumb);
    _routes.push(item);
  });
  return _routes;
};

/**
 * @name routerInjectLanguages
 * @description 路由注册国际化多语言
 * @param routes 路由
 * @param t 国际化函数
 * @return _routes 路由
 */
export const routerInjectLanguages = (routes: Routes, t: I18nT): Routes => {
  const _routes: Routes = [];
  routes.forEach((item) => {
    if (item.meta && item.meta.isI18n) {
      if (item.meta.i18nKey) {
        item.meta.menuName = t((item.meta.i18nKey as string) + '.menuName');
        item.meta.menuDescription = t(
          (item.meta.i18nKey as string) + '.menuDescription'
        );
      } else {
        item.meta.menuName = '';
        item.meta.menuDescription = '';
      }
    }
    item.children = routerInjectLanguages(item.children || [], t);
    _routes.push(item);
  });
  return _routes;
};

/**
 * @name routerInjectBreadcrumb
 * @description 路由注册面包屑参数
 * @param routes 路由
 * @param breadcrumbList 面包屑数组
 * @return _routes 路由
 */
export const routerInjectBreadcrumb = (
  routes: Routes,
  breadcrumbList?: Array<IObject>
): Routes => {
  const _routes: Routes = [];
  routes.forEach((item) => {
    item.meta.breadcrumb = [];
    if (breadcrumbList) {
      const { cloned } = useCloned(breadcrumbList);
      item.meta.breadcrumb = cloned.value;
    }
    item.meta.breadcrumb.push({
      label: item.meta.menuName,
      value: item.path,
    });
    item.children = routerInjectBreadcrumb(
      item.children || [],
      item.meta.breadcrumb
    );
    _routes.push(item);
  });
  return _routes;
};
