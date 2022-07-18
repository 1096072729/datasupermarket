<template>
  <div class="banner">
    <div class="banner-title-box">
      <h1
        class="animate__animated animate__bounceInDown banner-top-title"
        v-show="list[0]"
      >汇聚各界合作伙伴</h1>
      <h1
        class=" animate__animated animate__bounceInUp banner-bottom-title"
        v-show="list[1]"
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
      let that = this
      if (i < this.list.length) {
        this.list[i] = true
        setTimeout(that.showList(i + 1), 50000)
      }
    }
  },
  mounted () {

  },
  activated () {
    this.showList(0);
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
      // animate-duration: 10s; //动画持续时间
      // animate-delay: 1s; //动画延迟时间
      // animate-iteration-count: 2; //动画执行次数
      font-size: 36px;
    }
    .banner-bottom-title {
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