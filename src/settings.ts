import type { SystemSettings } from './global';
import { SettingsValueEnum, LanguageEnum, RouteEnum } from './enums';

/**
 * @name ReplaceSettings
 * @description 替换设置对象，可将拷贝的系统设置替换到该常量
 */
export const ReplaceSettings: SystemSettings | null = null;

/**
 * @name DefaultSettings
 * @description 默认设置
 */
export const DefaultSettings: SystemSettings = {
  Layout: SettingsValueEnum.LAYOUT_TOP,
  ThemeColor: '#b90b0b',
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
  Language: LanguageEnum.ZH_CN_ALIAS,
  FirstRoute: RouteEnum.ROUTE_FIRST,
  AdminFirstRoute: RouteEnum.ROUTE_ADMIN_FIRST,
  NetworkTimeout: 5000,
  KeepAlive: true,
};

/**
 * @name Settings
 * @description 当前设置
 */
export const Settings: SystemSettings = Object.assign(
  DefaultSettings,
  ReplaceSettings
);

/**
 * @name PredefineToolbar
 * @description 管理系统工具栏预置按钮
 */
export const PredefineToolbar = [
  {
    label: 'system.setting.toolbarDark',
    value: 'Dark',
  },
  {
    label: 'system.setting.toolbarLanguage',
    value: 'Language',
  },
  {
    label: 'system.setting.toolbarRefresh',
    value: 'Refresh',
  },
  {
    label: 'system.setting.toolbarNotification',
    value: 'Notification',
  },
  {
    label: 'system.setting.toolbarFullscreen',
    value: 'Fullscreen',
  },
  {
    label: 'system.setting.toolbarSetting',
    value: 'Setting',
  },
  {
    label: 'system.setting.toolbarAvatar',
    value: 'Avatar',
  },
];

/**
 * @name PredefineLayouts
 * @description 管理系统预置布局方式
 */
export const PredefineLayouts = [
  {
    label: 'system.setting.layoutTop',
    value: SettingsValueEnum.LAYOUT_TOP,
  },
  {
    label: 'system.setting.layoutTopLean',
    value: SettingsValueEnum.LAYOUT_TOP_LEAN,
  },
  {
    label: 'system.setting.layoutAside',
    value: SettingsValueEnum.LAYOUT_ASIDE,
  },
  {
    label: 'system.setting.layoutAsideDark',
    value: SettingsValueEnum.LAYOUT_ASIDE_DARK,
  },
  {
    label: 'system.setting.layoutAsideLean',
    value: SettingsValueEnum.LAYOUT_ASIDE_LEAN,
  },
  {
    label: 'system.setting.layoutAsideLeanDark',
    value: SettingsValueEnum.LAYOUT_ASIDE_LEAN_DARK,
  },
];

/**
 * @name PredefineColorSchemes
 * @description 预置配色方案
 */
export const PredefineColorSchemes = [
  {
    label: 'system.setting.colorSchemeAuto',
    value: SettingsValueEnum.COLOR_SCHEME_AUTO,
  },
  {
    label: 'system.setting.colorSchemeTheme',
    value: SettingsValueEnum.COLOR_SCHEME_THEME,
  },
  {
    label: 'system.setting.colorSchemeLight',
    value: SettingsValueEnum.COLOR_SCHEME_LIGHT,
  },
  {
    label: 'system.setting.colorSchemeDark',
    value: SettingsValueEnum.COLOR_SCHEME_DARK,
  },
];

/**
 * @name PredefineThemeColors
 * @description 预置主题颜色
 */
export const PredefineThemeColors = [
  '#b90b0b',
  '#409EFF',
  '#42b983',
  '#ea3a72',
  '#fe7300',
  '#1C9399',
  '#F56C6C',
  '#839aff',
];

/**
 * @name PredefineTabStyle
 * @description 预置标签风格
 */
export const PredefineTabStyle = [
  {
    label: 'system.setting.tabStyleSquare',
    value: SettingsValueEnum.TAB_STYLE_SQUARE,
  },
  {
    label: 'system.setting.tabStyleRound',
    value: SettingsValueEnum.TAB_STYLE_ROUND,
  },
];

/**
 * @name PredefineMenuStyle
 * @description 预置管理菜单风格
 */
export const PredefineMenuStyle = [
  {
    label: 'system.setting.menuStyleSquare',
    value: SettingsValueEnum.MENU_STYLE_SQUARE,
  },
  {
    label: 'system.setting.menuStyleRound',
    value: SettingsValueEnum.MENU_STYLE_ROUND,
  },
];

/**
 * @name PredefineBreadcrumbPosition
 * @description 预置面包屑位置
 */
export const PredefineBreadcrumbPosition = [
  {
    label: 'system.setting.breadcrumbViewTop',
    value: SettingsValueEnum.BREADCRUMB_VIEW_TOP,
  },
  {
    label: 'system.setting.breadcrumbLayoutHeader',
    value: SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER,
  },
  {
    label: 'system.setting.breadcrumbHidden',
    value: SettingsValueEnum.BREADCRUMB_HIDDEN,
  },
];

/**
 * @name PredefineCopyrightPosition
 * @description 预置版权信息位置
 */
export const PredefineCopyrightPosition = [
  {
    label: 'system.setting.copyrightBottom',
    value: SettingsValueEnum.COPYRIGHT_VIEW_BOTTOM,
  },
  {
    label: 'system.setting.copyrightHidden',
    value: SettingsValueEnum.COPYRIGHT_HIDDEN,
  },
];
