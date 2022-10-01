import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { autoInstallComponents } from '@/utils/wings-auto';
import type { App } from 'vue';

/**
 * 导出注册 Element Plus 图标组件方法
 */
export default (app: App): void => {
  autoInstallComponents(app, ElementPlusIconsVue);
};
