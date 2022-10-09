import { createApp } from 'vue';
import App from '@/App.vue';
import mountApis from '@/apis';
import { usePlguins } from '@/core';

/**
 * 导入全局样式、图标
 */
import 'virtual:svg-icons-register';
import '@/styles/index.scss';
import 'uno.css';

/**
 * 初始化 App 实例
 */
const app = createApp(App);

/**
 * 自动挂载 Api 接口至 App 全局
 */
mountApis(app);

/**
 * 使用三方插件
 */
usePlguins(app);

/**
 * App 实例挂载 Dom
 */
app.mount('#app', true);
