import { createApp } from 'vue';
import App from '@/App.vue';
import mountApis from '@/apis';
import { pluginRegister } from '@/core';
import { registerIcons } from '@/core/plugins/element-plus';
import setupMock from '../mock';

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
 * 全局注册模拟接口插件
 */
setupMock();

/**
 * 自动注册三方插件
 */
pluginRegister(app);

/**
 * 全局安装 Element Plus 图标库
 */
registerIcons(app);

/**
 * App 实例挂载 Dom
 */
app.mount('#app', true);
