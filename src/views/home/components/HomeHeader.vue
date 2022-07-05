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
        <el-menu-item
          index="1"
          class="item"
        >首页</el-menu-item>
        <el-menu-item
          index="2"
          class="item"
        >产品中心</el-menu-item>
        <el-menu-item
          index="3"
          class="item"
        >需求大厅</el-menu-item>
        <el-menu-item
          index="4"
          class="item"
        >资源目录</el-menu-item>
        <el-menu-item
          index="5"
          class="item"
        >通知公告</el-menu-item>
        <el-menu-item
          index="6"
          class="item"
        >诚邀加入</el-menu-item>
        <el-menu-item
          index="7"
          class="item"
        >关于我们</el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <div class="search-box">
        <el-input
          class="search-input"
          v-model="input"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <!-- <el-menu
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

      </el-menu> -->
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
.el-menu.el-menu--horizontal {
  border-width: 0px;
}
.home-header {
  color: #fff;
  display: flex;
  background-color: #003568;
  .left {
    float: left;
    flex: 1;
    .el-menu-demo {
      background-color: #003568;
      .item {
        border: 0;
      }
      // text-color: #47afff;
    }
  }
  .right {
    float: right;
    .search-box {
      .search-input {
        line-height: 100%;
        height: 60px;
        :hover {
          width: 300px;
        }
      }
    }
  }
}
</style>
