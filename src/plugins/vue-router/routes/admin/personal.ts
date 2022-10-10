import Router from '@/layouts/router.vue';
import { IconTypeEnum } from '@/enums';

export default [
  {
    path: '/admin/personal',
    name: 'admin.personal',
    component: Router,
    meta: {
      isMenu: true,
      requiresAuth: true,
      iconType: IconTypeEnum.ELEMENT_PLUS,
      icon: 'User',
      menuName: '个人中心',
      sort: 1,
    },
    children: [
      {
        path: '/admin/personal/profile',
        name: 'admin.personal.profile',
        component: () => import('@/views/admin/personal/profile.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Postcard',
          menuName: '个人资料',
          sort: 0,
        },
      },
      {
        path: '/admin/personal/notifications',
        name: 'admin.personal.notifications',
        component: () => import('@/views/admin/personal/notifications.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'ChatDotSquare',
          menuName: '我的消息',
          sort: 1,
        },
      },
      {
        path: '/admin/personal/settings',
        name: 'admin.personal.settings',
        component: () => import('@/views/admin/personal/settings.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Setting',
          menuName: '个人设置',
          sort: 2,
        },
      },
    ],
  },
];
