/**
 * 导出验证码倒计时表单字段类型
 */
export interface Form {
  /**
   * 倒计时显示时间
   */
  time: number;

  /**
   * 获取验证码状态
   */
  getting: boolean;

  /**
   * 是否已经发送过
   */
  send: boolean;

  /**
   * 计时器
   */
  timer: NodeJS.Timer | undefined;
}
