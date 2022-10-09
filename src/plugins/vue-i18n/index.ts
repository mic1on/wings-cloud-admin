import type { I18n, I18nOptions } from 'vue-i18n';
import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { pluginAddRegister } from '../helper';
import { getStorage } from '@/utils/wings-storage';
import { StorageAppEnum } from '@/enums/storage';
import { messages, languages } from './messages';

const language: any =
  getStorage(StorageAppEnum.LANGUAGE) || import.meta.env.APP_DEFAULT_LANGUAGE;
document
  .getElementsByTagName('html')[0]
  .setAttribute('lang', language as string);

const i18n: I18n = createI18n({
  legacy: false,
  locale: language,
  fallbackLocale: import.meta.env.APP_DEFAULT_LANGUAGE,
  globalInjection: true,
  useScope: 'global',
  messages,
} as I18nOptions);

const useI18n = (app: App<Element>): void => {
  app.use(i18n);
};

export { messages, languages, i18n, useI18n };

export default pluginAddRegister(i18n);
