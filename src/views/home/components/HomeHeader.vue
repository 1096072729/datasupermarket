<template>
  <div class="home-header">

    <div class="left">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="#47afff"
        text-color="#e4eaef"
        @select="handleSelect"
      >
        <router-link
          tag="el-menu-item"
          v-for="(item,index) of this.$router.options.routes[0].children"
          :key="index"
          :index="index"
          class="item"
          :to="item.path"
        >{{item.meta.title}}{{index}}</router-link>
        <!-- <el-menu-item
          v-for="(item,index) of this.$router.options.routes[0].children"
          :key="index"
          :index="item.path"
          class="item"
          router="true"
        >{{item.meta.title}}
        </el-menu-item> -->
      </el-menu>
    </div>






    <div class="right">

      <el-menu
        class="auth el-menu-demo"
        active-text-color="#47afff"
        text-color="#e4eaef"
      >
        <el-menu-item class="item">
          <div class="search-box">
            <el-input
              class="search-input"
              v-model="input"
              placeholder="请输入内容"
            ></el-input>

          </div>
        </el-menu-item>
        <el-menu-item
          class="item"
          @click="login"
        >
          登录
        </el-menu-item>
        <el-menu-item class="item">
          登录
        </el-menu-item>

      </el-menu>
      <!-- <ul class="log-ul">
        <router-link
          tag="li"
          to="/login"
          class="login log-li"
        >登录</router-link>

        <li class="logout log-li">注册</li>
      </ul> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      activeIndex: '1',
      input: ''
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    login () {
      this.$router.push('/auth/login');
    }
  },
  mounted () {
    this.routes = this.$router.options.routes;
    console.log(this.$router.options.routes[0])
    for (const key in this.routes) {
      console.log(key)
      console.log('asdasd')

    }
  }
}

</script>


<style lang="scss" scoped>
.el-menu.el-menu--horizontal {
  border-width: 0px;
}
.home-header {
  // color: #fff;
  display: flex;
  background-color: #003568;
  .left {
    float: left;
    flex: 1;
    .el-menu-demo {
      background-color: #003568;
      // :hover {
      //   background-color: #86b8e6;
      // }
      .item {
        border: 0;
      }
      // text-color: #47afff;
    }
  }
  .right {
    float: right;
    display: flex;
    .el-menu-demo {
      background-color: #003568;
      // :hover {
      //   background-color: #86b8e6;
      // }
      .item {
        border: 0;
        .search-box {
          background-color: #1081ea;
          .search-input {
            background-color: #003568;
            // background-color: #003568;

            :hover {
              width: 300px;
              transition: 2s;
            }
          }
        }
      }
      // text-color: #47afff;
    }

    .auth {
      display: flex;
    }
  }
}
</style>
