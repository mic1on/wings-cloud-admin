import type { IObject } from '#/interface.d';
import { elementPlusConfig } from '@/plugins/element-plus';
import zhCN from 'element-plus/dist/locale/zh-cn.mjs';
import enUS from 'element-plus/dist/locale/en.mjs';
import { AppLanguageEnum } from '@/enums/app';
import { languages } from './import';

/**
 * 组装 Vue-i18n 多语言文本
 */
export const messages: IObject = {
  [AppLanguageEnum.EN_US_ALIAS]: {
    name: AppLanguageEnum.EN_US_NAME,
    ...languages[AppLanguageEnum.EN_US_ALIAS],
    [elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX]:
      enUS[elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX],
  },
  [AppLanguageEnum.ZH_CN_ALIAS]: {
    name: AppLanguageEnum.ZH_CN_NAME,
    ...languages[AppLanguageEnum.ZH_CN_ALIAS],
    [elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX]:
      zhCN[elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX],
  },
};
