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

      <div class="search-box">

        <input
          class="search-input"
          v-model="input"
          placeholder="请输入内容"
          @focus="search"
          @blur="unsearch"
        >
        <div
          class="search-icon"
          v-if="showIcon=='focus'"
        >

          <span class="iconfont icon">&#xe779;</span>|<span class="iconfont icon">&#xe779; </span>
        </div>
        <div
          class="search-icon"
          v-if="showIcon=='blur'"
        >

          <span class="iconfont icon">&#xe779;</span>
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
        @click="a"
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
            <el-dropdown-item command="e"><span class="iconfont">&#xe723;</span>退出登录</el-dropdown-item>
            <!-- <el-dropdown-item
              command="d"
              disabled
            >双皮奶</el-dropdown-item>
            <el-dropdown-item
              command="e"
              divided
            >蚵仔煎</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>


    </div>
    <div class="search-content"></div>

  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import FadeAnimation from '@/components/FadeAnimation'
export default {
  name: 'HomeHeader',
  data () {
    return {
      activeIndex: '1',
      input: '',
      state1: '',
      user: {},
      showIcon: 'blur'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    a () {
      console.log(this.user)
      console.log(this.user)
    },
    search () {
      this.showIcon = 'focus'
    },
    unsearch () { this.showIcon = 'blur' },

    login () {
      this.$router.push('/auth/login');
    },
    querySearch (queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll () {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
        { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
        { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
        { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
        { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
        { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
        { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
        { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
        { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
        { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
        { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
        { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
        { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
        { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
        { "value": "枪会山", "address": "上海市普陀区棕榈路" },
        { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
        { "value": "钱记", "address": "上海市长宁区天山西路" },
        { "value": "壹杯加", "address": "上海市长宁区通协路" },
        { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
        { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
        { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
        { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
        { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
        { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
        { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
        { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
        { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
        { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
        { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
        { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
        { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
        { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
        { "value": "浏阳蒸菜", "address": "天山西路430号" },
        { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
        { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
        { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
        { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
        { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
        { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
        { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
        { "value": "阳阳麻辣烫", "address": "天山西路389号" },
        { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
      ];
    },

    // focus () {
    //   this.$refs.search
    // }
  },
  mounted () {
    this.user = this.$store.state.user;
    this.restaurants = this.loadAll();
    this.routes = this.$router.options.routes;
    console.log(this.$router.options.routes[0])
    for (const key in this.routes) {
      console.log(key)
      console.log('asdasd')

    }
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
      .search-input:focus {
        // margin-top: -10px;
        width: 200px;
      }
      .search-input {
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
    }

    // .search-input-blur {
    //   animation: input-blur 1s;
    //   width: 100px;
    // }
    // .search-input-focus {
    //   animation: input-focus 1s;
    //   width: 300px;
    // }

    // @keyframes input-focus {
    //   from {
    //     width: 100px;
    //   }
    //   to {
    //     width: 300px;
    //   }
    // }
    // @keyframes input-blur {
    //   from {
    //     width: 300px;
    //   }
    //   to {
    //     width: 100px;
    //   }
    // }
  }
}
</style>
