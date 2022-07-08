<template>
  <div class="list">
    <div class="in-box">
      <div
        class="card-box"
        v-for="(item,index) of productionList"
        :key="index"
      >

        <el-card
          class="card"
          :body-style="{ padding: '0px' }"
        >
          <img
            class="card-img"
            :src="item.imgUrl"
          >
          <div class="card-content">
            <strong class="card-title ellipsis">{{item.title}}</strong>
            <span class="card-usage">适用场景：</span>
            <span
              class="card-usage "
              v-for="ite,index of item.usageScenarios"
              :key="index"
            >{{ite}} </span>

            <p class="card-type ellipsis">产品类型: {{item.type}}</p>
            <p class="card-service-provider ellipsis">服务商：{{item.serviceProvider}}</p>
            <div class="footer-box">


              <span class="footer-price">￥{{item.price}}</span>

              <el-button class="footer-button">查看详情</el-button>
            </div>

          </div>
        </el-card>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  name: 'ProductionList',
  data () {
    return {
      // productionList: [{
      //   id: 0,
      //   title: 'TESsaddddddddddddasdasd',
      //   imgUrl: '@/assets/img/production/data_analysis_report.svg',
      //   usageScenarios: ['大白天', '大晚上'],
      //   type: '好产品',
      //   serviceProvider: '阿斯顿',
      //   price: 9090,
      // },
      // {
      //   id: 0,
      //   title: 'TESsaddddddddddddasdasd',
      //   imgUrl: '../../../../../assets/img/production/data_analysis_report.svg',
      //   usageScenarios: ['大白天'],
      //   type: '好产品',
      //   serviceProvider: '阿斯顿',
      //   price: 9090,
      // },]
    }
  },
  props: {
    productionList: Array
  }
}
</script>


<style lang="scss" scoped>
.list {
  // margin: 16px auto;
  margin: 0 auto;
  max-width: 80%;
  .in-box {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .card-box {
      box-sizing: border-box;
      width: 25%;
      padding: 10px 5px;
      .card {
        .card-img {
          width: 100%;
        }
        .card-content {
          .ellipsis {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            /* 匀速溢出内容，隐藏 */
            overflow: hidden;
          }
          .card-title {
            font-size: 16px;
            padding: 8px;
            color: #333333;
          }
          .card-usage {
            font-size: 14px;
            padding: 8px;
            color: #999999;
          }
          .card-type {
            font-size: 14px;
            padding: 8px;
            color: #999999;
          }
          .card-service-provider {
            font-size: 14px;
            padding: 8px;
            color: #999999;
          }
          .footer-box {
            color: #faad14;
            display: flex;
            align-items: center;
            justify-content: space-between;
            // flex-direction: row-reverse;
            padding: 8px;
            .footer-price {
              font-size: 24px;
            }
            .footer-button {
              color: #faad14;
              border-color: #faad14;
            }
          }
        }
      }
    }
  }
}
</style>