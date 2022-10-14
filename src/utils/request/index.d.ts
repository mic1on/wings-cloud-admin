export interface RequestOptions {
  baseURL?: string;
  url: string;
  method: Method;
  isToken?: boolean;
  isTime?: boolean;
  params?: any;
  data?: any;
  timeout?: number;
  responseType?: any;
  headers?: IObject;
  networkCodeAdaptor?: boolean;
  apiCodeAdaptor?: boolean;
  authCodeAdaptor?: boolean;
}

export interface ResponseData<T = any | null> {
  code: number;
  msg: string;
  data: T;
}
