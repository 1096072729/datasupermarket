<template>
  <div class="home-recommend">
    <div class="title">
      热门推荐
    </div>

    <div class="see-more">查看更多></div>
    <div class="out-content-box">
      <div
        v-for="item of recommendList"
        :key="item.id"
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
            <br>
            <p class="content-synopsis">{{item.synopsis}}</p>

          </div>
        </el-card>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {

    }
  },
  props: {
    recommendList: Array
  },


}
</script>


<style lang="scss" scoped>
.home-recommend {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  margin-top: 24px;
  .title {
    font-size: 24px;
    text-align: center;
    line-height: 24px;
  }
  .see-more {
    margin-top: 16px;
    text-align: center;
    font-size: 12px;
    color: #0090ff;
  }
  .out-content-box {
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    .in-content-box {
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
        font-size: 16px;
        line-height: 24px;
        color: #333333;
      }
      .content-synopsis {
        line-height: 24px;
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
</style>
