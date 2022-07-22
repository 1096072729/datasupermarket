<template>
  <div class="other">

    <home-header></home-header>
    <keep-alive >

      <router-view />
    </keep-alive>

  </div>
</template>

<script>

import HomeHeader from '@/views/home/components/HomeHeader.vue'


export default {
  name: 'OtherView',
  data () {
    return {
      routes: [],

    }
  },

  components: {
    HomeHeader
  },
  mounted () {

  }
}
</script>


<style lang="scss" scoped>
</style>