import type { Files, Routes, Apis, Stores, Languages } from './auto.d';
import type { App, FunctionalComponent, Plugin } from 'vue';
import { RouteEnum } from '../enums';
import { FILE_NAME } from './reg-exp';

/**
 * @name autoImportRoutes
 * @param files
 * @return routes
 */
export const autoImportRoutes = (files: Files): Routes => {
  let _routes: Routes = [];
  Object.keys(files).forEach((key) => {
    _routes = _routes.concat(files[key]);
  });
  _routes.push({
    path: '/:pathMatch(.*)',
    redirect: RouteEnum.ROUTE_NO_FOUND,
  });
  return _routes;
};

/**
 * @name autoImportApis
 * @param files
 * @return apis
 */
export const autoImportApis = (files: Files): Apis => {
  const apis: Apis = {};
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
export const autoImportPiniaStore = (files: Files): Stores => {
  let stores: Stores = {};
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
export const autoImportLanguages = (files: Files): Languages => {
  const languages: Languages = {};
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
 * @name componentAddInstall
 * @param component
 * @param alias
 * @return component
 */
export const componentAddInstall = <T>(
  component: T extends FunctionalComponent<any, any> ? any : any,
  alias?: string
): T & Plugin => {
  const _component = component as any;
  _component.install = (app: App) => {
    app.component(_component.name || _component.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

/**
 * @name pluginAddRegister
 * @param plugin
 * @return _plugin
 */
export const pluginAddRegister = <T>(plugin: Plugin): T & Plugin => {
  const _plugin = plugin as any;
  _plugin.register = (app: App) => {
    app.use(plugin);
  };
  return _plugin as T & Plugin;
};

/**
 * @name componentAddPath
 * @param path
 * @returns
 */
export const componentAddPath = (path: string): string => {
  path = path.replace('_', '-');
  return `/src/views${path}.vue`;
};

/**
 * @name mountApis
 * @param app
 * @param apis
 */
export const mountApis = (app: App, apis: Apis): void => {
  Object.entries(apis).map(([path, _apis]) => {
    app.config.globalProperties.$apis = {
      ...app.config.globalProperties.$apis,
      [path]: { ..._apis },
    };
  });
};

/**
 * @name installComponents
 * @param app
 * @param components
 */
export const installComponents = (
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
