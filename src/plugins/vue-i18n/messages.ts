import type { Languages, Messages } from './index.d';
import type { Files } from '@/utils/auto/index.d';
import zhCN from 'element-plus/dist/locale/zh-cn.mjs';
import enUS from 'element-plus/dist/locale/en.mjs';
import { LanguageEnum } from '@/enums';
import { elementPlusConfig } from '../element-plus';
import { FILE_NAME } from '@/utils/reg-exp';

const files: Files = import.meta.glob('./languages/**/*.json', {
  import: 'default',
  eager: true,
});

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

const messages: Messages = {
  [LanguageEnum.EN_US_ALIAS]: {
    name: LanguageEnum.EN_US_NAME,
    ...languages[LanguageEnum.EN_US_ALIAS],
    [elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX]:
      enUS[elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX],
  },
  [LanguageEnum.ZH_CN_ALIAS]: {
    name: LanguageEnum.ZH_CN_NAME,
    ...languages[LanguageEnum.ZH_CN_ALIAS],
    [elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX]:
      zhCN[elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX],
  },
};

export { messages, languages };
