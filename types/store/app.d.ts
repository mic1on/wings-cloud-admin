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

  /**
   * 管理系统头部高度
   */
  adminHeaderHeight: string;

  /**
   * 管理系统底部高度
   */
  adminFooterHeight: string;

  /**
   * 管理系统菜单宽度
   */
  adminMenuWidth: string;

  /**
   * 管理系统是否显示底部栏
   */
  adminShowFooter: boolean;
}
