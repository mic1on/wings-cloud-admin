import { stores } from '../../plugins/pinia';

/**
 * @name useStore
 * @description 基于 pinia 的状态总线钩子函数
 * @return baseStore
 * @return routeStore
 * @return userStore
 */
export const useStore = () => {
  const baseStore = stores['base'].default();
  const routeStore = stores['route'].default();
  const userStore = stores['user'].default();

  return {
    baseStore,
    routeStore,
    userStore,
  };
};
