import type { ResolveOptions, AliasOptions } from 'vite';
import { resolve } from 'path';

/**
 * @name useResolveOptions
 * @description 基于 Vite 的服务构建配置
 * @return resolveOptions
 */
export const useResolveOptions = ():
  | (ResolveOptions & {
      alias?: AliasOptions | undefined;
    })
  | undefined => {
  const resolveOptions:
    | (ResolveOptions & {
        alias?: AliasOptions | undefined;
      })
    | undefined = {
    alias: {
      '@': resolve(process.cwd(), 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  };
  return resolveOptions;
};
