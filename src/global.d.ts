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
  ElementPlus: IObject;
}

declare module 'vue-router' {
  interface RouteMeta {
    component?: string | Component | undefined;
    isI18n?: boolean;
    i18nKey?: string | undefined;
    layout?: string | undefined;
    isAdmin: boolean;
    requiresAuth?: boolean | undefined;
    iconType?: string | undefined;
    icon?: string | undefined;
    menuName?: string;
    sort?: number | string | undefined;
    externalPage?: boolean | undefined;
    externalPageUrl?: string | undefined;
  }
}
