import type { ComputedRef } from 'vue';
import type { IObject } from '@/types/global';
import { StorageEnum } from '@/constants/enums';
import { getStorage, setStorage } from '@/utils/storage';
import { getDictionayAll as _getDictionayAll } from '@/apis/system/dictionary';

/**
 * @name useDictionary
 * @description 字典钩子函数
 * @return getDictionaryAll 查询字典数据
 * @return getDictionaryData 查询全部字典，基于缓存
 * @return getDictionary 单项字典取值
 */

export const useDictionary = () => {
  const getDictionaryAll = async () => {
    const { data } = await _getDictionayAll();
    let dictionaries = {};
    data.forEach((item: IObject) => {
      dictionaries = { [item.key]: item.values, ...dictionaries };
    });
    setStorage(StorageEnum.DICTIONARY, dictionaries);
    return data;
  };

  const getDictionaryData = (key: string): ComputedRef<any> => {
    return computed(() => {
      const data = getStorage(StorageEnum.DICTIONARY)[key];
      if (!data) {
        getDictionaryAll();
      }
      return data ? data : [];
    });
  };

  const getDictionary = (key: string, value: string, getKey?: string) => {
    if (
      key === undefined ||
      key === null ||
      value === undefined ||
      value === null
    )
      return;
    getKey = getKey || 'label';
    const dictionaryData = getDictionaryData(key).value;
    if (dictionaryData && dictionaryData.length > 0) {
      const data = dictionaryData.find((item: IObject) => item.value === value)[
        getKey
      ];
      return data ? data : value;
    } else {
      return value;
    }
  };

  return {
    getDictionaryAll,
    getDictionaryData,
    getDictionary,
  };
};
