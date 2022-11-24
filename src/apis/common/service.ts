import type { ResponseData } from '@/utils/request/index.d';
import { GET } from '@/utils/request';

/**
 * @name getServiceInfo
 * @description 获取服务&协议内容
 */
export const getServiceInfo = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/common/service/info');
};
