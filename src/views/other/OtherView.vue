<template>
  <div class="other">
    <keep-alive exclude="InvitaionView">
      <home-header></home-header>
    </keep-alive>


    <router-view />

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