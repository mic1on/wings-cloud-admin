import { createI18n, type I18n, type I18nOptions } from 'vue-i18n';
import { pluginAddRegister } from '@/utils/app-auto';
import { getStorage } from '@/utils/app-storage';
import { StorageAppEnum } from '@/enums/storage';
import { messages } from './messages';

/**
 * 导出多语言文本
 */
export { messages };

/**
 * 配置默认语言环境
 */
const language: any =
  getStorage(StorageAppEnum.LANGUAGE) || import.meta.env.APP_DEFAULT_LANGUAGE;
document
  .getElementsByTagName('html')[0]
  .setAttribute('lang', language as string);

/**
 * 导出初始化 Vue-i18n 实例
 */
export const i18n: I18n = createI18n({
  /**
   * 使用 compotition api
   */
  legacy: false,

  /**
   * 首选语言环境
   */
  locale: language,

  /**
   * 默认情况下返回的语言环境
   */
  fallbackLocale: import.meta.env.APP_DEFAULT_LANGUAGE,

  /**
   * 注入 $t，同时可使用 $i18n、$t、$rt、$d、$n、$tm
   */
  globalInjection: true,

  /**
   * 使用全局多语言
   */
  useScope: 'global',

  /**
   * 导入本地化多语言文本
   */
  messages,
} as I18nOptions);

/**
 * 导出添加注册插件方法
 */
export default pluginAddRegister(i18n, {
  sort: 0,
});
