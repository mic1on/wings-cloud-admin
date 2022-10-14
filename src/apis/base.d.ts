/**
 * 导出获取手机号验证码入参字段类型
 */
export interface PhoneCodeParams {
  /**
   * 手机号码
   */
  phone: string | number;

  /**
   * 获取验证码的用途类型
   */
  type: number;
}
