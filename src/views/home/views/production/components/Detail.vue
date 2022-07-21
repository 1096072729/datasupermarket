<template>
  <div class="detail">
    <div class="detail-left">
      <div class="applied-box">
        <img
          class="applied-img"
          :src="detail.imgUrl"
          alt=""
        >
        <div class="applied-content">
          <p>{{detail.title}}</p>
          <p>{{detail.usageScenarios}}</p>

          <div class="detail-price">
            <div class="applied-price">
              <span>
                ￥{{detail.price}}
              </span>
            </div>
            <div class="detail-Number">
              <p>浏览量：{{detail.viewsNumber}}</p>
              <p>申请量：{{detail.appliedNumber}}</p>
            </div>
            <img
              class="price-bg"
              :src="detail.pricebg"
              alt=""
            >

          </div>
          <div>规格：</div>
          <div>数量： <el-input-number
              v-model="num"
              :min="1"
              :max="10"
              label="描述文字"
              size="mini"
            ></el-input-number>
          </div>
          <div>

            <el-button
              type="warning"
              size="mini"
            >申请使用</el-button>
          </div>
        </div>
      </div>
      <div class="process">
        <div class="process-title"> <span>交易流程</span>

        </div>
        <el-divider></el-divider>
        <div>

          <img
            class="process-img"
            :src="detail.processImg"
            alt=""
          >
        </div>
      </div>
      <div class="information">
        <el-tabs v-model="activeName">
          <el-tab-pane
            label="产品详情"
            name="first"
          >
            <p>产品类型：{{detail.type}}</p>
            <p>所属领域：{{detail.field}}</p>
            <p>产品简介：{{detail.synopsis}}</p>
            <p>适用场景：{{detail.usageScenarios}}</p>
            <p>服务商：{{detail.serviceProvider}}</p>
            <p>发布时间：{{detail.launchTime}}</p>
          </el-tab-pane>
          <el-tab-pane
            label="接口信息"
            name="second"
          >接口信息</el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <div class="detail-right">
      <div class="right-title">
        人气产品
      </div>
      <el-divider></el-divider>
      <div class="right-content">
        <div
          @click="toDetail(item.id)"
          class="popularity"
          v-for="(item, index) in popularityList"
          :key="index"
        >
          <img
            class="popularity-img"
            :src="item.imgUrl"
            alt=""
          >
          <div class="describe">
            <p class="ellipsis describe-title">{{item.title}}</p>
            <p class="ellipsis">申请数: {{item.appliedNumber}}</p>
            <p class="ellipsis">浏览量：{{item.viewsNumber}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { Loading } from 'element-ui';
export default {
  name: 'ProductionDetail',
  data () {
    return {
      popularityList: [],
      detail: {},
      num: 1,
      activeName: 'first'
    }
  },
  methods: {
    getPopularityList () {
      this.loadingInstance = Loading.service({
        // 动画中的文字
        text: '加载中',
        // 要加载动画的容器
        target: '.index'
      });
      axios.get("http://localhost:8080/home/popularity")
        .then((res) => {
          if (res.data) {
            this.popularityList = res.data.popularityList
            this.loadingInstance.close();
            console.log(res)
          }
        })
    },
    getDetail () {
      // axios.get("http://localhost:8080/home/detail?id=" + this.$route.query.id)
      //   .then((res) => {
      //     if (res.data) {
      //       this.detail = res.data.detail
      //       console.log(this.detail)
      //     }
      //   })
      axios.post("http://localhost:8080/home/detail", { id: this.$route.query.id })
        .then((res) => {
          console.log(res)
          if (res.data) {
            this.detail = res.data
            console.log(this.detail)
          }
        })
    },
    toDetail (id) {
      this.$router.push( { path: '/detail', query: { id: id } })
    },
  },
  mounted () {
    this.getPopularityList();
    this.getDetail()
  }
}
</script>


<style lang="scss" scoped>
.detail {
  position: absolute;
  top: 80px;
  // buttom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 1080px;

  display: flex;
  .detail-left {
    // background-color: #f5f7fa;
    height: 680px;
    margin-right: 15px;

    flex: 1;

    .applied-box {
      padding: 15px;
      background-color: #fff;
      position: relative;

      line-height: 24px;
      padding: 15px;
      display: flex;
      .applied-img {
        height: 180px;
        padding-right: 15px;
        width: 270px;
      }
      .applied-content {
        height: 220px;
        // padding: 15px 0;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .detail-price {
          display: flex;
          justify-content: space-between;
          position: relative;
          width: 538px;
          height: 60px;
          // padding: 15px;
          .applied-price {
            font-size: 24px;
            color: #faad14;
            padding: 15px;
          }
          .detail-Number {
            font-size: 12px;
            color: #999999;
            padding-right: 30px;
          }
          .price-bg {
            position: absolute;

            width: 538px;
            height: 60px;
          }
        }
      }
    }
    .process {
      // padding: 15px;
      background-color: #fff;
      margin-top: 24px;
      height: 235px;
      // padding: 15px;
      .process-title {
        display: flex;
        align-items: center;
        // height: 34px;
        line-height: 34px;
        font-size: 16px;
        padding: 0 15px;
      }
      .el-divider--horizontal {
        margin: 0;
      }
      .process-img {
        width: 100%;
      }
    }
    .information {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 275px;
      font-size: 14px;
      line-height: 30px;
      // height: 200px;
      // margin-top: 15px;
      background-color: #fff;
      // background-color: #f5f7fa;
      padding: 0 15px;
    }
  }
  .detail-right {
    width: 210px;
    padding: 24px;
    background-color: #fff;
    .el-divider--horizontal {
      margin: 10px 0;
    }
    .right-title {
      // padding: 0 16px;
      font-size: 16px;
      text-align: left;
    }
    .right-content {
      font-size: 14px;
      display: flex;
      flex-wrap: wrap;
      // padding: 0 24px;
      .popularity {
        padding: 15px 0;
        display: flex;
        .popularity-img {
          width: 86px;
        }
        .describe {
          padding-left: 8px;
          width: 100px;
          line-height: 16px;
          .describe-title {
            font-weight: bolder;
            color: #333333;
          }
          .ellipsis {
            // display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            /* 匀速溢出内容，隐藏 */
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>