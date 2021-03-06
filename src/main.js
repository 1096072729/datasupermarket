import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import '@/utils/rem';
import './utils/mock/mockHome.js';
import './utils/mock/user.js';
import './utils/mock/production.js';
import './utils/mock/invitation.js';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css';
import '@/assets/styles/icon/iconfont.css';
import 'animate.css';

import Carousel3d from 'vue-carousel-3d';
// import Antd from 'ant-design-vue'; //增加
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd);
//Vue.use(Button)修改
Vue.config.productionTip = false;
Vue.use(Carousel3d);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
