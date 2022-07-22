<template>
  <div class="service">
    <span class="service-title">数据产品超市服务保障</span>
    <div class="service-content">
      <div
        class="content-out-box animate__animated animate__flipInY"
        v-for="item,index of serviceList "
        :key="index"
        :style="{ animationDelay: index*0.3 +'s' }"
      >
        <div class="content-in-box">
          <img
            class="item-img"
            :src="item.imgUrl"
            alt=""
          >
          <div class="describe">
            <span class="item-title">{{item.title}}</span>
            <span
              class="item-content"
              v-for="ite,inde of item.content"
              :key="inde"
            >{{ite}}</span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

// import axios from 'axios'
export default {
  name: 'InvitationService',
  data () {
    return {

    }
  },
  props: {
    serviceList: {
      type: Array,
      default: () => []
    }
  },
  methods: {

  }

}
</script>


<style lang="scss" scoped>
.service {
  background-color: #fff;
  margin: 0 auto;
  padding: 36px 500px;
  display: flex;
  flex-direction: column;
  height: 270px;
  .service-title {
    padding: 36px 0;
    font-weight: 600;
    margin: 0 auto;
    font-size: 24px;
  }
  .service-content {
    padding: 36px 0;
    display: flex;
    justify-content: space-around;
    .content-out-box {
      width: 220px;
      .content-in-box {
        display: flex;
        .item-img {
          width: 60px;
          height: 60px;
        }
        .describe {
          padding: 8px;
          display: flex;
          flex-direction: column;
          .item-title {
            color: #333333;
            padding: 0 16px 8px 16px;
            font-size: 18px;
            font-weight: 500;
          }
          .item-content {
            // padding: 8px;
            line-height: 20px;
            color: #999999;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>