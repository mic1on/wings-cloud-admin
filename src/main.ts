import type { App } from 'vue';
import { createApp } from 'vue';
import mountApis from '@/apis';
import { useWingsCore, WingsApp } from '@wings';

const app: App<Element> = createApp(WingsApp);

mountApis(app);

useWingsCore(app);

app.mount('#app', true);
