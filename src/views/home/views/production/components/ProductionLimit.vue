<template>
  <div class="limit">
    <div class="in-box">
      <!-- <div
        class="criteria"
        v-for="item of searchLimit"
        :key="item.id"
      >
        <span class="criteria-title">{{item.criteriaTitle}}：</span>

        <span
          class="criteria-content"
          v-for="content,index of item.criteriaContent"
          :key="index"
          @click="select(item.id,content)"
          :class="{ active:a(item.id,content) }"
        >{{content}}</span>
        <el-button
          plain
          size="mini"
          class="el-icon-arrow-down open-strip"
        >更多</el-button>
      </div> -->
      <div class="criteria">
        <span class="criteria-title">产品分类：</span>
        <span
          class="criteria-content"
          :class="{active:type==item}"
          v-for="item,index of typeLimitList"
          :key="index"
          @click="changeType(item)"
        >{{item}}</span>
        <el-button
          plain
          size="mini"
          class="el-icon-arrow-down open-strip"
        >更多</el-button>
      </div>

      <div class="criteria">
        <span class="criteria-title">所属领域：</span>
        <span
          class="criteria-content"
          :class="{active:field==item}"
          v-for="item,index of fieldLimitList"
          :key="index"
          @click="changeField(item)"
        >
          <span v-if="fieldAll?true:index>13?false:true">
            {{item}}
          </span>
        </span>
        <el-button
          plain
          size="mini"
          class="el-icon-arrow-down open-strip"
          @click="fieldAll=!fieldAll"
        >更多</el-button>
      </div>

      <div class="criteria">
        <span class="criteria-title">价格：</span>
        <span
          :class="{active:price==item}"
          class="criteria-content"
          v-for="item,index of priceLimitList"
          :key="index"
          @click="changePrice(item)"
        >{{item}}</span>


        <el-input
          size="mini"
          v-model="minPrice"
        >
          <i
            slot="suffix"
            class="icon"
          >￥</i>
        </el-input>
        -
        <el-input
          size="mini"
          v-model="maxPrice"
        >
          <i
            slot="suffix"
            class="icon"
          >￥</i>
        </el-input>
        <el-button
          plain
          size="mini"
        >确认</el-button>
        <el-button
          plain
          size="mini"
        >重置</el-button>
      </div>

      <div class="sort-mothod">
        <!-- <span v-for="item,index of sortList" :key="index"></span> -->
        <div class="sort-left">
          <div
            class="sort-title"
            @click="handleLaunchTime('appliedNumber')"
          >
            <span>综合排序<span class="iconfont">&#xe8f7;</span></span>
          </div>
          <div
            class="sort-title"
            @click="handleLaunchTime('launchTime')"
          >
            <span>按上架时间<span class="iconfont">&#xe8f7;</span></span>
          </div>
          <div
            class="sort-title"
            @click="handleLaunchTime('price')"
          >
            <span>按照价格<span class="iconfont">&#xe8f7;</span></span>
          </div>
        </div>
        <div class="sort-right">
          <span class="sort-title">共为您找到{{length}}条结果</span>
          <div
            class="icon-box sort-title"
            @click="handleArrange('transverse')"
          ><span
              class="iconfont"
              v-show="'transverse'!==state"
            >&#xe71d;</span>
            <span
              class="iconfont"
              v-show="'transverse'==state"
            >&#xeb7a;</span>
          </div>
          <div
            class="icon-box sort-title"
            @click="handleArrange('block')"
          ><span
              class="iconfont "
              v-show="'block'!==state"
            >&#xe6c4;</span>
            <span
              class="iconfont "
              v-show="'block'==state"
            >&#xeb79;</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ProductionLimit',
  data () {
    return {
      typeLimitList: ['全部',
        '数据服务',
        '数据分析报告',
        '数据报表',
        '数据模型',
        '通用软件',
        '其他',],
      fieldLimitList: ['全部', '科技创新', '财务金融', '公共安全', '机构团体', '法律服务', '市场监管', '资源能源', '安全生产', '生活服务', '信用服务', '气象服务', '教育文化', '社保就业', '社会救助', '商贸互通'],
      priceLimitList: ['全部', '10万以下', '10-500万', '500-1000万', '1000万以上'],
      Limitlist: [],
      length: 0,
      lastClick: '',
      clickNumber: 0,
      state: 'block',
      minPrice: 0,
      maxPrice: 0,
      fieldAll: false,
      type: '全部',
      field: '全部',
      price: '全部'
    }
  },
  props: {
    searchLimit: Array,
    productionList: Array
  }
  ,
  methods: {
    select (id, value) {

      console.log(this.searchLimit)
      console.log(id + value)
      console.log(this.Limitlist)
      this.Limitlist[id] = value
    },
    a (id, content) {
      console.log(this.Limitlist)
      return this.Limitlist[id] == content
    },
    handleLaunchTime (sortKey) {
      if (sortKey == this.lastClick) {
        this.clickNumber = this.clickNumber + 1;
        if (this.clickNumber % 2 !== 0)
          this.$emit('handleLaunchTime', sortKey, false)
        else {
          this.$emit('handleLaunchTime', sortKey, true)
        }
      } else {
        this.lastClick = sortKey
        this.$emit('handleLaunchTime', sortKey, false)
        this.clickNumber = 1;
      }
      console.log(this.clickNumber)
    },
    handleArrange (arrange) {
      console.log(arrange)
      this.state = arrange;
      this.$emit('handleArrange', arrange)
    },
    changeType (item) {
      this.type = item
      this.$emit('changeType', item)
    },
    changeField (item) {
      this.field = item
      this.$emit('changeField', item)
    },
    changePrice (item) {
      this.price = item;
      if (item == '全部') {
        this.minPrice = 0
        this.maxPrice = 100000000000000
      }
      else if (item == '10万以下') {
        this.minPrice = 0
        this.maxPrice = 100000
      }
      else if (item == '10-500万') {
        this.minPrice = 100000
        this.maxPrice = 5000000
      }
      else if (item == '500-1000万') {
        this.minPrice = 5000000
        this.maxPrice = 10000000
      }
      else {
        this.minPrice = 10000000
        this.maxPrice = 100000000000000000000
      }
    }
  },

  watch: {
    productionList () {
      this.length = this.productionList.length
    }
  },
  computed: {

  }

}
</script>


<style lang="scss" scoped>
.limit {
  margin: 0 auto;
  max-width: 80%;
  .in-box {
    padding: 10px;
    .criteria {
      position: relative;
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      background-color: #f5f7fa;
      padding: 5px 20px;
      font-size: 14px;
      :deep(.el-input) {
        padding-right: 15px;
        padding: 0 5px;
        width: 60px;
      }
      :deep(.el-input--suffix .el-input__inner) {
        padding-right: 5px;
      }
      .icon {
        position: relative;
        right: 50px;
        top: 7px;
      }
      .criteria-title {
        line-height: 36px;
        color: #999999;
      }
      .criteria-content {
        padding: 0 20px;
        color: #666666;
      }
      .open-strip {
        position: absolute;
        right: 30px;
      }
      .active {
        color: #0090ff;
      }
    }
    .sort-mothod {
      font-size: 14px;
      background-color: #f5f7fa;
      margin-top: 16px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      .sort-left {
        display: flex;
        .light-color {
          color: #0090ff;
        }
        .sort-title {
          padding: 5px 20px;
        }
        .icon-box {
        }
      }
      .sort-right {
        display: flex;
        .sort-title {
          padding: 5px 20px;
        }
      }
    }
  }
}
</style>