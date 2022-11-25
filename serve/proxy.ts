import { ProxyOptions } from 'vite';

/**
 * @name serverProxy
 * @description 本地开发服务代理配置
 * @return proxy 代理配置
 */
export const serverProxy = (
  env: Record<string, string>
): Record<string, string | ProxyOptions> | undefined => {
  let proxy: Record<string, string | ProxyOptions> | undefined = {};
  if (env.VITE_MODE === 'development') {
    proxy = {
      '/admin': {
        target: '/',
      },
    };
  } else if (env.VITE_MODE === 'staging') {
    proxy = {};
  } else if (env.VITE_MODE === 'production') {
    proxy = {};
  }
  return proxy;
};

/**
 * @name previewProxy
 * @description 本地构建包预览服务代理配置
 * @return proxy 代理配置
 */
export const previewProxy = (
  env: Record<string, string>
): Record<string, string | ProxyOptions> | undefined => {
  let proxy: Record<string, string | ProxyOptions> | undefined = {};
  if (env.VITE_MODE === 'development') {
    proxy = {
      '/admin': {
        target: '/',
      },
    };
  } else if (env.VITE_MODE === 'staging') {
    proxy = {};
  } else if (env.VITE_MODE === 'production') {
    proxy = {};
  }
  return proxy;
};
