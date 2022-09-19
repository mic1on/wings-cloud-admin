import type { Router } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { pluginAddRegister } from '@/utils/app-auto';
import { addRouterGuard } from './guard';
import { routes } from './import';

/**
 * 导出静态路由
 */
export { routes };

/**
 * 导出初始化 Vue-router 实例
 */
export const router: Router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

/**
 * 导出添加注册插件方法
 */
export default pluginAddRegister(addRouterGuard(router));
