import { stores } from '@/plugins/pinia';

/**
 * 导出全局状态钩子函数
 */
export default () => {
  const appStore = stores['app'].default();

  const appRouteStore = stores['app-route'].default();

  const appUserStore = stores['app-user'].default();

  return {
    app: appStore,
    route: appRouteStore,
    user: appUserStore,
  };
};
