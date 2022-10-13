export interface IObject<T = any> {
  [key: string]: T;
}

type I18nT = (key: string, params?: IObject | Array<string>) => string;

/**
 * 导出 app-request 请求配置项字段类型
 */
export interface RequestOptions {
  /**
   * 请求地址
   */
  baseURL?: string;

  /**
   * 接口地址
   */
  url: string;

  /**
   * 请求类型
   */
  method: Method;

  /**
   * 是否需要在请求头加入用户凭证
   */
  isToken?: boolean;

  /**
   * 是否需要在请求头加入时间戳
   */
  isTime?: boolean;

  /**
   * 入参
   */
  params?: any;

  /**
   * 数据
   */
  data?: any;

  /**
   * 超时时间
   */
  timeout?: number;

  /**
   * 响应类型
   */
  responseType?: any;

  /**
   * 自定义请求头
   */
  headers?: IObject;

  /**
   * 是否需要网络状态码适配器
   */
  networkCodeAdaptor?: boolean;

  /**
   * 是否需要接口状态码适配器
   */
  apiCodeAdaptor?: boolean;

  /**
   * 是否需要鉴权状态码适配器
   */
  authCodeAdaptor?: boolean;
}

/**
 * The response data
 */
export interface ResponseData<T = any | null> {
  /**
   * The status code
   */
  code: number;

  /**
   * The message
   */
  msg: string;

  /**
   * Data
   */
  data: T;
}
