//
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
          isAuth: true,
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
          isAuth: true,
          title: '资源目录',
        },
        component: () =>
          import('../views/home/views/production/components/APItest.vue'),
      },
      {
        path: '/create',
        meta: {
          isAuth: true,
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
          isAuth: true,
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
// router.afterEach((to, next) => {
//   if (to.meta.isAuth == true) {
//     const username = store.state.user.username;
//     if (username !== '') {
//       next();
//     }
//   }
// });
//使用meta

// router.beforeEach(to => {
//   // if (to.meta.isAuth) {
//   //   if (store.state.user.username !== '') {
//   //     return to;
//   //   }
//   // }
//   console.log(to);
//   console.log('asdddddddddddddddddddddddddddddddddaaaaaasdasdasdasd   ');
//   return '/auth/login';
// });

export default router;
