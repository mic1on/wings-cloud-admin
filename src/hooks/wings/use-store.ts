import { stores } from '@/plugins';

/**
 * @name useWingsStore
 * @return stores
 * @return appStore
 * @return appRouteStore
 * @return appUserStore
 */

export default () => {
  const appStore = stores['base'].default();
  const appRouteStore = stores['route'].default();
  const appUserStore = stores['user'].default();

  return {
    stores,
    appStore,
    appRouteStore,
    appUserStore,
  };
};
