import type { IObject } from '#/interface.d';
import type { RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import { FILE_NAME } from '@/utils/wings-reg-exp';
import { RouteBaseEnum } from '@/enums';
import { componentAddInstall } from './auto-register';

/**
 * @name autoImportRoutes
 * @param path
 * @return routes
 */
export const autoImportRoutes = (path: string): Array<RouteRecordRaw> => {
  const files: IObject = import.meta.glob(path, {
    import: 'default',
    eager: true,
  });
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
 * @param path
 * @return apis
 */
export const autoImportApis = (path: string): IObject<IObject<string>> => {
  const files: IObject = import.meta.glob(path, {
    eager: true,
  });
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
 * @param path
 * @return stores
 */
export const autoImportPiniaStore = (path: string): IObject => {
  const files: IObject = import.meta.glob(path, {
    eager: true,
  });
  let stores: IObject = {};
  Object.keys(files).forEach((key) => {
    const fileName = key.replace(FILE_NAME, '$2');
    stores = { ...stores, [fileName]: files[key] || {} };
  });
  return stores;
};

/**
 * @name autoImportLanguages
 * @param path
 * @return languages
 */
export const autoImportLanguages = (path: string): IObject => {
  const files: IObject = import.meta.glob(path, {
    import: 'default',
    eager: true,
  });
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

/**
 * @name autoImportViews
 * @param path
 * @returns
 */
export const autoImportViews = (path: string): IObject => {
  const files: IObject = import.meta.glob(path, {
    eager: true,
  });
  return files;
};
