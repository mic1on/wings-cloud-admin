import type { ResponseData } from '#/app/app-request.d';
import type { IObject } from '#/interface.d';
import { interceptJointData } from '@/utils/app-utils';
import { AppAuthenticationEnum } from '@/enums/app';
import { ELEMENT_PLUS_PREFIX } from '@/plugins/element-plus/prefix';

export default {
  /**
   * 校验用户名称是否存在
   */
  validateUsername: {
    url: '/admin/user/validate',
    method: 'get',
    data: { validateResult: true },
    response: <T>(params: IObject, res: ResponseData<T>) => {
      if (
        interceptJointData(params.url).username !==
        AppAuthenticationEnum.VISITOR_USERNAME
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
   * 获取权限路由
   */
  getAdminRoutes: {
    url: '/admin/user/route/list',
    method: 'get',
    data: [
      {
        path: '/auth',
        name: 'auth',
        meta: {
          layout: 'admin',
          isMenu: true,
          requiresAuth: true,
          iconType: ELEMENT_PLUS_PREFIX,
          icon: 'Key',
          menuName: '权限管理',
          sort: 1,
        },
      },
    ],
  },

  /**
   * 获取用户权限
   */
  getUserRoles: {
    url: '/admin/user/role/list',
    method: 'get',
    data: ['/admin/home/workbench', '/admin/home/visual', '/admin/about'],
  },
};
