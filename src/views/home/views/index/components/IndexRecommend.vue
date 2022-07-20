<template>
  <div class="index-recommend">
    <span class="title">
      热门推荐
    </span>

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
        <div class="cart-signn">
          <span class="cart-signn-span">最新上架</span>
          <img
            class="cart-signn-img"
            :src="item.signnImg"
            alt=""
          >
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexRecommend',
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
.index-recommend {
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin-top: 24px;
  .title {
    padding: 36px 0 0 0;
    font-weight: 600;
    margin: 0 auto;
    font-size: 24px;
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
      display: flex;
      flex-direction: column;
      padding: 20px;
      box-sizing: border-box;
      width: 25%;
      position: relative;
      .content-cart {
        border-radius: 3px;
        // box-sizing: border-box;
        .img-box {
          .cart-image {
            border-radius: 3px 3px 0 0;
            width: 100%;
          }
        }
      }
      .cart-signn {
        top: 15px;
        right: -10px;
        width: 60px;
        position: absolute;
        .cart-signn-span {
          z-index: 10;
          position: relative;
          color: white;
          top: 17px;
          right: 15px;
          font-size: 12px;
        }
        .cart-signn-img {
          position: relative;
          right: 22px;
          width: 55px;
        }
      }
      .content-title {
        font-size: 16px;
        line-height: 24px;
        color: #333333;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /*2行*/
        -webkit-box-orient: vertical;
      }
      .content-synopsis {
        line-height: 24px;
        font-size: 12px;
        color: #666666;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /*2行*/
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
