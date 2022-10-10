import type { Axios, AxiosResponse } from 'axios';
import type { I18nT, IObject } from '#/interface';
import type { RequestOptions, ResponseData } from '#/app/app-request';
import axios from 'axios';
import qs from 'qs';
import { ElNotification } from 'element-plus';
import { getStorage } from './storage';
import {
  networkCodeAdaptor,
  apiCodeAdaptor,
  authCodeAdaptor,
} from './code-adaptor';
import { i18n } from '@/plugins';
import { RequestHeaderEnum, StorageEnum } from '@/enums';

const { t } = i18n.global;
const _t: I18nT = t;

/**
 * @name request
 * @param options
 * @return _axios
 */
export const request = <T>(
  options: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  const _axios: Axios = axios.create();
  addInterceptorsRequest(_axios, options);
  addInterceptorsResponse(_axios, options);
  return new Promise((resolve) => {
    _axios
      .request({
        baseURL: options.baseURL || import.meta.env.APP_REQUEST_URL,
        url: options.url,
        method: options.method,
        timeout: options.timeout || import.meta.env.APP_REQUEST_TIMEOUT,
        headers: {
          'Content-Type': RequestHeaderEnum.CONTENT_TYPE_JSON,
          ...options.headers,
        },
        params: options.params,
        data: options.data,
      })
      .then((res) => {
        resolve(res as unknown as ResponseData<T>);
      })
      .catch((error) => {
        resolve({
          code: error.response.status,
          msg: error.response.statusText,
          data: error.data,
        } as ResponseData<T>);
      });
  });
};

/**
 * @name addInterceptorsRequest
 * @param axios
 * @param options
 * @returns
 */
export const addInterceptorsRequest = (
  axios: Axios,
  options: RequestOptions
): any => {
  return axios.interceptors.request.use((config: IObject) => {
    if (options.isTime) {
      config.params[RequestHeaderEnum.HEADER_TIME] = new Date().getTime();
    }
    if (options.isToken) {
      config[RequestHeaderEnum.HEADER_TOKEN] = getStorage(StorageEnum.TOKEN);
    }
    if (options.headers) {
      config.headers = { ...config.headers, ...options.headers };
    }
    if (
      Object.values(config.headers).includes(
        RequestHeaderEnum.CONTENT_TYPE_BODY
      )
    ) {
      config.data = qs.stringify(config.data);
    }
    return config;
  });
};

/**
 * @name addInterceptorsResponse
 * @param axios
 * @param options
 * @returns
 */
export const addInterceptorsResponse = <T>(
  axios: Axios,
  options: RequestOptions
): any => {
  return axios.interceptors.response.use((response: AxiosResponse) => {
    if (options.networkCodeAdaptor) {
      networkCodeAdaptor(response.status, _t, ({ message }) => {
        ElNotification({
          title: _t('base.network.error'),
          message,
          type: 'error',
        });
      });
    }
    if (options.apiCodeAdaptor) {
      apiCodeAdaptor(response.data, _t, ({ message }) => {
        ElNotification({
          title: _t('base.api.error'),
          message,
          type: 'error',
        });
      });
    }
    if (options.authCodeAdaptor) {
      authCodeAdaptor(response.data, _t, ({ message }) => {
        ElNotification({
          title: _t('base.authentication.error'),
          message,
          type: 'error',
        });
      });
    }
    return response.data as ResponseData<T>;
  });
};

/**
 * @name GET
 * @param url
 * @param params
 * @param options
 * @return request
 */
export const GET = <T>(
  url: string,
  params?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return request({
    url,
    method: 'GET',
    params,
    headers: {
      'Content-Type': RequestHeaderEnum.CONTENT_TYPE_JSON,
      ...options?.headers,
    },
    ...options,
  });
};

/**
 * @name POST
 * @param url
 * @param data
 * @param options
 * @return request
 */
export const POST = <T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return request({
    url,
    method: 'POST',
    data,
    headers: {
      'Content-Type': RequestHeaderEnum.CONTENT_TYPE_BODY,
      ...options?.headers,
    },
    ...options,
  });
};

/**
 * @name PUT
 * @param url
 * @param data
 * @param options
 * @return request
 */
export const PUT = <T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return request({
    url,
    method: 'PUT',
    data,
    headers: {
      'Content-Type': RequestHeaderEnum.CONTENT_TYPE_BODY,
      ...options?.headers,
    },
    ...options,
  });
};

/**
 * @name DELETE
 * @param url
 * @param data
 * @param options
 * @return request
 */
export const DELETE = <T>(
  url: string,
  params?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return request({
    url,
    method: 'DELETE',
    params,
    headers: {
      'Content-Type': RequestHeaderEnum.CONTENT_TYPE_BODY,
      ...options?.headers,
    },
    ...options,
  });
};

/**
 * @name UPLOAD
 * @param url
 * @param data
 * @param options
 * @return request
 */
export const UPLOAD = <T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return request({
    url,
    method: 'POST',
    data,
    headers: {
      'Content-Type': RequestHeaderEnum.CONTENT_TYPE_FORMDATA,
      ...options?.headers,
    },
    ...options,
  });
};

/**
 * @name DOWNLOAD
 * @param url
 * @param data
 * @param options
 * @return request
 */
export const DOWNLOAD = <T>(
  url: string,
  params?: IObject,
  filename?: string,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return request({
    url,
    method: 'GET',
    params,
    headers: {
      'Content-Type': RequestHeaderEnum.CONTENT_TYPE_JSON,
      ...options?.headers,
    },
    responseType: 'blob',
    ...options,
  });
};
