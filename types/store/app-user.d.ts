import { IObject } from '#/interface.d';

/**
 * 导出用户状态字段类型
 */
export interface UserState {
  /**
   * 是否保持登录
   */
  stayLogin: boolean;

  /**
   * 用户登录凭证
   */
  token: string;

  /**
   * 用户信息
   */
  userInfo: IObject;

  /**
   * 用户权限
   */
  userRoles: Array<T>;
}
