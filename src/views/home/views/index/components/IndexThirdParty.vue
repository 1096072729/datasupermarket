<template>
  <div
    class="index-third-party"
    @mouseover="navigation=true"
    @mouseout="navigation=false"
  >
    <div class="third-party-title">
      第三方服务
    </div>

    <div class="swiper">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="item of thirdPartyList"
          :key="item.id"
        >

          <img
            class="content-img"
            :src="item.imgUrl"
            alt=""
          >
          <strong class="content-title">
            {{item.title}}
          </strong>
          <div class="horizontal-line">
            <!-- v-show="swiper.activeIndex==index" -->
          </div>
          <br>
          <span class="content-synopsis">{{item.synopsis}}</span>


        </swiper-slide>

      </swiper>
    </div>
    <div class="swiper-navigation">

      <div
        class="swiper-prev"
        @click="prev"
        v-show="navigation"
      ><span class="iconfont font">&#xe685;</span></div>
      <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <div
        class="swiper-next"
        @click="next"
        v-show="navigation"
      ><span class="iconfont font">&#xe666;</span></div>
      <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexThirdParty',
  data () {
    return {
      swiperOptions: {
        loop: true,
        effect: 'coverflow',
        spaceBetween: 40,
        // freeMode: true,
        initialSlide: 2,
        slidesPerView: 4.5,
        // initialSlide: 2,
        centeredSlides: true,

        coverflowEffect: {
          rotate: 5,
          stretch: 1,
          depth: 20,
          modifier: 3,
          slideShadows: false
        },
        // on: {
        //   slideChangeTransitionStart () {
        //     this.swiper.activeIndex
        //     //你的事件
        //   },
        // },
      },
      navigation: false
    }
  },
  methods: {
    prev () {
      this.swiper.slidePrev()
    },
    next () {
      this.swiper.slideNext()
    }
  }
  ,
  props: {
    thirdPartyList: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },


  },

  watch: {
    'swiper.activeIndex': {
      handler (newValue, oldValue) {
        console.log(newValue, oldValue)
        console.log('numbers正在被侦听')
      },
      deep: true,
      // immediate: true
    }
  }
}
</script>


<style lang="scss" scoped>
.index-third-party {
  margin: 24px 0;
  padding: 0 400px;
  width: 1100px;
  .third-party-title {
    text-align: center;
    font-size: 24px;

    font-weight: 600;
  }
  .swiper {
    margin: 24px;
    .swiper-slide {
      padding-buttom: 36px;
      min-width: 0px;
      background-color: #fff;
      .content-img {
        width: 100%;
      }
      .horizontal-line {
        // display: block;
        // min-width: 100px;

        // max-width: 500px;
        // width: 80px;
        border-bottom: 4px solid #0090ff;
      }
      .content-title {
        color: #0090ff;
        // padding: 24px 5px;
        line-height: 30px;
        margin-top: 24px;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /*2行*/
        -webkit-box-orient: vertical;
      }
      .content-synopsis {
        color: #999999;
        display: inline-block;
        // height: 200px;
        overflow: hidden;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /*2行*/
        -webkit-box-orient: vertical;
      }
    }
  }
  .swiper-navigation {
    height: 0;
    display: flex;
    justify-content: space-between;
    .swiper-prev {
      position: relative;
      right: 390px;
      bottom: 250px;
      height: 0px;
      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid black;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      .font {
        font-size: 24px;
      }
    }
    .swiper-next {
      position: relative;
      left: 390px;
      bottom: 250px;
      height: 0px;
      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid black;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      .font {
        font-size: 24px;
      }
    }
  }
}
</style>