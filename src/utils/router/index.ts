import type { Routes } from '../../plugins/vue-router/index.d';
import type { I18nT } from '../../plugins/vue-i18n/index.d';
import type { IObject } from '../../global';
import { useCloned } from '@vueuse/core';

/**
 * @name routerInjectLanguages
 * @description 路由注册国际化多语言
 * @param routes
 * @param t
 * @returns
 */
export const routerInjectLanguages = (routes: Routes, t: I18nT): Routes => {
  const rs: Routes = [];
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
    rs.push(item);
  });
  return rs;
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
