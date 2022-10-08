import type { AppStorageOptions } from '#/app/app-storage.d';
import { isNullOrUndefined } from '@/utils/wings-utils';

/**
 * 判断缓存是会话缓存还是持久缓存
 * @param storageType
 * @return storage
 */
export const storageType = (storageType: string): Storage => {
  return storageType === 'local' ? localStorage : sessionStorage;
};

/**
 * 写入缓存方法
 * @param key
 * @param data
 * @param options
 */
export const setStorage = (
  key: string,
  data: any,
  options?: AppStorageOptions
): void => {
  key = `${import.meta.env.APP_STOREAGE_PREFIX as unknown as string}-${key}`;
  options = {
    type: import.meta.env.APP_STOREAGE_TYPE,
    isTemplate: false,
    isJSON: true,
    ...options,
  };
  storageType(options.type as unknown as string).setItem(
    key,
    options.isTemplate
      ? JSON.stringify({
          user: options.user,
          time: new Date().getTime(),
          data,
          desc: options.desc,
        })
      : options.isJSON
      ? JSON.stringify(data)
      : data
  );
};

/**
 * 读取缓存方法
 * @param key
 * @param options
 * @return data
 */
export const getStorage = (key: string, options?: AppStorageOptions): any => {
  key = `${import.meta.env.APP_STOREAGE_PREFIX as unknown as string}-${key}`;
  options = {
    type: import.meta.env.APP_STOREAGE_TYPE,
    isTemplate: false,
    isJSON: true,
    ...options,
  };
  const data: any | null = storageType(
    options.type as unknown as string
  ).getItem(key);
  if (options.isDelete) {
    storageType(options.type as unknown as string).removeItem(key);
  }
  console.log(key, data);
  return isNullOrUndefined(data)
    ? options.defaultData
      ? options.defaultData
      : null
    : options.isTemplate
    ? data
      ? JSON.parse(data)
      : options.defaultData
    : options.isJSON
    ? JSON.parse(data)
    : data;
};

/**
 * 移除缓存方法
 * @param key
 * @param type
 */
export const removeStorage = (key: string, type?: string): void => {
  key = `${import.meta.env.APP_STOREAGE_PREFIX as unknown as string}-${key}`;
  storageType(type || import.meta.env.APP_STOREAGE_TYPE).removeItem(key);
};
