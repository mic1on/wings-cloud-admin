import type { IObject } from '../../global';
import { defineStore } from 'pinia';
import { StorageEnum } from '../../enums';
import { getStorage, setStorage } from '../../utils/storage';
import { ToolbarSettings, ThemeSettings } from '../../settings';

/**
 * @name useBaseStore
 * @description 基础状态管理钩子函数
 */
export const useBaseStore = defineStore('base', () => {
  // 当前语言环境
  const language = ref<string>(
    getStorage(StorageEnum.LANGUAGE) || process.env.APP_DEFAULT_LANGUAGE
  );

  // 应用 Loading
  const appLoading = ref<boolean>(true);

  // 是否只保持一个子菜单的展开
  const uniqueOpened = ref<boolean>(
    getStorage(StorageEnum.UNIQUE_OPENED) || true
  );

  // 是否水平折叠收起菜单
  const collapse = ref<boolean>(getStorage(StorageEnum.COLLAPSE) || false);

  // 管理系统工具栏配置
  const toolbarSettings = ref<IObject>(
    getStorage(StorageEnum.TOOLBAR_OPTIONS) || ToolbarSettings
  );

  // 应用主题配置
  const appThemeSettings = ref<IObject>(
    getStorage(StorageEnum.TOOLBAR_OPTIONS) || ThemeSettings
  );

  // 管理系统是否显示底栏
  const adminShowFooter = ref<boolean>(
    getStorage(StorageEnum.SHOW_FOOTER) || false
  );

  // 切换语言环境
  const changeLanguage = (data: IObject): void => {
    language.value = data.alias;
    setStorage(StorageEnum.LANGUAGE, data.alias);
  };

  // 切换应用 Loading 状态
  const changeAppLoading = (status: boolean): void => {
    appLoading.value = status;
  };

  // 切换折叠收起菜单状态
  const changeCollapse = (): void => {
    collapse.value = !collapse.value;
  };

  return {
    language,
    appLoading,
    uniqueOpened,
    collapse,
    toolbarSettings,
    appThemeSettings,
    adminShowFooter,
    changeLanguage,
    changeAppLoading,
    changeCollapse,
  };
});
