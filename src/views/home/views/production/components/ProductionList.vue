<template>
  <div class="list">

    <div
      class="in-box"
      v-if="arrange=='block'"
    >
      <div
        class="card-box"
        v-for="(item,index) of list"
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
              class="card-usage"
              v-for="ite,index of item.usageScenarios"
              :key="index"
            >{{ite}} </span>

            <p class="card-type ellipsis">产品类型: {{item.type}}</p>
            <p class="card-service-provider ellipsis">服务商：{{item.serviceProvider}}</p>
            <div class="footer-box">


              <span class="footer-price">￥{{item.price}}</span>

              <el-button
                class="footer-button"
                @click="toDetail(item.id)"
              >查看详情</el-button>
            </div>

          </div>
        </el-card>

      </div>


    </div>
    <div v-if="arrange=='transverse'">
      <div
        class="transverse-out-box"
        v-for="(item,index) of list"
        :key="index"
      >
        <div class="transverse-in-box">
          <img
            class="card-img"
            :src="item.imgUrl"
          >
          <div class="transverse-content">
            <strong class="card-title ellipsis">{{item.title}}</strong>
            <span class="card-usage">适用场景：</span>
            <span
              class="card-usage "
              v-for="ite,index of item.usageScenarios"
              :key="index"
            >{{ite}} </span>

            <p class="card-type ellipsis">产品类型: {{item.type}}</p>
            <p class="card-service-provider ellipsis">服务商：{{item.serviceProvider}}</p>
            <p class="card-service-provider ellipsis">申请数: {{item.appliedNumber}}</p>
          </div>
          <div class="transverse-price">
            <span class="footer-price">￥{{item.price}}</span>

            <el-button
              class="footer-button"
              @click="toDetail(item.id)"
            >查看详情</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">

      <el-pagination
        background
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page.sync="currentPage"
        :page-sizes="[8, 12, 16, 20]"
        :page-size="pageSize"
        layout="total, prev, pager, next,sizes"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ProductionList',
  data () {
    return {
      list: [],
      arrange: 'block',
      pageSize: 8,
      search: '',
      type: '全部',
      field: '全部',
      minPrice: 0,
      maxPrice: 1000000000000,
      currentPage: 1,
      productionList: [],
      total: 0
    }
  },
  props: {
    oldProductionList: Array,
    oldTotal: Number
  },
  methods: {
    sort (sortKey, direction) {
      // console.log('asdaasdddddddddddddddddddsd')
      // console.log(this.list)
      this.list.sort(this.by(sortKey))
      if (direction == true) { this.list.reverse(); }
    },
    handleArrange (arrange) {
      this.arrange = arrange;
    },
    by (name) {
      return function (o, p) {
        let a, b;
        a = o[name];
        b = p[name];
        if (a === b) {
          return 0;
        }
        if (typeof a === typeof b) {
          return a < b ? -1 : 1;
        }
        return typeof a < typeof b ? -1 : 1;

      }

    },
    toDetail (id) {
      this.$router.push({ path: '/detail', query: { id: id } })
    },
    handleSizeChange () {
      console.log(this.pageSize)
    },
    updateProduct () {
      console.log('updateProduct')
      axios.post("http://localhost:8080/home/production/update", { search: this.searchValue, type: this.type, field: this.field, minPrice: this.minPrice, maxPrice: this.maxPrice, pageSize: this.pageSize, currentPage: this.currentPage })
        .then((res) => {
          this.updateSuc(res)

        })
    },
    updateSuc (res) {
      console.log(res)
      let data = res.data;
      if (data) {
        this.total = data.total
        this.productionList = data.productionList
      }
    },
    handleCurrentChange () {
      console.log(this.currentPage)
    }
  },
  watch: {
    productionList () {
      this.list = this.productionList
    },
    search () {

      this.updateProduct()
      this.currentPage = 1
    },
    type () {
      this.updateProduct()
      this.currentPage = 1
    },
    field () {
      this.updateProduct()
      this.currentPage = 1
    },
    minPrice () {
      this.updateProduct()
      this.currentPage = 1
    },
    maxPrice () {
      this.updateProduct()
      this.currentPage = 1
    },
    oldProductionList () {
      this.productionList = this.oldProductionList
    },
    oldTotal () {
      this.total = this.oldTotal
    },
    currentPage () {
      this.updateProduct()
    },
    pageSize () {
      this.updateProduct()
    }

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
        display: flex;
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
  .transverse-out-box {
    background-color: #f5f7fa;
    margin: 24px 0;
    width: 100%;
    .transverse-in-box {
      padding: 24px;
      display: flex;
      .transverse-content {
        flex: 1;
        line-height: 36px;
        font-size: 24px;
        .ellipsis {
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          /* 匀速溢出内容，隐藏 */
          overflow: hidden;
        }
        .card-title {
          font-size: 24px;
          padding: 8px;
          color: #333333;
        }
        .card-usage {
          font-size: 16px;
          padding: 8px;
          color: #999999;
        }
        .card-type {
          font-size: 16px;
          padding: 8px;
          color: #999999;
        }
        .card-service-provider {
          font-size: 16px;
          padding: 8px;
          color: #999999;
        }
      }

      .transverse-price {
        width: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .footer-price {
          color: #faad14;
          font-size: 24px;
        }
        .footer-button {
          color: #faad14;
          border-color: #faad14;
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: end;
    padding: 24px;
    :deep(.el-pager li) {
      background-color: #fff;
    }
  }
}
</style>