<template>


  <div class="create-form-one">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      size="small"
    >
      <el-form-item
        label="API名称"
        prop="name"
      >
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="网关响应">
        <span>
          {{ruleForm.response}}
        </span>
      </el-form-item>
      <el-form-item
        label="产品标签"
        prop="dynamicTags"
      >
        <!-- suffix-icon="el-icon-plus" -->
        <el-input>
        </el-input>
        <el-tag
          class="input-old-tag"
          :key="tag"
          v-for="tag in ruleForm.dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <!-- v-else -->
        <el-button
          v-if="dynamicTags.length<=3"
          class="button-new-tag"
          size="mini"
          @click="showInput"
        >+ New Tag</el-button>
      </el-form-item>
      <el-form-item
        label="API概述"
        prop="APISummary"
      >
        <el-input
          v-model="ruleForm.APISummary"
          placeholder="请一句话描述API的整体情况，最多输入30个字符"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="API介绍"
        prop="APIIntroduce"
      >
        <el-input
          type="textarea"
          v-model="ruleForm.APIIntroduce"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="产品定价"
        prop="price"
      >
        <el-input
          v-model="ruleForm.price"
          placeholder="请一句话描述API的整体情况，最多输入30个字符"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="权限设置"
        prop="jurisdiction"
      >
        <el-select
          v-model="ruleForm.jurisdiction.value"
          placeholder="请选择"
        >
          <el-option
            v-for="item in ruleForm.jurisdiction.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >
          <!-- @click="submitForm('ruleForm')" -->
          下一步
        </el-button>
        <el-button type="text">取消</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>



export default {
  name: 'CreateFormOne',
  data () {
    return {

      step: [

      ],
      ruleForm: {
        name: '',
        response: 'default',
        dynamicTags: [],
        APISummary: '',
        APIIntroduce: '',
        price: 999,
        jurisdiction: {
          options: [{
            value: '选项1',
            label: '所有人可见'
          }, {
            value: '选项2',
            label: '仅自己可见'
          }],
          value: '所有人可见'
        }
        ,
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入API名称', trigger: 'blur' },
          { min: 3, max: 255, message: '长度在 3 到 255 个字符', trigger: 'blur' }
        ],
        dynamicTags: [
          { required: true, message: '请输入产品标签', trigger: 'change' }
        ],
        APISummary: [
          { required: true, message: '请输入API概述', trigger: 'change' },
          { max: 30, message: '长度小于 30 个字符', trigger: 'blur' }
        ],
        APIIntroduce: [
          { required: true, message: '请输入API介绍', trigger: 'change' },
          { max: 255, message: '长度小于 255 个字符', trigger: 'blur' }
        ],

        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      dynamicTags: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.ruleForm.dynamicTags.indexOf(tag), 1);
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
        this.ruleForm.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    submitForm (formName) {
      console.log(formName)
      this.$emit('next');
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     this.$emit('next');
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    }
  }
}
</script>





<style lang="scss" scoped>
.create-form-one {
  padding: 20px 340px;
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
    bottom: 34px;
  }
  .input-new-tag {
    position: relative;
    bottom: 34px;
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .input-old-tag {
    position: relative;
    bottom: 34px;
  }
}
</style>