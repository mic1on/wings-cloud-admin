import type { IObject } from '../../global.d';
import type { ResponseData } from '../../utils/request/index.d';
import type { LoginAccountData, SignupData } from '../../apis/website/user.d';
import { defineStore } from 'pinia';
import { ElNotification } from 'element-plus';
import { useRouteStore } from './use-route-store';
import { getStorage, setStorage } from '../../utils/storage';
import { getLoginStorageType } from '../../utils/common';
import { StorageEnum, RouteEnum } from '../../enums';
import { router } from '../../plugins/vue-router';
import { _t } from '../../plugins/vue-i18n';
import {
  loginByAccount as _loginByAccount,
  getUserInfo as _getUserInfo,
  signup as _signup,
} from '../../apis/website/user';
import { getUserRoles as _getUserRoles } from '../../apis/admin/auth';

/**
 * @name useUserStore
 * @description 导出用户状态钩子
 */
export const useUserStore = defineStore('user', () => {
  // 是否保持登录
  const stayLogin = ref<boolean>(
    getStorage(StorageEnum.STAY_LOGIN, { type: 'local' }) || false
  );

  // 用户登录唯一凭证
  const token = ref<string>(
    getStorage(StorageEnum.TOKEN, {
      type: getLoginStorageType(),
    }) || ''
  );

  // 用户信息
  const userInfo = ref<IObject>(
    getStorage(StorageEnum.USER_INFO, {
      type: getLoginStorageType(),
    }) || {}
  );

  // 用户权限
  const userRoles = ref<Array<string>>(
    getStorage(StorageEnum.USER_ROLES, {
      type: getLoginStorageType(),
    }) || []
  );

  // 是否登录状态
  const isLogin = (): boolean => {
    return token.value ? true : false;
  };

  // 设置用户是否保持登录
  const setStayLogin = (state: boolean): void => {
    stayLogin.value = state;
    setStorage(StorageEnum.STAY_LOGIN, state, {
      type: 'local',
    });
  };

  // 设置用户唯一凭证
  const setToken = (_token: string): void => {
    token.value = _token;
    setStorage(StorageEnum.TOKEN, _token, { type: getLoginStorageType() });
  };

  // 设置用户信息
  const setUserInfo = (data: IObject): void => {
    userInfo.value = data;
    setStorage(StorageEnum.USER_INFO, data, {
      type: getLoginStorageType(),
    });
  };

  // 设置用户权限
  const setUserRoles = (data: Array<string>): void => {
    userRoles.value = data;
    setStorage(StorageEnum.USER_ROLES, data, {
      type: getLoginStorageType(),
    });
  };

  // 获取用户信息
  const getUserInfo = async (): Promise<IObject> => {
    return new Promise(async (resolve) => {
      const { code, data } = await _getUserInfo();
      if (code === 0) {
        setUserInfo(data);
        resolve(data);
      } else {
        resolve({});
      }
    });
  };

  // 获取用户权限
  const getUserRoles = async (): Promise<IObject> => {
    return new Promise(async (resolve) => {
      const { code, data } = await _getUserRoles();
      if (code === 0) {
        setUserRoles(data);
        resolve(data);
      } else {
        resolve({});
      }
    });
  };

  // 登录后 - 处理获取信息、权限、路由等
  const loginApiHandle = async (): Promise<void> => {
    await getUserInfo();
    await getUserRoles();
    const routeStore = useRouteStore();
    await routeStore.getRoleRoutes();
    ElNotification({
      title: _t('base.authentication.loginSuccess'),
      type: 'success',
    });
    router.push({
      path: JSON.parse(import.meta.env.APP_LOGIN_TO_ADMIN)
        ? import.meta.env.APP_ADMIN_FIRST_ROUTE
        : import.meta.env.APP_FIRST_ROUTE,
    });
  };

  // 登录 - 通过账号密码
  const loginByAccount = async <T>(data: LoginAccountData): Promise<void> => {
    const res: ResponseData<T> = await _loginByAccount(data);
    if (res.code === 0) {
      await setStayLogin(data.remember);
      await setToken(res.data as string);
      await loginApiHandle();
    }
  };

  // 登录 - 通过手机号 + 验证码
  const loginByPhone = (): void => {};

  // 登录 - 通过邮箱 + 验证码
  const constloginByEmail = (): void => {};

  // 注册
  const signup = async <T>(data: SignupData): Promise<void> => {
    const res: ResponseData<T> = await _signup(data);
  };

  // 切换角色
  const switchRoles = (): void => {};

  // 退出登录
  const logout = (type: string): void => {
    setToken('');
    setUserInfo({});
    setUserRoles([]);
    ElNotification({
      title: _t('base.authentication.logoutSuccess'),
      type: 'success',
    });
    if (type === 'refresh') {
      window.location.reload();
    } else if (type === 'login') {
      router.push({
        path: RouteEnum.ROUTE_LOGIN,
      });
    }
  };

  return {
    stayLogin,
    token,
    userInfo,
    userRoles,
    isLogin,
    setStayLogin,
    setUserInfo,
    getUserInfo,
    getUserRoles,
    loginApiHandle,
    loginByAccount,
    loginByPhone,
    constloginByEmail,
    signup,
    switchRoles,
    logout,
  };
});
