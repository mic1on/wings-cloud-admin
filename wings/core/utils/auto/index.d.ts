import type { RouteRecordRaw } from 'vue-router';

export interface Files<T = any> {
  [key: string]: T;
}

export type Apis = Files<Files<string>>;
