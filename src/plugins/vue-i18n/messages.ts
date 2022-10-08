import type { IObject } from '#/interface.d';
import { elementPlusConfig } from '@/plugins/element-plus';
import zhCN from 'element-plus/dist/locale/zh-cn.mjs';
import enUS from 'element-plus/dist/locale/en.mjs';
import { BaseLanguageEnum } from '@/enums/base';
import { languages } from './import';

/**
 * 组装 Vue-i18n 多语言文本
 */
export const messages: IObject = {
  [BaseLanguageEnum.EN_US_ALIAS]: {
    name: BaseLanguageEnum.EN_US_NAME,
    ...languages[BaseLanguageEnum.EN_US_ALIAS],
    [elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX]:
      enUS[elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX],
  },
  [BaseLanguageEnum.ZH_CN_ALIAS]: {
    name: BaseLanguageEnum.ZH_CN_NAME,
    ...languages[BaseLanguageEnum.ZH_CN_ALIAS],
    [elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX]:
      zhCN[elementPlusConfig.ELEMENT_PLUS_LANGUAGE_PREFIX],
  },
};
