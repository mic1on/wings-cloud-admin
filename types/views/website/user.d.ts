/**
 * 导出登录表单字段类型
 */
export interface LoginForm {
  /**
   * 是否保持登录
   */
  remember: boolean;

  /**
   * 登录类型
   */
  type: number;
}

/**
 * 导出手机号验证码表单字段
 */
export interface PhoneForm {
  /**
   * 手机区号
   */
  areaCode: string;

  /**
   * 手机号码
   */
  phone: string;

  /**
   * 验证码
   */
  code: string;
}

/**
 * 导出密码表单字段类型
 */
export interface PasswordForm {
  /**
   * 密码
   */
  password: string;

  /**
   * 确认密码
   */
  passwordAgain: string;
}

/**
 * 导出邮箱验证码表单字段类型
 */
export interface EmailCodeForm {
  /**
   * 邮箱地址
   */
  email: string;

  /**
   * 验证码
   */
  code: string;
}

/**
 * 导出用户名密码表单字段类型
 */
export interface LoginAccountForm extends LoginForm {
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
 * 导出手机号验证码登录表单字段类型
 */
export interface LoginPhoneForm extends LoginForm, PhoneForm {}

/**
 * 导出邮箱验证码登录表单字段类型
 */
export interface LoginEmailForm extends LoginForm, EmailCodeForm {}

/**
 * 导出注册表单字段类型
 */
export interface SignupAccountForm extends PhoneForm, PasswordForm {
  /**
   * 用户名
   */
  username: string;
}

/**
 * 导出找回密码表单字段类型
 */
export interface PasswordRetrieveForm extends PhoneForm, PasswordForm {}
