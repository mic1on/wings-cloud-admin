import type { IObject, SystemSettings } from '@/types/global.d';
import { defineStore } from 'pinia';
import { SettingsValueEnum, StorageEnum } from '@/constants/enums';
import { getStorage, setStorage } from '@/utils/storage';
import { Settings } from '@/constants/settings';

/**
 * @name useSystemStore
 * @description 系统状态管理钩子函数
 * @return loading
 * @return collapse
 * @return settings
 * @return colorScheme
 * @return browserTitle
 * @return language
 * @return isMobile
 * @return mobileMenu
 * @return changeMobile
 * @return updateSettings
 * @return changeLanguage
 * @return changeDarkOrLight
 */
export const useSystemStore = defineStore('system', () => {
  const loading = ref<boolean>(false);

  const collapse = ref<boolean>(false);

  const settings = ref<SystemSettings>(
    getStorage(StorageEnum.SETTINGS) || Settings
  );

  const colorScheme = ref<string>(settings.value.ColorScheme);

  const browserTitle = ref<string>('');

  const language = ref<string>(
    getStorage(StorageEnum.LANGUAGE) || Settings.Language
  );

  const isMobile = ref<boolean>(false);

  const mobileMenu = ref<boolean>(false);

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

  const updateSettings = (data: SystemSettings): void => {
    settings.value = data;
    setStorage(StorageEnum.SETTINGS, data);
  };

  const changeLanguage = (data: IObject): void => {
    language.value = data.alias;
    setStorage(StorageEnum.LANGUAGE, data.alias);
  };

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
