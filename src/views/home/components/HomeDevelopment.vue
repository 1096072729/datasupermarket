<template>
  <div class="home-development">
    <div class="development-title">开发服务</div>

    <div class="swipper">
      swipper
    </div>
    <div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeDevelopment',
  data () {
    return {

    }
    // developmentList: [
    //   { id: 1, imgUrl: '../../../assets/img/home/icon01.png' },
    //   { id: 2, imgUrl: '../../../assets/img/home/icon02.png' },
    //   { id: 3, imgUrl: '../../../assets/img/home/serverbg.png' }]
  },
  props: {
    developmentList: Array
  }
}

</script>

<style lang="scss" scoped>
.home-development {
  background-size: cover;
  background: url('../../../assets/img/home/serverbg.png') no-repeat;
  margin-top: 24px;
  .development-title {
    font-size: 24px;
    text-align: center;
  }
  .swipper {
    height: 1000px;
  }
}
</style>