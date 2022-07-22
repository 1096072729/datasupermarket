<template>
  <div class="partner">
    <span class="partner-title">合作伙伴招募计划</span>
    <div class="partner-content">
      <div
        class="item-out-box animate__animated animate__fadeInDown"
        v-for="item,index of partnerList"
        :key="index"
        :style="{ animationDelay: index*0.3 +'s' }"
      >
        <div class="item-in-box">
          <img
            class="item-img"
            :src="item.imgUrl"
            alt=""
          >
          <span class="item-title">{{item.title}}</span>
          <span class="item-content">{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

// import axios from 'axios'
export default {
  name: 'InvitationPartner',
  props: {
    partnerList: {
      type: Array,
      default: () => []
    }
  }

}
</script>


<style lang="scss" scoped>
.partner {
  background-color: #fff;
  margin: 0 auto;
  padding: 36px 500px;
  display: flex;
  flex-direction: column;
  height: 300px;
  .partner-title {
    padding: 36px 0;
    font-weight: 600;
    margin: 0 auto;
    font-size: 24px;
  }
  .partner-content {
    display: flex;
    flex-wrap: wrap;
    .item-out-box {
      width: 23%;
      padding: 0 1%;
      // padding: 16px;
      display: flex;
      justify-content: center;
      .item-in-box {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        display: flex;
        .item-img {
          color: #333333;
          width: 110px;
        }
        .item-title {
          color: #333333;

          padding: 16px;
          font-size: 18px;
          font-weight: 500;
        }
        .item-content {
          line-height: 20px;
          color: #999999;
          font-size: 14px;
        }
      }
    }
  }
}
</style>