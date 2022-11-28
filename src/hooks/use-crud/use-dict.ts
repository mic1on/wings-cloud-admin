import type { ComputedRef } from 'vue';
import type { IObject } from '@/types/global';
import { StorageEnum } from '@/constants/enums';
import { getStorage, setStorage } from '@/utils/storage';
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

  const getDictData = (key: string): ComputedRef<any> => {
    return computed(() => {
      const data = getStorage(StorageEnum.DICT)[key];
      return data ? data : [];
    });
  };

  const getDict = (key: string, value: string, getKey?: string) => {
    if (
      key === undefined ||
      key === null ||
      value === undefined ||
      value === null
    )
      return;
    getKey = getKey || 'label';
    const dictData = getDictData(key).value;
    if (dictData && dictData.length > 0) {
      const data = dictData.find((item: IObject) => item.value === value)[
        getKey
      ];
      return data ? data : value;
    } else {
      return value;
    }
  };

  return {
    getDictAll,
    getDictData,
    getDict,
  };
};
