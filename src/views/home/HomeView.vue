<template>
  <div class="home">

    <home-header></home-header>
    <home-swipper :list="swiperList"></home-swipper>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-development :developmentList="developmentList"></home-development>
    <home-third-party></home-third-party>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeHeader from '@/views/home/components/HomeHeader.vue'
import HomeSwipper from '@/views/home/components/HomeSwipper.vue'
import HomeRecommend from '@/views/home/components/HomeRecommend.vue'
import HomeDevelopment from '@/views/home/components/HomeDevelopment.vue'
import HomeThirdParty from '@/views/home/components/HomeThirdParty.vue'

import axios from 'axios'
export default {
  name: 'HomeView',
  data () {
    return {
      swiperList: [],
      recommendList: [],
      developmentList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwipper,
    HomeRecommend,
    HomeDevelopment,
    HomeThirdParty
  },
  methods: {
    getHomeInfo () {
      axios.get("http://localhost:8080/api/home")
        .then((res) => {
          this.getHomeInfoSuc(res);
        })
    },
    getHomeInfoSuc (res) {
      const data = res.data;
      if (data.length !== 0) {
        //获取各个数据home的组件数据
        this.swiperList = data.homeSwipper;
        this.recommendList = data.recommendList;
        this.developmentList = data.developmentList;

      }
    }
  },
  mounted () {
    this.getHomeInfo()
    console.log(this.$router.options.routes)
  }
}
</script>


<style lang="scss" scoped>
</style>