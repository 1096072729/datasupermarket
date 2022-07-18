<template>
  <div class="join">
    <span class="join-title">为什么要成为数字产品超市合作伙伴</span>
    <div class="join-content">
      <img
        class="join-img"
        :src="joinImg"
        alt=""
      >
    </div>
  </div>

</template>

<script>

// import axios from 'axios'
export default {
  name: 'InvitationJoin',
  data () {
    return {

    }
  },
  props: {
    joinImg: String
  }

}
</script>


<style lang="scss" scoped>
.join {
  // background-color: #fff;
  margin: 0 auto;
  padding: 36px 500px;
  display: flex;
  flex-direction: column;
  height: 230px;
  .join-title {
    padding: 36px 0;
    font-weight: 600;
    margin: 0 auto;
    font-size: 24px;
  }
  .join-content {
    padding: 36px;
    .join-img {
      width: 100%;
    }
  }
}
</style>