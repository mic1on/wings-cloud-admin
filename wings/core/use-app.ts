import { setStorage } from './storage';
import { StorageEnum } from './enums';
import { stores } from './plugins/pinia';
import { routes } from './plugins/vue-router';
import { getMobileAreaCodeList as _getMobileAreaCodeList } from '@/apis/base';
import { useDark, useToggle } from '@vueuse/core';

/**
 * Whole-office status management bus.
 */
export const useWingsStore = () => {
  const appStore = stores['base'].default();
  const appRouteStore = stores['route'].default();
  const appUserStore = stores['user'].default();

  return {
    appStore,
    appRouteStore,
    appUserStore,
  };
};

/**
 * Internationalize multilingual hook functions.
 */
export const useWingsLanguage = () => {
  const { appStore } = useWingsStore();

  const { messages, locale } = useI18n();

  const currentLanguage = computed(() => {
    return locale.value;
  });

  const changeLanguage = (
    value: string | number | Record<string, any> | undefined
  ) => {
    locale.value = value as string;
    appStore.changeLanguage({
      alias: value,
      name: messages.value[value as string].name,
    });
    location.reload();
  };

  return {
    currentLanguage,
    changeLanguage,
    languages: messages.value,
  };
};

/**
 * Application initializes the associated hook function.
 */
export const useWingsApp = () => {
  const { appStore, appRouteStore, appUserStore } = useWingsStore();

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
    appStore.changeGlobalLoading(true);
    if (await isNeedInit()) {
      setStorage(
        StorageEnum.DARK,
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
      getMobileAreaCodeList();
    }
    appStore.changeGlobalLoading(false);
  };

  return {
    changeDark,
    isNeedInit,
    init,
  };
};
