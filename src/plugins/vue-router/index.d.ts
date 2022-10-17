import type { Component } from 'vue';

export type Roles = Array<string>;

export interface RouteMeta {
  component: string | Component | null | undefined;
  children: Routes | [] | null | undefined;
  layout: string | null | undefined;
  isAdmin: boolean | undefined;
  requiresAuth: boolean | undefined;
  iconType: string | undefined;
  icon: string | undefined;
  menuName: string | undefined;
  sort: number | string | null | undefined;
  externalPage: boolean | undefined;
  externalPageUrl: string | null | undefined;
}

export type Routes = Array<RouteRecordRaw>;
