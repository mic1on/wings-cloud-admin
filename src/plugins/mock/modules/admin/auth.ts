import type { ResponseData } from '../../../../utils/request/index.d';
import type { IObject } from '../../../../global.d';
import { interceptJointData } from '../../../../utils/common';
import { AuthenticationEnum, IconTypeEnum } from '../../../../enums';

export default {
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
    url: '/admin/user/route/list',
    method: 'get',
    data: [
      {
        path: '/admin/example',
        name: 'admin.example',
        meta: {
          layout: 'admin',
          isAdmin: true,
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Guide',
          sort: 2,
          isI18n: true,
          i18nKey: 'admin.example',
        },
        children: [
          {
            path: '/admin/example/crud',
            name: 'admin.example.crud',
            component: '/admin/example/crud',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'DocumentCopy',
              sort: 0,
              isI18n: true,
              i18nKey: 'admin.example.crud',
            },
          },
          {
            path: '/admin/example/icon',
            name: 'admin.example.icon',
            component: '/admin/example/icon',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'MagicStick',
              sort: 1,
              isI18n: true,
              i18nKey: 'admin.example.icon',
            },
          },
          {
            path: '/admin/example/xicons',
            name: 'admin.example.xicons',
            component: '/admin/example/xicons',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Link',
              sort: 2,
              isI18n: true,
              i18nKey: 'admin.example.xicons',
            },
          },
          {
            path: '/admin/example/editor',
            name: 'admin.example.editor',
            component: '/admin/example/editor',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Document',
              sort: 3,
              isI18n: true,
              i18nKey: 'admin.example.editor',
            },
          },
          {
            path: '/admin/example/echarts',
            name: 'admin.example.echarts',
            component: '/admin/example/echarts',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'DataLine',
              sort: 4,
              isI18n: true,
              i18nKey: 'admin.example.echarts',
            },
          },
          {
            path: '/admin/example/map',
            name: 'admin.example.map',
            component: '/admin/example/map',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'MapLocation',
              sort: 5,
              isI18n: true,
              i18nKey: 'admin.example.map',
            },
          },
          {
            path: '/admin/example/form',
            name: 'admin.example.form',
            component: '/admin/example/form',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'DocumentChecked',
              sort: 6,
              isI18n: true,
              i18nKey: 'admin.example.form',
            },
          },
          {
            path: '/admin/example/result',
            name: 'admin.example.result',
            component: '/admin/example/result',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Warning',
              sort: 7,
              isI18n: true,
              i18nKey: 'admin.example.result',
            },
          },
        ],
      },
      {
        path: '/admin/authority-management',
        name: 'admin.authorityManagement',
        meta: {
          layout: 'admin',
          isAdmin: true,
          requiresAuth: true,
          iconType: IconTypeEnum.APP,
          icon: 'role',
          sort: 3,
          isI18n: true,
          i18nKey: 'admin.authorityManagement',
        },
        children: [
          {
            path: '/admin/authority-management/role-management',
            name: 'admin.authorityManagement.roleManagement',
            component: '/admin/authority-management/role-management',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'CollectionTag',
              sort: 0,
              isI18n: true,
              i18nKey: 'admin.authorityManagement.roleManagement',
            },
          },
          {
            path: '/admin/authority-management/user-management',
            name: 'admin.authorityManagement.userManagement',
            component: '/admin/authority-management/user-management',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'User',
              sort: 1,
              isI18n: true,
              i18nKey: 'admin.authorityManagement.userManagement',
            },
          },
          {
            path: '/admin/authority-management/department-management',
            name: 'admin.authorityManagement.departmentManagement',
            component: '/admin/authority-management/department-management',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.APP,
              icon: 'tree',
              sort: 2,
              isI18n: true,
              i18nKey: 'admin.authorityManagement.departmentManagement',
            },
          },
          {
            path: '/admin/authority-management/post-management',
            name: 'admin.authorityManagement.postManagement',
            component: '/admin/authority-management/post-management',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Postcard',
              sort: 3,
              isI18n: true,
              i18nKey: 'admin.authorityManagement.postManagement',
            },
          },
        ],
      },
      {
        path: '/admin/system-management',
        name: 'admin.systemManagement',
        meta: {
          layout: 'admin',
          isAdmin: true,
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Operation',
          sort: 4,
          isI18n: true,
          i18nKey: 'admin.systemManagement',
        },
        children: [
          {
            path: '/admin/system-management/menu-management',
            name: 'admin.systemManagement.menuManagement',
            component: '/admin/system-management/menu-management',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Menu',
              sort: 0,
              isI18n: true,
              i18nKey: 'admin.systemManagement.menuManagement',
            },
          },
          {
            path: '/admin/system-management/dict-management',
            name: 'admin.systemManagement.dictManagement',
            component: '/admin/system-management/dict-management',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Reading',
              sort: 1,
              isI18n: true,
              i18nKey: 'admin.systemManagement.dictManagement',
            },
          },
          {
            path: '/admin/system-management/param-management',
            name: 'admin.systemManagement.paramManagement',
            component: '/admin/system-management/param-management',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Key',
              sort: 2,
              isI18n: true,
              i18nKey: 'admin.systemManagement.paramManagement',
            },
          },
          {
            path: '/admin/system-management/file-management',
            name: 'admin.systemManagement.fileManagement',
            component: '/admin/system-management/file-management',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'FolderOpened',
              sort: 3,
              isI18n: true,
              i18nKey: 'admin.systemManagement.fileManagement',
            },
          },
          {
            path: '/admin/system-management/system-setting',
            name: 'admin.systemManagement.systemSetting',
            component: '/admin/system-management/system-setting',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Setting',
              sort: 4,
              isI18n: true,
              i18nKey: 'admin.systemManagement.systemSetting',
            },
          },
          {
            path: '/admin/system-management/log-management',
            name: 'admin.systemManagement.logManagement',
            meta: {
              layout: 'admin',
              requiresAuth: true,
              iconType: IconTypeEnum.ELEMENT_PLUS,
              icon: 'Notebook',
              sort: 5,
              isI18n: true,
              i18nKey: 'admin.systemManagement.logManagement',
            },
            children: [
              {
                path: '/admin/system-management/log-management/login-log',
                name: 'admin.systemManagement.logManagement.loginLog',
                component: '/admin/system-management/login-log',
                meta: {
                  layout: 'admin',
                  requiresAuth: true,
                  iconType: IconTypeEnum.ELEMENT_PLUS,
                  icon: 'User',
                  sort: 0,
                  isI18n: true,
                  i18nKey: 'admin.systemManagement.logManagement.loginLog',
                },
              },
              {
                path: '/admin/system-management/log-management/action-log',
                name: 'admin.systemManagement.logManagement.actionLog',
                component: '/admin/system-management/action-log',
                meta: {
                  layout: 'admin',
                  requiresAuth: true,
                  iconType: IconTypeEnum.ELEMENT_PLUS,
                  icon: 'Pointer',
                  sort: 1,
                  isI18n: true,
                  i18nKey: 'admin.systemManagement.logManagement.actionLog',
                },
              },
            ],
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
    url: '/admin/user/role/list',
    method: 'get',
    data: [
      '/admin/home/workbench',
      '/admin/home/dashboard',
      '/admin/personal-center/personal-profile',
      '/admin/personal-center/my-notification',
      '/admin/personal-center/personal-settings',
      '/admin/example/crud',
      '/admin/example/icon',
      '/admin/example/xicons',
      '/admin/example/editor',
      '/admin/example/echarts',
      '/admin/example/map',
      '/admin/example/form',
      '/admin/example/result',
      '/admin/authority-management/role-management',
      '/admin/authority-management/user-management',
      '/admin/authority-management/department-management',
      '/admin/authority-management/post-management',
      '/admin/system-management/menu-management',
      '/admin/system-management/dict-management',
      '/admin/system-management/param-management',
      '/admin/system-management/file-management',
      '/admin/system-management/system-setting',
      '/admin/system-management/log-management/login-log',
      '/admin/system-management/log-management/action-log',
      '/admin/development-tool/options',
      '/admin/development-tool/code',
      '/admin/development-tool/form',
      '/admin/about',
    ],
  },
};
