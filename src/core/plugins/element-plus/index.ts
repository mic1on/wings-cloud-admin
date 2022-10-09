import type { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/notification.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import * as elementPlusConfig from './config';
import { pluginAddRegister, autoInstallComponents } from '@/core/utils/helper';

export { elementPlusConfig };

export const registerIcons = (app: App): void => {
  autoInstallComponents(app, ElementPlusIconsVue);
};

export default pluginAddRegister(ElementPlus, {
  sort: 1,
});
