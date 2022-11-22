import type { ResponseData } from '@/utils/request/index.d';
import type { IObject } from '@/global.d';
import { interceptJointData } from '@/utils/common';
import { AuthenticationEnum, IconTypeEnum } from '@/enums';

export default {
  /**
   * 注册
   */
  signup: {
    url: '/admin/user/signup',
    method: 'post',
    data: '',
  },

  /**
   * 账号密码登录
   */
  loginByAccount: {
    url: '/admin/user/login',
    method: 'post',
    data: AuthenticationEnum.VISITOR_TOKEN,
    response: <T>(data: IObject, res: ResponseData<T>) => {
      if (
        interceptJointData(data.body).password !==
        AuthenticationEnum.VISITOR_PASSWORD
      ) {
        return {
          ...res,
          code: 10039,
          msg: null,
          data: '',
        };
      }
      return res;
    },
  },

  /**
   * 获取用户信息
   */
  getUserProfile: {
    url: '/admin/user/profile',
    method: 'get',
    data: {
      id: '',
      username: AuthenticationEnum.VISITOR_USERNAME,
      nickname: '演示用户',
      avatar: '',
      sex: 1,
      email: '',
      phone: '',
      roleList: [
        { label: '系统管理员', id: 1 },
        { label: '开发人员', id: 2 },
      ],
      defaultRole: 1,
      currentRole: 1,
    },
  },

  /**
   * @name validateUsername
   * @description 校验用户名称是否存在
   */
  validateUsername: {
    url: '/admin/user/validate',
    method: 'get',
    data: { validateResult: true },
    response: <T>(params: IObject, res: ResponseData<T>) => {
      if (
        interceptJointData(params.url).username !==
        AuthenticationEnum.VISITOR_USERNAME
      ) {
        return {
          ...res,
          code: 10034,
          msg: null,
          data: { validateResult: false },
        };
      }
      return res;
    },
  },

  /**
   * @name getRoleRoutes
   * @description 获取权限路由
   */
  getRoleRoutes: {
    url: '/admin/user/routes',
    method: 'get',
    data: [
      {
        path: '/home',
        name: 'home',
        meta: {
          layout: 'admin',
          isMenu: true,
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'House',
          sort: 0,
          i18nKey: 'home',
        },
        children: [
          {
            path: '/home/workbench',
            name: 'home.workbench',
            component: '/home/workbench',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Monitor',
              sort: 0,
              isI18n: true,
              i18nKey: 'home.workbench',
            },
          },
          {
            path: '/home/dashboard',
            name: 'home.dashboard',
            component: '/home/dashboard',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Odometer',
              sort: 1,
              isI18n: true,
              i18nKey: 'home.dashboard',
            },
          },
        ],
      },
      {
        path: '/authority',
        name: 'authority',
        meta: {
          layout: 'admin',
          isMenu: true,
          requiresAuth: true,
          iconType: IconTypeEnum.APP,
          icon: 'base-role',
          sort: 3,
          i18nKey: 'authority',
        },
        children: [
          {
            path: '/authority/role',
            name: 'authority.role',
            component: '/authority/role',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'CollectionTag',
              sort: 0,
              isI18n: true,
              i18nKey: 'authority.role',
            },
          },
          {
            path: '/authority/user',
            name: 'authority.user',
            component: '/authority/user',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'User',
              sort: 1,
              isI18n: true,
              i18nKey: 'authority.user',
            },
          },
          {
            path: '/authority/department',
            name: 'authority.department',
            component: '/authority/department',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.APP,
              icon: 'base-tree',
              sort: 2,
              isI18n: true,
              i18nKey: 'authority.department',
            },
          },
          {
            path: '/authority/post',
            name: 'authority.post',
            component: '/authority/post',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Postcard',
              sort: 3,
              isI18n: true,
              i18nKey: 'authority.post',
            },
          },
        ],
      },
      {
        path: '/system',
        name: 'system',
        meta: {
          layout: 'admin',
          isMenu: true,
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Operation',
          sort: 4,
          i18nKey: 'system',
        },
        children: [
          {
            path: '/system/menus',
            name: 'system.menus',
            component: '/system/menus',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Menu',
              sort: 0,
              isI18n: true,
              i18nKey: 'system.menus',
            },
          },
          {
            path: '/system/dicts',
            name: 'system.dicts',
            component: '/system/dicts',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Reading',
              sort: 1,
              isI18n: true,
              i18nKey: 'system.dicts',
            },
          },
          {
            path: '/system/params',
            name: 'system.params',
            component: '/system/params',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Key',
              sort: 2,
              isI18n: true,
              i18nKey: 'system.params',
            },
          },
          {
            path: '/system/files',
            name: 'system.files',
            component: '/system/files',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'FolderOpened',
              sort: 3,
              isI18n: true,
              i18nKey: 'system.files',
            },
          },
          {
            path: '/system/settings',
            name: 'system.settings',
            component: '/system/settings',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Setting',
              sort: 4,
              isI18n: true,
              i18nKey: 'system.settings',
            },
          },
          {
            path: '/system/logs',
            name: 'system.logs',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Notebook',
              sort: 5,
              isI18n: true,
              i18nKey: 'system.logs',
            },
            children: [
              {
                path: '/system/logs/logi',
                name: 'system.logs.login',
                component: '/system/logs/login',
                meta: {
                  layout: 'admin',
                  isMenu: true,
                  requiresAuth: true,
                  sort: 0,
                  isI18n: true,
                  i18nKey: 'system.logs.login',
                },
              },
              {
                path: '/system/logs/action',
                name: 'system.logs.action',
                component: '/system/logs/action',
                meta: {
                  layout: 'admin',
                  isMenu: true,
                  requiresAuth: true,
                  sort: 1,
                  isI18n: true,
                  i18nKey: 'system.logs.action',
                },
              },
            ],
          },
        ],
      },
      {
        path: '/development',
        name: 'development',
        meta: {
          layout: 'admin',
          isMenu: true,
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Coin',
          sort: 5,
          i18nKey: 'development',
        },
        children: [
          {
            path: '/development/options',
            name: 'development.options',
            component: '/development/options',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Operation',
              sort: 0,
              isI18n: true,
              i18nKey: 'development.options',
            },
          },
          {
            path: '/development/code',
            name: 'development.code',
            component: '/development/code',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'ElementPlus',
              sort: 1,
              isI18n: true,
              i18nKey: 'development.code',
            },
          },
          {
            path: '/development/form',
            name: 'development.form',
            component: '/development/form',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Coordinate',
              sort: 2,
              isI18n: true,
              i18nKey: 'development.form',
            },
          },
        ],
      },
    ],
  },

  /**
   * @name getUserRoles
   * @description 获取用户权限
   */
  getUserRoles: {
    url: '/admin/user/roles',
    method: 'get',
    data: [
      '/home/workbench',
      '/home/dashboard',
      '/authority/role',
      '/authority/user',
      '/authority/department',
      '/authority/post',
      '/system/menus',
      '/system/dicts',
      '/system/params',
      '/system/files',
      '/system/settings',
      '/system/logs/login-log',
      '/system/logs/action-log',
      '/development/options',
      '/development/code',
      '/development/form',
    ],
  },

  /**
   * 获取个人消息列表
   */
  getPersonalNotifications: {
    url: '/admin/user/notifications',
    method: 'get',
    data: [
      {
        type: 1,
        content: '修改密码成功',
        source: 1,
        createTime: 1669084718194,
        status: 1,
      },
    ],
  },
};
