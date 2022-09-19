import { autoImportLanguages } from '@/utils/app-auto';
import type { IObject } from '#/interface.d';

/**
 * 自动导入 Vue-i18n 多语言文件
 */
export const languages: IObject<IObject<string>> = autoImportLanguages(
  import.meta.glob('../../../languages/**/*.json', {
    import: 'default',
    eager: true,
  })
);
