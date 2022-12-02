import type { ResponseData } from '@/utils/request/index.d';
import type { MobileCodeParams } from './mobile.d';
import { GET } from '@/utils/request';

/**
 * @name getMobileSmscode
 * @description 获取手机号验证码
 */
export const getMobileSmscode = <T>(
  params: MobileCodeParams
): Promise<any | ResponseData<T> | undefined> => {
  return GET('/common/mobile/smscode', params);
};

/**
 * @name getMobileCodes
 * @description 获取手机区号列表
 */
export const getMobileCodes = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/common/mobile/codes');
};
