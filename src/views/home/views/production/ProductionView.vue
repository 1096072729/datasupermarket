<template>


  <div class="Production">

    <production-search
      :recommendList="recommendList"
      @search="search"
    ></production-search>
    <production-limit
      :searchLimit="searchLimit"
      @handleLaunchTime="handleLaunchTime"
      @handleArrange="handleArrange"
      :productionList="productionList"
      @changeType="changeType"
      @changeField="changeField"
      @changePrice="changePrice"
    ></production-limit>
    <production-list
      :oldProductionList="productionList"
      ref="productionList"
      :oldTotal="total"
    ></production-list>
  </div>

</template>

<script>


import ProductionSearch from './components/ProductionSearch.vue'
import ProductionLimit from './components/ProductionLimit.vue'
import ProductionList from './components/ProductionList.vue'
import { Loading } from 'element-ui';
import axios from 'axios'
export default {
  name: 'ProductionView',
  data () {
    return {
      recommendList: [],
      total: 100,
      productionList: [],
      loadingInstance: null,
    }
  },
  components: {
    ProductionSearch,
    ProductionLimit,
    ProductionList
  },
  methods: {
    getProductionInfo () {
      this.loadingInstance = Loading.service({
        // 动画中的文字
        text: '加载中',
        // 要加载动画的容器
        target: '.index'
      });
      axios.get("http://localhost:8080/home/production")
        .then((res) => {
          this.getProductionInfoSuc(res);
          this.loadingInstance.close();
        })
    },
    getProductionInfoSuc (res) {

      const data = res.data;
      if (data.length !== 0) {
        //获取各个数据home的组件数据
        this.recommendList = data.recommendList;
        this.searchLimit = data.searchLimit;
        this.productionList = data.productionList;
        this.total = data.total
        console.log(data.total)
        console.log('productionList')
        console.log(this.productionList)
        // this.thirdPartyList = data.thirdPartyList
      }
    },
    handleLaunchTime (keyValue, reserve) {
      // console.log(keyValue)
      // console.log(reserve)
      this.$refs.productionList.sort(keyValue, reserve)
    },
    handleArrange (arrange) {
      this.$refs.productionList.handleArrange(arrange)

    },
    search (searchValue) {
      this.$refs.productionList.search = searchValue
    },
    changeType (type) {
      this.$refs.productionList.type = type
    },
    changeField (field) {
      this.$refs.productionList.field = field
    },
    changePrice (minPrice, maxPrice) {
      this.$refs.productionList.minPrice = minPrice
      this.$refs.productionList.maxPrice = maxPrice
    }
  },
  mounted () {

    this.getProductionInfo();
  }
}
</script>


<style lang="scss" scoped>
.Production {
  background-color: #f0f2f5;
}
</style>