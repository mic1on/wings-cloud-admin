import type { IObject } from '#/interface.d';
import { pluginAddRegister, autoImportPiniaStore } from '@/core/utils/helper';
import { createPinia } from 'pinia';

export const stores: IObject = autoImportPiniaStore(
  import.meta.glob('./modules/**/*.ts', {
    eager: true,
  })
);

export default pluginAddRegister(createPinia(), {
  sort: 3,
});
