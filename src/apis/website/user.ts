import type { LoginAccountData, SignupData } from '#/api/website/user.d';
import type { ResponseData } from '#/app/app-request';
import { GET, POST } from '@wings';

/**
 * 登录 - 通过账号密码
 */
export const loginByAccount = <T>(
  data: LoginAccountData
): Promise<any | ResponseData<T> | undefined> => {
  return POST('/admin/user/login', data);
};

/**
 * 获取用户信息
 */
export const getUserInfo = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/admin/user/info');
};

/**
 * 注册
 */
export const signup = <T>(
  data: SignupData
): Promise<any | ResponseData<T> | undefined> => {
  return POST('/admin/user/signup');
};
