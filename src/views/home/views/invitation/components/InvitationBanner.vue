<template>
  <div class="banner">
    <div class="banner-title-box">
      <h1 class="animate__animated animate__fadeInDown banner-top-title">汇聚各界合作伙伴</h1>
      <!-- v-if="list[0]" -->
      <!-- v-if="list[1]" -->
      <h1
        class=" animate__animated animate__fadeInUp banner-bottom-title"
        :style="{ animationDelay: 0.3 +'s' }"
      >共建数据产业新生态</h1>
    </div>
    <img
      class="banner-img"
      :src="banner"
      alt=""
    >


  </div>

</template>

<script>



export default {
  name: 'InvitationBanner',
  data () {
    return {
      list: [false, false],
      a: true,
    }
  },
  props: {
    banner: String
  },
  methods: {
    showList (i) {
      console.log(i)
      console.log(this.list)
      let that = this
      console.log(this, 'this')
      if (i < this.list.length) {
        this.list[i] = true
        console.log(that, 'that')
        that.showList(i + 1)
        setTimeout(console.log('111'), 5000)
      }
    }
  },
  mounted () {

    this.showList(0);
  },
  activated () {
  }
}
</script>


<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  background-color: #0038b7;
  height: 300px;
  .banner-title-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 90px;
    bottom: 90px;
    height: 100px;
    position: absolute;
    left: 500px;
    color: white;
    .banner-top-title {
      // animation-delay: 1s;
      // animate-duration: 10s; //动画持续时间
      // animate-delay: 1s; //动画延迟时间
      // animate-iteration-count: 2; //动画执行次数
      font-size: 36px;
    }
    .banner-bottom-title {
      // animation-delay: 0.3s;
      font-size: 36px;
    }
  }
  .banner-img {
    height: 300px;
    position: absolute;
    right: 500px;
  }
}
</style>