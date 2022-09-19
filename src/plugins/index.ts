import type { App } from 'vue';
import { autoRegisterPlugins } from '@/utils/app-auto';

/**
 * 自动导入需要注册的三方插件
 */
const plugins: Record<string, any> = import.meta.glob('./**/index.ts', {
  import: 'default',
  eager: true,
});

/**
 * 导出自动注册三方插件方法
 */
export const registerPlugins = async (app: App): Promise<void> => {
  await autoRegisterPlugins(app, plugins);
};
