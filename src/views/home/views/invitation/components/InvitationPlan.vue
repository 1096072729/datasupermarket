<template>
  <div class="plan">
    <!-- <div></div> -->
    <span class="plan-title">合作伙伴招募计划</span>
    <div class="plan-content-box ">
      <div
        class="plan-item-out-box animate__animated animate__fadeInUp"
        v-for="item,index of planList"
        :key=index
        :style="{ animationDelay: index*0.3 +'s' }"
      >
        <!-- <el-card
        shadow="hover"
        class="plan-item-out-box animate__animated animate__bounceInUp"
        v-for="item,index of planList"
        :key=index
      > -->
        <div class="plan-item-in-box">
          <img
            class="item-img"
            :src="item.imgUrl"
            alt=""
          >
          <div class="describe">
            <span class="describe-title">{{item.title}}</span>
            <span class="describe-content">{{item.content}}</span>
          </div>
        </div>
        <!-- </el-card> -->
      </div>
    </div>
  </div>

</template>

<script>

// import axios from 'axios'
export default {
  name: 'InvitationPlan',
  data () {
    return {

    }
  },
  props: {
    planList: {
      type: Array,
      default: () => []
    }
  }

}
</script>


<style lang="scss" scoped>
.plan {
  margin: 0 auto;
  padding: 36px 500px;
  display: flex;
  flex-direction: column;
  height: 300px;
  .plan-title {
    padding: 36px 0;
    font-weight: 600;
    margin: 0 auto;
    font-size: 24px;
  }
  .plan-content-box {
    display: flex;
    height: 160px;
    .plan-item-out-box:hover {
      box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); /* 鼠标悬浮时盒子出现的阴影 */
      // transform: translate(0, -10px); /* 鼠标悬浮时盒子上移10px */
      // margin-bottom: 10px;
      // position: relative;
      // top: -10px;
      margin-top: -10px;
      margin-bottom: 30px;
    }
    .plan-item-out-box {
      animation-duration: 2s;
      background-color: white;
      margin: 0 1.5%;
      margin-bottom: 20px;
      width: 30%;
      transition: all 0.5s ease-in-out; /* 上浮这个过程需要的时间 */

      .plan-item-in-box {
        display: flex;
        .item-img {
          padding: 16px 16px;
          // padding-right: 16px;
          width: 60px;
          height: 60px;
        }
        .describe {
          padding-right: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          .describe-title {
            padding: 16px 0;
            font-size: 24px;
          }
          .describe-content {
            line-height: 24px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>