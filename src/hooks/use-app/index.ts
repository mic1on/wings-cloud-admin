import { setStorage } from '@/utils/storage';
import { StorageEnum } from '@/enums';
import { routes } from '@/plugins/vue-router';
import { getMobileAreaCodeList as _getMobileAreaCodeList } from '@/apis/base';
import { useDark, useToggle } from '@vueuse/core';
import useBaseStore from '@/plugins/pinia/modules/base';
import useRouteStore from '@/plugins/pinia/modules/route';
import useUserStore from '@/plugins/pinia/modules/user';

/**
 * @name useApp
 * @description 应用初始化钩子函数
 * @return changeDark
 * @return isNeedInit
 * @return init
 */
export const useApp = () => {
  const baseStore = useBaseStore();
  const routeStore = useRouteStore();
  const userStore = useUserStore();

  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: import.meta.env.APP_STOREAGE_PREFIX + '-' + StorageEnum.DARK,
  });
  const changeDark: any = useToggle(isDark);

  const getMobileAreaCodeList = async () => {
    const { data } = await _getMobileAreaCodeList();
    setStorage(StorageEnum.MOBILE_PHONE_AREA_CODE, data);
  };

  const isNeedInit = () => {
    return new Promise((resolve) => {
      resolve(true);
    });
  };

  const init = async () => {
    baseStore.changeGlobalLoading(true);
    if (await isNeedInit()) {
      setStorage(
        StorageEnum.DARK,
        import.meta.env.APP_DARK as unknown as string,
        {
          type: 'local',
          isJSON: false,
        }
      );
      routeStore.setStaticRoutes(routes);
      if (userStore.token) {
        routeStore.getAdminRoutes();
        userStore.getUserInfo();
        userStore.getUserRoles();
      }
      getMobileAreaCodeList();
    }
    baseStore.changeGlobalLoading(false);
  };

  return {
    changeDark,
    isNeedInit,
    init,
  };
};
