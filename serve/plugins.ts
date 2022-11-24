import { resolve } from 'path';
import { PluginOption } from 'vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { createHtmlPlugin } from 'vite-plugin-html';
import ViteCompression from 'vite-plugin-compression';
import TsconfigPaths from 'vite-tsconfig-paths';
import EslintPlugin from 'vite-plugin-eslint';
import Vue from '@vitejs/plugin-vue';
import basicSsl from '@vitejs/plugin-basic-ssl';
import Unocss from 'unocss/vite';
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

/**
 * @name usePluginOption
 * @desciptions 在 Vite 开发服务器中使用插件
 * @return pluginOption 插件配置
 */
export const usePluginOption = (
  ENV: Record<string, string>
): PluginOption[] => {
  const pluginOption: PluginOption[] = [
    Vue(),
    EslintPlugin(),
    createHtmlPlugin(),
    TsconfigPaths(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svgs/')],
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      dirs: ['src/components'],
      dts: 'src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: '.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/, /\.jsx$/],
      dirs: ['src/components'],
      dts: 'src/types/components.d.ts',
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
    ViteCompression({
      verbose: true,
      disable: ENV.VITE_G_ZIP !== 'true',
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
  ];
  if (ENV.VITE_SERVER_HTTPS === 'true') {
    pluginOption.push(basicSsl());
  }
  return pluginOption;
};
