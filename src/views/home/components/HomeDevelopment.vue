<template>
  <div class="home-development">
    <img
      src="../../../assets/img/home/serverbg.png"
      alt=""
      class="bgImg"
    >
    <div class="development-title">开发服务</div>






    <div class="swipper">
      swipper
    </div>











    <div
      class="text-content"
      v-if="developmentList.length>0"
    >
      <div
        v-for="item of developmentList[swiperNumber].show"
        :key="item.id"
        class="in-content-box"
      >

        <el-card
          :body-style="{ padding: '0px' }"
          class="content-cart"
        >
          <div class="img-box">
            <img
              :src="item.imgUrl"
              class="cart-image"
            >
          </div>
          <div>
            <strong class="content-title">{{item.title}}</strong>

            <p class="content-synopsis">{{item.synopsis}}</p>

          </div>
        </el-card>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeDevelopment',
  data () {
    return {
      swiperNumber: 0,

    }

  },
  props: {
    developmentList: Array
  },
  watch: {
    developmentList () {
      console.log('asdasd')
      console.log(this.developmentList[this.swiperNumber].show)
    }
  }
}

</script>

<style lang="scss" scoped>
.home-development {
  display: flex;
  // margin-top: 24px;
  flex-direction: column;

  // background-size: cover;
  // background: url('../../../assets/img/home/serverbg.png') no-repeat;
  .bgImg {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
  }
  .development-title {
    margin-top: 24px;
    font-size: 24px;
    text-align: center;
  }
  .swipper {
    text-align: center;
    margin-top: 24px;
    // height: 1000px;
  }
  .text-content {
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    .in-content-box {
      position: relative;
      padding: 20px;
      box-sizing: border-box;
      width: 25%;
      .content-cart {
        // box-sizing: border-box;
        .img-box {
          .cart-image {
            width: 100%;
          }
        }
      }
      .content-title {
        position: absolute;
        top: 50px;
        left: 30px;
        font-size: 16px;

        color: #333333;
      }
      .content-synopsis {
        line-height: 24px;
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
</style>