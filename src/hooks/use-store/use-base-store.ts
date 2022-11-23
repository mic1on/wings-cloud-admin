import type { IObject, SystemSettings } from '@/global';
import { defineStore } from 'pinia';
import { SettingsValueEnum, StorageEnum } from '@/constants/enums';
import { getStorage, setStorage } from '@/utils/storage';
import { Settings } from '@/constants/settings';

/**
 * @name useBaseStore
 * @description 基础状态管理钩子函数
 */
export const useBaseStore = defineStore('base', () => {
  // 应用加载状态
  const loading = ref<boolean>(false);

  // 收起菜单状态
  const collapse = ref<boolean>(false);

  // 系统设置
  const settings = ref<SystemSettings>(
    getStorage(StorageEnum.SETTINGS) || Settings
  );

  // 当前配色方案
  const colorScheme = ref<string>(settings.value.ColorScheme);

  // 动态浏览器标题
  const browserTitle = ref<string>('');

  // 当前语言环境
  const language = ref<string>(
    getStorage(StorageEnum.LANGUAGE) || Settings.Language
  );

  // 是否处于移动端
  const isMobile = ref<boolean>(false);

  // 移动端菜单打开状态
  const mobileMenu = ref<boolean>(false);

  // 切换移动端
  const changeMobile = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      isMobile.value = true;
      collapse.value = false;
    } else {
      isMobile.value = document.documentElement.clientWidth < 992;
    }
    if (!isMobile.value && mobileMenu.value) {
      mobileMenu.value = false;
    }
  };

  // 修改系统设置
  const updateSettings = (data: SystemSettings): void => {
    settings.value = data;
    setStorage(StorageEnum.SETTINGS, data);
  };

  // 切换语言环境
  const changeLanguage = (data: IObject): void => {
    language.value = data.alias;
    setStorage(StorageEnum.LANGUAGE, data.alias);
  };

  // 切换黑暗模式或者明亮模式
  const changeDarkOrLight = (value: boolean) => {
    document.documentElement.classList.remove(colorScheme.value);
    if (value) {
      document.documentElement.classList.add(
        SettingsValueEnum.COLOR_SCHEME_DARK
      );
      colorScheme.value = SettingsValueEnum.COLOR_SCHEME_DARK;
    } else {
      document.documentElement.classList.add(
        SettingsValueEnum.COLOR_SCHEME_LIGHT
      );
      colorScheme.value = SettingsValueEnum.COLOR_SCHEME_LIGHT;
    }
  };

  return {
    loading,
    collapse,
    settings,
    colorScheme,
    browserTitle,
    language,
    isMobile,
    mobileMenu,
    changeMobile,
    updateSettings,
    changeLanguage,
    changeDarkOrLight,
  };
});
