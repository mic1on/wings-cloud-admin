import type { I18nT, IObject } from '#/interface.d';
import type { LoginAccountData, SignupData } from '#/api/website/user.d';
import type { ResponseData } from '#/app/app-request.d';
import type { UserState } from '#/store/app-user.d';
import { defineStore } from 'pinia';
import { getStorage, setStorage, removeStorage } from '@/utils/app-storage';
import { StorageAppEnum, StorageRouteEnum } from '@/enums/storage';
import { RouteUserEnum } from '@/enums/route';
import { loginByAccount, getUserInfo, signup } from '@/apis/website/user';
import { getUserRoles } from '@/apis/admin/auth';
import { i18n } from '@/plugins/vue-i18n';
import { stores } from '@/plugins/pinia';
import { router } from '@/plugins/vue-router';
import { ElNotification } from 'element-plus';

/**
 * 获取是否保持登录状态
 */
export const getStayLogin = (): string => {
  return getStorage(StorageAppEnum.STAY_LOGIN, { type: 'local' }) === true
    ? 'local'
    : 'session';
};

/**
 * 在非 .vue 文件中使用 t
 */
const { t } = i18n.global;
const _t: I18nT = t;

/**
 * 导出用户状态钩子
 */
export default defineStore('app-user', {
  state: (): UserState => ({
    /**
     * 是否保持登录
     */
    stayLogin: getStayLogin() || '',

    /**
     * 用户登录凭证
     */
    token:
      getStorage(StorageAppEnum.TOKEN, {
        type: getStayLogin(),
      }) || '',

    /**
     * 用户信息
     */
    userInfo:
      getStorage(StorageAppEnum.USER_INFO, {
        type: getStayLogin(),
      }) || {},

    /**
     * 用户权限
     */
    userRoles:
      getStorage(StorageAppEnum.USER_ROLES, {
        type: getStayLogin(),
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
    setStayLogin(state: string): void {
      this.stayLogin = state;
      setStorage(StorageAppEnum.STAY_LOGIN, state === 'local' ? true : false, {
        type: 'local',
      });
    },

    /**
     * 设置用户凭证信息
     */
    setToken(token: string): void {
      this.token = token;
      setStorage(StorageAppEnum.TOKEN, token, { type: this.stayLogin });
    },

    /**
     * 设置用户信息
     */
    setUserInfo(data: IObject): void {
      this.userInfo = data;
      setStorage(StorageAppEnum.USER_INFO, data, { type: this.stayLogin });
    },

    /**
     * 设置用户权限
     */
    setUserRoles<T>(data: Array<T>): void {
      this.userRoles = data;
      setStorage(StorageAppEnum.USER_ROLES, data, { type: this.stayLogin });
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
      const routeStore = stores['app-route'].default();
      await routeStore.getAdminRoutes();
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
        await this.setStayLogin(data.remember ? 'local' : 'session');
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
      console.log(res);
    },

    /**
     * 切换角色
     */
    switchRoles(): void {},

    /**
     * 退出登录
     */
    logout(type: string): void {
      removeStorage(StorageAppEnum.TOKEN, getStayLogin());
      removeStorage(StorageAppEnum.USER_INFO, getStayLogin());
      removeStorage(StorageAppEnum.USER_ROLES, getStayLogin());
      removeStorage(StorageAppEnum.STAY_LOGIN, 'local');
      removeStorage(StorageRouteEnum.ADMIN_ROUTES, getStayLogin());
      ElNotification({
        title: _t('base.authentication.logoutSuccess'),
        type: 'success',
      });
      if (type === 'refresh') {
        window.location.reload();
      } else if (type === 'login') {
        router.push({
          path: RouteUserEnum.ROUTE_LOGIN,
        });
      }
    },
  },
});
