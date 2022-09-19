import { IObject } from '#/interface.d';
import { App } from 'vue';
import { autoMountApis, autoImportApis } from '@/utils/app-auto';

/**
 * 自动导入 Api 接口文件
 */
export const apis: IObject = autoImportApis(
  import.meta.glob('./**/*.ts', {
    eager: true,
  })
);

/**
 * 导出全局挂载 Api 接口方法
 */
export default (app: App): void => {
  autoMountApis(app, apis);
};
