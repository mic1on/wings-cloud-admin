import axios from 'axios';
import qs from 'qs';
import { ElNotification } from 'element-plus';
import { i18n } from '@/core/plugins/vue-i18n';
import type { Axios, AxiosResponse } from 'axios';
import type { I18nT, IObject } from '#/interface';
import type { RequestOptions, ResponseData } from '#/app/app-request';
import { RequestHeaderEnum } from '@/enums/request';
import { StorageAppEnum } from '@/enums/storage';
import { getStorage } from '@/utils/wings-storage';
import {
  networkCodeAdaptor,
  apiCodeAdaptor,
  authCodeAdaptor,
} from '@/utils/wings-code-adaptor';

/**
 * 定义全局 Vue-i18n 插件，在非 <script> 中使用 t
 */
const { t } = i18n.global;
const _t: I18nT = t;

/**
 * 初始化 Axios 请求实例
 * @param options
 * @return _axios
 */
export const wingsRequest = <T>(
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
 * 添加 Axios 请求拦截器
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
      config[RequestHeaderEnum.HEADER_TOKEN] = getStorage(StorageAppEnum.TOKEN);
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
 * 添加 Axios 响应拦截器
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
 * 封装 GET 通用请求
 * @param url
 * @param params
 * @param options
 * @return wingsRequest
 */
export const GET = <T>(
  url: string,
  params?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return wingsRequest({
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
 * 封装 POST 通用请求
 * @param url
 * @param data
 * @param options
 * @return wingsRequest
 */
export const POST = <T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return wingsRequest({
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
 * 封装 PUT 通用请求
 * @param url
 * @param data
 * @param options
 * @return wingsRequest
 */
export const PUT = <T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return wingsRequest({
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
 * 封装 DELETE 通用请求
 * @param url
 * @param data
 * @param options
 * @return wingsRequest
 */
export const DELETE = <T>(
  url: string,
  params?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return wingsRequest({
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
 * 封装 UPLOAD 通用上传文件方法
 * @param url
 * @param data
 * @param options
 * @return wingsRequest
 */
export const UPLOAD = <T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return wingsRequest({
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
 * 封装 DOWNLOAD 通用下载文件方法
 * @param url
 * @param data
 * @param options
 * @return wingsRequest
 */
export const DOWNLOAD = <T>(
  url: string,
  params?: IObject,
  filename?: string,
  options?: RequestOptions
): Promise<any | ResponseData<T> | undefined> => {
  return wingsRequest({
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
