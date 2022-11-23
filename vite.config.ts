import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { createHtmlPlugin } from 'vite-plugin-html';
import ViteCompression from 'vite-plugin-compression';
import TsconfigPaths from 'vite-tsconfig-paths';
import EslintPlugin from 'vite-plugin-eslint';
import Unocss from 'unocss/vite';
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

/**
 * @name viteConfig
 * @description vite 开发及构建模式配置
 */
export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    envDir: './',
    envPrefix: 'APP_',
    define: {
      'process.env': loadEnv(mode, process.cwd(), ''),
    },
    base: loadEnv(mode, process.cwd()).VITE_BASE_URL as unknown as string,
    server: {
      host: '0.0.0.0',
      open: true,
      port: 8001,
      https: false,
      proxy: {},
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/plugins/element-plus/styles/index.scss" as *;`,
        },
      },
    },
    plugins: [
      Vue(),
      EslintPlugin(),
      createHtmlPlugin(),
      TsconfigPaths(),
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, 'src/assets/svgs')],
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
        dts: 'src/auto-imports.d.ts',
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
        dts: 'src/components/index.d.ts',
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView'],
          },
        ],
      }),
      ViteCompression({
        verbose: true,
        disable: JSON.parse(
          !loadEnv(mode, process.cwd()).VITE_G_ZIP as unknown as string
        ),
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
    ],
    build: {
      target: 'modules',
      minify: 'esbuild',
      outDir: loadEnv(mode, process.cwd()).VITE_DIST_PATH as unknown as string,
      chunkSizeWarningLimit: 1024 * 10,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('element-plus/theme-chalk/')) {
              return 'element-plus';
            }
          },
        },
      },
    },
  });
};
