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
      <ul class="log-ul">
        <router-link
          tag="li"
          to="/login"
          class="login log-li"
        >登录</router-link>

        <li class="logout log-li">注册</li>
      </ul>
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
      :hover {
        background-color: #86b8e6;
      }
      .item {
       
        border: 0;
      }
      // text-color: #47afff;
    }
  }
  .right {
    float: right;
    display: flex;

    .search-box {
      background-color: #003568;
      .search-input {
        background-color: #86b8e6;
        // background-color: #003568;

        :hover {
          width: 300px;
        }
      }
    }

    .log-ul {
      .log-li {
        list-style: none;
        line-height: 60px;
        float: left;
        height: 60px;
        padding: 0 20px;
      }
      :hover {
        background-color: #0090ff;
      }
    }
  }
}
</style>
