import type { AppStorageOptions } from './index.d';
import { isNullOrUndefined } from '../common';
import { StorageEnum } from '../../enums';

/**
 * @name storageType
 * @description 返回缓存的类型
 * @param type
 * @return storage
 */
export const storageType = (type: string): Storage => {
  return type === 'local' ? localStorage : sessionStorage;
};

/**
 * @name setStorage
 * @description 基于 storage 的写入缓存方法
 * @param key
 * @param data
 * @param options
 */
export const setStorage = (
  key: string,
  data: any,
  options?: AppStorageOptions
): void => {
  key = `${StorageEnum.KEY}-${key}`;
  options = {
    type: 'session',
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
 * @name getStorage
 * @description 基于 storage 的读取缓存方法
 * @param key
 * @param options
 * @return data
 */
export const getStorage = (key: string, options?: AppStorageOptions): any => {
  key = `${StorageEnum.KEY}-${key}`;
  options = {
    type: 'session',
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
 * @name removeStorage
 * @description 基于 storage 的移除缓存方法
 * @param key
 * @param type
 */
export const removeStorage = (key: string, type?: string): void => {
  key = `${StorageEnum.KEY}-${key}`;
  storageType(type || 'session').removeItem(key);
};
