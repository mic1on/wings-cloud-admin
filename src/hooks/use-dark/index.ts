import { useDark as _useDark, useToggle } from '@vueuse/core';
import { StorageEnum } from '../../enums';
import { setStorage } from '../../utils/storage';
import { getMobileAreaCodeList as _getMobileAreaCodeList } from '../../apis/base';

/**
 * @name useDark
 * @description 基于 @vueuse/core 的黑暗模式钩子函数
 * @return changeDark
 * @return isDark
 */
export const useDark = () => {
  const dark = _useDark({
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

  const initDark = () => {
    setStorage(
      StorageEnum.DARK,
      import.meta.env.APP_DARK as unknown as string,
      {
        type: 'local',
        isJSON: false,
      }
    );
  };

  return {
    dark,
    changeDark,
    isDark,
    initDark,
  };
};
