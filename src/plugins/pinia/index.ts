import type { App } from 'vue';
import type { Pinia } from 'pinia';
import { pluginAddRegister } from '../../utils/auto';
import { createPinia } from 'pinia';

const pinia: Pinia = createPinia();

const usePinia = (app: App<Element>): void => {
  app.use(pinia);
};

export { pinia, usePinia };

export default pluginAddRegister(pinia);
