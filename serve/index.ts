import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import { usePreviewOptions } from './vite/preview';
import { useResolveOptions } from './vite/resolve';
import { useServerOptions } from './vite/server';
import { usePluginOption } from './vite/plugins';
import { useBuildOptions } from './vite/build';
import { useCssOptions } from './vite/css';

export default ({ command, mode }: ConfigEnv) => {
  const ENV: Record<string, string> = loadEnv(mode, './serve/env/', [
    'VITE_',
    'APP_',
  ]);
  return defineConfig({
    base: ENV.VITE_BASE_URL,
    envDir: './serve/env/',
    envPrefix: 'APP_',
    define: {
      'process.env': ENV,
    },
    css: useCssOptions(),
    resolve: useResolveOptions(),
    plugins: usePluginOption(ENV),
    server: useServerOptions(ENV),
    build: useBuildOptions(ENV),
    preview: usePreviewOptions(ENV),
  });
};
