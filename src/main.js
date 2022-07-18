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
// import './utils/mock/index.js';

Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
