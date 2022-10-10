import type { App } from 'vue';
import {
  elementPlusConfig,
  useElementPlus,
  useElementIcons,
} from './element-plus';
import { usePinia } from './pinia';
import { useVueDomPurifyHTML } from './vue-dompurify-html';
import { useI18n, i18n } from './vue-i18n';
import { useRouter, router, routes } from './vue-router';
import { useMock } from './mock';
import { stores, getLoginStorageType } from './pinia';
import { languages, messages } from './vue-i18n';

const usePlguins = async (app: App<Element>): Promise<void> => {
  useI18n(app);
  useRouter(app);
  useElementPlus(app);
  usePinia(app);
  useVueDomPurifyHTML(app);

  useMock();

  useElementIcons(app);
};

export {
  usePlguins,
  getLoginStorageType,
  stores,
  routes,
  router,
  i18n,
  languages,
  messages,
  elementPlusConfig,
};
