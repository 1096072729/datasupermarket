<template>
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

      <!-- <div
        class="swiper-pagination"
        slot="pagination"
      ></div> -->
    </swiper>





  </div>
</template>


<script>


// Import Swiper styles
// import cute from '../../../assets/img/home'

export default {
  name: 'IndexSwiper',
  data () {
    return {

      swiperOptions: {
        // effect: 'coverflow',
        // slidesPerView: 3,
        // centeredSlides: true,
        // coverflowEffect: {
        //   rotate: 15,
        //   stretch: 10,
        //   depth: 60,
        //   modifier: 2,
        //   slideShadows: true
        // },
        loop: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'custom',
        // },
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },

        // Some Swiper option/callback...
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
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>

