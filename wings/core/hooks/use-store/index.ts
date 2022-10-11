import { stores } from '../../plugins/pinia';

/**
 * @name useWingsStore
 * @description 基于 pinia 的状态总线钩子函数
 * @return appStore
 * @return appRouteStore
 * @return appUserStore
 */
export const useWingsStore = () => {
  const appStore = stores['base'].default();
  const appRouteStore = stores['route'].default();
  const appUserStore = stores['user'].default();

  return {
    appStore,
    appRouteStore,
    appUserStore,
  };
};
