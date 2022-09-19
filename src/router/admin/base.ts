import Router from '@/layouts/router.vue';

export default [
  {
    path: '/admin/home',
    name: 'admin.home',
    component: Router,
    meta: {
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'HomeOutline',
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
          iconType: 'cli',
          icon: 'LaptopOutline',
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
          iconType: 'cli',
          icon: 'SpeedometerOutline',
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
      isMenu: true,
      requiresAuth: true,
      iconType: 'cli',
      icon: 'InformationCircleOutline',
      menuName: '关于',
      sort: 6,
    },
  },
];
