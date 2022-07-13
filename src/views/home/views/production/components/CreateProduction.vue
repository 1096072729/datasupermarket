<template>
  <div class="create-production">
    <div class="path">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item
          class="nowPath"
          :to="{ path: '/' }"
        >活动管理</el-breadcrumb-item>

      </el-breadcrumb>
      <div class="steps-out-box">
        <div class="steps-in-box">
          <el-steps
            :active="active"
            align-center
            finish-status="wait"
          >
            <el-step
              title="步骤asdddddddddd1"
              description="这是一段很长很长很长的描述性文字"
            ></el-step>
            <el-step
              title="步骤2"
              description="这是一段很长很长很长的描述性文字"
            ></el-step>
            <el-step
              title="步骤3"
              description="这是一段很长很长很长的描述性文字"
            ></el-step>
            <el-step
              title="步骤4"
              description="这是一段很长很长很长的描述性文字"
            ></el-step>
          </el-steps>

          <div class="step-content">
            <div v-if="active==0">

              <create-form-one @next="next"></create-form-one>
            </div>
            <div v-if="active==1">

              <create-form-two
                @next="next"
                @last="last"
              ></create-form-two>
            </div>
            <div v-if="active==2">

              <create-form-three
                @next="next"
                @last="last"
              >
              </create-form-three>
            </div>
            <div v-if="active==3">

              <create-form-one @next="next"></create-form-one>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CreateFormOne from './CreateOne.vue'
import CreateFormTwo from './CreateTwo.vue'
import CreateFormThree from './CreateThree.vue'
export default {
  name: 'CreateProduction',
  data () {
    return {
      active: 0,
      step: [
      ],
    }
  },
  components: {
    CreateFormOne,
    CreateFormTwo,
    CreateFormThree
  }
  ,
  methods: {
    next () {
      this.active++;
    },
    last () {
      this.active--;
    }
  }
}
</script>


<style lang="scss" scoped>
.myColor >>> .el-breadcrumb__inner {
  color: #3a6df3;
}
.create-production {
  padding: 20px;
  .path {
    //重写面包屑的字体颜色
    // .nowPath >>> .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    //   color: #00e27c;
    // }
    .steps-out-box {
      margin: 24px;
      .steps-in-box {
        background-color: #fff;
        padding: 24px 250px;
        margin: 0 auto;
      }
    }
  }
}
</style>