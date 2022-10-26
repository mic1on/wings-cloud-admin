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
