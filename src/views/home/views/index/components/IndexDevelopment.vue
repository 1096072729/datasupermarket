<template>
  <div class="index-development">

    <img
      src="@/assets/img/home/serverbg.png"
      alt=""
      class="bgImg"
    >
    <div class="development-title">开发服务</div>


    <div class="swipper">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide
          v-for="item of list"
          :key="item.id"
          class="swiper-slide"
        >
          <div class="img-box">
            <img
              class="swiper-img"
              src="@/assets/img/home/icon01.png"
              alt=""
            >
          </div>
        </swiper-slide>
      </swiper>

      <!-- <div class="swiper-button-prev">
        ..
      </div> -->
      <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <!-- <div class="swiper-button-next"></div> -->
      <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
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
  name: 'IndexDevelopment',
  data () {
    return {
      swiperNumber: 0,
      activeIndex: 1,
      swiperOptions: {
        effect: 'coverflow',
        centeredSlides: true,
        spaceBetween: '16%',
        slidesPerView: 3,
        loop: true,
        autoplay: false, // 是否自动播放
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        pagination: { // 分页器
          el: '.swiper-pagination',
          type: 'fraction',
        },
      },



      list: ['', '', '']
    }

  },
  props: {
    developmentList: Array
  },
  watch: {
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },

  }
}

</script>

<style lang="scss" scoped>
.index-development {
  display: flex;
  flex-direction: column;
  .bgImg {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
  }
  .development-title {
    padding: 36px 0;
    font-weight: 600;
    margin: 0 auto;
    font-size: 24px;
  }
  .swipper {
    text-align: center;
    margin-top: 24px;
    .swiper-slide {
      position: relative;
      left: 45%;
      margin: 0 auto;
      width: 100px;
      .img-box {
        background-color: #345dff;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        .swiper-img {
          position: relative;
          top: 20px;
          width: 70%;
          text-align: center;
        }
      }
    }
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
