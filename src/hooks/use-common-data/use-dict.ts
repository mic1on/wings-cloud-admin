import { StorageEnum } from '@/enums';
import { setStorage } from '@/utils/storage';
import { getDictAll as _getDictAll } from '@/apis/admin/dict';

/**
 * @name useDict
 * @description 字典钩子函数
 */

export const useDict = () => {
  const getDictAll = async () => {
    const { data } = await _getDictAll();
    setStorage(StorageEnum.DICT, data);
    return data;
  };
  return {
    getDictAll,
  };
};
