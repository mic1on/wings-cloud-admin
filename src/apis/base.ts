import { GET } from '@wings';
import type { ResponseData } from '#/app/app-request.d';
import type { PhoneCodeParams } from '#/api/base.d';

/**
 * 获取手机区号列表
 */
export const getMobileAreaCodeList = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/base/country/mobilePhoneCode/list');
};

/**
 * 获取服务&协议内容
 */
export const getTermsConditionsData = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/base/TermsConditions/info');
};

/**
 * 获取手机号验证码
 */
export const getPhoneCode = <T>(
  params: PhoneCodeParams
): Promise<any | ResponseData<T> | undefined> => {
  return GET('/base/phoneCode', params);
};
