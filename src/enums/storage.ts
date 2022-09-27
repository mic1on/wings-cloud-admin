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
   * 管理系统菜单路由
   */
  ADMIN_ROUTES = 'admin-routes',

  /**
   * 权限路由
   */
  ROLE_ROUTES = 'role-routes',

  /**
   * 全部路由
   */
  ALL_ROUTES = 'all-routes',
}

/**
 * 导出管理系统布局配置（存储的 Key)枚举
 */
export enum StorageLayoutEnum {
  /**
   * 管理系统菜单宽度
   */
  MENU_WIDTH = 'admin-menu-width',

  /**
   * 管理系统头部高度
   */
  HEADER_HEIGHT = 'admin-header-height',

  /**
   * 是否水平折叠收起菜单
   */
  COLLAPSE = 'collapse',

  /**
   * 是否只保持一个子菜单的展开
   */
  UNIQUE_OPENED = 'unique-opened',

  /**
   * 管理系统是否显示底部栏
   */
  SHOW_FOOTER = 'show-footer',
}
