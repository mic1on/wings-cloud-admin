import type { IObject } from '#/interface.d';
import type { App } from 'vue';
import { pluginAddRegister } from '@wings';
import { createPinia } from 'pinia';
import { FILE_NAME } from '@/utils/reg-exp';
import { getLoginStorageType } from './modules/user';

const files: IObject = import.meta.glob('./modules/**/*.ts', {
  eager: true,
});

let stores: IObject = {};

Object.keys(files).forEach((key) => {
  const fileName = key.replace(FILE_NAME, '$2');
  stores = { ...stores, [fileName]: files[key] || {} };
});

const pinia = createPinia();

const usePinia = (app: App<Element>): void => {
  app.use(pinia);
};

export { stores, pinia, usePinia, getLoginStorageType };

export default pluginAddRegister(pinia);
