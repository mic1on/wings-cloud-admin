import type { IObject } from '@/global';
import { StorageEnum } from '@/enums';
import { setStorage } from '@/utils/storage';
import { getDictAll } from '@/apis/base';

/**
 * @name useDict
 * @description 字典钩子函数
 */

export const useDict = () => {
  // 获取并且保存字典数据
  const getAndSaveDicts = async () => {
    const { data } = await getDictAll();
    let dicts = {};
    data.forEach((item: IObject) => {
      dicts = { [item.key]: item.values, ...dicts };
    });
    setStorage(StorageEnum.DICT, dicts);
    return data;
  };

  return {
    getAndSaveDicts,
  };
};
