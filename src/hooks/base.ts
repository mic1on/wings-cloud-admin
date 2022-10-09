import { setStorage } from '@/utils/wings-storage';
import { StorageAppEnum } from '@/enums/storage';
import { getMobileAreaCodeList } from '@/apis/base';
import { useDark, useToggle } from '@vueuse/core';
import { stores, routes } from '@/core';

/**
 * 基础钩子函数
 * @return routes
 * @return changeDark
 * @return isNeedInit
 * @return init
 * @return apis
 * @return stores
 * @return appStore
 * @return appRouteStore
 * @return appUserStore
 * @return currentLanguage
 * @return changeLanguage
 * @return languages
 */

export default () => {
  // vue-i18n 国际化支持
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

  // 组装 pinia 总线
  const appStore = stores['base'].default();
  const appRouteStore = stores['route'].default();
  const appUserStore = stores['user'].default();

  // api 实例化
  const appInstance = getCurrentInstance();
  const apis = appInstance?.appContext.config.globalProperties.$apis;

  // vueuse 黑暗模式切换支持
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: import.meta.env.APP_STOREAGE_PREFIX + '-' + StorageAppEnum.DARK,
  });
  const changeDark = useToggle(isDark);

  // 获取手机号区号
  const _getMobileAreaCodeList = async () => {
    const { data } = await getMobileAreaCodeList();
    setStorage(StorageAppEnum.MOBILE_PHONE_AREA_CODE, data);
  };

  // 信息初始化支持
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
    routes,
    changeDark,
    isNeedInit,
    init,
    apis,
    stores,
    appStore,
    appRouteStore,
    appUserStore,
    currentLanguage,
    changeLanguage,
    languages: messages.value,
  };
};
