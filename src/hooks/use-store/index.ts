import { stores } from '../../plugins/pinia';

/**
 * @name useStore
 * @description 基于 pinia 的状态总线钩子函数
 * @return baseStore
 * @return routeStore
 * @return userStore
 */
export const useStore = () => {
  const baseStore = stores.useBaseStore();
  const routeStore = stores.useRouteStore();
  const userStore = stores.useUserStore();

  return {
    baseStore,
    routeStore,
    userStore,
  };
};
