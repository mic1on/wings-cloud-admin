import type { BuildOptions } from 'vite';

/**
 * @name useBuildOptions
 * @description 基于 Vite 的服务构建配置
 * @return buildOptions
 */
export const useBuildOptions = (
  env: Record<string, string>
): BuildOptions | undefined => {
  const buildOptions: BuildOptions | undefined = {
    target: 'modules',
    minify: 'esbuild',
    outDir: env.VITE_DIST_PATH,
    chunkSizeWarningLimit: Number(env.VITE_BUILD_SIZE_WARNING),
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
  };
  return buildOptions;
};
