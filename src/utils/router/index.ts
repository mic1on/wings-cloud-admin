import type { Routes } from '../../plugins/vue-router/index.d';
import type { I18nT } from '../../plugins/vue-i18n/index.d';
import type { IObject } from '../../global';
import { useCloned } from '@vueuse/core';

/**
 * @name routerInject
 * @description 路由注入，合并路由国际化、面包屑
 * @param routes
 * @param t
 * @param breadcrumbList
 * @returns
 */
export const routerInject = (
  routes: Routes,
  t: I18nT,
  breadcrumbList?: Array<IObject>
) => {
  const _routes: Routes = [];
  routes.forEach((item) => {
    item.meta.breadcrumb = [];
    if (item.meta) {
      if (item.meta.isI18n) {
        if (item.meta.i18nKey) {
          item.meta.menuName = t((item.meta.i18nKey as string) + '.menuName');
          item.meta.menuDescription = t(
            (item.meta.i18nKey as string) + '.menuDescription'
          );
        } else {
          item.meta.menuName = '';
        }
      }
      if (breadcrumbList) {
        const { cloned } = useCloned(breadcrumbList);
        item.meta.breadcrumb = cloned.value;
      }
      item.meta.breadcrumb.push({
        label: item.meta.isI18n ? item.meta.i18nKey : item.meta.menuName,
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
 * @param routes
 * @param t
 * @returns
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
 * @param routes
 * @param breadcrumbList
 * @returns
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
      label: item.meta.isI18n ? item.meta.i18nKey : item.meta.menuName,
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
