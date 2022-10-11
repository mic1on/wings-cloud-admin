import { stores } from '../../plugins/pinia';

/**
 * @name useWingsStore
 * @description 基于 pinia 的状态总线钩子函数
 * @return baseStore
 * @return appRouteStore
 * @return appUserStore
 */
export const useWingsStore = () => {
  const baseStore = stores['base'].default();
  const appRouteStore = stores['route'].default();
  const appUserStore = stores['user'].default();

  return {
    baseStore,
    appRouteStore,
    appUserStore,
  };
};
