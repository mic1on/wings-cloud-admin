import type { Callback, IObject } from '../../global.d';
import type { I18nT } from '../../plugins/vue-i18n/index.d';

/**
 * @name networkCodeAdaptor
 * @description 网络状态码适配器
 * @param code
 * @param t
 * @param callback
 * @return code
 */
export const networkCodeAdaptor = (
  code: number,
  t: I18nT,
  callback?: Callback
): any => {
  let message = '';
  if (code) {
    switch (code) {
      case 200:
        message = '';
        break;
      case 400:
        message = t('common.request.wrong');
        break;
      case 401:
        message = t('common.authentication.not');
        break;
      case 403:
        message = t('common.authentication.denied');
        break;
      case 404:
        message = t('common.request.resource');
        break;
      case 405:
        message = t('common.request.method');
        break;
      case 408:
        message = t('common.request.timeout');
        break;
      case 500:
        message = t('common.server.error');
        break;
      case 501:
        message = t('common.network.implemented');
        break;
      case 502:
        message = t('common.network.error');
        break;
      case 503:
        message = t('common.server.down');
        break;
      case 504:
        message = t('common.network.timeout');
        break;
      case 505:
        message = t('common.request.http');
        break;
      default:
        message = t('common.unkown.code', { code });
    }
  }
  if (code && message && callback) {
    callback({ code, message });
  }
  return code;
};

/**
 * @name apiCodeAdaptor
 * @description 服务端接口状态码适配器
 * @param code
 * @param t
 * @param callback
 * @return code
 */
export const apiCodeAdaptor = (
  data: IObject,
  t: I18nT,
  callback?: Callback
): any => {
  let message = '';
  if (data.code) {
    switch (data.code) {
      case 0:
        message = '';
        break;
      case 500:
        message = t('common.unkown.error', { message: data.msg });
        break;
      case 10001:
        message = t('common.api.noParams');
        break;
    }
  }
  if (data.code && message && callback) {
    callback({ code: data.code, message });
  }
  return data.code;
};

/**
 * @name authCodeAdaptor
 * @description 鉴权状态码适配器
 * @param data
 * @param t
 * @param callback
 * @return code
 */
export const authCodeAdaptor = (
  data: IObject,
  t: I18nT,
  callback?: Callback
): any => {
  let message = '';
  if (data.code) {
    switch (data.code) {
      case 10031:
        message = t('common.authentication.overtime');
        break;
      case 10032:
        message = t('common.authentication.longer');
        break;
      case 10033:
        message = t('common.authentication.bind');
        break;
      case 10034:
        message = t('common.authentication.signup');
        break;
      case 10035:
        message = t('common.authentication.inconformity');
        break;
      case 10036:
        message = t('common.authentication.noEmployee');
        break;
      case 10037:
        message = t('common.authentication.failure');
        break;
      case 10038:
        message = t('common.authentication.notFound');
        break;
      case 10039:
        message = t('common.authentication.password');
        break;
    }
  }
  if (data.code && message && callback) {
    callback({ code: data.code, message });
  }
  return data.code;
};
