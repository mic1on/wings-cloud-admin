import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export interface Files<T = any> {
  [key: string]: T;
}
