<template>
  <div class="index-third-party">
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
      }
    }
  },
  props: {
    thirdPartyList: { type: Array, default: () => [] },
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
  margin: 36px auto;
  max-width: 1100px;
  .third-party-title {
    text-align: center;
    font-size: 24px;
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
}
</style>