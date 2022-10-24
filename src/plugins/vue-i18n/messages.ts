import type { Languages, Messages } from './index.d';
import zhCN from 'element-plus/dist/locale/zh-cn.mjs';
import enUS from 'element-plus/dist/locale/en.mjs';
import { LanguageEnum } from '../../enums';
import { autoImportLanguages } from '../../utils/auto';
import { ElementPlus } from '../../settings';

const languages: Languages = autoImportLanguages(
  import.meta.glob('./languages/**/*.json', {
    import: 'default',
    eager: true,
  })
);

const messages: Messages = {
  [LanguageEnum.EN_US_ALIAS]: {
    name: LanguageEnum.EN_US_NAME,
    ...languages[LanguageEnum.EN_US_ALIAS],
    [ElementPlus.language]: enUS[ElementPlus.language],
  },
  [LanguageEnum.ZH_CN_ALIAS]: {
    name: LanguageEnum.ZH_CN_NAME,
    ...languages[LanguageEnum.ZH_CN_ALIAS],
    [ElementPlus.language]: zhCN[ElementPlus.language],
  },
};

export { messages, languages };
