import type { ResponseData } from '@/utils/request/index.d';
import type { PhoneCodeParams } from './base.d';
import { GET } from '@/utils/request';

/**
 * @name getMobileSmscode
 * @description 获取手机号验证码
 */
export const getMobileSmscode = <T>(
  params: PhoneCodeParams
): Promise<any | ResponseData<T> | undefined> => {
  return GET('/base/mobile/smscode', params);
};

/**
 * @name getMobileCodes
 * @description 获取手机区号列表
 */
export const getMobileCodes = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/base/mobile/codes');
};

/**
 * @name getServiceInfo
 * @description 获取服务&协议内容
 */
export const getServiceInfo = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/base/service/info');
};
