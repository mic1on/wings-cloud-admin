import { App, FunctionalComponent, Plugin } from 'vue';
import type { IObject } from '#/interface.d';
import type { RouteRecordRaw } from 'vue-router';
import { FILE_NAME } from '@/utils/app-reg-exp';
import { RouteBaseEnum } from '@/enums/route';

/**
 * 自动导入 Api 接口文件
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
 * 全局挂载 Api 接口文件，可使用 getCurrentInstance() 获取
 * @param app
 * @param apis
 */
export const autoMountApis = (
  app: App,
  apis: IObject<IObject<string>>
): void => {
  Object.entries(apis).map(([path, _apis]) => {
    app.config.globalProperties.$apis = {
      ...app.config.globalProperties.$apis,
      [path]: { ..._apis },
    };
  });
};

/**
 * 自动导入 Pinia 全局状态管理模块
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
 * 自动导入基于 Vue-i18n 的多语言文件
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
 * 自动导入 Vue-router 路由文件
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
 * 对自动导入的插件加入 App 注册方法
 * @param plugin
 * @param options
 * @return _plugin
 */
export const pluginAddRegister = <T>(
  plugin: Plugin,
  options?: IObject
): T & Plugin => {
  const _plugin = plugin as any;
  _plugin.register = (app: App) => {
    app.use(plugin);
  };
  if (options?.sort) {
    _plugin.appRegisterSort = options.sort;
  }
  return _plugin as T & Plugin;
};

/**
 * 自动注册插件
 * @param app
 * @param plugins
 */
export const autoRegisterPlugins = (
  app: App,
  plugins: Record<string, any>
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const _pluginArray: Array<Record<string, any>> = [];
    Object.entries(plugins).map(([, plguin]) => {
      _pluginArray.push(plguin);
    });
    _pluginArray.sort(
      (a: any, b: any) => a.appRegisterSort - b.appRegisterSort
    );
    _pluginArray.map(({ register }, index) => {
      register(app);
      if (index == _pluginArray.length - 1) {
        resolve();
      }
    });
  });
};

/**
 * 对组件加入 App 安装方法
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
 * 自动导入组件
 * @param app
 * @param components
 */
export const autoInstallComponents = (
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
 * 自动导入 .vue（视图 views 内） 文件
 * @returns
 */
export const autoImportViews = (): IObject => {
  return import.meta.glob('/src/views/**/*.vue', {
    eager: true,
  });
};

/**
 * 映射路由通过 .vue 文件
 * @param path
 * @returns
 */
export const pathToViews = (path: string): string => {
  path = path.replace('_', '-');
  return `/src/views${path}.vue`;
};
