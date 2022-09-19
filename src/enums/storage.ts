/**
 * 导出基础缓存项（存储的 Key）枚举
 */
export enum StorageAppEnum {
  /**
   * Vue-i18n 默认语言环境
   */
  LANGUAGE = 'language',

  /**
   * 是否保持登录状态
   */
  STAY_LOGIN = 'stay-login',

  /**
   * 用户凭证
   */
  TOKEN = 'token',

  /**
   * 黑暗模式
   */
  DARK = 'is-dark',

  /**
   * 手机区号
   */
  MOBILE_PHONE_AREA_CODE = 'mobile-area-code',

  /**
   * 用户信息
   */
  USER_INFO = 'user-info',

  /**
   * 用户权限
   */
  USER_ROLES = 'user-roles',
}

/**
 * 导出路由缓存项（存储的 Key)枚举
 */
export enum StorageRouteEnum {
  /**
   * 静态路由
   */
  STATIC_ROUTES = 'static-routes',

  /**
   * 权限路由
   */
  ADMIN_ROUTES = 'admin-routes',

  /**
   * 全部路由
   */
  ALL_ROUTES = 'all-routes',
}
