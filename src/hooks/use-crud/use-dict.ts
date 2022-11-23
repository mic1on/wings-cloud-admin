import type { IObject } from '@/types/global.d';
import { StorageEnum } from '@/constants/enums';
import { setStorage } from '@/utils/storage';
import { getDictAll as _getDictAll } from '@/apis/system/dict';

/**
 * @name useDict
 * @description 字典钩子函数
 * @return getDictAll
 */

export const useDict = () => {
  const getDictAll = async () => {
    const { data } = await _getDictAll();
    let dicts = {};
    data.forEach((item: IObject) => {
      dicts = { [item.key]: item.values, ...dicts };
    });
    setStorage(StorageEnum.DICT, dicts);
    return data;
  };

  return {
    getDictAll,
  };
};
