import type { LoginForm, PhoneForm } from '#/views/website/user.d';

/**
 * 导出账号密码登录入参字段类型
 */
export interface LoginAccountData extends LoginForm {
  /**
   * 用户名
   */
  username: string;

  /**
   * 密码
   */
  password: string;
}

/**
 * 导出注册入参字段类型
 */
export interface SignupData extends PhoneForm {
  /**
   * 密码
   */
  password: string;
}
