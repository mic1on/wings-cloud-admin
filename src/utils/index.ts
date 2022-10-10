import {
  autoImportRoutes,
  autoImportApis,
  autoImportPiniaStore,
  autoImportLanguages,
  autoImportComponents,
} from './wings/auto-import';
import {
  componentAddInstall,
  pluginAddRegister,
  componentAddPath,
  mountApis,
} from './wings/auto-register';
import {
  request,
  addInterceptorsRequest,
  addInterceptorsResponse,
  GET,
  POST,
  PUT,
  DELETE,
  UPLOAD,
  DOWNLOAD,
} from './wings/request';
import {
  storageType,
  setStorage,
  getStorage,
  removeStorage,
} from './wings/storage';
import {
  networkCodeAdaptor,
  apiCodeAdaptor,
  authCodeAdaptor,
} from './wings/code-adaptor';
import {
  isNullOrUndefined,
  getValueByKeys,
  arrayToObject,
  interceptJointData,
  arrayRecursion,
} from './wings/utils';

export {
  autoImportRoutes,
  autoImportApis,
  autoImportPiniaStore,
  autoImportLanguages,
  autoImportComponents,
  componentAddInstall,
  pluginAddRegister,
  componentAddPath,
  mountApis,
  request,
  addInterceptorsRequest,
  addInterceptorsResponse,
  GET,
  POST,
  PUT,
  DELETE,
  UPLOAD,
  DOWNLOAD,
  storageType,
  setStorage,
  getStorage,
  removeStorage,
  networkCodeAdaptor,
  apiCodeAdaptor,
  authCodeAdaptor,
  isNullOrUndefined,
  getValueByKeys,
  arrayToObject,
  interceptJointData,
  arrayRecursion,
};
