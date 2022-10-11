import type { RouteRecordRaw } from 'vue-router';

export interface Files<T = any> {
  [key: string]: T;
}

export type Routes = Array<RouteRecordRaw>;

export type Apis = Files<Files<string>>;

export interface Stores<T = any> {
  [key: string]: T;
}

export interface Languages<T = any> {
  [key: string]: T;
}
