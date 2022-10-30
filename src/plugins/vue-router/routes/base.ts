import Index from '../../../views/index.vue';
import { DefaultSettings } from '../../../settings';

export default [
  {
    path: '/',
    component: Index,
    redirect: DefaultSettings.FirstRoute,
    meta: { requiresAuth: false, layout: '', isAdmin: false },
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403.vue'),
    meta: { requiresAuth: false, layout: '', isAdmin: false },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { requiresAuth: false, layout: '', isAdmin: false },
  },
];
