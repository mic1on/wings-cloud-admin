import type { IObject, IFunction } from '#/interface.d';

/**
 * 判断是否是 null 或 undefined
 * @param value
 * @return null | undefined
 */
export const isNullOrUndefined = (value: unknown): boolean => {
  return value === null || typeof value === 'undefined';
};

/**
 * 获取 Object 上某键的值
 * @param record {}
 * @param key 'a.b.c'
 * @param defaultValue
 * @return record | defaultValue
 */
export const getValueByKeys = (
  record: IObject = {},
  key: string,
  defaultValue?: unknown
): any => {
  const keys = key.split('.');
  for (let i = 0; i < keys.length; i++) {
    record = record[keys[i]] || (i === keys.length - 1 ? defaultValue : {});
  }
  return record || defaultValue;
};

/**
 * 数组转对象
 * @param data
 * @param key
 * @param render
 * @return obj
 */
export const arrayToObject = (
  data: any[] = [],
  key: string | IFunction,
  render?: IFunction
): IObject => {
  const obj: IObject = {};
  data.forEach((item) => {
    obj[typeof key === 'function' ? key(item) : item[key]] = render
      ? render(item)
      : item;
  });
  return obj;
};

/**
 * 拦截 GET 的入参和 POST 的 Body
 * @param url
 * @return value
 */
export const interceptJointData = (data: string): IObject => {
  let value: IObject = {};
  if (data.indexOf('?') != -1) {
    data = data.split('?')[1];
  }
  data.split('&').forEach((item: string) => {
    value = { ...value, [item.split('=')[0]]: item.split('=')[1] };
  });
  return value;
};
