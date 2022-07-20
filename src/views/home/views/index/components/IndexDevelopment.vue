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
          v-for="item,index of developmentList"
          :key="index"
          class="swiper-slide"
          @mousemove="timeoutShowNavigation(index)"
        >
          <div class="img-box">
            <img
              class="swiper-img"
              src="@/assets/img/home/icon01.png"
              alt=""
            >
          </div>
          <span class="item-title">{{item.title}}</span>
        </swiper-slide>
      </swiper>
      <!-- <div class="swiper-button-prev navigation"></div>

      <div class="swiper-button-next navigation"></div> -->
      <div
        class="navigation-box"
        v-if="showNavigation"
      >
        <img
          @click="pre"
          class="preImg"
          :src="developmentList[0].preImg"
          alt=""
        >
      </div>
      <div
        class="navigation-box"
        v-if="showNavigation"
      > <img
          @click="next"
          class="nextImg"
          :src="developmentList[0].nextImg"
          alt=""
        ></div>

    </div>











    <div
      class="text-content"
      v-if="developmentList.length>0"
    >
      <div
        v-for="item,index of developmentList[swiperNumber].show"
        :key="index"
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
      swiperNumber: 1,
      activeIndex: 1,
      showNavigation: false,
      timer: null,
      swiperOptions: {
        effect: 'coverflow',
        centeredSlides: false,
        spaceBetween: '16%',
        slidesPerView: 3,
        loop: true,
        autoplay: false, // 是否自动播放
        initialSlide: 2,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // on: {
        //   slideChangeTransitionStart: function () {
        //     this.swiperNumber = this.swiper.activeIndex - 4
        //   },
        // },


      },




    }

  },
  props: {
    developmentList: Array
  },
  watch: {
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    next () {
      this.swiper.slideNext()
      this.swiperNumber = this.swiper.activeIndex - 4
      console.log(this.swiperNumber)
    },
    pre () {

      this.swiper.slidePrev()
      this.swiperNumber = this.swiper.activeIndex - 4
    },
    timeoutShowNavigation (index) {
      console.log(index + 'asdasd' + this.swiperNumber)
      if (index == this.swiperNumber) {
        const that = this
        this.showNavigation = true;
        if (this.timer)
          clearTimeout(this.timer)
        this.timer = setTimeout(() => that.showNavigation = false, 5000)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.index-development {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 630px;
  .bgImg {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 630px;
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
      height: 150px;
      margin: 0 auto;
      width: 100px;
      .img-box {
        background-color: #0090ff;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        position: relative;
        left: 170px;
        font-size: 24px;
        .swiper-img {
          position: relative;
          top: 20px;
          width: 60px;
          height: 60px;
          text-align: center;
        }
      }
      .item-title {
        position: relative;
        top: 20px;
        font-size: 24px;
      }
    }
    // height: 1000px;
  }
  .text-content {
    position: relative;
    top: 100px;
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
        font-size: 18px;

        color: #333333;
      }
      .content-synopsis {
        line-height: 24px;
        font-size: 12px;
        color: #999999;
      }
    }
  }
  .swiper-button-next {
    position: absolute;
    top: 160px;
    right: 830px;
  }
  .swiper-button-prev {
    position: absolute;
    top: 160px;
    left: 830px;
  }
  .preImg {
    z-index: 10;
    position: relative;
    right: 100px;
    bottom: 110px;
    width: 30px;
  }
  .nextImg {
    z-index: 10;
    position: relative;
    left: 100px;
    bottom: 110px;
    width: 30px;
  }
  .navigation-box {
    height: 0px;
  }
}
</style>
