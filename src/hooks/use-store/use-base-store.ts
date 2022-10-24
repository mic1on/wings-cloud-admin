import type { IObject } from '../../global';
import { defineStore } from 'pinia';
import { StorageEnum } from '../../enums';
import { getStorage, setStorage } from '../../utils/storage';
import {
  ToolbarSettings,
  ThemeSettings,
  Layout,
  ElementPlus,
} from '../../settings';

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
  const loading = ref<boolean>(false);

  // 是否只保持一个子菜单的展开
  const uniqueOpened = ref<boolean>(
    getStorage(StorageEnum.UNIQUE_OPENED) || true
  );

  // 是否水平折叠收起菜单
  const collapse = ref<boolean>(getStorage(StorageEnum.COLLAPSE) || false);

  // 管理系统工具栏配置
  const toolbarSettings = ref<IObject>(
    getStorage(StorageEnum.TOOLBAR_SETTINGS) || ToolbarSettings
  );

  // 应用主题配置
  const themeSettings = ref<IObject>(
    getStorage(StorageEnum.THEME_SETTINGS) || ThemeSettings
  );

  // 管理系统是否显示底栏
  const showFooter = ref<boolean>(getStorage(StorageEnum.SHOW_FOOTER) || false);

  // 管理系统是否显示 tab 标签
  const showTab = ref<boolean>(getStorage(StorageEnum.SHOW_TAB) || true);

  // 管理系统布局模式
  const layout = ref<string>(getStorage(StorageEnum.LAYOUT) || Layout);

  // Element Plus 组件库组件尺寸
  const elementPlusSize = ref<string>(
    getStorage(StorageEnum.ELEMENT_PLUS_SIZE) || ElementPlus.size
  );

  // 切换语言环境
  const changeLanguage = (data: IObject): void => {
    language.value = data.alias;
    setStorage(StorageEnum.LANGUAGE, data.alias);
  };

  // 切换应用 Loading 状态
  const changeAppLoading = (status: boolean): void => {
    loading.value = status;
  };

  return {
    language,
    loading,
    uniqueOpened,
    collapse,
    toolbarSettings,
    themeSettings,
    layout,
    elementPlusSize,
    showFooter,
    showTab,
    changeLanguage,
    changeAppLoading,
  };
});
