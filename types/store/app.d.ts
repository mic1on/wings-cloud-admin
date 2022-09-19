/**
 * 导出应用状态字段类型
 */
export interface AppState {
  /**
   * 当前语言环境
   */
  language: string;

  /**
   * 是否开启全局 Loading
   */
  globalLoading: boolean;
}
