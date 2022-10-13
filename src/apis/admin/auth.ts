import type { ResponseData } from '@/utils/request/index.d';
import type { ValidateUsernameParams } from './auth.d';
import { GET } from '@/utils/request';

/**
 * @name validateUsername
 * @description 校验用户名是否存在
 */
export const validateUsername = <T>(
  params: ValidateUsernameParams
): Promise<any | ResponseData<T> | undefined> => {
  return GET('/admin/user/validate', params);
};

/**
 * @name validateUsername
 * @description 获取权限路由
 */
export const getAdminRoutes = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/admin/user/route/list');
};

/**
 * @name validateUsername
 * @description 校验用户名是否存在
 */
export const getUserRoles = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/admin/user/role/list');
};
