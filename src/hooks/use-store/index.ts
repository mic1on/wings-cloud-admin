import { useBaseStore } from './use-base-store';
import { useRouteStore } from './use-route-store';
import { useUserStore } from './use-user-store';

/**
 * @name useStore
 * @description 基于 pinia 的状态注册机
 */
export const useStore = () => {
  const baseStore = useBaseStore();
  const routeStore = useRouteStore();
  const userStore = useUserStore();

  return {
    baseStore,
    routeStore,
    userStore,
  };
};
