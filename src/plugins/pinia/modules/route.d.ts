export interface RouteState {
  staticRoutes: Array<RouteRecordRaw>;
  adminMenuRoutes: Array<RouteRecordRaw>;
  roleRoutes: Array<RouteRecordRaw>;
  allRoutes: Array<RouteRecordRaw>;
}

export type Roles = Array<string>;
