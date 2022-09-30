import useAppStore from '@/hooks/app-store';
import { routes } from '@/plugins/vue-router';
import { setStorage } from '@/utils/wings-storage';
import { StorageAppEnum } from '@/enums/storage';
import { getMobileAreaCodeList } from '@/apis/base';
import { useDark, useToggle } from '@vueuse/core';

/**
 * 导出系统应用级钩子函数
 */
export default () => {
  const appStore = useAppStore();

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
    appStore.app.changeGlobalLoading(true);
    if (await isNeedInit()) {
      setStorage(
        StorageAppEnum.DARK,
        import.meta.env.APP_DARK as unknown as string,
        {
          type: 'local',
          isJSON: false,
        }
      );
      appStore.route.setStaticRoutes(routes);
      if (appStore.user.token) {
        appStore.route.getAdminRoutes();
        appStore.user.getUserInfo();
        appStore.user.getUserRoles();
      }
      _getMobileAreaCodeList();
    }
    appStore.app.changeGlobalLoading(false);
  };

  return {
    changeDark,
    isNeedInit,
    init,
  };
};
