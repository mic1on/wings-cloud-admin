import type { ResponseData } from '@/utils/request/index.d';
import { GET } from '@/utils/request';

/**
 * @name getDictionayAll
 * @description 获取全部字典数据
 */
export const getDictionayAll = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/system/dictionary/all');
};
