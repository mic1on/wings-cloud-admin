import { IconTypeEnum } from '@/enums';

export default [
  {
    path: '/admin/home',
    name: 'admin.home',
    meta: {
      layout: 'admin',
      isAdmin: true,
      requiresAuth: true,
      iconType: IconTypeEnum.ELEMENT_PLUS,
      icon: 'House',
      sort: 0,
      isI18n: true,
      i18nKey: 'admin.home',
    },
    children: [
      {
        path: '/admin/home/workbench',
        name: 'admin.home.workbench',
        component: () => import('@/views/admin/home/workbench.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Monitor',
          sort: 0,
          isI18n: true,
          i18nKey: 'admin.home.workbench',
        },
      },
      {
        path: '/admin/home/dashboard',
        name: 'admin.home.dashboard',
        component: () => import('@/views/admin/home/dashboard.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Odometer',
          sort: 1,
          isI18n: true,
          i18nKey: 'admin.home.dashboard',
        },
      },
    ],
  },
];
