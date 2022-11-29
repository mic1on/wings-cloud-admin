import type { ResponseData } from '@/utils/request/index.d';
import { GET } from '@/utils/request';

/**
 * @name getDictAll
 * @description 获取全部字典数据
 */
export const getDictAll = <T>(): Promise<any | ResponseData<T> | undefined> => {
  return GET('/system/dict/all');
};
