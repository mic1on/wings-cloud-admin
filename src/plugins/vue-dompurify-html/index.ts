import VueDOMPurifyHTML from 'vue-dompurify-html';
import { pluginAddRegister } from '@/utils/wings-auto';

/**
 * 导出添加注册插件方法
 */
export default pluginAddRegister(VueDOMPurifyHTML, {
  sort: 4,
});
