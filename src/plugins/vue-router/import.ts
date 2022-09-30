import type { RouteRecordRaw } from 'vue-router';
import { autoImportRoutes } from '@/utils/wings-auto';

/**
 * 自动导入 Vue-router 路由文件
 */
export const routes: RouteRecordRaw[] = autoImportRoutes(
  import.meta.glob('@/router/**/*.ts', {
    import: 'default',
    eager: true,
  })
);
