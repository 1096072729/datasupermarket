<template>
  <div class="create-production,ProductionDetail">
    <div class="path">
      <el-breadcrumb
        class="breadcrumb"
        separator="/"
      >
        <el-breadcrumb-item>我的产品 </el-breadcrumb-item>
        <el-breadcrumb-item>创建产品</el-breadcrumb-item>
        <el-breadcrumb-item>API测试</el-breadcrumb-item>

      </el-breadcrumb>
      <div class="test-content">
        <p class="title">Request</p>
        <el-input
          class="text-area"
          type="textarea"
          v-model="testContent"
        >
        </el-input>
        <div class="top button">
          <el-button
            type="primary"
            size="small"
            @click="postApiTest"
          >开始测试</el-button>
          <el-button
            plain
            size="small"
          >重置</el-button>
        </div>
        <p class="title top">Reponse</p>
        <!-- <div class="text-area"></div> -->
        <el-input
          class="top textarea"
          type="textarea"
          v-model="textarea"
          disabled
        >
        </el-input>
        <div class="top button">
          <el-button
            plain
            size="small"
            @click="returnLast"
          >返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateProduction',
  data () {
    return {
      testContent: '',
      textarea: ``
    }
  },
  methods: {
    postApiTest () {
      axios.post("http://localhost:8080/create/test", { testContent: this.testContent })
        .then((res) => {
          this.postApiTestSuc(res);

        })
    },
    postApiTestSuc (res) {
      let data = res.data
      if (data) {
        this.textarea = data.textarea
      }
    },
    returnLast () {

      this.$router.go(-1)
    }
  }

}
</script>


<style lang="scss" scoped>
.create-production {
  padding: 20px;
  .path {
    .breadcrumb {
      margin: 0 24px 24px 24px;
    }
    //重写面包屑的字体颜色
    // .nowPath >>> .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    //   color: #00e27c;
    // }
    .test-content {
      background-color: #fff;
      padding: 24px 340px;
      .button {
        text-align: center;
        font-size: 12px;
      }
      .top {
        margin-top: 20px;
      }
      .title {
        font-size: 16px;
        font-weight: 700;
      }
      .text-area {
        border: 1px solid #ebeef5;
        font-size: 24px;
        margin-top: 20px;
        // background-color: #f5f7fa;
      }
      :deep(.el-textarea__inner) {
        height: 400px;
        font-size: 24px;
      }
    }
  }
}
</style>