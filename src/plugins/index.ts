import type { App } from 'vue';
import { useElementPlus, useElementIcons } from './element-plus';
import { usePinia } from './pinia';
import { useVueDomPurifyHTML } from './vue-dompurify-html';
import { useI18n } from './vue-i18n';
import { useRouter } from './vue-router';
import { useMock } from './mock';
import { stores } from './pinia';
import { routes } from './vue-router';
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

export { usePlguins, stores, routes, languages, messages };
