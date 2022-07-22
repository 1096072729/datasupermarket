<template>
  <div class="create-production">
    <div class="path">
      <el-breadcrumb
        class="breadcrumb"
        separator="/"
      >
        <el-breadcrumb-item>我的产品</el-breadcrumb-item>
        <el-breadcrumb-item
          class="nowPath"
          :to="{ path: '/' }"
        >创建产品</el-breadcrumb-item>

      </el-breadcrumb>
      <div class="steps-out-box">
        <div class="steps-in-box">
          <!-- <el-steps
            :active="active"
            align-center
            finish-status="wait"
            class="steps-title"
          >
            <el-step title="填写基本信息"></el-step>
            <el-step title="定义API请求与后端服务"></el-step>
            <el-step title="定义返回结果"></el-step>
            <el-step title="上传证明"></el-step>
          </el-steps> -->
          <steps-component
            :currentStep="active"
            :totalSteps="4"
            :stepsLabel="stepsLabel"
            @change="onChange"
          ></steps-component>
          <!-- :stepsDesc="stepsDesc" -->







          <div class="step-content">
            <div v-show="active==1">

              <create-form-one @next="nextOne"></create-form-one>
            </div>
            <div v-show="active==2">

              <create-form-two
                @next="nextTwo"
                @last="last"
              ></create-form-two>
            </div>
            <div v-show="active==3">

              <create-form-three
                @next="nextThree"
                @last="last"
              >
              </create-form-three>
            </div>
            <div v-show="active==4">

              <create-form-four
                @create="create"
                @last="last"
              ></create-form-four>
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
import CreateFormFour from './CreateFour.vue'
import StepsComponent from './step.vue'
import { Loading } from 'element-ui';
import axios from 'axios'
export default {
  name: 'CreateProduction',
  data () {
    return {
      active: 1,
      stepsLabel: ['填写基本信息', '定义API请求与后端服务', '定义返回结果', '上传证明'],
      stepsDesc: ['', '', '', '',],
      data: {
        formOne: {},
        formTwo: {},
        formThree: {},
        formFour: {},
        parameterDefinitionData: [],
        constantDefinitionData: []
      },
      loadingInstance: null,
    }
  },
  components: {
    CreateFormOne,
    CreateFormTwo,
    CreateFormThree,
    CreateFormFour,
    StepsComponent
  }
  ,
  methods: {


    nextOne (form) {
      this.data.formOne = form;
      this.active++;
    },
    nextTwo (ruleForm, parameterDefinitionData, constantDefinitionData) {
      this.data.formTwo = ruleForm;
      this.data.parameterDefinitionData = parameterDefinitionData;
      this.data.constantDefinitionData = constantDefinitionData;
      this.active++;
    },

    nextThree (form) {
      this.data.formThree = form;
      this.active++;
    },
    // nextFour (form) {
    //   this.formOne = formOne;
    //   this.active++;
    // },
    // next () {
    //   this.active++;
    // },
    last () {
      this.active--;
    },
    async create (form) {

      this.data.formFour = form;
      this.loadingInstance = Loading.service({
        // 动画中的文字
        text: '加载中',
        // 要加载动画的容器
        target: '.index'
      });
      await axios.post("http://localhost:8080/home/create", { data: this.data })
        .then(() => {
          this.loadingInstance.close();
          this.$message({
            message: '恭喜你，创建产品成功',
            type: 'success'
          });
        })
    },
    onChange (active) {
      this.active = active
    }
  }
}
</script>


<style lang="scss" scoped>
.create-production {
  padding: 20px;
  .path {
    .breadcrumb {
      margin: 0 24px;
    }
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
        // .steps-title {
        //   :deep(.el-step.is-center .el-step__line) {
        //     left: 120%;
        //     right: -40%;
        //   }
        //   :deep(.el-step__title) {
        //     position: relative;
        //     left: 80px;
        //     bottom: 40px;
        //   }
        // }
        // .step-content {
        //   min-height: 1000px;
        // }
      }
    }
  }
  :deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
    font-weight: 600;
    color: #333333;
  }
}
</style>