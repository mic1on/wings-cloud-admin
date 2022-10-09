import type { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/notification.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import * as elementPlusConfig from './config';
import { pluginAddRegister, autoInstallComponents } from '@/core/utils/helper';

const useElementIcons = (app: App<Element>): void => {
  autoInstallComponents(app, ElementPlusIconsVue);
};

const useElementPlus = (app: App<Element>): void => {
  app.use(ElementPlus);
};

export { elementPlusConfig, useElementIcons, useElementPlus };

export default pluginAddRegister(ElementPlus);
