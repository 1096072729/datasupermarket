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
        <el-menu-item
          v-for="(item,index) of this.$router.options.routes[0].children"
          :key="index"
          :index="item.path"
          class="item"
          @click="to(item.path)"
        >
          {{item.meta.title}}
        </el-menu-item>

      </el-menu>
    </div>






    <div class="right">

      <div
        class="search-box"
        @focusin="search"
        @focusout="unsearch"
      >
        <!-- @focusout="unsearch" -->

        <input
          class="search-input"
          v-model="input"
          placeholder="请输入内容"
          :style="{width:inputWidth}"
        >
        <div
          class="search-icon"
          v-if="showIcon=='focus'"
        >

          <span class="iconfont icon">&#xe651;</span>|<span
            class="iconfont icon"
            @click="input=' '"
          >&#xe64d;</span>
        </div>
        <div
          class="search-icon"
          v-if="showIcon=='blur'"
        >

          <span class="iconfont icon">&#xe651;</span>
        </div>
        <div
          @focusin="search"
          class="search-content"
          :style="{ height:height,width:width,opacity:opacity}"
        >
          <div class="search-content-title-box">
            <span
              class="search-content-title"
              v-show="searchContent"
            >
              热门搜索
            </span>

          </div>
          <el-divider v-show="searchContent"></el-divider>
          <div><span
              v-show="searchContent"
              @click="input=item"
              class="search-content-content"
              v-for="item,index of searchList "
              :key="index"
            >{{item}}</span></div>
        </div>
      </div>
      <div
        v-if="!hasUser"
        class="right-box"
        @click="login"
      >
        <span>
          登录
        </span>
      </div>
      <div
        v-if="!hasUser"
        class="right-box signup"
      >
        注册
      </div>
      <div
        class="right-box"
        v-if="hasUser"
      >
        <el-dropdown
          size="medium"
          @command="handleCommand"
        >
          <div class="person">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <span class="person-item">{{user.username}}</span>
            <span class="iconfont person-item">&#xe688;</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a"><span class="iconfont">&#xe779;</span>运营中心</el-dropdown-item>
            <el-dropdown-item command="b"> <span class="iconfont">&#xe6cb;</span>首页</el-dropdown-item>
            <el-dropdown-item command="c"><span class="iconfont">&#xeb49;</span>系统管理</el-dropdown-item>
            <el-dropdown-item command="d"> <span class="iconfont">&#xe640;</span>会员中心</el-dropdown-item>
            <el-dropdown-item command="signout"><span class="iconfont">&#xe723;</span>退出登录</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </div>


    </div>


  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import FadeAnimation from '@/components/FadeAnimation'
export default {
  name: 'HomeHeader',
  data () {
    return {
      activeIndex: '/home/index',
      input: '',
      state1: '',
      user: {},
      showIcon: 'blur',
      height: 0,
      width: 0,
      opacity: 0,
      searchList: ['啊实打实大师大小乔', '好事', '阿三大苏打'],
      searchContent: false,
      inputWidth: '100px'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },

    search () {
      console.log('asdasd')
      this.showIcon = 'focus'
      this.width = '270px';
      this.height = '150px';
      this.opacity = 1
      this.inputWidth = '182px'
      this.searchContent = true;
    },
    unsearch () {
      this.showIcon = 'blur'
      this.width = '0';
      this.height = '0';
      this.opacity = 0;
      this.inputWidth = '100px'
      console.log(this.showIcon)


    },

    login () {
      this.$router.push('/auth/login');
    },
    handleCommand (command) {
      if (command == 'signout') {
        this.signout()
      }
    },
    querySearch (queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    to (path) {
      this.$router.push(path)
    },
    signout () {
      console.log("signoutsignoutsignoutsignout")
      this.user = { username: '' };
      this.$store.state.user = { username: '' }
    },

  },
  mounted () {
    this.user = this.$store.state.user;
    // this.restaurants = this.loadAll();
    this.activeIndex = this.$route.path

  },
  components: {
    // FadeAnimation
  },
  computed: {
    hasUser () {
      let has;
      if (this.user.username !== '') {
        has = true;
      }
      else { has = false; }

      return has
    }
  },
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
    align-items: center;
    .right-box {
      color: white;
      padding: 0 20px;
      .person {
        color: white;
        // line-height: 60px;
        align-items: center;
        display: flex;
        .person-item {
          padding: 0 8px;
        }
      }
    }
    .signup {
      display: flex;
      align-items: center;
      height: 100%;
      background-color: #47afff;
    }
    // .search-input {
    //   padding-top: 10px;
    // }
    .search-box {
      display: flex;
      background-color: #003568;
      border-width: 0 1px;
      border-style: solid;
      border-color: #fff;
      color: #666666;
      // margin-top: -10px;
      .search-input {
        // &:focus {
        //   width: 200px;
        // }
        color: white;
        outline: none;

        padding: 0 8px;
        width: 100px;
        height: 60px;
        transition: width 0.5s ease-in-out;
        :deep(.el-input__inner) {
          height: 60px;
        }
        border: 0;
        background-color: #003568;
      }
      .search-icon {
        display: flex;
        align-items: center;
        // padding-right: 8px;
        .icon {
          padding: 0 8px;
        }
      }
      .search-content {
        z-index: 10;
        position: absolute;
        top: 60px;
        right: 135px;

        background-color: #fff;
        transition: all 0.5s ease-in-out;
        .search-content-title-box {
          padding: 8px 8px 0 8px;
          .search-content-title {
            font-size: 16px;
            color: #333333;
          }
        }
        .search-content-content {
          background-color: #e0e0e0;
          margin: 8px;
        }
      }
    }
  }
}
</style>
