/**
 * 导出 app-request 请求头枚举
 */
export enum RequestHeaderEnum {
  /**
   * 用户登录凭证请求头
   */
  HEADER_TOKEN = 'Authorization',

  /**
   * 请求时间戳 - 用于防止 http 缓存
   */
  HEADER_TIME = '_t',

  /**
   * Json 请求类型
   */
  CONTENT_TYPE_JSON = 'application/json;charset=UTF-8',

  /**
   * Body 请求类型
   */
  CONTENT_TYPE_BODY = 'application/x-www-form-urlencoded',

  /**
   * Form Data 请求类型
   */
  CONTENT_TYPE_FORMDATA = 'multipart/form-data',
}

/**
 * 导出手机号获取验证码用途枚举
 */
export enum GetPhoneCodeType {
  /**
   * 登录
   */
  LOGIN = 0,

  /**
   * 注册
   */
  SIGNUP = 1,

  /**
   * 忘记密码
   */
  FORGET_PASSWORDS = 2,

  /**
   * 修改密码
   */
  UPDATE_PASSWORD = 3,
}
