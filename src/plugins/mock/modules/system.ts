import type { ResponseData } from '@/utils/request/index.d';
import type { IObject } from '@/types/global.d';
import { interceptJointData } from '@/utils/common';
import { AuthenticationEnum, IconTypeEnum } from '@/constants/enums';

export default {
  /**
   * 注册
   */
  signup: {
    url: '/system/user/signup',
    method: 'post',
    data: '',
  },

  /**
   * 账号密码登录
   */
  loginByAccount: {
    url: '/system/user/login',
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
    url: '/system/user/profile',
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
    url: '/system/user/validate',
    method: 'get',
    data: { validateResult: true },
    response: <T>(param: IObject, res: ResponseData<T>) => {
      if (
        interceptJointData(param.url).username !==
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
    url: '/system/user/routes',
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
            path: '/system/menu',
            name: 'system.menu',
            component: '/system/menu',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Menu',
              sort: 0,
              isI18n: true,
              i18nKey: 'system.menu',
            },
          },
          {
            path: '/system/role',
            name: 'system.role',
            component: '/system/role',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'CollectionTag',
              sort: 0,
              isI18n: true,
              i18nKey: 'system.role',
            },
          },
          {
            path: '/system/user',
            name: 'system.user',
            component: '/system/user',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'User',
              sort: 1,
              isI18n: true,
              i18nKey: 'system.user',
            },
          },
          {
            path: '/system/department',
            name: 'system.department',
            component: '/system/department',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.APP,
              icon: 'base-tree',
              sort: 2,
              isI18n: true,
              i18nKey: 'system.department',
            },
          },
          {
            path: '/system/dict',
            name: 'system.dict',
            component: '/system/dict',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Reading',
              sort: 3,
              isI18n: true,
              i18nKey: 'system.dict',
            },
          },
          {
            path: '/system/param',
            name: 'system.param',
            component: '/system/param',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Key',
              sort: 4,
              isI18n: true,
              i18nKey: 'system.param',
            },
          },
          {
            path: '/system/file',
            name: 'system.file',
            component: '/system/file',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'FolderOpened',
              sort: 5,
              isI18n: true,
              i18nKey: 'system.file',
            },
          },
          {
            path: '/system/log',
            name: 'system.log',
            meta: {
              layout: 'admin',
              isMenu: true,
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Notebook',
              sort: 7,
              isI18n: true,
              i18nKey: 'system.log',
            },
            children: [
              {
                path: '/system/log/logi',
                name: 'system.log.login',
                component: '/system/log/login',
                meta: {
                  layout: 'admin',
                  isMenu: true,
                  requiresAuth: true,
                  sort: 0,
                  isI18n: true,
                  i18nKey: 'system.log.login',
                },
              },
              {
                path: '/system/log/action',
                name: 'system.log.action',
                component: '/system/log/action',
                meta: {
                  layout: 'admin',
                  isMenu: true,
                  requiresAuth: true,
                  sort: 1,
                  isI18n: true,
                  i18nKey: 'system.log.action',
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
    url: '/system/user/roles',
    method: 'get',
    data: [
      '/home/workbench',
      '/home/dashboard',
      '/system/role',
      '/system/user',
      '/system/department',
      '/system/post',
      '/system/menu',
      '/system/dict',
      '/system/param',
      '/system/file',
      '/system/log/login',
      '/system/log/action',
      '/development/options',
      '/development/code',
      '/development/form',
    ],
  },

  /**
   * 获取个人消息列表
   */
  getPersonalNotification: {
    url: '/system/user/notification',
    method: 'get',
    data: {
      list: [
        {
          id: 0,
          type: 1,
          content: '修改密码成功！',
          source: 1,
          createTime: 1669084718194,
          status: 0,
        },
        {
          id: 1,
          type: 1,
          content: '初次登录，请修改密码！',
          source: 0,
          createTime: 1669082324627,
          status: 1,
        },
      ],
      total: 1,
    },
  },

  /**
   * 获取角色列表
   */
  getRoleList: {
    url: '/system/role/list',
    method: 'get',
    data: {
      list: [
        {
          id: 0,
          name: '系统管理员',
          remark: '',
          createTime: 1669084718194,
          status: 0,
        },
        {
          id: 1,
          name: '开发人员',
          remark: '',
          createTime: 1669082324627,
          status: 1,
        },
      ],
      total: 1,
    },
  },

  /**
   * @name getDictAll
   * @description 获取全部字典数据
   */
  getDictAll: {
    url: '/system/dict/all',
    method: 'get',
    data: [
      {
        key: 'notificationType',
        values: [
          {
            label: '消息',
            value: 0,
          },
          {
            label: '通知',
            value: 1,
          },
        ],
      },
      {
        key: 'notificationSource',
        values: [
          {
            label: '用户',
            value: 0,
          },
          {
            label: '系统',
            value: 1,
          },
        ],
      },
      {
        key: 'notificationIsRead',
        values: [
          {
            label: '未读',
            value: 0,
          },
          {
            label: '已读',
            value: 1,
          },
        ],
      },
    ],
  },

  /**
   * @name getDictPage
   * @description 分页获取字典数据
   */
  getDictPage: {
    url: '/system/dict/list',
    method: 'get',
    data: [],
  },
};
