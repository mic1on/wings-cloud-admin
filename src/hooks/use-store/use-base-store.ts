import type { IObject, DefaultSettingsTypes } from '../../global';
import { defineStore } from 'pinia';
import { StorageEnum } from '../../enums';
import { getStorage, setStorage } from '../../utils/storage';
import { DefaultSettings } from '../../settings';

/**
 * @name useBaseStore
 * @description 基础状态管理钩子函数
 */
export const useBaseStore = defineStore('base', () => {
  // 应用加载状态
  const loading = ref<boolean>(false);

  // 收起菜单状态
  const collapse = ref<boolean>(getStorage(StorageEnum.COLLAPSE) || false);

  // 系统设置
  const settings = ref<DefaultSettingsTypes>(
    getStorage(StorageEnum.SETTINGS) || DefaultSettings
  );

  // 动态浏览器标题
  const browserTitle = ref<string>('');

  // 当前语言环境
  const language = ref<string>(
    getStorage(StorageEnum.LANGUAGE) || DefaultSettings.Language
  );

  // 修改系统设置
  const updateSettings = (data: DefaultSettingsTypes): void => {
    settings.value = data;
    setStorage(StorageEnum.SETTINGS, data);
  };

  // 切换语言环境
  const changeLanguage = (data: IObject): void => {
    language.value = data.alias;
    setStorage(StorageEnum.LANGUAGE, data.alias);
  };

  return {
    loading,
    collapse,
    settings,
    browserTitle,
    language,
    updateSettings,
    changeLanguage,
  };
});
