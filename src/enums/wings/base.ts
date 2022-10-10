/**
 * 导出多语言环境枚举
 */
export enum AppLanguageEnum {
  /**
   * Vue-i18n 多语言环境别名
   */
  EN_US_ALIAS = 'en-US',
  ZH_CN_ALIAS = 'zh-CN',

  /**
   * Vue-i18n 多语言名称
   */
  EN_US_NAME = 'English',
  ZH_CN_NAME = '简体中文',
}

/**
 * 导出演示用户枚举
 */
export enum AppAuthenticationEnum {
  /**
   * 用户名
   */
  VISITOR_USERNAME = 'visitor',

  /**
   * 密码
   */
  VISITOR_PASSWORD = 'abc123',

  /**
   * 访问凭证
   */
  VISITOR_TOKEN = 'token_visitor',
}

/**
 * 导出图标类型枚举
 */
export enum AppIconTypeEnum {
  /**
   * Element Plus 组件库图标
   */
  ELEMENT_PLUS = 'ep',

  /**
   * App Svg Icons 组件内置图标
   */
  APP = 'app',
}
