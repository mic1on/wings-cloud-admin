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

  /**
   * 是否只保持一个子菜单的展开
   */
  uniqueOpened: boolean;

  /**
   * 是否水平折叠收起菜单
   */
  collapse: boolean;
}
