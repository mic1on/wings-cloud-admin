import { useDark, useToggle } from '@vueuse/core';
import { StorageEnum } from '@/enums';
import { setStorage } from '@/utils/storage';
import { autoMergeRoleRoutes } from '@/utils/auto';
import { routes } from '@/plugins/vue-router';
import useBaseStore from '@/plugins/pinia/modules/base';
import useRouteStore from '@/plugins/pinia/modules/route';
import useUserStore from '@/plugins/pinia/modules/user';
import { getMobileAreaCodeList as _getMobileAreaCodeList } from '@/apis/base';

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
  const changeDark = useToggle(isDark);

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
        await userStore.getUserInfo();
        await userStore.getUserRoles();
        await routeStore.getRoleRoutes();
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
