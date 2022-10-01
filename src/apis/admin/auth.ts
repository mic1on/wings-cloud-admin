import { GET } from '@/utils/wings-request';
import type { ResponseData } from '#/app/app-request';
import type { ValidateUsernameParams } from '#/api/admin/auth';

/**
 * 校验用户名是否存在
 */
export const validateUsername = <T>(
  params: ValidateUsernameParams
): Promise<any | ResponseData<T> | undefined> => {
  return GET('/admin/user/validate', params);
};

/**
 * 获取权限路由
 */
export const getAdminRoutes = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/admin/user/route/list');
};

/**
 * 获取用户权限
 */
export const getUserRoles = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/admin/user/role/list');
};
