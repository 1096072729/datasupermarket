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
          :class="{ active:content== Limitlist[index] }"
        >{{content}}</span>
      </div>

      <div class="sort-mothod">
        <!-- <span v-for="item,index of sortList" :key="index"></span> -->
        <div class="sort-left">
          <div class="sort-title">
            <span>综合排序<span class="iconfont">&#xe8f7;</span></span>
          </div>
          <div class="sort-title">
            <span>按上架时间<span class="iconfont">&#xe8f7;</span></span>
          </div>
          <div class="sort-title">
            <span>按照价格<span class="iconfont">&#xe8f7;</span></span>
          </div>
        </div>
        <div class="sort-right">
          <span class="sort-title">共为您找到{{length}}条结果</span>
          <div class="icon-box sort-title"><span class="iconfont">&#xe71d;</span></div>
          <div class="icon-box sort-title"><span class="iconfont">&#xe6c4;</span></div>
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
      length: 100
    }
  },
  props: {
    searchLimit: Array
  }
  ,
  methods: {
    select (id, value) {
      console.log(id + value)
      console.log(this.Limitlist)
      this.Limitlist[id] = value
    },
  }
  ,

  updated: {
    s () {
      this.Limitlist = [];
      for (const item of this.searchLimit) {
        this.Limitlist.push(item.criteriaContent[0])
      }
      console.log(this.Limitlist)
      console.log('Limitlist')

    }
  }
  ,
  mounted () {

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
        .sort-title {
          padding: 5px 20px;
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