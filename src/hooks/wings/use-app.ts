import { setStorage } from '@/utils';
import { StorageAppEnum } from '@/enums';
import { getMobileAreaCodeList } from '@/apis/base';
import { useDark, useToggle } from '@vueuse/core';
import { stores, routes } from '@/plugins';

/**
 * @name useWingsApp
 * @return changeDark
 * @return isNeedInit
 * @return init
 */

export default () => {
  const appStore = stores['base'].default();

  const appRouteStore = stores['route'].default();

  const appUserStore = stores['user'].default();

  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: import.meta.env.APP_STOREAGE_PREFIX + '-' + StorageAppEnum.DARK,
  });
  const changeDark = useToggle(isDark);

  const _getMobileAreaCodeList = async () => {
    const { data } = await getMobileAreaCodeList();
    setStorage(StorageAppEnum.MOBILE_PHONE_AREA_CODE, data);
  };

  const isNeedInit = () => {
    return new Promise((resolve) => {
      resolve(true);
    });
  };

  const init = async () => {
    appStore.changeGlobalLoading(true);
    if (await isNeedInit()) {
      setStorage(
        StorageAppEnum.DARK,
        import.meta.env.APP_DARK as unknown as string,
        {
          type: 'local',
          isJSON: false,
        }
      );
      appRouteStore.setStaticRoutes(routes);
      if (appUserStore.token) {
        appRouteStore.getAdminRoutes();
        appUserStore.getUserInfo();
        appUserStore.getUserRoles();
      }
      _getMobileAreaCodeList();
    }
    appStore.changeGlobalLoading(false);
  };

  return {
    changeDark,
    isNeedInit,
    init,
  };
};
