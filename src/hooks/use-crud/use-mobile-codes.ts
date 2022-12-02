import { StorageEnum } from '@/constants/enums';
import { setStorage } from '@/utils/storage';
import { getMobileCodes as _getMobileCodes } from '@/apis/common/mobile';

/**
 * @name useMobileCodes
 * @description 手机号区号钩子函数
 * @return getMobileCodes 获取手机号区号列表
 */

export const useMobileCodes = () => {
  const getMobileCodes = async () => {
    const { data } = await _getMobileCodes();
    setStorage(StorageEnum.MOBILE_AREA_CODE, data);
    return data;
  };
  return {
    getMobileCodes,
  };
};
