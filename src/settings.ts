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
    ThemeColor: '#f75151',
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
  },
  ReplaceSettings
);

/**
 * @name PredefineToolbar
 * @description 管理系统工具栏预置按钮
 */
export const PredefineToolbar = [
  {
    label: 'system.settings.toolbarDark',
    value: 'Dark',
  },
  {
    label: 'system.settings.toolbarLanguage',
    value: 'Language',
  },
  {
    label: 'system.settings.toolbarRefresh',
    value: 'Refresh',
  },
  {
    label: 'system.settings.toolbarNotification',
    value: 'Notification',
  },
  {
    label: 'system.settings.toolbarFullscreen',
    value: 'Fullscreen',
  },
  {
    label: 'system.settings.toolbarSetting',
    value: 'Setting',
  },
  {
    label: 'system.settings.toolbarAvatar',
    value: 'Avatar',
  },
];

/**
 * @name PredefineLayouts
 * @description 管理系统预置布局方式
 */
export const PredefineLayouts = [
  {
    label: 'system.settings.layoutTop',
    value: SettingsValueEnum.LAYOUT_TOP,
  },
  {
    label: 'system.settings.layoutTopLean',
    value: SettingsValueEnum.LAYOUT_TOP_LEAN,
  },
  {
    label: 'system.settings.layoutAside',
    value: SettingsValueEnum.LAYOUT_ASIDE,
  },
  {
    label: 'system.settings.layoutAsideLean',
    value: SettingsValueEnum.LAYOUT_ASIDE_LEAN,
  },
];

/**
 * @name PredefineColorSchemes
 * @description 预置配色方案
 */
export const PredefineColorSchemes = [
  {
    label: 'system.settings.colorSchemeAuto',
    value: SettingsValueEnum.COLOR_SCHEME_AUTO,
  },
  {
    label: 'system.settings.colorSchemeTheme',
    value: SettingsValueEnum.COLOR_SCHEME_THEME,
  },
  {
    label: 'system.settings.colorSchemeLight',
    value: SettingsValueEnum.COLOR_SCHEME_LIGHT,
  },
  {
    label: 'system.settings.colorSchemeDark',
    value: SettingsValueEnum.COLOR_SCHEME_DARK,
  },
];

/**
 * @name PredefineThemeColors
 * @description 预置主题颜色
 */
export const PredefineThemeColors = [
  '#f75151',
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
    label: 'system.settings.tabStyleSquare',
    value: SettingsValueEnum.TAB_STYLE_SQUARE,
  },
  {
    label: 'system.settings.tabStyleRound',
    value: SettingsValueEnum.TAB_STYLE_ROUND,
  },
];

/**
 * @name PredefineMenuStyle
 * @description 预置管理菜单风格
 */
export const PredefineMenuStyle = [
  {
    label: 'system.settings.menuStyleSquare',
    value: SettingsValueEnum.MENU_STYLE_SQUARE,
  },
  {
    label: 'system.settings.menuStyleRound',
    value: SettingsValueEnum.MENU_STYLE_ROUND,
  },
];

/**
 * @name PredefineBreadcrumbPosition
 * @description 预置面包屑位置
 */
export const PredefineBreadcrumbPosition = [
  {
    label: 'system.settings.breadcrumbViewTop',
    value: SettingsValueEnum.BREADCRUMB_VIEW_TOP,
  },
  {
    label: 'system.settings.breadcrumbLayoutHeader',
    value: SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER,
  },
  {
    label: 'system.settings.breadcrumbHidden',
    value: SettingsValueEnum.BREADCRUMB_HIDDEN,
  },
];

/**
 * @name PredefineCopyrightPosition
 * @description 预置版权信息位置
 */
export const PredefineCopyrightPosition = [
  {
    label: 'system.settings.copyrightBottom',
    value: SettingsValueEnum.COPYRIGHT_VIEW_BOTTOM,
  },
  {
    label: 'system.settings.copyrightHidden',
    value: SettingsValueEnum.COPYRIGHT_HIDDEN,
  },
];
