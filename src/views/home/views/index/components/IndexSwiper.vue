<template>
  <!-- 
  <div class="index-swiper">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="item of list"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt=""
        >
      </swiper-slide>

      <div class="swiper-pagination">asasda</div>
    </swiper>
  </div> -->
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for="item of list"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt=""
        >
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>

    </swiper>
  </div>
</template>


<script>

import 'swiper/css/swiper.css';


export default {
  name: 'IndexSwiper',
  data () {
    return {

      swiperOptions: {

        // pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,

        loop: true,

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '">' + (index + 1) + '</span>';
          // },
        },
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,

        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

      }
    }
  },
  props: {
    list: Array
  },

  computed: {
    showSwiper () {

      return this.list.length
    }
  }

}
</script>


<style lang="scss" scoped>
.index-swiper {
  // overflow: hidden;
  // width: 100%;
  // height: 0;
  // padding-bottom: 31.25%;
  background: #eee;
  .swiper-img {
    width: 100%;
  }
  .my-bullet-active {
    background-color: #000;
    width: 20px;
  }
  .swiper-pagination {
    width: 20px;
    height: 20px;
  }
}
:deep(.swiper-pagination-bullet-active) {
  border-radius: 1px;
  width: 30px;
  background-color: #fff;
}
:deep(.swiper-pagination-bullet) {
  border-radius: 1px;
  width: 30px;
}
</style>

