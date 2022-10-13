import type { ResponseData } from '@/utils/request/index.d';
import type { PhoneCodeParams } from './base.d';
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

/**
 * @name getPhoneCode
 * @description 获取手机号验证码
 */
export const getPhoneCode = <T>(
  params: PhoneCodeParams
): Promise<any | ResponseData<T> | undefined> => {
  return GET('/base/phoneCode', params);
};
