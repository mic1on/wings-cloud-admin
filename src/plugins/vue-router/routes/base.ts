import Index from '@/views/index.vue';

export default [
  {
    path: '/',
    component: Index,
    redirect: import.meta.env.APP_FIRST_ROUTE,
    meta: { requiresAuth: false, layout: '', isMenu: false },
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403.vue'),
    meta: { requiresAuth: false, layout: '', isMenu: false },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { requiresAuth: false, layout: '', isMenu: false },
  },
];
