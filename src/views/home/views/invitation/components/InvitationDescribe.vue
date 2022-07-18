<template>
  <div class="describe">

    <div class="describe-content-box">
      <span
        class="describe-content-item animate__animated animate__bounceInRight"
        v-for="item,index of Content"
        :key="index"
      >
        {{item}}</span>
    </div>
    <img
      class="describe-content-img"
      :src="imgUrl"
      alt=""
    >
  </div>

</template>

<script>

// import axios from 'axios'
export default {
  name: 'InvitationDescribe',
  props: {
    imgUrl: String,
    Content: Array
  },

}
</script>


<style lang="scss" scoped>
.describe {
  height: 360px;
  background-color: white;
  padding: 0 500px;
  display: flex;
  .describe-content-box {
    padding: 50px 0;
    display: flex;
    flex-direction: column;

    .describe-content-item {
      padding: 16px 0;
      line-height: 24px;
      font-size: 18px;
      text-indent: 36px;
      color: #666666;
    }
  }
  .describe-content-img {
    height: 360px;
  }
}
</style>