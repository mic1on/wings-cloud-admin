import type { IObject } from '@/types/global.d';
import type { ResponseData } from '@/utils/request/index.d';
import type { LoginAccountData, SignupData } from '@/apis/system/user.d';
import { defineStore } from 'pinia';
import { ElNotification } from 'element-plus';
import { Settings } from '@/constants/settings';
import { useRouteStore } from './use-route-store';
import { getStorage, setStorage } from '@/utils/storage';
import { getLoginStorageType } from '@/utils/common';
import { StorageEnum, RouteEnum } from '@/constants/enums';
import { router } from '@/plugins/vue-router';
import { _t } from '@/plugins/vue-i18n';
import {
  loginByAccount as _loginByAccount,
  getUserProfile as _getUserProfile,
  signup as _signup,
} from '@/apis/system/user';
import { getUserRoles as _getUserRoles } from '@/apis/system/user';

/**
 * @name useUserStore
 * @description 导出用户状态钩子
 * @returns stayLogin
 * @returns token
 * @returns userProfile
 * @returns userRoles
 * @returns isLogin
 * @returns setStayLogin
 * @returns setUserProfile
 * @returns getUserProfile
 * @returns getUserRoles
 * @returns loginApiHandle
 * @returns loginByAccount
 * @returns loginByPhone
 * @returns constloginByEmail
 * @returns signup
 * @returns switchRoles
 * @returns logout
 */
export const useUserStore = defineStore('user', () => {
  const stayLogin = ref<boolean>(
    getStorage(StorageEnum.STAY_LOGIN, { type: 'local' }) || false
  );

  const token = ref<string | null>(
    getStorage(StorageEnum.TOKEN, {
      type: getLoginStorageType(),
    }) || ''
  );

  const userProfile = ref<IObject>(
    getStorage(StorageEnum.USER_INFO, {
      type: getLoginStorageType(),
    }) || {}
  );

  const userRoles = ref<Array<string>>(
    getStorage(StorageEnum.USER_ROLES, {
      type: getLoginStorageType(),
    }) || []
  );

  const isLogin = computed(() => (token.value ? true : false));

  const setStayLogin = (state: boolean): void => {
    stayLogin.value = state;
    setStorage(StorageEnum.STAY_LOGIN, state, {
      type: 'local',
    });
  };

  const setToken = (_token: string): void => {
    token.value = _token;
    setStorage(StorageEnum.TOKEN, _token, { type: getLoginStorageType() });
  };

  const setUserProfile = (data: IObject): void => {
    userProfile.value = data;
    setStorage(StorageEnum.USER_INFO, data, {
      type: getLoginStorageType(),
    });
  };

  const setUserRoles = (data: Array<string>): void => {
    userRoles.value = data;
    setStorage(StorageEnum.USER_ROLES, data, {
      type: getLoginStorageType(),
    });
  };

  const getUserProfile = async (): Promise<IObject> => {
    return new Promise(async (resolve) => {
      const { code, data } = await _getUserProfile();
      if (code === 0) {
        setUserProfile(data);
        resolve(data);
      } else {
        resolve({});
      }
    });
  };

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

  const loginApiHandle = async (): Promise<void> => {
    await getUserProfile();
    await getUserRoles();
    const routeStore = useRouteStore();
    await routeStore.getRoleRoutes();
    ElNotification({
      title: _t('app.authentication.loginSuccess'),
      type: 'success',
    });
    router.replace({
      path: Settings.AdminFirstRoute,
    });
  };

  const loginByAccount = async <T>(data: LoginAccountData): Promise<void> => {
    const res: ResponseData<T> = await _loginByAccount(data);
    if (res.code === 0) {
      await setStayLogin(data.remember);
      await setToken(res.data as string);
      await loginApiHandle();
    }
  };

  const loginByPhone = (): void => {};

  const constloginByEmail = (): void => {};

  const signup = async <T>(data: SignupData): Promise<void> => {
    const res: ResponseData<T> = await _signup(data);
  };

  const switchRoles = (): void => {};

  const logout = (): void => {
    setToken('');
    setUserProfile({});
    setUserRoles([]);
    ElNotification({
      title: _t('app.authentication.logoutSuccess'),
      type: 'success',
    });
    router.replace({
      path: RouteEnum.ROUTE_SIGNIN,
    });
  };

  return {
    stayLogin,
    token,
    userProfile,
    userRoles,
    isLogin,
    setStayLogin,
    setUserProfile,
    getUserProfile,
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
