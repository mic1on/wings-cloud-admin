import type { Stores } from './index.d';
import type { App } from 'vue';
import type { Pinia } from 'pinia';
import { pluginAddRegister, autoImportPiniaStore } from '../../utils/auto';
import { createPinia } from 'pinia';
import { getLoginStorageType } from './modules/user';

const stores: Stores = autoImportPiniaStore(
  import.meta.glob('./modules/**/*.ts', {
    eager: true,
  })
);

const pinia: Pinia = createPinia();

const usePinia = (app: App<Element>): void => {
  app.use(pinia);
};

export { stores, pinia, usePinia, getLoginStorageType };

export default pluginAddRegister(pinia);
