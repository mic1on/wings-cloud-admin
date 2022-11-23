import { StorageEnum } from '@/constants/enums';
import { setStorage } from '@/utils/storage';
import { getMobileCodes as _getMobileCodes } from '@/apis/base';

/**
 * @name useMobileCodes
 * @description 手机号区号钩子函数
 * @return getMobileCodes
 */

export const useMobileCodes = () => {
  const getMobileCodes = async () => {
    const { data } = await _getMobileCodes();
    setStorage(StorageEnum.MOBILE_PHONE_AREA_CODE, data);
    return data;
  };
  return {
    getMobileCodes,
  };
};
