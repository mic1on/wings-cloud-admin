import type { IObject } from '#/interface.d';
import type { Router, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { pluginAddRegister } from '@/core/utils/helper';
import { addRouterGuard } from './guard';
import { RouteBaseEnum } from '@/enums/route';

const files: IObject = import.meta.glob('./routes/**/*.ts', {
  import: 'default',
  eager: true,
});

export let routes: Array<RouteRecordRaw> = [];

Object.keys(files).forEach((key) => {
  routes = routes.concat(files[key]);
});

routes.push({
  path: '/:pathMatch(.*)',
  redirect: RouteBaseEnum.ROUTE_NO_FOUND,
});

export const router: Router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default pluginAddRegister(addRouterGuard(router), {
  sort: 2,
});
