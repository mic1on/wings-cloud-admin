export type Roles = Array<string>;

export interface RouteMeta {
  layout: string;
  isMenu: boolean;
  requiresAuth: boolean;
  iconType: string;
  icon: string;
  menuName: string;
  sort: number;
  externalPage: boolean;
  externalPageUrl: string;
}

export type Routes = Array<RouteRecordRaw>;
