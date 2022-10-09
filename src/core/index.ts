/**
 * wings-core
 * @export pluginRegister 插件组装器
 * @export stores pinia 状态文件
 * @export routes 国际化多语言文件
 */

import usePlguins from './plugins';
import { stores } from './plugins/pinia';
import { routes } from './plugins/vue-router';

export { usePlguins, stores, routes };
