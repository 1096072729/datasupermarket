<template>
  <div class="index-development">

    <img
      src="@/assets/img/home/serverbg.png"
      alt=""
      class="bgImg"
    >
    <div class="development-title">开发服务</div>


    <!-- <div class="swipper">
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

    </div> -->

    <div>
      <div class="box">
        <carousel-3d
          :autoplay="true"
          :autoplayTimeout="3000"
          :perspective="35"
          :display="5"
          :animationSpeed="1000"
          :width="600"
          :height="270"
          controlsVisible
          :controlsHeight="60"
          @after-slide-change="imgClick(1,1)"
        >
          <slide
            v-for="(item, i) in slides"
            :index="i"
            :key="i"
          >
            <template slot-scope="obj">
              <img
                :src="item.src"
                @click="imgClick(item,obj)"
              />
            </template>
          </slide>
        </carousel-3d>
      </div>
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

import { Carousel3d, Slide } from 'vue-carousel-3d'
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

      slides: [
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
      ]


    }

  },
  components: {
    Carousel3d,
    Slide
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
    },
    imgClick (data, obj) {
      console.log(data, obj)
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
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /*2行*/
        -webkit-box-orient: vertical;
        color: #333333;
      }
      .content-synopsis {
        line-height: 24px;
        font-size: 12px;
        color: #999999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; /*2行*/
        -webkit-box-orient: vertical;
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
