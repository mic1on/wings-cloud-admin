import type { Component } from 'vue';
import { SettingsValueEnum } from './enums';

type Callback = (data?: any) => void;

type DefaultSettingsLayout =
  | SettingsValueEnum.LAYOUT_TOP
  | SettingsValueEnum.LAYOUT_TOP_LEAN
  | SettingsValueEnum.LAYOUT_ASIDE
  | SettingsValueEnum.LAYOUT_ASIDE_LEAN;

type DefaultSettingsColorScheme =
  | SettingsValueEnum.COLOR_SCHEME_AUTO
  | SettingsValueEnum.COLOR_SCHEME_THEME
  | SettingsValueEnum.COLOR_SCHEME_LIGHT
  | SettingsValueEnum.COLOR_SCHEME_DARK
  | '';

type DefaultSettingsTabStyle =
  | SettingsValueEnum.TAB_STYLE_SQUARE
  | SettingsValueEnum.TAB_STYLE_ROUND;

type DefaultSettingsMenuStyle =
  | SettingsValueEnum.MENU_STYLE_SQUARE
  | SettingsValueEnum.MENU_STYLE_ROUND;

type DefaultSettingsLoginType =
  | SettingsValueEnum.LOGIN_TYPE_ACCOUNT
  | SettingsValueEnum.LOGIN_TYPE_PHONE
  | SettingsValueEnum.LOGIN_TYPE_EMAIL
  | SettingsValueEnum.LOGIN_TYPE_WECHAT
  | SettingsValueEnum.LOGIN_TYPE_ALIPAY;

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
  AdminFirstRoute: string;
  LoginType: DefaultSettingsLoginType;
  LoginTo: string;
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
