/**
 * 导出基础路由枚举
 */
export enum RouteEnum {
  /**
   * 403 没有权限页面路由枚举
   */
  ROUTE_NO_PERMISSION = '/403',

  /**
   * 404 找不到页面路由枚举
   */
  ROUTE_NO_FOUND = '/404',
}

/**
 * 导出网站路由枚举
 */
export enum RouteEnum {
  /**
   * 使用文档
   */
  ROUTE_USAGE = '/website/usage',
}

/**
 * 导出用户相关路由枚举
 */
export enum RouteEnum {
  /**
   * 用户登录路由枚举
   */
  ROUTE_LOGIN = '/website/user/login',

  /**
   * 用户注册路由枚举
   */
  ROUTE_SIGNUP = '/website/user/signup',

  /**
   * 忘记密码路由枚举
   */
  ROUTE_PASSWORD_FORGET = '/website/user/password-forget',

  /**
   * 修改密码路由枚举
   */
  ROUTE_PASSWORD_UPDATE = '/website/user/password-update',

  /**
   * 用户设置路由枚举
   */
  ROUTE_PERSONAL_SETTINGS = '/admin/personal/settings',

  /**
   * 用户信息路由枚举
   */
  ROUTE_PERSONAL_PROFILE = '/admin/personal/profile',

  /**
   * 用户消息路由枚举
   */
  ROUTE_PERSONAL_NOTIFICATIONS = '/admin/personal/notification',
}
