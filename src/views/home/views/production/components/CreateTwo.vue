<template>


  <div class="create-form-two">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormOne"
      label-width="200px"
      class="demo-ruleForm"
      size="small"
    >
      <div class="title">
        定义API请求
      </div>
      <el-divider></el-divider>

      <el-form-item
        label="请求Path"
        prop="path"
      >
        <span>{{ruleForm.path}}</span>
      </el-form-item>
      <el-form-item
        label="请求协议"
        prop="agreement"
      >
        <el-input v-model="ruleForm.agreement"></el-input>
      </el-form-item>

      <el-form-item
        label="Method"
        prop="method"
      >
        <el-select
          v-model="ruleForm.method.value"
          placeholder="请选择"
        >
          <el-option
            v-for="item in ruleForm.method.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="支持跨域(CROS)">
        <el-switch
          v-model="ruleForm.crossDomain"
          active-color="#13ce66"
          inactive-color="#999999"
        >
        </el-switch>
      </el-form-item>
      <el-form-item
        label="后端请求方式"
        prop="name"
      >
        <el-select
          v-model="ruleForm.backendMethod.value"
          placeholder="请选择"
        >
          <el-option
            v-for="item in ruleForm.backendMethod.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="后端服务地址"
        prop="serviceAddress"
      >
        <el-input v-model="ruleForm.serviceAddress"></el-input>
      </el-form-item>
      <el-form-item
        label="后端超时（ms）"
        prop="timeout"
      >
        <el-input v-model="ruleForm.timeout"></el-input>
      </el-form-item>
    </el-form>
    <!-- <el-button
      type="primary"
      @click="changeParameterDefinition"
    >主要按钮</el-button> -->
    <div class="title">
      入参定义
      <span
        class="fold"
        v-if="parameterDefinitionShow"
        @click="changeParameterDefinition"
      >收起<span class="iconfont ">&#xe686;</span></span>
      <span
        class="fold"
        v-if="!parameterDefinitionShow"
        @click="changeParameterDefinition"
      >展开<span class="iconfont ">&#xe688;</span></span>
    </div>
    <el-divider></el-divider>
    <CollapseTransition>
      <div
        class="parameter-efinition"
        ref="child"
        v-show="parameterDefinitionShow"
      >
        <el-alert
          class="parameter-alert"
          title="请求中所有参数，参数名保证唯一"
          type="info"
          show-icon
        >
        </el-alert>
        <el-alert
          class="parameter-alert"
          :title="selectNumberMessage"
          type="info"
          show-icon
        >
        </el-alert>

        <el-table
          ref="multipleTable"
          :data="parameterDefinitionData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="50"
          >
          </el-table-column>
          <el-table-column
            label="参数名"
            width="80"
          >
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            label="参数位置"
            width="80"
          >
            <template slot-scope="scope">{{ scope.row.place }}</template>
          </el-table-column>
          <el-table-column
            label="类型"
            width="110"
          >
            <template slot-scope="scope">{{ scope.row.type }}</template>
          </el-table-column>
          <el-table-column
            label="是否必填"
            width="110"
          >
            <template slot-scope="scope">{{ scope.row.required }}</template>
          </el-table-column>
          <el-table-column
            label="默认值"
            width="120"
          >
            <template slot-scope="scope">{{ scope.row.defaultValue }}</template>
          </el-table-column>
          <el-table-column
            label="后续参数名称"
            width="120"
          >
            <template slot-scope="scope">{{ scope.row.lastName }}</template>
          </el-table-column>
          <el-table-column
            label="后续位置参数"
            width="120"
          >
            <template slot-scope="scope">{{ scope.row.lastPlace }}</template>
          </el-table-column>
          <el-table-column
            label="示例"
            width="120"
          >
            <template slot-scope="scope">{{ scope.row.example }}</template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="120"
          >
            <template slot-scope="scope">
              <el-button type="text">编辑 </el-button> |
              <el-button
                type="text"
                @click="delateParameterDefinition(scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>

        </el-table>
        <el-button
          @click="showAddParameterDefinition"
          size="small"
          class="button"
        ><span class="iconfont">&#xeb78;</span>添加自定义入参</el-button>
      </div>
    </CollapseTransition>

    <div class="title">
      常量参数
      <span
        class="fold"
        v-if="constantShow"
        @click="changeConstantShow"
      >收起<span class="iconfont ">&#xe686;</span></span>
      <span
        class="fold"
        v-if="!constantShow"
        @click="changeConstantShow"
      >展开<span class="iconfont ">&#xe688;</span></span>
    </div>
    <el-divider></el-divider>
    <CollapseTransition>
      <div
        class="parameter-efinition"
        ref="child"
        v-show="constantShow"
      >

        <el-table
          ref="multipleTable"
          :data="constantDefinitionData"
          tooltip-effect="dark"
        >

          <el-table-column
            label="常量参数名"
            width="250"
          >
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column
            label="参数位置"
            width="250"
          >
            <template slot-scope="scope">{{ scope.row.place }}</template>
          </el-table-column>
          <el-table-column
            label="参数值"
            width="250"
          >
            <template slot-scope="scope">{{ scope.row.value }}</template>
          </el-table-column>
          <el-table-column
            label="描述"
            width="150"
          >
            <template slot-scope="scope">{{ scope.row.describe }}</template>
          </el-table-column>

          <el-table-column
            label="操作"
            width="120"
          >
            <template slot-scope="scope">
              <el-button type="text">编辑 </el-button> |
              <el-button
                type="text"
                @click="delateParameterDefinition(scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>

        </el-table>
        <el-button
          size="small"
          class="button"
        ><span class="iconfont">&#xeb78;</span>添加常量参数</el-button>
      </div>
    </CollapseTransition>
    <div class="operation">

      <el-button
        type="primary"
        size="small"
        @click="next"
      >下一步</el-button>
      <el-button
        size="small"
        @click="last"
      >上一步</el-button>
      <el-button
        type="text"
        size="small"
      >取消</el-button>

    </div>



    <el-dialog
      title="收货地址"
      :visible.sync="addParameterDefinitionVisible"
      append-to-body
    >
      <el-form :model="form">
        <el-form-item
          label="活动名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="活动区域"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            ></el-option>
            <el-option
              label="区域二"
              value="beijing"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="addParameterDefinitionVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="addParameterDefinitionVisible = false"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>



</template>

<script>

import CollapseTransition from "@/utils/collapse-transition";
//注册


export default {
  name: 'CreateFormTwo',
  data () {
    return {

      step: [

      ],
      parameterDefinitionShow: true,
      constantShow: true,
      ruleForm: {
        path: '我是路径，平台生成，不可编辑',
        agreement: 'https',
        method: {
          options: [{
            value: '选项1',
            label: 'GET'
          }, {
            value: '选项2',
            label: 'POST'
          }],
          value: ''
        },
        crossDomain: false,
        backendMethod: {
          options: [{
            value: '选项1',
            label: 'GET'
          }, {
            value: '选项2',
            label: 'POST'
          }],
          value: 'POST'
        },
        serviceAddress: '',
        timeout: 5000
      },
      rules: {
        name: [
          { required: true, message: '请输入API名称', trigger: 'blur' },
          { min: 3, max: 255, message: '长度在 3 到 255 个字符', trigger: 'blur' }
        ],
        method: [
          { required: true, message: '请选择方法', trigger: 'blur' },
        ],
        backendMethod: [
          { required: true, message: '请选择后端方法', trigger: 'blur' },
        ],
        serviceAddress: [
          { required: true, message: '请填入后端服务地址', trigger: 'blur' },
        ],
        timeout: [
          { type: 'number', message: '必须填写数字', trigger: 'change' },
          { required: true, message: '必须填写超时时间', trigger: 'blur' },
        ],
      },
      parameterDefinitionData: [{
        name: '王小虎',
        place: 'HEADER',
        date: '2016-05-03',
        type: 'STRING',
        required: '',
        defaultValue: '',
        lastName: '',
        lastPlace: '',
        example: '',
        describe: '',

      }],
      multipleSelection: [],
      addParameterDefinitionVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      constantDefinitionData: [{
        name: '王小虎',
        place: 'HEADER',
        value: 'asddddddd',
        describe: 'asdaaaaaaaaa'

      }],

    }
  },
  methods: {
    changeParameterDefinition () {
      this.parameterDefinitionShow = !this.parameterDefinitionShow
    },
    changeConstantShow () {
      this.constantShow = !this.constantShow
    }
    ,
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    delateParameterDefinition (row) {
      console.log(row)
      console.log(row)
    }
    ,
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput () {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm () {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    next () {
      this.$emit('next');
    },
    last () {
      this.$emit('last')
    },
    showAddParameterDefinition () {
      console.log('asdasdddddddddddddddddddddddddddddd')
      this.addParameterDefinitionVisible = true
    }
  },
  components: {
    CollapseTransition: CollapseTransition,
  },
  computed: {
    selectNumberMessage () {
      return '已经选择了' + this.multipleSelection.length + '项'
    }
  }
}
</script>





<style lang="scss" scoped>
.create-form-two {
  padding: 36px 150px;
  .demo-ruleForm {
  }
  .title {
    font-weight: bolder;
    font-size: 16px;
    .fold {
      font-size: 12px;
      color: #0090ff;
    }
  }
  .parameter-efinition {
    .parameter-alert {
      // color:#e6f7ff
      background-color: #e6f7ff;
    }
    .button {
      border: 2px dashed;
      width: 100%;
    }
  }
  .operation {
    text-align: center;
  }
}
// .el-form-item__label {
//   padding-right: 50px;
// }
</style>