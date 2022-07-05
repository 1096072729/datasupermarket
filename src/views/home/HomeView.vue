<template>
  <div class="home">

    <HomeHeader></HomeHeader>
    <home-swipper></home-swipper>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeHeader from '@/views/home/components/HomeHeader.vue'
import HomeSwipper from '@/views/home/components/HomeSwipper.vue'
export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeSwipper
  }
}
</script>


<style lang="scss" scoped>
</style>