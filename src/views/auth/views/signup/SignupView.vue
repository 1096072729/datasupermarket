<template>
  <div class="signup">

    <div class="swiper-content">
      <swiper
        ref="mySwiper"
        :options="swiperOption"
        class="show-swiper"
      >

        <swiper-slide
          :key="index"
          v-for="(item, index) in list"
        >
          <div class="swiper-item">
            <img
              :src="item"
              alt=""
            >
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupView',
  data () {
    return {
      activeIndex: 1,
      list: ['https://www.baidu.com/link?url=6Q5pVYWfoykD_JZDrXQqYAhPK0-zjAl3NdR1eog4e2yE5P6wRNCF-FQJgmrJ4oCvyBlluar-hUksVEhSfhXHzATZMv3S_Z_atMYihRcyVD7&wd=&eqid=8c2c90e0000125170000000662d113ca',
        'https://www.baidu.com/link?url=6Q5pVYWfoykD_JZDrXQqYAhPK0-zjAl3NdR1eog4e2yE5P6wRNCF-FQJgmrJ4oCvyBlluar-hUksVEhSfhXHzATZMv3S_Z_atMYihRcyVD7&wd=&eqid=8c2c90e0000125170000000662d113ca',
        'https://img1.baidu.com/it/u=1689946363,1749888826&fm=253&fmt=auto&app=138&f=PNG?w=200&h=200'],
      swiperOption: {
        // 设置slider容器能够同时显示的slides数量，默认为1， 'auto'则自动根据slides的宽度来设定数量
        slidesPerView: 'auto',
        /*
        * 开启这个参数来计算每个slide的progress(进度、进程)
        * 对于slide的progress属性，活动的那个为0，其他的依次减1
        */
        watchSlidesProgress: true,
        // 默认active slide居左，设置为true后居中
        centeredSlides: true,
        // 当你创建一个Swiper实例时是否立即初始化，这里我们手动初始化
        init: true,
        loop: true,
        on: {
          progress: function () {
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i) // 指定匹配元素集缩减值
              const slideProgress = this.slides[i].progress // 当前元素集的progress值

              let modify = 0 // 偏移权重
              if (parseInt(Math.abs(slideProgress)) > 0) {
                modify = Math.abs(slideProgress) * 0.2 // 不一定要0.2，可自行调整
              }
              const translate = slideProgress * modify * 500 + 'px' // 500是swiper-slide的宽度
              const scale = 1 - Math.abs(slideProgress) / 5 // 缩放权重值，随着progress由中向两边依次递减，可自行调整
              const zIndex = 99 - Math.abs(Math.round(10 * slideProgress))
              slide.transform(`translateX(${translate}) scale(${scale})`)
              slide.css('zIndex', zIndex)
              slide.css('opacity', 1) // 是否可见
              if (parseInt(Math.abs(slideProgress)) > 1) { // 设置了只有选中的元素以及他两遍的显示，其他隐藏
                slide.css('opacity', 0)
              }
            }
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },

  }
}
</script>


<style lang="scss" scoped>
.swiper-content {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 50px 0;

  .show-swiper {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .swiper-slide {
      width: 500px;
      // 表示所有属性都有动作效果，过度时间为0.4s，以慢速开始和结束的过渡效果
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      .swiper-item {
        width: 100%;
        height: 500px;
        background: rgb(140, 172, 134);
        border-radius: 6px;
        color: orangered;
        font-size: 24px;
        line-height: 1.5;
        border: 1px solid orangered;
      }
    }
  }
}
</style>