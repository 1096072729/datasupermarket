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
</style>