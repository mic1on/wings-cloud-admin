import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/notification.scss';
import * as elementPlusConfig from './prefix';
import { pluginAddRegister } from '@/utils/app-auto';

/**
 * 导出 Element Plus 配置项
 */
export { elementPlusConfig };

/**
 * 导出添加注册插件方法
 */
export default pluginAddRegister(ElementPlus, {
  sort: 2,
});
