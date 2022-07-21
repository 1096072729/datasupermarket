<template>
  <div class="home">

    <home-header></home-header>

      <router-view />
 

  </div>
</template>

<script>

import HomeHeader from '@/views/home/components/HomeHeader.vue'


export default {
  name: 'HomeView',
  data () {
    return {
      routes: [],

    }
  },
  // mixins: [drawMixin],
  components: {
    HomeHeader
  }
}
</script>


<style lang="scss" scoped>
// .home {
//   font-size: 12px;
//   line-height: 16px;
//   transform-origin: 0 0;
//   // position: relative;
//   position: fixed;
//   background-color: #f0f2f5;
//   // position: relative;
//   left: 50%;
//   top: 50%;
//   transform: 0.3s;
// }
</style>