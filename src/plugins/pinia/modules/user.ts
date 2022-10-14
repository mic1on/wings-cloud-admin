import type { IObject } from '../../../interface.d';
import type { I18nT } from '../../vue-i18n/index.d';
import type {
  LoginAccountData,
  SignupData,
} from '../../../apis/website/user.d';
import type { ResponseData } from '../../../utils/request/index.d';
import type { UserState } from './user.d';
import { ElNotification } from 'element-plus';
import { defineStore } from 'pinia';
import { getStorage, setStorage } from '../../../utils/storage';
import { StorageEnum, RouteEnum } from '../../../enums';
import { i18n } from '../../vue-i18n';
import { router } from '../../vue-router';
import {
  loginByAccount,
  getUserInfo,
  signup,
} from '../../../apis/website/user';
import { getUserRoles } from '../../../apis/admin/auth';
import useRouteStore from './route';

const { t } = i18n.global;
const _t: I18nT = t;

/**
 * 获取是否保持登录状态
 */
export const getLoginStorageType = (): string => {
  return getStorage(StorageEnum.STAY_LOGIN, { type: 'local' }) === true
    ? 'local'
    : 'session';
};

/**
 * 导出用户状态钩子
 */
export default defineStore('user', {
  state: (): UserState => ({
    /**
     * 是否保持登录
     */
    stayLogin: getStorage(StorageEnum.STAY_LOGIN, { type: 'local' }) || false,

    /**
     * 用户登录凭证
     */
    token:
      getStorage(StorageEnum.TOKEN, {
        type: getLoginStorageType(),
      }) || '',

    /**
     * 用户信息
     */
    userInfo:
      getStorage(StorageEnum.USER_INFO, {
        type: getLoginStorageType(),
      }) || {},

    /**
     * 用户权限
     */
    userRoles:
      getStorage(StorageEnum.USER_ROLES, {
        type: getLoginStorageType(),
      }) || [],
  }),
  getters: {
    /**
     * 登录状态
     */
    isLogin: (state): boolean => {
      return state.token ? true : false;
    },
  },
  actions: {
    /**
     * 设置用户是否保持登录
     */
    setStayLogin(state: boolean): void {
      this.stayLogin = state;
      setStorage(StorageEnum.STAY_LOGIN, state, {
        type: 'local',
      });
    },

    /**
     * 设置用户凭证信息
     */
    setToken(token: string): void {
      this.token = token;
      setStorage(StorageEnum.TOKEN, token, { type: getLoginStorageType() });
    },

    /**
     * 设置用户信息
     */
    setUserInfo(data: IObject): void {
      this.userInfo = data;
      setStorage(StorageEnum.USER_INFO, data, {
        type: getLoginStorageType(),
      });
    },

    /**
     * 设置用户权限
     */
    setUserRoles<T>(data: Array<T>): void {
      this.userRoles = data;
      setStorage(StorageEnum.USER_ROLES, data, {
        type: getLoginStorageType(),
      });
    },

    /**
     * 获取用户信息
     */
    async getUserInfo(): Promise<void> {
      const res = await getUserInfo();
      if (res.code === 0) {
        this.setUserInfo(res.data);
        return res.data;
      }
    },

    /**
     * 获取用户权限
     */
    async getUserRoles(): Promise<void> {
      const res = await getUserRoles();
      if (res.code === 0) {
        this.setUserRoles(res.data);
        return res.data;
      }
    },

    /**
     * 登录后 - 处理获取信息、权限、路由等
     */
    async loginApiHandle(): Promise<void> {
      const appRouteStore = useRouteStore();
      await appRouteStore.getAdminRoutes();
      await this.getUserInfo();
      await this.getUserRoles();

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
     * 登录 - 通过账号密码
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
     * 登录 - 通过手机号 + 验证码
     */
    loginByPhone(): void {},

    /**
     * 登录 - 通过邮箱 + 验证码
     */
    loginByEmail(): void {},

    /**
     * 注册
     */
    async signup<T>(data: SignupData): Promise<void> {
      const res: ResponseData<T> = await signup(data);
    },

    /**
     * 切换角色
     */
    switchRoles(): void {},

    /**
     * 退出登录
     */
    logout(type: string): void {
      this.setToken('');
      this.setUserInfo({});
      this.setUserRoles([]);

      const appRouteStore = stores['route'].default();
      appRouteStore.getAdminRoutes();

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
