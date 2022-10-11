import type { Stores } from './index.d';
import type { Files } from '../../utils/auto/index.d';
import type { App } from 'vue';
import type { Pinia } from 'pinia';
import { pluginAddRegister } from '../../utils/auto';
import { createPinia } from 'pinia';
import { FILE_NAME } from '../../utils/reg-exp';
import { getLoginStorageType } from './modules/user';

const files: Files = import.meta.glob('./modules/**/*.ts', {
  eager: true,
});

let stores: Stores = {};

Object.keys(files).forEach((key) => {
  const fileName = key.replace(FILE_NAME, '$2');
  stores = { ...stores, [fileName]: files[key] || {} };
});

const pinia: Pinia = createPinia();

const usePinia = (app: App<Element>): void => {
  app.use(pinia);
};

export { stores, pinia, usePinia, getLoginStorageType };

export default pluginAddRegister(pinia);
