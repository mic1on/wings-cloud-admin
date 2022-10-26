import { IconTypeEnum } from '@/enums';

export default [
  {
    path: '/admin/development-tool',
    name: 'admin.developmentTool',
    meta: {
      layout: 'admin',
      isAdmin: true,
      requiresAuth: true,
      iconType: IconTypeEnum.ELEMENT_PLUS,
      icon: 'Coin',
      sort: 5,
      isI18n: true,
      i18nKey: 'admin.developmentTool',
    },
    children: [
      {
        path: '/admin/development-tool/options',
        name: 'admin.developmentTool.options',
        component: () => import('@/views/admin/development-tool/options.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Operation',
          sort: 0,
          isI18n: true,
          i18nKey: 'admin.developmentTool.options',
        },
      },
      {
        path: '/admin/development-tool/code',
        name: 'admin.developmentTool.code',
        component: () => import('@/views/admin/development-tool/code.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'ElementPlus',
          sort: 1,
          isI18n: true,
          i18nKey: 'admin.developmentTool.code',
        },
      },
      {
        path: '/admin/development-tool/form',
        name: 'admin.developmentTool.form',
        component: () => import('@/views/admin/development-tool/form.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Coordinate',
          sort: 2,
          isI18n: true,
          i18nKey: 'admin.developmentTool.form',
        },
      },
    ],
  },
];
