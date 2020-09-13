/** @format */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'public',
      component: () => import('@/layouts/PublicLayout.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/pages/DashboardPage.vue'),
        },
        {
          path: '/customer',
          name: 'customer',
          component: () => import('@/pages/CustomerPage.vue'),
        },
      ],
    },
    {path: '*', redirect: '/'},
  ],
});
