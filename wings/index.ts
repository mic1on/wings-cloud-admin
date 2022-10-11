export * from './core/enums';
export * from './core/hooks/use-api';
export * from './core/hooks/use-app';
export * from './core/hooks/use-count-down';
export * from './core/hooks/use-crud';
export * from './core/hooks/use-language';
export * from './core/hooks/use-store';
export * from './core/utils/request';
export * from './core/utils/storage';
export * from './core/utils/common';
export * from './core/utils/reg-exp';
export * from './core/utils/auto';
export * from './core/utils/code-adaptor';

import './core/index.scss';
import 'virtual:svg-icons-register';
import 'uno.css';

import type { App } from 'vue';
import { createApp } from 'vue';
import {
  elementPlusConfig,
  useElementPlus,
  useElementIcons,
} from './core/plugins/element-plus';
import { usePinia } from './core/plugins/pinia';
import { useVueDomPurifyHTML } from './core/plugins/vue-dompurify-html';
import { useI18n, i18n } from './core/plugins/vue-i18n';
import { useRouter, router, routes } from './core/plugins/vue-router';
import { useMock } from './core/plugins/mock';
import { stores, getLoginStorageType } from './core/plugins/pinia';
import { languages, messages } from './core/plugins/vue-i18n';

import Router from './core/components/layout-router/index.vue';
import LayoutBase from './core/components/layout-base/index.vue';
import LayoutAdmin from './core/components/layout-admin/index.vue';
import LayoutWebsite from './core/components/layout-website/index.vue';
import WingsApp from './core/components/app/index.vue';
import WingsAppProvider from './core/components/app-provider/index.vue';
import WingsCrudAction from './core/components/crud-action';
import WingsCrudCard from './core/components/crud-card';
import WingsCrudDialog from './core/components/crud-dialog';
import WingsCrudPagination from './core/components/crud-pagination';
import WingsCrudQuery from './core/components/crud-query';
import WingsCrudTable from './core/components/crud-table';
import WingsSvgIcon from './core/components/svg-icon';

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
