<template>
  <div class="production-search">

    <div class="search-box">
      <div class="search-in">
        <el-input
          class="search-input"
          v-model="input"
          placeholder="请输入内容"
        ></el-input>
        <el-button
          type="primary"
          class="search-button"
        >搜索</el-button>
      </div>
      <div class="search-recommend">
        热门推荐：
        <span
          v-for="(item,index) of recommendList"
          :key="index"
        >{{item}} </span>
      </div>
    </div>
  </div>
</template>

<script>




export default {
  name: 'ProductionSearch',

  data () {
    return {
      input: ''
      // recommendList: ['asd', 'asd', 'asdasd', 'asdasdddddddddddddd', 'asdasd', 'asdasdasdasd', '阿三大苏打']
    }
  },
  props: {
    recommendList: Array
  }
}
</script>


<style lang="scss" scoped>
.production-search {
  background-color: #f5f7fa;
  width: 100%;
  .search-box {
    box-sizing: border-box;
    padding: 30px;
    margin: 0 auto;
    width: 30%;
    min-width: 400px;
    .search-in {
      display: flex;

      .search-input {
        border-radius: 5px 0 0 5px;
      }
      .search-button {
        border-radius: 0px 5px 5px 0;
      }
    }
    .search-recommend {
      overflow: hidden;
      color: #999999;
      font-size: 14px;
      margin-top: 8px;
      line-height: 24px;
    }
  }
}
</style>