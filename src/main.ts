import type { App } from 'vue';
import { createApp } from 'vue';
import _App from './components/app/app.vue';

import { useElementPlus, useElementPlusIcons } from './plugins/element-plus';
import { useVueDomPurifyHTML } from './plugins/vue-dompurify-html';
import { useRouter } from './plugins/vue-router';
import { useI18n } from './plugins/vue-i18n';
import { usePinia } from './plugins/pinia';
import { useMock } from './plugins/mock';

import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/notification.scss';
import 'virtual:svg-icons-register';
import 'uno.css';

import './assets/styles/index.scss';
import './assets/themes/index.scss';

const app: App<Element> = createApp(_App);

useI18n(app);
usePinia(app);
useRouter(app);
useElementPlus(app);
useElementPlusIcons(app);
useVueDomPurifyHTML(app);
useMock();

app.mount('#app', true);
