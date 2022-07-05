<template>
  <div class="home-recommend">
    <div class="title">
      热门推荐
    </div>

    <div class="see-more">查看更多></div>
    <div class="out-content-box">
      <div class="in-content-box">
        <el-card
          v-for="item of recommendList"
          :key="item.id"
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
            <p class="content-title">{{item.title}}</p>
            <p class="content-synopsis">{{item.synopsis}}</p>

          </div>
        </el-card>
        <div style="clear: both;"></div>
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
  }
  .see-more {
    margin-top: 8px;
    text-align: center;
    font-size: 12px;
    color: #0090ff;
  }
  .out-content-box {
    margin-top: 8px;
    .in-content-box {
      .content-cart {
        margin: 8px 8px;
        float: left;
        // box-sizing: border-box;
        width: 23%;
        .img-box {
          .cart-image {
            width: 100%;
          }
        }
      }
      .content-title {
        font-size: 16px;
        color: #333333;
      }
      .content-synopsis {
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
</style>
