import type { IObject } from '#/interface.d';
import type { RouteRecordRaw } from 'vue-router';
import { setStorage } from '@/utils/wings-storage';
import { autoImportPiniaStore, autoImportRoutes } from '@/utils/wings-auto';
import { StorageAppEnum } from '@/enums/storage';
import { getMobileAreaCodeList } from '@/apis/base';
import { useDark, useToggle } from '@vueuse/core';

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

// 自动化导入 store 文件
const stores: IObject = autoImportPiniaStore(
  import.meta.glob('@/store/**/*.ts', {
    eager: true,
  })
);

export default () => {
  // 静态路由
  const routes: RouteRecordRaw[] = autoImportRoutes(
    import.meta.glob('@/router/**/*.ts', {
      import: 'default',
      eager: true,
    })
  );

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

  // vue-i18n 国际化支持
  const { messages, locale } = useI18n();
  const currentLanguage = computed(() => {
    return locale.value;
  });
  const changeLanguage = (
    value: string | number | Record<string, any> | undefined
  ) => {
    locale.value = value as string;
    appStore.app.changeLanguage({
      alias: value,
      name: messages.value[value as string].name,
    });
    location.reload();
  };

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
