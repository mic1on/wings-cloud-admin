import type { ServerOptions } from 'vite';
import { serverProxy } from '../proxy';

/**
 * @name useServerOptions
 * @description 本地开发服务模式配置
 * @return serverOptions 服务配置
 */
export const useServerOptions = (
  env: Record<string, string>
): ServerOptions | undefined => {
  const serverOptions: ServerOptions | undefined = {
    host: env.VITE_SERVER_HOST,
    open: env.VITE_SERVER_OPEN === 'true',
    port: Number(env.VITE_SERVER_PORT),
    https: env.VITE_SERVER_HTTPS === 'true',
    proxy: serverProxy(env),
  };
  return serverOptions;
};
