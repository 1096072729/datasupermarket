<template>


  <div class="create-form-two">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
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
        prop="method.value"
      >
        <el-select
          v-model="ruleForm.method.value"
          placeholder="请选择"
          @visible-change="visible($event,ruleForm,'method')"
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
        prop="backendMethod.value"
      >
        <el-select
          v-model="ruleForm.backendMethod.value"
          placeholder="请选择"
          @visible-change="visible($event,ruleForm,'backendMethod')"
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


        <div class="delete-all">
          <div class="delete-all-left"> <span class="iconfont">&#xe64f;</span><span>{{selectNumberMessage}}</span></div>
          <div
            class="delete-all-right"
            @click="deleteAllParameterDefinition"
          >删除全部</div>
        </div>
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
            <template slot-scope="scope">{{ scope.row.place.value }}</template>
          </el-table-column>
          <el-table-column
            label="类型"
            width="110"
          >
            <template slot-scope="scope">{{ scope.row.type.value }}</template>
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
            <template slot-scope="scope">{{ scope.row.lastPlace.value }}</template>
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
              <el-button
                type="text"
                @click="updateParameterDefinition(scope.row)"
              >编辑 </el-button> |
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
            <template slot-scope="scope">{{ scope.row.place.value }}</template>
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
              <el-button
                type="text"
                @click="updateConstant(scope.row)"
              >编辑</el-button> |
              <el-button
                type="text"
                @click="delateconstantDefinitionData(scope.row)"
              >删除</el-button>
              <!-- @click="delateParameterDefinition(scope.row)" -->
            </template>
          </el-table-column>

        </el-table>
        <el-button
          size="small"
          class="button"
          @click="handleAddConstantVisible"
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
        ref="parameterDefinition"
        :model="addParameterDefinitionform"
        :rules="addParameterDefinitionRules"
      >
        <el-form-item
          label="参数名"
          prop="name.value"
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
          prop="place.value"
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
          prop="lastPlace.value"
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
          @click="addParameterDefinitionClick('parameterDefinition')"
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
        ref="addConstantform"
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
          prop="place.value"
          :label-width="formLabelWidth"
        >
          <el-select
            size="small"
            v-model="addConstantform.place.value"
            placeholder="请选择"
          >
            <el-option
              v-for="item in addConstantform.place.options"
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
          @click="addConstantVisibleClike('addConstantform')"
        >确 定</el-button>
      </div>
    </el-dialog>


    <!-- //删除全部的自定义参数 -->
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
              property="place.value"
              label="参数位置"
              width="200"
            ></el-table-column>
            <el-table-column
              property="type.value"
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
          @click="deleteAllClick"
        >确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

import CollapseTransition from "@/utils/collapse-transition";
//注册
let serviceAddressValidate = (rule, value, callback) => {
  let codeReg1 = new RegExp("http://");
  let codeReg2 = new RegExp("https://");
  console.log(value)
  console.log(codeReg1.test(value))
  console.log(codeReg2.test(value))
  if (!(codeReg1.test(value) || codeReg2.test(value))) {
    callback(new Error("必须http://或者https://开头"));
  }

  else {
    callback()
  }
};
let timeoutValidate = (rule, value, callback) => {
  let codeReg = new RegExp("[^0-9]");



  if (codeReg.test(value)) {
    callback(new Error("必须为数字"));
  }
  else if (value > 600000) {
    callback(new Error("不能超过10分钟"));
  }

  else {
    callback()
  }
};



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
            value: 'GET',
            label: 'GET'
          }, {
            value: 'POST',
            label: 'POST'
          }],
          value: ''
        },
        crossDomain: false,
        backendMethod: {
          options: [{
            value: 'GET',
            label: 'GET'
          }, {
            value: 'POST',
            label: 'POST'
          }],
          value: ''
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
        // method: [
        //   { required: true, message: '请选择方法', trigger: 'blur' },
        // ],
        method: {
          value: [{ required: true, message: '请选择方法', trigger: 'blur' }]
        },
        backendMethod: {
          value: [{ required: true, message: '请选择后端方法', trigger: 'blur' }]
        },
        // backendMethod: [
        //   { required: true, message: '请选择后端方法', trigger: 'blur' },
        // ],
        serviceAddress: [
          { required: true, message: '请填入后端服务地址', trigger: 'blur' },
          { validator: serviceAddressValidate, trigger: 'blur', required: true }
        ],
        timeout: [
          { required: true, message: '必须填写超时时间', trigger: 'blur' },
          // { type: 'number', message: '必须填写数字', trigger: 'change' },
          { validator: timeoutValidate, trigger: 'change', required: true },

        ],
      },
      //自定义参数数据
      parameterDefinitionData: [],

      multipleSelection: [],
      //添加自定义参数的小模块显示
      addParameterDefinitionVisible: false,
      //添加自定义参数的form
      addParameterDefinitionform: {
        name: '',
        place: {
          options: [{
            value: 'HEADER',
            label: 'HEADER'
          }, {
            value: 'BODY',
            label: 'BODY'
          }],
          value: ''
        },
        date: '',
        type: {
          options: [{
            value: 'STRING',
            label: 'STRING'
          }, {
            value: 'NUMBER',
            label: 'NUMBER'
          },
          {
            value: 'BOOLEAN',
            label: 'BOOLEAN'
          }],
          value: ''
        },
        required: true,
        defaultValue: '',
        lastName: '',
        lastPlace: {
          options: [{
            value: '后端位置参数1',
            label: '后端位置参数1'
          }, {
            value: '后端位置参数2',
            label: '后端位置参数2'
          },
          {
            value: '后端位置参数3',
            label: '后端位置参数3'
          }],
          value: ''
        },
        example: '',
        describe: '',
      },
      addOldParameterDefinitionform: {
        name: '',
        place: {
          options: [{
            value: 'HEADER',
            label: 'HEADER'
          }, {
            value: 'BODY',
            label: 'BODY'
          }],
          value: ''
        },
        date: '',
        type: {
          options: [{
            value: 'STRING',
            label: 'STRING'
          }, {
            value: 'NUMBER',
            label: 'NUMBER'
          },
          {
            value: 'BOOLEAN',
            label: 'BOOLEAN'
          }],
          value: ''
        },
        required: true,
        defaultValue: '',
        lastName: '',
        lastPlace: {
          options: [{
            value: '后端位置参数1',
            label: '后端位置参数1'
          }, {
            value: '后端位置参数2',
            label: '后端位置参数2'
          },
          {
            value: '后端位置参数3',
            label: '后端位置参数3'
          }],
          value: ''
        },
        example: '',
        describe: '',
      },
      //添加自定义参数规则
      addParameterDefinitionRules: {
        name: {
          value: [{ required: true, message: '请输入参数名', trigger: 'blur' },
          { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }]
        },
        place: { value: [{ required: true, message: '请输入参数位置', trigger: 'blur' }] },
        lastName: [{ required: true, message: '请输入后端参数名称', trigger: 'blur' }],
        lastPlace: { value: [{ required: true, message: '请输入参数位置', trigger: 'blur' }] },
        example: [{ required: true, message: '请输入示例', trigger: 'blur' }],
      },
      addConstantVisible: false,
      //添加常量参数的form
      addConstantform: {
        name: '',
        place: {
          options: [{
            value: 'HEADER',
            label: 'HEADER'
          }, {
            value: 'BODY',
            label: 'BODY'
          }],
          value: ''
        },
        value: '',
        describe: ''
      },
      addOldConstantform: {
        name: '',
        place: {
          options: [{
            value: 'HEADER',
            label: 'HEADER'
          }, {
            value: 'BODY',
            label: 'BODY'
          }],
          value: ''
        },
        value: '',
        describe: ''
      },
      //添加常量参数规则
      addConstantRules: {
        name: [{ required: true, message: '请输入参数名', trigger: 'blur' },
        { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' }],
        place: { value: [{ required: true, message: '请输入参数位置', trigger: 'blur' }] },
        value: [{ required: true, message: '请输入参数位置', trigger: 'blur' }],
      },
      deleteAllParameterDefinitionVisible: false,
      deleteAllParameterDefinitionform: {},
      deleteAllParameterDefinitionRules: {},
      formLabelWidth: '120px',
      constantDefinitionData: [],

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
      this.parameterDefinitionData.splice(
        this.parameterDefinitionData.findIndex((v) => v === row),
        1
      );

    },
    delateconstantDefinitionData (row) {
      this.constantDefinitionData.splice(
        this.constantDefinitionData.findIndex((v) => v === row),
        1
      );

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
      // this.$emit('next');
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$emit('next', this.ruleForm, this.parameterDefinitionData, this.constantDefinitionData);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    last () {
      this.$emit('last')
    },
    showAddParameterDefinition () {
      this.operation = 'add'
      this.addParameterDefinitionform = JSON.parse(JSON.stringify(this.addOldParameterDefinitionform));
      this.addParameterDefinitionVisible = true
    },
    deleteAllParameterDefinition () {
      if (this.parameterDefinitionData.length == 0) {
        this.$message({
          message: '没有数据无法删除',
          type: 'warning'
        });
        return
      }
      this.deleteAllParameterDefinitionVisible = true
    },
    addParameterDefinitionClick (formName) {
      this.$refs[formName].validate((valid) => {

        if (valid) {
          if (this.operation == 'add') {
            this.parameterDefinitionData.push(this.addParameterDefinitionform)
          }
          this.addParameterDefinitionVisible = false;
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    updateParameterDefinition (row) {
      this.operation = 'update'
      this.addParameterDefinitionform = row
      this.addParameterDefinitionVisible = true;
    },
    //添加常量参数
    handleAddConstantVisible () {
      this.addConstantform = JSON.parse(JSON.stringify(this.addOldConstantform));
      this.addConstantVisible = true
      this.operation = 'add'
    },
    //修改常量参数
    updateConstant (row) {
      this.addConstantform = row
      this.addConstantVisible = true
      this.operation = 'update'
    },
    //添加常量参数的确认按钮
    addConstantVisibleClike (formName) {
      this.$refs[formName].validate((valid) => {

        if (valid) {
          if (this.operation == 'add') {
            console.log(this.addConstantform)
            this.constantDefinitionData.push(this.addConstantform)
          }
          console.log(this.constantDefinitionData)
          this.addConstantVisible = false;
        } else {
          console.log('error submit!!');
          return false;
        }
      });



    },
    deleteAllClick () {
      this.parameterDefinitionData = []
      this.deleteAllParameterDefinitionVisible = false
    },
    visible (e, formname, name) {
      console.log(e)
      if (e) {
        formname[name].value = 'GET'
      }
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
    .delete-all {
      box-sizing: border-box;
      margin: 16px 0;
      padding: 0 10px;
      width: 1025px;
      height: 35px;
      background-color: #e6f7ff;
      display: flex;
      justify-content: space-between;
      .delete-all-left {
        display: flex;
        align-items: center;
        color: #666666;
        .iconfont {
          padding: 0 5px;
        }
      }
      .delete-all-right {
        padding: 8px;
        display: flex;
        align-items: center;
        color: #0090ff;
      }
    }
    .button {
      margin: 16px 0;
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
</style>