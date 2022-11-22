import { IconTypeEnum } from '@/enums';

export default [
  {
    path: '/personal',
    name: 'personal',
    meta: {
      layout: 'admin',
      isMenu: false,
      requiresAuth: false,
      iconType: IconTypeEnum.ELEMENT_PLUS,
      icon: 'User',
      sort: 1,
      isI18n: true,
      i18nKey: 'personal',
    },
    children: [
      {
        path: '/personal/profile',
        name: 'personal.profile',
        component: () => import('@/views/personal/profile.vue'),
        meta: {
          layout: 'admin',
          isMenu: false,
          requiresAuth: false,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Postcard',
          sort: 0,
          i18nKey: 'personal.profile',
        },
      },
      {
        path: '/personal/notifications',
        name: 'personal.notifications',
        component: () => import('@/views/personal/notifications.vue'),
        meta: {
          layout: 'admin',
          isMenu: false,
          requiresAuth: false,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'ChatDotSquare',
          sort: 1,
          i18nKey: 'personal.notifications',
        },
      },
    ],
  },
];
