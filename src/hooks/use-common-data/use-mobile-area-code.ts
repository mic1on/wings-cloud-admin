import { IObject } from './../../utils/common/index.d';
import { StorageEnum } from '@/enums';
import { setStorage } from '@/utils/storage';
import { getMobileAreaCodeList } from '@/apis/base';

/**
 * @name useMobileAreaCode
 * @description 手机号区号钩子函数
 */

export const useMobileAreaCode = () => {
  const getMobileAreaCodes = async () => {
    const { data } = await getMobileAreaCodeList();
    setStorage(StorageEnum.MOBILE_PHONE_AREA_CODE, data);
    return data;
  };
  return {
    getMobileAreaCodes,
  };
};
