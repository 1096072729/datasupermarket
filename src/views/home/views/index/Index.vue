<template>
  <div class="index">


    <index-swipper :list="swiperList"></index-swipper>
    <index-recommend :recommendList="recommendList"></index-recommend>
    <index-development :developmentList="developmentList"></index-development>
    <index-third-party :thirdPartyList="thirdPartyList"></index-third-party>
  </div>
</template>

<script>



import IndexSwipper from '@/views/home/views/index/components/IndexSwiper.vue'
import IndexRecommend from '@/views/home/views/index/components/IndexRecommend.vue'
import IndexDevelopment from '@/views/home/views/index/components/IndexDevelopment.vue'
import IndexThirdParty from '@/views/home/views/index/components/IndexThirdParty.vue'

import axios from 'axios'
export default {
  name: 'IndexView',
  data () {
    return {
      swiperList: [],
      recommendList: [],
      developmentList: [],

    }
  },
  components: {

    IndexSwipper,
    IndexRecommend,
    IndexDevelopment,
    IndexThirdParty
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
        this.thirdPartyList = data.thirdPartyList
      }
    }
  },
  mounted () {

    this.getHomeInfo();
  }
}
</script>


<style lang="scss" scoped>
</style>