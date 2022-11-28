import type { ResponseData } from '@/utils/request/index.d';
import { GET } from '@/utils/request';

/**
 * @name getPersonalNotification
 * @description 获取个人消息列表
 */
export const getPersonalNotification = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/system/user/notification');
};
