<template>
  <div class="index-development">

    <img
      src="@/assets/img/home/serverbg.png"
      alt=""
      class="bgImg"
    >
    <div class="development-title">开发服务</div>


    <div class="swipper">
      <!-- <swiper
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
      </swiper> -->


      <!-- v-if="showNavigation" -->

    </div>

    <div>
      <div class="box">
        <carousel-3d
          class="carousel"
          ref="caeousel"
          :perspective="35"
          :display="5"
          :animationSpeed="1000"
          :width="800"
          :height="270"
          controlsVisible
          :controlsHeight="60"
          @after-slide-change="imgClick(item,1)"
          @mouseout="showNavigation=false"
        >
          <slide
            class="carousel-slide"
            v-for="(item, i) in developmentList"
            :index="i"
            :key="i"
            @mouseout="showNavigation=false"
          >
            <template slot-scope="obj">
              <!-- <img
                :src="item.src"
                @click="imgClick(item,obj)"
              /> -->
              <div
                @click="imgClick(obj)"
                class="slide-item"
                @mouseover="obj.isCurrent==true?(showNavigation=true):showNavigation=false"
              >
                <div class="img-box">
                  <img
                    class="carousel-img"
                    :src="item.titleImg"
                    alt=""
                  >
                  <!-- <img
                    class="carousel-img"
                    src="@/assets/img/home/icon01.png"
                    alt=""
                  > -->
                </div>
                <span class="item-title">{{item.title}}</span>
                <div
                  v-if="obj.isCurrent==true"
                  class="horizontal-line"
                ></div>

              </div>
            </template>
          </slide>
        </carousel-3d>
        <div v-show="showNavigation">

          <div class="navigation-box animate__animated animate__fadeIn">
            <img
              @click="pre"
              class="preImg"
              :src="developmentList[0].preImg"
              alt=""
            >

          </div>
          <div class="navigation-box animate__animated animate__fadeIn "> <img
              @click="next"
              class="nextImg"
              :src="developmentList[0].nextImg"
              alt=""
            >
          </div>
        </div>

      </div>

    </div>










    <div
      class="text-content"
      @mouseover="showNavigation=false"
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





    }

  },
  components: {
    Carousel3d,
    Slide
  },
  props: {
    developmentList: {
      type: Array,
      default: () => []
    }
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
      this.$refs.caeousel.goNext()
      this.swiperNumber = (this.swiperNumber + 1) % 3
      console.log(this.$refs.caeousel)
    },
    pre () {
      this.$refs.caeousel.goPrev()
      this.swiperNumber = (this.swiperNumber + 2) % 3
      // if (this.swiperNumber == 0) {
      //   this.swiperNumber = 3
      // }
      // this.swiper.slidePrev()
      // this.swiperNumber = this.swiper.activeIndex - 4
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
    imgClick (obj) {
      this.swiperNumber = obj.index
      console.log(obj)
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
  .carousel {
    .carousel-slide {
      border: 0px;
      background-color: rgba(165, 42, 42, 0);
      .slide-item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .img-box {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #0090ff;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          .carousel-img {
            width: 100px;
          }
        }
        .item-title {
          max-width: 100%;
          line-height: 36px;
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1; /*2行*/
          -webkit-box-orient: vertical;
        }
        .horizontal-line {
          width: 80px;
          border-bottom: 4px solid #0090ff;
        }
      }
    }
  }
  // .swipper {
  //   text-align: center;
  //   margin-top: 24px;
  //   .swiper-slide {
  //     height: 150px;
  //     margin: 0 auto;
  //     width: 100px;
  //     .img-box {
  //       background-color: #0090ff;
  //       border-radius: 50%;
  //       width: 100px;
  //       height: 100px;
  //       position: relative;
  //       left: 170px;
  //       font-size: 24px;
  //       .swiper-img {
  //         position: relative;
  //         top: 20px;
  //         width: 60px;
  //         height: 60px;
  //         text-align: center;
  //       }
  //     }
  //     .item-title {
  //       position: relative;
  //       top: 20px;
  //       font-size: 24px;
  //     }
  //   }
  //   // height: 1000px;
  // }
  .text-content {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    bottom: 50px;
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
        max-width: 100px;
      }
      .content-synopsis {
        height: 90px;
        padding: 8px;
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
  // .swiper-button-next {
  //   position: absolute;
  //   top: 160px;
  //   right: 830px;
  // }
  // .swiper-button-prev {
  //   position: absolute;
  //   top: 160px;
  //   left: 830px;
  // }

  .navigation-box {
    width: 100%;
    text-align: center;
    height: 0px;

    .preImg {
      z-index: 10;
      position: relative;
      right: 110px;
      bottom: 180px;
      width: 35px;
    }
    .nextImg {
      z-index: 10;
      position: relative;
      left: 110px;
      bottom: 180px;
      width: 35px;
    }
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
