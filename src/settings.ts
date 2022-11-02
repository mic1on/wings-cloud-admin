import type { DefaultSettingsTypes } from './global';
import { SettingsValueEnum, LanguageEnum, RouteEnum } from './enums';

/**
 * @name ReplaceSettings
 * @description 替换设置对象，可将拷贝的系统设置替换到该常量
 */
export const ReplaceSettings: DefaultSettingsTypes | null = null;

/**
 * @name DefaultSettings
 * @description 默认设置
 */
export const DefaultSettings: DefaultSettingsTypes = Object.assign(
  {
    Layout: SettingsValueEnum.LAYOUT_TOP,
    ThemeColor: '#0d6efd',
    ColorScheme: SettingsValueEnum.COLOR_SCHEME_AUTO,
    TabStyle: SettingsValueEnum.TAB_STYLE_SQUARE,
    MenuStyle: SettingsValueEnum.MENU_STYLE_ROUND,
    Toolbar: {
      Dark: true,
      Language: true,
      Refresh: true,
      Notification: true,
      Fullscreen: true,
      Setting: true,
      Avatar: true,
    },
    Footer: false,
    Tab: true,
    UniqueOpened: true,
    Copyright: SettingsValueEnum.COPYRIGHT_VIEW_BOTTOM,
    Breadcrumb: SettingsValueEnum.BREADCRUMB_VIEW_TOP,
    ElementPlus: {
      size: 'default',
      message: {
        max: 3,
      },
      button: {
        autoInsertSpace: true,
      },
      language: 'el-language',
    },
    Language: LanguageEnum.EN_US_ALIAS,
    FirstRoute: RouteEnum.ROUTE_FIRST,
    AdminFirstRoute: RouteEnum.ROUTE_ADMIN_FIRST,
    LoginType: SettingsValueEnum.LOGIN_TYPE_ACCOUNT,
    LoginTo: RouteEnum.ROUTE_ADMIN_FIRST,
  },
  ReplaceSettings
);

/**
 * @name PredefineToolbar
 * @description 管理系统工具栏预置按钮
 */
export const PredefineToolbar = [
  {
    label: 'admin.systemManagement.systemSetting.toolbarDark',
    value: 'Dark',
  },
  {
    label: 'admin.systemManagement.systemSetting.toolbarLanguage',
    value: 'Language',
  },
  {
    label: 'admin.systemManagement.systemSetting.toolbarRefresh',
    value: 'Refresh',
  },
  {
    label: 'admin.systemManagement.systemSetting.toolbarNotification',
    value: 'Notification',
  },
  {
    label: 'admin.systemManagement.systemSetting.toolabarFullscreen',
    value: 'Fullscreen',
  },
  {
    label: 'admin.systemManagement.systemSetting.toolbarSetting',
    value: 'Setting',
  },
  {
    label: 'admin.systemManagement.systemSetting.toolbarAvatar',
    value: 'Avatar',
  },
];

/**
 * @name PredefineLayouts
 * @description 管理系统预置布局方式
 */
export const PredefineLayouts = [
  {
    label: 'admin.systemManagement.systemSetting.layoutTop',
    value: SettingsValueEnum.LAYOUT_TOP,
  },
  {
    label: 'admin.systemManagement.systemSetting.layoutTopLean',
    value: SettingsValueEnum.LAYOUT_TOP_LEAN,
  },
  {
    label: 'admin.systemManagement.systemSetting.layoutAside',
    value: SettingsValueEnum.LAYOUT_ASIDE,
  },
  {
    label: 'admin.systemManagement.systemSetting.layoutAsideLean',
    value: SettingsValueEnum.LAYOUT_ASIDE_LEAN,
  },
];

/**
 * @name PredefineColorSchemes
 * @description 预置配色方案
 */
export const PredefineColorSchemes = [
  {
    label: 'admin.systemManagement.systemSetting.colorSchemeAuto',
    value: SettingsValueEnum.COLOR_SCHEME_AUTO,
  },
  {
    label: 'admin.systemManagement.systemSetting.colorSchemeTheme',
    value: SettingsValueEnum.COLOR_SCHEME_THEME,
  },
  {
    label: 'admin.systemManagement.systemSetting.colorSchemeLight',
    value: SettingsValueEnum.COLOR_SCHEME_LIGHT,
  },
  {
    label: 'admin.systemManagement.systemSetting.colorSchemeDark',
    value: SettingsValueEnum.COLOR_SCHEME_DARK,
  },
];

/**
 * @name PredefineThemeColors
 * @description 预置主题颜色
 */
export const PredefineThemeColors = [
  '#409EFF',
  '#262A3C',
  '#42b983',
  '#ea3a72',
  '#fe7300',
  '#1C9399',
  '#8d7d91',
  '#945357',
  '#F56C6C',
  '#839aff',
];

/**
 * @name PredefineTabStyle
 * @description 预置标签风格
 */
export const PredefineTabStyle = [
  {
    label: 'admin.systemManagement.systemSetting.tabStyleSquare',
    value: SettingsValueEnum.TAB_STYLE_SQUARE,
  },
  {
    label: 'admin.systemManagement.systemSetting.tabStyleRound',
    value: SettingsValueEnum.TAB_STYLE_ROUND,
  },
];

/**
 * @name PredefineMenuStyle
 * @description 预置管理菜单风格
 */
export const PredefineMenuStyle = [
  {
    label: 'admin.systemManagement.systemSetting.menuStyleSquare',
    value: SettingsValueEnum.MENU_STYLE_SQUARE,
  },
  {
    label: 'admin.systemManagement.systemSetting.menuStyleRound',
    value: SettingsValueEnum.MENU_STYLE_ROUND,
  },
];

/**
 * @name PredefineBreadcrumbPosition
 * @description 预置面包屑位置
 */
export const PredefineBreadcrumbPosition = [
  {
    label: 'admin.systemManagement.systemSetting.breadcrumbViewTop',
    value: SettingsValueEnum.BREADCRUMB_VIEW_TOP,
  },
  {
    label: 'admin.systemManagement.systemSetting.breadcrumbLayoutHeader',
    value: SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER,
  },
  {
    label: 'admin.systemManagement.systemSetting.breadcrumbHidden',
    value: SettingsValueEnum.BREADCRUMB_HIDDEN,
  },
];

/**
 * @name PredefineCopyrightPosition
 * @description 预置版权信息位置
 */
export const PredefineCopyrightPosition = [
  {
    label: 'admin.systemManagement.systemSetting.copyrightBottom',
    value: SettingsValueEnum.COPYRIGHT_VIEW_BOTTOM,
  },
  {
    label: 'admin.systemManagement.systemSetting.copyrightHidden',
    value: SettingsValueEnum.COPYRIGHT_HIDDEN,
  },
];

/**
 * @name PredefineLoginType
 * @description 预置登录方式
 */
export const PredefineLoginType = [
  {
    label: 'admin.systemManagement.systemSetting.loginTypeAccount',
    value: SettingsValueEnum.LOGIN_TYPE_ACCOUNT,
  },
  {
    label: 'admin.systemManagement.systemSetting.loginTypePhone',
    value: SettingsValueEnum.LOGIN_TYPE_PHONE,
  },
  {
    label: 'admin.systemManagement.systemSetting.loginTypeEmail',
    value: SettingsValueEnum.LOGIN_TYPE_EMAIL,
  },
  {
    label: 'admin.systemManagement.systemSetting.loginTypeWechat',
    value: SettingsValueEnum.LOGIN_TYPE_WECHAT,
  },
  {
    label: 'admin.systemManagement.systemSetting.loginTypeApipay',
    value: SettingsValueEnum.LOGIN_TYPE_ALIPAY,
  },
];
