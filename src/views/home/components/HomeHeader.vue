<template>
  <div class="home-header">
    <div class="left">
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="#47afff"
        text-color="#e4eaef"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">产品中心</el-menu-item>
        <el-menu-item index="3">需求大厅</el-menu-item>
        <el-menu-item index="4">资源目录</el-menu-item>
        <el-menu-item index="5">通知公告</el-menu-item>
        <el-menu-item index="6">诚邀加入</el-menu-item>
        <el-menu-item index="7">关于我们</el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="#47afff"
        text-color="#e4eaef"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <div class="search-box">
            <input
              type="text"
              class="search-input"
            >
          </div>
        </el-menu-item>
        <el-menu-item index="2">产品中心</el-menu-item>

      </el-menu>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      activeIndex1: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


<style lang="scss" scoped>
.home-header {
  color: #fff;
  display: flex;
  background-color: #003568;
  .left {
    float: left;
    flex: 1;
    .el-menu-demo {
      background-color: #003568;

      // text-color: #47afff;
    }
  }
  .right {
    float: right;
    .el-menu-demo {
      background-color: #003568;
      .search-box {
        .search-input {
          width: 100%;
          padding: 0 5px;
          background-color: #003568;
        }
      }
      // text-color: #47afff;
    }
  }
}
</style>
