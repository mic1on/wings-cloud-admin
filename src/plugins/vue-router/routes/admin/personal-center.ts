import { IconTypeEnum } from '@/enums';

export default [
  {
    path: '/admin/personal-center',
    name: 'admin.personalCenter',
    meta: {
      layout: 'admin',
      isAdmin: true,
      requiresAuth: true,
      iconType: IconTypeEnum.ELEMENT_PLUS,
      icon: 'User',
      sort: 1,
      isI18n: true,
      i18nKey: 'admin.personalCenter',
    },
    children: [
      {
        path: '/admin/personal-center/personal-profile',
        name: 'admin.personalCenter.personalProfile',
        component: () =>
          import('@/views/admin/personal-center/personal-profile.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Postcard',
          sort: 0,
          isI18n: true,
          i18nKey: 'admin.personalCenter.personalProfile',
        },
      },
      {
        path: '/admin/personal-center/my-notifications',
        name: 'admin.personalCenter.myNotifications',
        component: () =>
          import('@/views/admin/personal-center/my-notifications.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'ChatDotSquare',
          sort: 1,
          isI18n: true,
          i18nKey: 'admin.personalCenter.myNotifications',
        },
      },
      {
        path: '/admin/personal-center/personal-settings',
        name: 'admin.personalCenter.personalSettings',
        component: () =>
          import('@/views/admin/personal-center/personal-settings.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Setting',
          sort: 2,
          isI18n: true,
          i18nKey: 'admin.personalCenter.personalSettings',
        },
      },
    ],
  },
];
