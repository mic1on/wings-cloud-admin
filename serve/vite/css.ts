import type { CSSOptions } from 'vite';

/**
 * @name useCssOptions
 * @description 基于 Vite 的服务构建配置
 * @return cssOptions
 */
export const useCssOptions = (): CSSOptions | undefined => {
  const cssOptions: CSSOptions | undefined = {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/plugins/element-plus/styles/index.scss" as *;`,
      },
    },
  };
  return cssOptions;
};
