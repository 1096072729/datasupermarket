import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/home/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',

    component: HomeView,
    children: [
      {
        path: '/home/index',
        meta: {
          title: '首页',
        },
        component: () => import('../views/home/views/index/Index.vue'),
      },
      {
        path: '/home/production',
        meta: {
          title: '产品中心',
        },

        component: () =>
          import('../views/home/views/production/ProductionView.vue'),
      },
      {
        path: '',
        meta: {
          title: '需求大厅',
        },
      },
      {
        path: '/test',
        meta: {
          title: '资源目录',
        },
        component: () =>
          import('../views/home/views/production/components/APItest.vue'),
      },
      {
        path: '/create',
        meta: {
          title: '通知公告',
        },
        component: () =>
          import(
            '../views/home/views/production/components/CreateProduction.vue'
          ),
      },
      {
        path: '',
        meta: {
          title: '诚邀加入',
        },
      },
      {
        path: '/detail',
        meta: {
          title: '关于我们',
        },
        component: () =>
          import('../views/home/views/production/components/Detail.vue'),
      },
    ],
  },
  // {
  //   path: '/detail',
  //   meta: {
  //     title: '详情',
  //   },
  //   component: () =>
  //     import('../views/home/views/production/components/Detail.vue'),
  // },
  {
    path: '/auth',

    component: () => import('../views/auth/AuthView.vue'),
    children: [
      {
        path: '/auth/login',
        meta: {
          title: '登录',
        },
        component: () => import('../views/auth/views/login/LoginView.vue'),
      },
      {
        path: '/auth/signup',
        meta: {
          title: '注册',
        },
        component: () => import('../views/auth/views/signup/SignupView.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
