import type { ResponseData } from '@/utils/request/index.d';
import { GET } from '@/utils/request';

/**
 * @name getMobileAreaCodeList
 * @description 获取手机区号列表
 */
export const getMobileAreaCodeList = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/base/country/mobilePhoneCode/list');
};

/**
 * @name getTermsConditionsData
 * @description 获取服务&协议内容
 */
export const getTermsConditionsData = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/base/TermsConditions/info');
};
