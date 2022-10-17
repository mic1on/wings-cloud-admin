import type { Component } from 'vue';

interface IObject<T = any> {
  [key: string]: T;
}

interface IFunction<T = any> {
  (x?: any): T;
}

type Callback = (data?: any) => void;

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
