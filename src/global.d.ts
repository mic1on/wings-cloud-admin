import type { Component } from 'vue';

type Callback = (data?: any) => void;

type DefaultSettingsLayout = 'top' | 'top-lean' | 'blean' | 'aside';

type DefaultSettingsColorScheme = 'auto' | 'theme' | 'light' | 'dark' | '';

type DefaultSettingsTabStyle = 'square' | 'round';

type DefaultSettingsMenuStyle = 'square' | 'round';

interface IObject<T = any> {
  [key: string]: T;
}

interface IFunction<T = any> {
  (x?: any): T;
}

interface DefaultSettingsTypes {
  Layout: DefaultSettingsLayout;
  ThemeColor: string;
  ColorScheme: DefaultSettingsColorScheme;
  TabStyle: DefaultSettingsTabStyle;
  MenuStyle: DefaultSettingsMenuStyle;
  Toolbar: IObject<boolean>;
  Footer: boolean;
  Tab: boolean;
  UniqueOpened: boolean;
  ElementPlus: IObject;
}

declare module 'vue-router' {
  interface RouteMeta {
    component?: string | Component | undefined;
    children?: Routes | [] | undefined;
    layout?: string | undefined;
    isAdmin: boolean;
    requiresAuth?: boolean | undefined;
    iconType?: string | undefined;
    icon?: string | undefined;
    menuName: string;
    sort?: number | string | undefined;
    externalPage?: boolean | undefined;
    externalPageUrl?: string | undefined;
  }
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.gif';
declare module '*.less';
declare module 'qs';
declare module 'mockjs';
declare module 'element-plus/dist/locale/en.mjs';
declare module 'element-plus/dist/locale/zh-cn.mjs';
