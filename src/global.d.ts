import type { Component } from 'vue';

type Callback = (data?: any) => void;

type DefaultSettingsLayout = 'top' | 'top-lean' | 'aside' | 'aside-lean';

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
  Breadcrumb: string;
  Copyright: string;
  ElementPlus: IObject;
  Language: string;
  FirstRoute: string;
}

declare module 'vue-router' {
  interface RouteMeta {
    component?: string | Component;
    isI18n?: boolean;
    i18nKey?: string;
    layout?: string | null;
    isAdmin: boolean;
    requiresAuth?: boolean;
    iconType?: string;
    icon?: string;
    menuName?: string;
    sort?: number | string;
    externalPage?: boolean;
    externalPageUrl?: string;
    breadcrumb?: Array[IObject];
  }
}
