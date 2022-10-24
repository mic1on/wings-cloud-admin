import { _t } from './plugins/vue-i18n';

/**
 * @name Layout
 * @description 管理系统默认布局方式
 */
export const Layout = 'top';

/**
 * @name PredefineLayouts
 * @description 管理系统预置布局方式
 */
export const PredefineLayouts = [
  { label: _t('admin.system.layoutTop'), value: 'top' },
  { label: _t('admin.system.layoutTopLean'), value: 'top-lean' },
  { label: _t('admin.system.layoutBlend'), value: 'blend' },
  { label: _t('admin.system.layoutAside'), value: 'aside' },
];

/**
 * @name ThemeSettings
 * @description 应用主题默认配置
 */
export const ThemeSettings = {
  themeColor: '#0d6efd',
  colorScheme: 'auto',
};

/**
 * @name PredefineColorSchemes
 * @description 预置配色方案
 */
export const PredefineColorSchemes = [
  { label: _t('admin.system.colorSchemeAuto'), value: 'auto' },
  { label: _t('admin.system.colorSchemeTheme'), value: 'theme' },
  { label: _t('admin.system.colorSchemeLight'), value: 'light' },
  { label: _t('admin.system.colorSchemeDark'), value: 'dark' },
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
 * @name ToolbarSettings
 * @description 管理系统工具栏默认配置
 */
export const ToolbarSettings = {
  dark: true,
  language: true,
  refresh: true,
  notification: true,
  fullscreen: true,
  setting: true,
  avatar: true,
};

/**
 * @name ElementPlus
 * @description Element Plus 组件库配置，为了保证内建 UI 完整性，不建议修改命名空间
 */
export const ElementPlus = {
  size: 'default',
  message: {
    max: 3,
  },
  button: {
    autoInsertSpace: true,
  },
};
