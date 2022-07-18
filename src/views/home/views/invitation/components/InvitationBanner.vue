<template>
  <div class="banner">
    <div class="banner-title-box">
      <h1 class="banner-top-title">汇聚各界合作伙伴</h1>
      <h1 class="banner-bottom-title">共建数据产业新生态</h1>
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

    }
  },
  props: {
    banner: String
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