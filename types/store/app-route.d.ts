/**
 * 导出路由状态字段类型
 */
export interface RouteState {
  /**
   * 静态路由
   */
  staticRoutes: Array<RouteRecordRaw>;

  /**
   * 权限路由
   */
  adminRoutes: Array<RouteRecordRaw>;

  /**
   * 权限路由
   */
  roleRoutes: Array<RouteRecordRaw>;

  /**
   * 全部路由
   */
  allRoutes: Array<RouteRecordRaw>;
}
