/**
 * Page routing address enumeration.
 */
export enum RouteEnum {
  ROUTE_NO_PERMISSION = '/403',
  ROUTE_NO_FOUND = '/404',
  ROUTE_LOGIN = '/website/user/login',
  ROUTE_SIGNUP = '/website/user/signup',
  ROUTE_PASSWORD_FORGET = '/website/user/password-forget',
  ROUTE_PASSWORD_UPDATE = '/website/user/password-update',
  ROUTE_PERSONAL_SETTINGS = '/admin/personal/settings',
  ROUTE_PERSONAL_PROFILE = '/admin/personal/profile',
  ROUTE_PERSONAL_NOTIFICATIONS = '/admin/personal/notification',
}

/**
 * International and multilingual.
 */
export enum LanguageEnum {
  EN_US_ALIAS = 'en-US',
  EN_US_NAME = 'English',
  ZH_CN_ALIAS = 'zh-CN',
  ZH_CN_NAME = '简体中文',
}

/**
 * Demonstrate user credentials.
 */
export enum AuthenticationEnum {
  VISITOR_USERNAME = 'visitor',
  VISITOR_PASSWORD = 'abc123',
  VISITOR_TOKEN = 'E7UJ0aubyQm32NWlJ0iNionQkv0Ltn2dVf10',
}

/**
 * Management system menu icon types.
 */
export enum IconTypeEnum {
  ELEMENT_PLUS = 'ep',
  APP = 'app',
}

/**
 * Request headers.
 */
export enum RequestHeaderEnum {
  HEADER_TOKEN = 'Authorization',
  HEADER_TIME = '_t',
  CONTENT_TYPE_JSON = 'application/json;charset=UTF-8',
  CONTENT_TYPE_BODY = 'application/x-www-form-urlencoded',
  CONTENT_TYPE_FORMDATA = 'multipart/form-data',
}

/**
 * Mobile phone number verification code.
 */
export enum PhoneCodeTypeEnum {
  LOGIN = 0,
  SIGNUP = 1,
  FORGET_PASSWORDS = 2,
  UPDATE_PASSWORD = 3,
}

/**
 * Enumeration of cache entries (stored keys).
 */
export enum StorageEnum {
  LANGUAGE = 'language',
  STAY_LOGIN = 'stay-login',
  TOKEN = 'token',
  DARK = 'is-dark',
  MOBILE_PHONE_AREA_CODE = 'mobile-area-code',
  USER_INFO = 'user-info',
  USER_ROLES = 'user-roles',
  STATIC_ROUTES = 'static-routes',
  ADMIN_ROUTES = 'admin-routes',
  ROLE_ROUTES = 'role-routes',
  ALL_ROUTES = 'all-routes',
  MENU_WIDTH = 'admin-menu-width',
  HEADER_HEIGHT = 'admin-header-height',
  FOOTER_HEIGHT = 'admin-footer-height',
  COLLAPSE = 'collapse',
  UNIQUE_OPENED = 'unique-opened',
  SHOW_FOOTER = 'show-footer',
}
