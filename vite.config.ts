import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ViteCompression from 'vite-plugin-compression';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
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

export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    /**
     * 环境变量存放目录
     */
    envDir: './',

    /**
     * 环境变量前缀
     */
    envPrefix: 'APP_',

    /**
     * 非 VITE_ 环境变量映射，同时使用 process.env 获取所有系统环境变量。
     */
    define: {
      'process.env': loadEnv(mode, process.cwd(), ''),
    },

    /**
     * 根目录
     */
    base: loadEnv(mode, process.cwd()).VITE_BASE_URL as unknown as string,

    /**
     * Vite 服务配置及 proxy 代理
     */
    server: {
      host: '0.0.0.0',
      open: true,
      port: 8001,
      https: false,
      proxy: {},
    },

    /**
     * 解析别名
     */
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '#': resolve(__dirname, 'types'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },

    /**
     * 全局 css 变量配置
     */
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/plugins/element-plus/styles/index.scss" as *;`,
        },
      },
    },

    /**
     * 插件配置
     */
    plugins: [
      /**
       * 提供 vue3 单文件组件支持
       */
      Vue(),

      /**
       * Vite 运行提供 Eslint 支持
       */
      EslintPlugin(),

      /**
       * 提供了 index.html 访问环境变量的能力
       */
      createHtmlPlugin(),

      /**
       * ts.config 路径配置
       */
      TsconfigPaths(),

      /**
       * 使用自定义的 Svg 图标
       */
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, 'src/components/wings-svg-icon/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),

      /**
       * 按需自动导入 Api 配置
       */
      AutoImport({
        imports: ['vue', 'vue-router', 'vue-i18n'],
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dirs: ['src/components'],
        dts: 'types/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: '.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),

      /**
       * 按需自动引入组件配置
       */
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/, /\.jsx$/],
        dirs: ['src/components'],
        dts: 'types/components.d.ts',
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView'],
          },
        ],
      }),

      /**
       * G-zip 配置
       */
      ViteCompression({
        verbose: true,
        disable: JSON.parse(
          !loadEnv(mode, process.cwd()).VITE_G_ZIP as unknown as string
        ),
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),

      /**
       * Unocss 配置
       */
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

    /**
     * Vite 打包配置
     */
    build: {
      target: 'modules',

      /**
       * 打包模式默认使用 ESbuild，其性能高于Terser
       */
      minify: 'esbuild',

      /**
       * 打包输出目录
       */
      outDir: loadEnv(mode, process.cwd()).VITE_DIST_PATH as unknown as string,

      /**
       * 指定触发警告的代码体积大小(单位：kb)
       */
      chunkSizeWarningLimit: 1024 * 10,

      /**
       * 自定义 Rollup 打包配置
       */
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            /**
             * 解决 Elements Plus 样式引用问题
             */
            if (id.includes('element-plus/theme-chalk/')) {
              return 'element-plus';
            }

            /**
             * 将 Pinia 的全局实例打包到 Vendor.js 中，以避免在与页面打包时重新引入资源
             */
            if (id.includes(resolve(__dirname, 'src/store/index.ts'))) {
              return 'vendor';
            }
          },
        },
      },
    },
  });
};
