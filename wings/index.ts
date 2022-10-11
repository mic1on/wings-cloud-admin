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

const useWingsCore = async (app: App<Element>): Promise<void> => {
  useI18n(app);
  useRouter(app);
  useElementPlus(app);
  usePinia(app);
  useVueDomPurifyHTML(app);

  useMock();

  useElementIcons(app);
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
};

import Router from './core/components/layout-router';
import LayoutBase from './core/components/layout-base';
import LayoutAdmin from './core/components/layout-admin';
import LayoutWebsite from './core/components/layout-website';
import WingsApp from './core/components/app/index.vue';
import WingsAppProvider from './core/components/app-provider/index.vue';

export {
  Router,
  LayoutBase,
  LayoutAdmin,
  LayoutWebsite,
  WingsApp,
  WingsAppProvider,
};

export * from './core/enums';
export * from './core/hooks/use-crud';
export * from './core/hooks/use-app';
export * from './core/utils/request';
export * from './core/utils/storage';
export * from './core/utils/common';
export * from './core/utils/reg-exp';
export * from './core/utils/auto';
export * from './core/utils/code-adaptor';
