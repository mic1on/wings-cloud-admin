import type { DefaultSettingsTypes } from './global';
import { _t } from './plugins/vue-i18n';

/**
 * @name DefaultSettings
 * @description 默认设置
 */
export const DefaultSettings: DefaultSettingsTypes = {
  Layout: 'top',
  ThemeColor: '#0d6efd',
  ColorScheme: 'auto',
  TabStyle: 'square',
  MenuStyle: 'round',
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
  { label: _t('admin.systemManagement.systemSetting.layoutTop'), value: 'top' },
  {
    label: _t('admin.systemManagement.systemSetting.layoutTopLean'),
    value: 'top-lean',
  },
  {
    label: _t('admin.systemManagement.systemSetting.layoutBlend'),
    value: 'aside',
  },
  {
    label: _t('admin.systemManagement.systemSetting.layoutAside'),
    value: 'aside-lean',
  },
];

/**
 * @name PredefineColorSchemes
 * @description 预置配色方案
 */
export const PredefineColorSchemes = [
  {
    label: _t('admin.systemManagement.systemSetting.colorSchemeAuto'),
    value: 'auto',
  },
  {
    label: _t('admin.systemManagement.systemSetting.colorSchemeTheme'),
    value: 'theme',
  },
  {
    label: _t('admin.systemManagement.systemSetting.colorSchemeLight'),
    value: 'light',
  },
  {
    label: _t('admin.systemManagement.systemSetting.colorSchemeDark'),
    value: 'dark',
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
    value: 'square',
  },
  {
    label: _t('admin.systemManagement.systemSetting.tabStyleRound'),
    value: 'round',
  },
];

/**
 * @name PredefineMenuStyle
 * @description 预置管理菜单风格
 */
export const PredefineMenuStyle = [
  {
    label: _t('admin.systemManagement.systemSetting.menuStyleSquare'),
    value: 'square',
  },
  {
    label: _t('admin.systemManagement.systemSetting.menuStyleRound'),
    value: 'round',
  },
];
