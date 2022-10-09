import VueDOMPurifyHTML from 'vue-dompurify-html';
import { pluginAddRegister } from '@/core/utils/helper';

export default pluginAddRegister(VueDOMPurifyHTML, {
  sort: 4,
});
