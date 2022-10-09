import { pluginAddRegister, autoImportPiniaStore } from '@/utils/wings-auto';
import { createPinia } from 'pinia';
import type { IObject } from '#/interface.d';

/**
 * 自动导入Pinia模块，同时导出注册的 Pinia 总线
 */
export const stores: IObject = autoImportPiniaStore(
  import.meta.glob('@/store/**/*.ts', {
    eager: true,
  })
);

/**
 * 导出添加注册插件方法
 */
export default pluginAddRegister(createPinia(), {
  sort: 0,
});
