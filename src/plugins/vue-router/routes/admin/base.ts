import LayoutRouter from '@/components/layout/layout-router.vue';
import { IconTypeEnum } from '@/enums';

export default [
  {
    path: '/admin/home',
    name: 'admin.home',
    component: LayoutRouter,
    meta: {
      isAdmin: true,
      requiresAuth: true,
      iconType: IconTypeEnum.ELEMENT_PLUS,
      icon: 'House',
      menuName: '首页',
      sort: 0,
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
          menuName: '工作台',
          sort: 0,
        },
      },
      {
        path: '/admin/home/visual',
        name: 'admin.home.visual',
        component: () => import('@/views/admin/home/visual.vue'),
        meta: {
          layout: 'admin',
          requiresAuth: true,
          iconType: IconTypeEnum.ELEMENT_PLUS,
          icon: 'Odometer',
          menuName: '仪表盘',
          sort: 1,
        },
      },
    ],
  },
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
      menuName: '关于',
      sort: 6,
      externalPage: false,
      externalPageUrl: '',
    },
  },
];
