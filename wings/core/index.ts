export * from './enums';
export * from './hooks/use-api';
export * from './hooks/use-app';
export * from './hooks/use-count-down';
export * from './hooks/use-crud';
export * from './hooks/use-language';
export * from './hooks/use-store';
export * from './utils/request';
export * from './utils/storage';
export * from './utils/common';
export * from './utils/reg-exp';
export * from './utils/auto';
export * from './utils/code-adaptor';

import './index.scss';
import 'virtual:svg-icons-register';
import 'uno.css';

import type { App } from 'vue';
import { createApp } from 'vue';
import {
  elementPlusConfig,
  useElementPlus,
  useElementIcons,
} from './plugins/element-plus';
import { usePinia } from './plugins/pinia';
import { useVueDomPurifyHTML } from './plugins/vue-dompurify-html';
import { useI18n, i18n } from './plugins/vue-i18n';
import { useRouter, router, routes } from './plugins/vue-router';
import { useMock } from './plugins/mock';
import { stores, getLoginStorageType } from './plugins/pinia';
import { languages, messages } from './plugins/vue-i18n';

import Router from './components/layout-router/index.vue';
import LayoutBase from './components/layout-base/index.vue';
import LayoutAdmin from './components/layout-admin/index.vue';
import LayoutWebsite from './components/layout-website/index.vue';
import WingsApp from './components/app/index.vue';
import WingsAppProvider from './components/app-provider/index.vue';
import WingsCrudAction from './components/crud-action';
import WingsCrudCard from './components/crud-card';
import WingsCrudDialog from './components/crud-dialog';
import WingsCrudPagination from './components/crud-pagination';
import WingsCrudQuery from './components/crud-query';
import WingsCrudTable from './components/crud-table';
import WingsSvgIcon from './components/svg-icon';

import mountApis from '@/apis';

const useWingsCore = async (): Promise<void> => {
  const app: App<Element> = createApp(WingsApp);

  useI18n(app);
  useRouter(app);
  useElementPlus(app);
  usePinia(app);
  useVueDomPurifyHTML(app);

  useMock();

  mountApis(app);

  useElementIcons(app);

  app
    .use(WingsSvgIcon)
    .use(WingsCrudAction)
    .use(WingsCrudCard)
    .use(WingsCrudDialog)
    .use(WingsCrudPagination)
    .use(WingsCrudQuery)
    .use(WingsCrudTable)
    .mount('#app', true);
};

export {
  useWingsCore,
  getLoginStorageType,
  stores,
  routes,
  router,
  i18n,
  languages,
  messages,
  elementPlusConfig,
  Router,
  LayoutBase,
  LayoutAdmin,
  LayoutWebsite,
  WingsApp,
  WingsAppProvider,
};
