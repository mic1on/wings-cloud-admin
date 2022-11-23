import type { ResponseData } from '@/utils/request/index.d';
import { GET } from '@/utils/request';

/**
 * @name getRoleList
 * @description 分页查询角色
 */
export const getRoleList = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/system/role/all');
};
