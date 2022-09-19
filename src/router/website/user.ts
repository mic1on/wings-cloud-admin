export default [
  {
    path: '/website/user/login',
    name: 'website.user.login',
    component: () => import('@/views/website/user/login.vue'),
    meta: { requiresAuth: false, layout: '', isMenu: false },
  },
  {
    path: '/website/user/password-forget',
    name: 'website.user.password.forget',
    component: () => import('@/views/website/user/password-forget.vue'),
    meta: { requiresAuth: false, layout: '', isMenu: false },
  },
  {
    path: '/website/user/password-update',
    name: 'website.user.password.update',
    component: () => import('@/views/website/user/password-update.vue'),
    meta: { requiresAuth: false, layout: '', isMenu: false },
  },
  {
    path: '/website/user/signup',
    name: 'website.user.signup',
    component: () => import('@/views/website/user/signup.vue'),
    meta: { requiresAuth: false, layout: '', isMenu: false },
  },
];
