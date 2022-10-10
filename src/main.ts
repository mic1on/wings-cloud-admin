import { createApp } from 'vue';
import App from '@/App.vue';
import mountApis from '@/apis';
import { usePlguins } from '@wings';
import 'virtual:svg-icons-register';
import '@/styles/index.scss';
import 'uno.css';

const app = createApp(App);

mountApis(app);

usePlguins(app);

app.mount('#app', true);
