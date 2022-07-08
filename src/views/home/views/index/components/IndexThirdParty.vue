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
          <br>
          <p class="content-synopsis">{{item.synopsis}}</p>


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
        effect: 'coverflow',
        spaceBetween: 50,
        freeMode: true,
        slidesPerView: 5,
        initialSlide: 2,  
        centeredSlides: true,
        coverflowEffect: {
          rotate: 5,
          stretch: 1,
          depth: 10,
          modifier: 3,
          slideShadows: true
        },
      }
    }
  },
  props: {
    thirdPartyList: Array,
  },
  watch: {
    thirdPartyList () {
      console.log(this.thirdPartyList)
    }
  }
}
</script>


<style lang="scss" scoped>
.index-third-party {
  margin: 0 auto;
  max-width: 1000px;
  .third-party-title {
    text-align: center;
    font-size: 24px;
  }
  .swiper {
    margin: 24px;
    .swiper-slide {
      min-width: 0px;
      background-color: #fff;
      .content-img {
        width: 100%;
      }
      .content-title {
        font-size: 16px;
      }
      .content-synopsis {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        /* autoprefixer: ignore next */
        -webkit-box-orient: vertical;
        font-size: 12px;
      }
    }
  }
}
</style>