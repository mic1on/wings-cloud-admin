import type { IObject } from '#/interface.d';
import type { RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import { componentAddInstall } from './auto-register';
import { RouteBaseEnum } from '@/enums';
import { FILE_NAME } from '@/utils/reg-exp';

/**
 * @name autoImportRoutes
 * @param files
 * @return routes
 */
export const autoImportRoutes = (files: IObject): Array<RouteRecordRaw> => {
  let _routes: Array<RouteRecordRaw> = [];
  Object.keys(files).forEach((key) => {
    _routes = _routes.concat(files[key]);
  });
  _routes.push({
    path: '/:pathMatch(.*)',
    redirect: RouteBaseEnum.ROUTE_NO_FOUND,
  });
  return _routes;
};

/**
 * @name autoImportApis
 * @param files
 * @return apis
 */
export const autoImportApis = (files: IObject): IObject<IObject<string>> => {
  const apis: IObject<IObject<string>> = {};
  Object.keys(files).forEach((key) => {
    const _key = key.split('/');
    const api = _key[_key.length - 1].replace('.ts', '');
    const _api = apis[api] || {};
    apis[api] = { ..._api, ...files[key] };
  });
  return apis;
};

/**
 * @name autoImportPiniaStore
 * @param files
 * @return stores
 */
export const autoImportPiniaStore = (files: IObject): IObject => {
  let stores: IObject = {};
  Object.keys(files).forEach((key) => {
    const fileName = key.replace(FILE_NAME, '$2');
    stores = { ...stores, [fileName]: files[key] || {} };
  });
  return stores;
};

/**
 * @name autoImportLanguages
 * @param files
 * @return languages
 */
export const autoImportLanguages = (files: IObject): IObject => {
  const languages: IObject = {};
  Object.keys(files).forEach((key: string) => {
    const languageAlias = key.split('/')[key.split('/').length - 2];
    const fileName = key.replace(FILE_NAME, '$2');
    const language = languages[languageAlias] || {};
    languages[languageAlias] = {
      ...language,
      [fileName]: files[key] || {},
    };
  });
  return languages;
};

/**
 * @name autoImportComponents
 * @param app
 * @param components
 */
export const autoImportComponents = (
  app: App,
  components: Record<string, any>
): void => {
  Object.entries(components).map(([, component]) => {
    if (component.install) {
      component.install(app);
    } else {
      componentAddInstall(component);
      component.install(app);
    }
  });
};
