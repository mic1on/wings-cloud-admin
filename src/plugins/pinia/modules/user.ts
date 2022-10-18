import type { UserState } from './user.d';
import type { IObject } from '../../../global.d';
import type { ResponseData } from '../../../utils/request/index.d';
import type {
  LoginAccountData,
  SignupData,
} from '../../../apis/website/user.d';
import { defineStore } from 'pinia';
import { ElNotification } from 'element-plus';
import { useRouteStore } from './route';
import { getStorage, setStorage } from '../../../utils/storage';
import { StorageEnum, RouteEnum } from '../../../enums';
import { _t } from '../../vue-i18n';
import { router } from '../../vue-router';
import { getUserRoles } from '../../../apis/admin/auth';
import {
  loginByAccount,
  getUserInfo,
  signup,
} from '../../../apis/website/user';

/**
 * @name getLoginStorageType
 * @description 获取是否保持登录状态
 * @return storageType
 */
export const getLoginStorageType = (): string => {
  return getStorage(StorageEnum.STAY_LOGIN, { type: 'local' }) === true
    ? 'local'
    : 'session';
};

/**
 * @name useUserStore
 * @description 导出用户状态钩子
 */
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    /**
     * @name stayLogin
     * @description 是否保持登录
     */
    stayLogin: getStorage(StorageEnum.STAY_LOGIN, { type: 'local' }) || false,

    /**
     * @name token
     * @description 用户登录凭证
     */
    token:
      getStorage(StorageEnum.TOKEN, {
        type: getLoginStorageType(),
      }) || '',

    /**
     * @name userInfo
     * @description 用户信息
     */
    userInfo:
      getStorage(StorageEnum.USER_INFO, {
        type: getLoginStorageType(),
      }) || {},

    /**
     * @name userRoles
     * @description 用户权限
     */
    userRoles:
      getStorage(StorageEnum.USER_ROLES, {
        type: getLoginStorageType(),
      }) || [],
  }),
  getters: {
    /**
     * @name isLogin
     * @description 登录状态
     */
    isLogin: (state): boolean => {
      return state.token ? true : false;
    },
  },
  actions: {
    /**
     * @name setStayLogin
     * @description 设置用户是否保持登录
     */
    setStayLogin(state: boolean): void {
      this.stayLogin = state;
      setStorage(StorageEnum.STAY_LOGIN, state, {
        type: 'local',
      });
    },

    /**
     * @name setToken
     * @description 设置用户凭证信息
     */
    setToken(token: string): void {
      this.token = token;
      setStorage(StorageEnum.TOKEN, token, { type: getLoginStorageType() });
    },

    /**
     * @name setUserInfo
     * @description 设置用户信息
     */
    setUserInfo(data: IObject): void {
      this.userInfo = data;
      setStorage(StorageEnum.USER_INFO, data, {
        type: getLoginStorageType(),
      });
    },

    /**
     * @name setUserRoles
     * @description 设置用户权限
     */
    setUserRoles<T>(data: Array<T>): void {
      this.userRoles = data;
      setStorage(StorageEnum.USER_ROLES, data, {
        type: getLoginStorageType(),
      });
    },

    /**
     * @name getUserInfo
     * @description 获取用户信息
     */
    async getUserInfo(): Promise<IObject> {
      return new Promise(async (resolve) => {
        const { code, data } = await getUserInfo();
        if (code === 0) {
          this.setUserInfo(data);
          resolve(data);
        } else {
          resolve({});
        }
      });
    },

    /**
     * @name getUserRoles
     * @description 获取用户权限
     */
    async getUserRoles(): Promise<IObject> {
      return new Promise(async (resolve) => {
        const { code, data } = await getUserRoles();
        if (code === 0) {
          this.setUserRoles(data);
          resolve(data);
        } else {
          resolve({});
        }
      });
    },

    /**
     * @name loginApiHandle
     * @description 登录后 - 处理获取信息、权限、路由等
     */
    async loginApiHandle(): Promise<void> {
      await this.getUserInfo();
      await this.getUserRoles();
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
    },

    /**
     * @name loginByAccount
     * @description 登录 - 通过账号密码
     */
    async loginByAccount<T>(data: LoginAccountData): Promise<void> {
      const res: ResponseData<T> = await loginByAccount(data);
      if (res.code === 0) {
        await this.setStayLogin(data.remember);
        await this.setToken(res.data as string);
        await this.loginApiHandle();
      }
    },

    /**
     * @name loginByPhone
     * @description 登录 - 通过手机号 + 验证码
     */
    loginByPhone(): void {},

    /**
     * @name loginByEmail
     * @description 登录 - 通过邮箱 + 验证码
     */
    loginByEmail(): void {},

    /**
     * @name signup
     * @description 注册
     */
    async signup<T>(data: SignupData): Promise<void> {
      const res: ResponseData<T> = await signup(data);
    },

    /**
     * @name switchRoles
     * @description 切换角色
     */
    switchRoles(): void {},

    /**
     * @name logout
     * @description 退出登录
     */
    async logout(type: string): Promise<void> {
      this.setToken('');
      this.setUserInfo({});
      this.setUserRoles([]);
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
    },
  },
});
