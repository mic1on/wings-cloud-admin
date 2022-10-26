import { IconTypeEnum } from '@/enums';

export default [
  {
    path: '/admin/about',
    name: 'admin.about',
    component: () => import('@/views/admin/about.vue'),
    meta: {
      layout: 'admin',
      isAdmin: true,
      requiresAuth: true,
      iconType: IconTypeEnum.APP,
      icon: 'InfoFilled',
      sort: 6,
      isI18n: true,
      i18nKey: 'admin.about',
    },
  },
];
