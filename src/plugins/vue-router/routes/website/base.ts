export default [
  {
    path: '/website',
    name: 'website',
    redirect: import.meta.env.APP_FIRST_ROUTE,
    component: () => import('@/views/website/index.vue'),
    meta: { requiresAuth: false, layout: '', isMenu: false },
  },
  {
    path: '/website/home',
    name: 'website.home',
    component: () => import('@/views/website/home/index.vue'),
    meta: { requiresAuth: false, layout: 'website', isMenu: false },
  },
  {
    path: '/website/usage',
    name: 'website.usage',
    component: () => import('@/views/website/usage/index.vue'),
    meta: { requiresAuth: false, layout: 'website', isMenu: false },
  },
];
