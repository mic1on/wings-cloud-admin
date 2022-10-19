import type { LoginAccountData, SignupData } from './user.d';
import type { ResponseData } from '@/utils/request/index.d';
import { GET, POST } from '@/utils/request';

/**
 * @name loginByAccount
 * @description 登录 - 通过账号密码
 */
export const loginByAccount = <T>(
  data: LoginAccountData
): Promise<any | ResponseData<T> | undefined> => {
  return POST('/admin/user/login', data);
};

/**
 * @name getUserProfile
 * @description 获取用户信息
 */
export const getUserProfile = <T>(): Promise<
  any | ResponseData<T> | undefined
> => {
  return GET('/admin/user/profile');
};

/**
 * @name signup
 * @description 注册
 */
export const signup = <T>(
  data: SignupData
): Promise<any | ResponseData<T> | undefined> => {
  return POST('/admin/user/signup');
};
