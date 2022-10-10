import type { IObject } from '#/interface.d';
import type { Router, RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { pluginAddRegister } from '@wings';
import { RouteEnum } from '@wings';
import { addRouterGuard } from './guard';

const files: IObject = import.meta.glob('./routes/**/*.ts', {
  import: 'default',
  eager: true,
});

let routes: Array<RouteRecordRaw> = [];

Object.keys(files).forEach((key) => {
  routes = routes.concat(files[key]);
});

routes.push({
  path: '/:pathMatch(.*)',
  redirect: RouteEnum.ROUTE_NO_FOUND,
});

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

const useRouter = (app: App<Element>): void => {
  app.use(router);
};

export { routes, router, useRouter };

export default pluginAddRegister(addRouterGuard(router));
