import type { IObject } from '#/interface.d';
import type { App, Plugin, FunctionalComponent } from 'vue';
import { FILE_NAME } from '@/utils/wings-reg-exp';

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
