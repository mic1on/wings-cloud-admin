import { useDark, useToggle } from '@vueuse/core';
import { StorageEnum } from '../../enums';
import { setStorage } from '../../utils/storage';
import { routes } from '../../plugins/vue-router';
import { useBaseStore } from '../../plugins/pinia/modules/base';
import { useRouteStore } from '../../plugins/pinia/modules/route';
import { useUserStore } from '../../plugins/pinia/modules/user';
import { getMobileAreaCodeList as _getMobileAreaCodeList } from '../../apis/base';

/**
 * @name useApp
 * @description 应用初始化钩子函数
 * @return changeDark
 * @return isDark
 * @return isNeedInit
 * @return init
 */
export const useApp = () => {
  const baseStore = useBaseStore();
  const routeStore = useRouteStore();

  const dark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: import.meta.env.APP_STOREAGE_PREFIX + '-' + StorageEnum.DARK,
  });
  const changeDark = useToggle(dark);
  const isDark = () => {
    return document.getElementsByTagName('html')[0].getAttribute('class') ==
      'dark'
      ? true
      : false;
  };

  const getMobileAreaCodeList = async () => {
    const { data } = await _getMobileAreaCodeList();
    setStorage(StorageEnum.MOBILE_PHONE_AREA_CODE, data);
  };

  const isNeedInit = () => {
    return new Promise((resolve) => {
      resolve(true);
    });
  };

  // TODO 后期移除 init 方法
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
      getMobileAreaCodeList();
    }
    baseStore.changeGlobalLoading(false);
  };

  return {
    changeDark,
    isDark,
    isNeedInit,
    init,
  };
};
