<template>
  <div class="home-swipper">
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

      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>





  </div>
</template>


<script>


// Import Swiper styles
// import cute from '../../../assets/img/home'
import cute from '../../../assets/img/home/banner_1.png'
export default {
  name: 'HomeSwipper',
  data () {
    return {

      list: [
        // { id: 0, imgUrl: '@/assets/img/home/banner_1.png' },
        { id: 0, imgUrl: cute },
        { id: 1, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg' }
      ],
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',

        },
        // Some Swiper option/callback...
      }
    }
  },

  computed: {
    showSwiper () {
      return this.list.length
    }
  }

}
</script>


<style lang="scss" scoped>
.home-swipper {
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

