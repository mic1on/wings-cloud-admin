import type { DefaultSettingsTypes } from './global';
import { SettingsValueEnum } from './enums';
import { _t } from './plugins/vue-i18n';

/**
 * @name DefaultSettings
 * @description 默认设置
 */
export const DefaultSettings: DefaultSettingsTypes = {
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
  },
};

/**
 * @name PredefineToolbar
 * @description 管理系统工具栏预置按钮
 */
export const PredefineToolbar = [
  {
    label: _t('admin.systemManagement.systemSetting.toolbarDark'),
    value: 'Dark',
  },
  {
    label: _t('admin.systemManagement.systemSetting.toolbarLanguage'),
    value: 'Language',
  },
  {
    label: _t('admin.systemManagement.systemSetting.toolbarRefresh'),
    value: 'Refresh',
  },
  {
    label: _t('admin.systemManagement.systemSetting.toolbarNotification'),
    value: 'Notification',
  },
  {
    label: _t('admin.systemManagement.systemSetting.toolabarFullscreen'),
    value: 'Fullscreen',
  },
  {
    label: _t('admin.systemManagement.systemSetting.toolbarSetting'),
    value: 'Setting',
  },
  {
    label: _t('admin.systemManagement.systemSetting.toolbarAvatar'),
    value: 'Avatar',
  },
];

/**
 * @name PredefineLayouts
 * @description 管理系统预置布局方式
 */
export const PredefineLayouts = [
  {
    label: _t('admin.systemManagement.systemSetting.layoutTop'),
    value: SettingsValueEnum.LAYOUT_TOP,
  },
  {
    label: _t('admin.systemManagement.systemSetting.layoutTopLean'),
    value: SettingsValueEnum.LAYOUT_TOP_LEAN,
  },
  {
    label: _t('admin.systemManagement.systemSetting.layoutAside'),
    value: SettingsValueEnum.LAYOUT_ASIDE,
  },
  {
    label: _t('admin.systemManagement.systemSetting.layoutAsideLean'),
    value: SettingsValueEnum.LAYOUT_ASIDE_LEAN,
  },
];

/**
 * @name PredefineColorSchemes
 * @description 预置配色方案
 */
export const PredefineColorSchemes = [
  {
    label: _t('admin.systemManagement.systemSetting.colorSchemeAuto'),
    value: SettingsValueEnum.COLOR_SCHEME_AUTO,
  },
  {
    label: _t('admin.systemManagement.systemSetting.colorSchemeTheme'),
    value: SettingsValueEnum.COLOR_SCHEME_THEME,
  },
  {
    label: _t('admin.systemManagement.systemSetting.colorSchemeLight'),
    value: SettingsValueEnum.COLOR_SCHEME_LIGHT,
  },
  {
    label: _t('admin.systemManagement.systemSetting.colorSchemeDark'),
    value: SettingsValueEnum.COLOR_SCHEME_DARK,
  },
];

/**
 * @name PredefineThemeColors
 * @description 预置主题颜色
 */
export const PredefineThemeColors = [
  '#0d6efd',
  '#262A3C',
  '#42b983',
  '#ea3a72',
  '#fe7300',
  '#1C9399',
];

/**
 * @name PredefineTabStyle
 * @description 预置标签风格
 */
export const PredefineTabStyle = [
  {
    label: _t('admin.systemManagement.systemSetting.tabStyleSquare'),
    value: SettingsValueEnum.TAB_STYLE_SQUARE,
  },
  {
    label: _t('admin.systemManagement.systemSetting.tabStyleRound'),
    value: SettingsValueEnum.TAB_STYLE_ROUND,
  },
];

/**
 * @name PredefineMenuStyle
 * @description 预置管理菜单风格
 */
export const PredefineMenuStyle = [
  {
    label: _t('admin.systemManagement.systemSetting.menuStyleSquare'),
    value: SettingsValueEnum.MENU_STYLE_SQUARE,
  },
  {
    label: _t('admin.systemManagement.systemSetting.menuStyleRound'),
    value: SettingsValueEnum.MENU_STYLE_ROUND,
  },
];

/**
 * @name PredefineBreadcrumbPosition
 * @description 预置面包屑位置
 */
export const PredefineBreadcrumbPosition = [
  {
    label: _t('admin.systemManagement.systemSetting.breadcrumbViewTop'),
    value: SettingsValueEnum.BREADCRUMB_VIEW_TOP,
  },
  {
    label: _t('admin.systemManagement.systemSetting.breadcrumbLayoutHeader'),
    value: SettingsValueEnum.BREADCRUMB_LAYOUT_HEADER,
  },
  {
    label: _t('admin.systemManagement.systemSetting.breadcrumbHidden'),
    value: SettingsValueEnum.BREADCRUMB_HIDDEN,
  },
];

/**
 * @name PredefineCopyrightPosition
 * @description 预置版权信息位置
 */
export const PredefineCopyrightPosition = [
  {
    label: _t('admin.systemManagement.systemSetting.copyrightBottom'),
    value: SettingsValueEnum.COPYRIGHT_VIEW_BOTTOM,
  },
  {
    label: _t('admin.systemManagement.systemSetting.copyrightHidden'),
    value: SettingsValueEnum.COPYRIGHT_HIDDEN,
  },
];
