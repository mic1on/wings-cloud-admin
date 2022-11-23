import { StorageEnum } from '@/constants/enums';
import { setStorage } from '@/utils/storage';
import { getMobileCodes } from '@/apis/base';

/**
 * @name useMobileAreaCode
 * @description 手机号区号钩子函数
 */

export const useMobileAreaCode = () => {
  const getMobileAreaCodes = async () => {
    const { data } = await getMobileCodes();
    setStorage(StorageEnum.MOBILE_PHONE_AREA_CODE, data);
    return data;
  };
  return {
    getMobileAreaCodes,
  };
};
