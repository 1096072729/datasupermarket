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
        <!-- <el-input v-model="ruleForm.agreement"></el-input> -->
        {{ruleForm.agreement}}
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
        <!-- <el-alert
          class="parameter-alert"
          :title="selectNumberMessage"
          type="info"
          show-icon
        >
        </el-alert> -->
        <el-alert
          class="parameter-alert"
          :title="selectNumberMessage"
          close-text="删除全部"
          type="warning"
          @close="deleteAllParameterDefinition"
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
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column
            label="参数位置"
            width="100"
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
            width="80"
          >
            <template slot-scope="scope">{{ scope.row.required }}</template>
          </el-table-column>
          <el-table-column
            label="默认值"
            width="100"
          >
            <template slot-scope="scope">{{ scope.row.defaultValue }}</template>
          </el-table-column>
          <el-table-column
            label="后续参数名称"
            width="130"
          >
            <template slot-scope="scope">{{ scope.row.lastName }}</template>
          </el-table-column>
          <el-table-column
            label="后续位置参数"
            width="130"
          >
            <template slot-scope="scope">{{ scope.row.lastPlace }}</template>
          </el-table-column>
          <el-table-column
            label="示例"
            width="80"
          >
            <template slot-scope="scope">{{ scope.row.example }}</template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="140"
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
            width="120"
          >
            <template slot-scope="scope">{{ scope.row.describe }}</template>
          </el-table-column>

          <el-table-column
            label="操作"
            width="140"
          >
            <template slot-scope="scope">
              <el-button type="text">编辑</el-button> |
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
          @click="addConstantVisible=true"
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


    <!-- //添加自定义参数的弹窗 -->
    <el-dialog
      title="添加参数定义"
      class="addParameterDefinition"
      :visible.sync="addParameterDefinitionVisible"
      append-to-body
    >
      <el-form
        :model="addParameterDefinitionform"
        :rules="addParameterDefinitionRules"
      >
        <el-form-item
          label="参数名"
          prop="name"
          :label-width="formLabelWidth"
        >
          <el-input
            size="small"
            v-model="addParameterDefinitionform.name"
            autocomplete="off"
          ></el-input>
          <span class="remarks">支持英文、数字、点、中划线、下划线、且只能以英文开头，1-32个字符</span>
        </el-form-item>
        <el-form-item
          label="参数位置"
          prop="place"
          :label-width="formLabelWidth"
        >
          <el-select
            size="small"
            v-model="addParameterDefinitionform.place.value"
            placeholder="请选择"
          >
            <el-option
              v-for="item in addParameterDefinitionform.place.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="参数类型"
          :label-width="formLabelWidth"
        >
          <el-select
            size="small"
            v-model="addParameterDefinitionform.type.value"
            placeholder="请选择"
          >
            <el-option
              v-for="item in addParameterDefinitionform.type.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="是否必填"
          :label-width="formLabelWidth"
        >
          <el-switch
            size="small"
            v-model="addParameterDefinitionform.required"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-form-item>
        <el-form-item
          label="默认值"
          :label-width="formLabelWidth"
        >
          <el-input
            size="small"
            v-model="addParameterDefinitionform.defaultValue"
            autocomplete="off"
          ></el-input>
          <span class="remarks">参数没有值时所使用的默认值</span>
        </el-form-item>
        <el-form-item
          label="后端参数名称"
          prop="lastName"
          :label-width="formLabelWidth"
        >
          <el-input
            size="small"
            v-model="addParameterDefinitionform.lastName"
            autocomplete="off"
          ></el-input>

        </el-form-item>
        <el-form-item
          label="后端位置参数"
          :label-width="formLabelWidth"
          prop="lastPlace"
        >
          <el-select
            size="small"
            v-model="addParameterDefinitionform.lastPlace.value"
            placeholder="请选择"
          >
            <el-option
              v-for="item in addParameterDefinitionform.lastPlace.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

        </el-form-item>

        <el-form-item
          label="示例"
          :label-width="formLabelWidth"
        >
          <el-input
            size="small"
            v-model="addParameterDefinitionform.example"
            autocomplete="off"
          ></el-input>

        </el-form-item>
        <el-form-item
          label="描述"
          :label-width="formLabelWidth"
        >
          <el-input
            size="small"
            v-model="addParameterDefinitionform.describe"
            autocomplete="off"
          ></el-input>

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
    <!-- //添加常量参数的弹窗 -->
    <el-dialog
      title="添加常量参数"
      class="addParameterDefinition"
      :visible.sync="addConstantVisible"
      append-to-body
    >
      <el-form
        :model="addConstantform"
        :rules="addParameterDefinitionRules"
      >
        <el-form-item
          label="常量参数名"
          prop="name"
          :label-width="formLabelWidth"
        >
          <el-input
            size="small"
            v-model="addConstantform.name"
            autocomplete="off"
          ></el-input>
          <span class="remarks">支持英文、数字、点、中划线、下划线、且只能以英文开头，1-32个字符</span>
        </el-form-item>

        <el-form-item
          label="参数位置"
          prop="place"
          :label-width="formLabelWidth"
        >
          <el-select
            size="small"
            v-model="addParameterDefinitionform.place.value"
            placeholder="请选择"
          >
            <el-option
              v-for="item in addParameterDefinitionform.place.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>


        <el-form-item
          label="参数值"
          :label-width="formLabelWidth"
        >
          <el-input
            size="small"
            v-model="addConstantform.value"
            autocomplete="off"
          ></el-input>
        </el-form-item>



        <el-form-item
          label="描述"
          :label-width="formLabelWidth"
          prop="describe"
        >
          <el-input
            size="small"
            v-model="addConstantform.describe"
            autocomplete="off"
          ></el-input>

        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="addConstantVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="addConstantVisible = false"
        >确 定</el-button>
      </div>
    </el-dialog>



    <el-dialog
      class="delete-all"
      size="small"
      append-to-body
      :visible.sync="deleteAllParameterDefinitionVisible"
    >
      <div class="delete-all-content">

        <div class="title-icon"><span class="iconfont">&#xe667;</span> </div>
        <div>

          <p>确认要删除以下入参定义吗？</p>
          <p class="remarks">删除后。关联的后端服务参数也将删除</p>

          <el-table
            size="small"
            :data="parameterDefinitionData"
          >
            <el-table-column
              property="name"
              label="参数名"
              width="150"
            ></el-table-column>
            <el-table-column
              property="place"
              label="参数位置"
              width="200"
            ></el-table-column>
            <el-table-column
              property="type"
              label="类型"
            ></el-table-column>
          </el-table>
        </div>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          size="small"
          @click="deleteAllParameterDefinitionVisible = false"
        >取 消</el-button>
        <el-button
          size="small"
          type="primary"
          @click="deleteAllParameterDefinitionVisible = false"
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


      //折叠面板
      parameterDefinitionShow: true,
      constantShow: true,
      //核心表单
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
      //核心表单规则
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
      //自定义参数数据
      parameterDefinitionData: [{
        name: '王小虎',
        place: 'HEADER',
        type: 'STRING',
        required: '',
        defaultValue: '',
        lastName: '',
        lastPlace: '',
        example: '',
        describe: '',
      }],

      multipleSelection: [],
      //添加自定义参数的小模块显示
      addParameterDefinitionVisible: false,
      //添加自定义参数的form
      addParameterDefinitionform: {
        name: '',
        place: {
          options: [{
            value: '选项1',
            label: 'HEADER'
          }, {
            value: '选项2',
            label: 'BODY'
          }],
          value: ''
        },
        date: '',
        type: {
          options: [{
            value: '选项1',
            label: 'STRING'
          }, {
            value: '选项2',
            label: 'NUMBER'
          },
          {
            value: '选项3',
            label: 'BOOLEAN'
          }],
          value: ''
        },
        required: true,
        defaultValue: '',
        lastName: '',
        lastPlace: {
          options: [{
            value: '选项1',
            label: '后端位置参数1'
          }, {
            value: '选项2',
            label: '后端位置参数2'
          },
          {
            value: '选项3',
            label: '后端位置参数3'
          }],
          value: ''
        },
        example: '',
        describe: '',
      },
      //添加自定义参数规则
      addParameterDefinitionRules: {
        name: [{ required: true, message: '请输入参数名', trigger: 'blur' },
        { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }],
        place: [{ required: true, message: '请输入参数位置', trigger: 'blur' }],
        lastName: [{ required: true, message: '请输入后端参数名称', trigger: 'blur' }],
        lastPlace: [{ required: true, message: '请输入后端位置参数', trigger: 'blur' }],
        example: [{ required: true, message: '请输入示例', trigger: 'blur' }],
      },
      addConstantVisible: false,
      addConstantform: {
        name: '',
        place: {
          options: [{
            value: '选项1',
            label: 'HEADER'
          }, {
            value: '选项2',
            label: 'BODY'
          }],
          value: ''
        },
        value: '',
        describe: ''
      },
      addConstantRules: {
        name: [{ required: true, message: '请输入参数名', trigger: 'blur' },
        { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }],
        place: [{ required: true, message: '请输入参数位置', trigger: 'blur' }],
        value: [{ required: true, message: '请输入参数位置', trigger: 'blur' }],
      },
      deleteAllParameterDefinitionVisible: false,
      deleteAllParameterDefinitionform: {},
      deleteAllParameterDefinitionRules: {},
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
      this.addParameterDefinitionVisible = true
    },
    deleteAllParameterDefinition () {
      this.deleteAllParameterDefinitionVisible = true
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
  .addParameterDefinition {
    line-height: 16px;
    font-size: 16px;
  }
}
.remarks {
  color: #999999;
  font-size: 12px;
}

.delete-all {
  .delete-all-content {
    line-height: 24px;
    display: flex;
    .title-icon {
      text-align: right;
      width: 50px;
      .iconfont {
        padding: 0 15px;
      }
    }
  }
}
// .el-form-item__label {
//   padding-right: 50px;
// }
</style>