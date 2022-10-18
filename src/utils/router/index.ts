import type { RouteRecordRaw } from 'vue-router';
import type { Routes } from '../../plugins/vue-router/index.d';
import type { I18nT } from '@/plugins/vue-i18n/index.d';

/**
 * @name routerInjectLanguages
 * @description 路由注册国际化多语言
 * @param routes
 * @param t
 * @returns
 */
export const routerInjectLanguages = (routes: Routes, t: I18nT): Routes => {
  const rs: Routes = [];
  routes.forEach((item: RouteRecordRaw) => {
    if (item.meta && item.meta.title) {
      const key = item.meta.title as string;
      item.meta.title = t(key);
    }
    item.children = routerInjectLanguages(item.children || [], t);
    rs.push(item);
  });
  return rs;
};
