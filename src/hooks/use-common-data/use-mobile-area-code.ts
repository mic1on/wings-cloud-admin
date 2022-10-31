import { IObject } from './../../utils/common/index.d';
import { StorageEnum } from '@/enums';
import { setStorage, getStorage } from '@/utils/storage';
import { getMobileAreaCodeList } from '@/apis/base';

/**
 * @name useMobileAreaCode
 * @description 手机号区号钩子函数
 */

export const useMobileAreaCode = () => {
  const getMobileAreaCodes = async () => {
    let mobileAreaCodes: Array<IObject> =
      getStorage(StorageEnum.MOBILE_PHONE_AREA_CODE) || [];
    if (!mobileAreaCodes || mobileAreaCodes.length === 0) {
      const { data } = await getMobileAreaCodeList();
      setStorage(StorageEnum.MOBILE_PHONE_AREA_CODE, data);
      mobileAreaCodes = data;
    }
    return mobileAreaCodes;
  };
  return {
    getMobileAreaCodes,
  };
};
