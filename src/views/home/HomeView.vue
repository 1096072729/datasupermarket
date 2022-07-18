<template>
  <div
    class="home"
  >

    <home-header></home-header>
    <keep-alive>

      <router-view />
    </keep-alive>

  </div>
</template>

<script>

import HomeHeader from '@/views/home/components/HomeHeader.vue'
// import drawMixin from "@/utils/drawMixin.js";

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
  },
  mounted () {
    // this.routes = this.$router.options.routes;
    // console.log(this.routes);
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