import type { App } from 'vue';
import { useElementPlus, useElementIcons } from './element-plus';
import { usePinia } from './pinia';
import { useVueDomPurifyHTML } from './vue-dompurify-html';
import { useI18n } from './vue-i18n';
import { useRouter } from './vue-router';
import { useMock } from './mock';

export default async (app: App<Element>): Promise<void> => {
  useI18n(app);
  useRouter(app);
  useElementPlus(app);
  usePinia(app);
  useVueDomPurifyHTML(app);

  useMock();

  useElementIcons(app);
};
