import type { App } from 'vue';
import { createApp } from 'vue';
import _App from './components/app/app.vue';

import { useElementPlus, useElementIcons } from './plugins/element-plus';
import { useVueDomPurifyHTML } from './plugins/vue-dompurify-html';
import { useRouter } from './plugins/vue-router';
import { useI18n } from './plugins/vue-i18n';
import { usePinia } from './plugins/pinia';
import { useMock } from './plugins/mock';

import './assets/styles/index.scss';
import 'virtual:svg-icons-register';
import 'uno.css';

const app: App<Element> = createApp(_App);

useI18n(app);
useRouter(app);
useElementPlus(app);
usePinia(app);
useVueDomPurifyHTML(app);

useMock();

useElementIcons(app);

app.mount('#app', true);
