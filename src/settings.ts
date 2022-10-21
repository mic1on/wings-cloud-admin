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
  { label: _t('admin.system.themeColoBlue'), value: '#0d6efd' },
  { label: _t('admin.system.themeColoBlack'), value: '#222b45' },
  { label: _t('admin.system.themeColoGreen'), value: '#42b983' },
  { label: _t('admin.system.themeColoPink'), value: '#ea3a72' },
  { label: _t('admin.system.themeColoOrgane'), value: '#fe7300' },
  { label: _t('admin.system.themeColoCyan'), value: '#1C9399' },
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
};
