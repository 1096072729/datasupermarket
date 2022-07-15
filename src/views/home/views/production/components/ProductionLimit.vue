<template>
  <div class="limit">
    <div class="in-box">
      <div
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
      // searchLimit: [
      //   {
      //     id: 0,
      //     type: '',
      //     criteriaTitle: '产品分类',
      //     criteriaContent: ['全部', '数据服务', '数据分析报告', '数据报表', '数据模型', '通用软件', '其他', '数据分析报告', '数据报表', '数据模型', '通用软件']
      //   },
      //   {
      //     id: 1,
      //     type: 'price',
      //     criteriaTitle: '产品asd',
      //     criteriaContent: ['全部', '数据服务', '数据分析报告', '数据报表', '数据模型', '通用软件', '其他']
      //   }
      // ],
      Limitlist: [],
      length: 0,
      lastClick: '',
      clickNumber: 0,
      state: 'block'
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
    }
  },

  watch: {
    productionList () {
      this.length = this.productionList.length
    }
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
      background-color: #f5f7fa;
      padding: 5px 20px;
      font-size: 14px;
      .criteria-title {
        line-height: 36px;
        color: #999999;
      }
      .criteria-content {
        padding: 0 20px;
        color: #666666;
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