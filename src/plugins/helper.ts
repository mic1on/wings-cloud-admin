import type { App, Plugin, FunctionalComponent } from 'vue';

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
 * @name autoInstallComponents
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
