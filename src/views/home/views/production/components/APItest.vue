<template>
  <div class="create-production">
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
        <div class="text-area">

        </div>
        <div class="top button">
          <el-button
            type="primary"
            size="small"
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
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'CreateProduction',
  data () {
    return {

    }
  },

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
      }
      .top {
        margin-top: 20px;
      }
      .title {
        font-size: 16px;
        font-weight: 700;
      }
      .text-area {
        box-sizing: border-box;
        padding: 20px;
        border: 1px solid #ebeef5;
        border-radius: 2px;
        margin-top: 20px;
        // background-color: #f5f7fa;
        width: 100%;
        height: 400px;
        overflow: auto;
      }
      // /deep/ .el-textarea__inner {
      //   height: 400px;
      // }
      //     .wrap /deep/ .example {

      //     color: red;

      // }
    }
  }
}
</style>