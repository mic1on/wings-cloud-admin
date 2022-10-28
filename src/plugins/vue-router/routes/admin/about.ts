export default [
  {
    path: '/admin/about',
    name: 'admin.about',
    component: () => import('@/views/admin/about.vue'),
    meta: {
      layout: 'admin',
      isAdmin: true,
      requiresAuth: true,
      sort: 6,
      isI18n: true,
      i18nKey: 'admin.about',
    },
  },
];
