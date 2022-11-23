import { ProxyOptions } from 'vite';

/**
 * @name serviceProxy
 * @description 基于 Vite 的服务器代理配置
 * @return proxy 代理配置
 */
export const serviceProxy = (
  env: Record<string, string>
): Record<string, string | ProxyOptions> => {
  let proxy: Record<string, string | ProxyOptions> = {};
  if (env.VITE_MODE === 'development') {
    proxy = {};
  } else if (env.VITE_MODE === 'staging') {
    proxy = {};
  } else if (env.VITE_MODE === 'production') {
    proxy = {};
  }
  return proxy;
};
