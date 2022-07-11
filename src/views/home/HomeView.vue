<template>
  <div
    class="home"
    ref="appRef"
  >

    <home-header></home-header>
    <router-view />

  </div>
</template>

<script>

import HomeHeader from '@/views/home/components/HomeHeader.vue'
import drawMixin from "@/utils/drawMixin.js";

export default {
  name: 'HomeView',
  data () {
    return {
      routes: [],

    }
  },
  mixins: [drawMixin],
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
.home {
  line-height: 8px;
  transform-origin: 0 0;
  position: fixed;
  background-color: #f0f2f5;
  // position: relative;
  left: 50%;
  top: 50%;
  transform: 0.3s;
}
</style>