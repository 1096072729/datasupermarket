<template>


  <div class="create-form-one">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-rule-form"
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
        multiple
        prop="dynamicTags.value"
      >
        <el-select
          class="dynamic-tags"
          size="medium"
          v-model="ruleForm.dynamicTags.value"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in ruleForm.dynamicTags.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

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
          rows="4"
          v-model="ruleForm.APIIntroduce"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="产品定价"
        prop="setPrice"
      >
        <div class="set-price">
          <el-input
            class="unit-time"
            v-model="ruleForm.setPrice.unitTime"
          ></el-input>
          <el-select
            class="unit-duration"
            v-model="ruleForm.setPrice.unitDuration.value"
            placeholder="请选择"
          >
            <el-option
              v-for="item in ruleForm.setPrice.unitDuration.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>/
          <el-input
            class="all-price"
            v-model="ruleForm.setPrice.price"
          ></el-input>
          <span>元</span>
        </div>
      </el-form-item>
      <el-form-item
        label="权限设置"
        prop="jurisdiction"
      >
        <el-select
          v-model="ruleForm.jurisdiction.value"
          placeholder="请选择"
          @visible-change="visible"
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

let validateSummary = (rule, value, callback) => {
  let codeReg = new RegExp("[^A-Za-z0-9\u4e00-\u9fa5]");
  if (codeReg.test(value)) {
    callback(new Error("只允许输入中文、英文、数字"));
  }

  else {
    callback()
  }
};

let validateName = (rule, value, callback) => {
  let codeReg = new RegExp("^[0-9a-zA-Z]");
  if (!codeReg.test(value)) {
    callback(new Error("仅以汉字或者英文开头"));
  }

  else {
    callback()
  }
};

let validateSetPrice = (rule, value, callback) => {
  let codeReg = new RegExp("[^0-9]");

  if (!(value.unitTime && value.unitDuration.value && value.price)) {
    callback(new Error("必须完整的填写价格信息"));
  }
  else if (codeReg.test(value.unitTime) || codeReg.test(value.price)) {
    callback(new Error("只允许填写数字"));
  }
  else if (!(value.unitTime.length <= 9 && value.price.length <= 9)) {
    callback(new Error("输入的字符必须小于9个"));
  }

  else {
    callback()
  }
};
// let dynamicTagsValidate = (rule, value, callback) => {
//   console.log(value.value.length)
//   if (value.value.length == 0) {
//     callback(new Error("必须选择标签"));
//   }
//   callback()

// };




export default {
  name: 'CreateFormOne',
  data () {
    return {
      codeReg: RegExp("[A-Za-z0-9]+")
      ,
      step: [

      ],
      ruleForm: {
        name: '',
        response: 'default',
        dynamicTags: {
          options: [{
            value: '黄金糕',
            label: '黄金糕'
          }, {
            value: '蚵仔煎',
            label: '蚵仔煎'
          }, {
            value: '龙须面',
            label: '龙须面'
          }, {
            value: '北京烤鸭',
            label: '北京烤鸭'
          }],
          value: ''
        },
        APISummary: '',
        APIIntroduce: '',

        jurisdiction: {
          options: [{
            value: '选项1',
            label: '所有人可见'
          }, {
            value: '选项2',
            label: '仅自己可见'
          }],
          value: ''
        },
        setPrice: {
          unitTime: null
          ,
          unitDuration: {
            options: [{
              value: '年',
              label: '年'
            }, {
              value: '月',
              label: '月'
            }, {
              value: '日',
              label: '日'
            }],
            value: '年'
          },
          price: null,
        },
      },
      rules: {
        name: [
          { required: true, message: '请输入API名称', trigger: 'blur' },
          { min: 3, max: 64, message: '长度在 3 到 64 个字符', trigger: 'blur' },
          { validator: validateName, trigger: 'blur', required: true }
        ],
        dynamicTags: {
          value: [
            // { required: true, message: '请输入产品标签', trigger: 'blur' },
            { required: true, message: '必须选择标签', trigger: 'blur' }
          ]
        }

        ,
        APISummary: [
          { required: true, message: '请输入API概述', trigger: 'change' },
          { max: 30, message: '长度小于 60 个字符', trigger: 'blur' },
          { validator: validateSummary, trigger: 'change', required: true }
        ],
        APIIntroduce: [
          { required: true, message: '请输入API介绍', trigger: 'change' },
          { max: 400, message: '长度小于 400 个字符', trigger: 'blur' }
        ],
        setPrice: [
          { validator: validateSetPrice, trigger: 'blur', required: true }]


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
      console.log(this.ruleForm.dynamicTags.indexOf(tag))
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
      // if (this.ruleForm.dynamicTags.indexOf(inputValue)) {
      //   this.$message.error('不可以添加重复标签');
      //   this.inputVisible = false;
      //   this.inputValue = '';
      //   return
      // }
      if (inputValue) {
        this.ruleForm.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    submitForm (formName) {

      // this.$emit('next');
      this.$refs[formName].validate((valid) => {
        console.log('asdasd')
        if (valid) {
          this.$emit('next', this.ruleForm);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    visible (e) {
      if (e) {
        this.ruleForm.jurisdiction.value = '所有人可见'
      }
    }

  }
}
</script>





<style lang="scss" scoped>
.create-form-one {
  padding: 20px 340px;
  .dynamic-tags {
    display: flex;
    :deep(.el-input__inner) {
      // width: 100% !important;
      border: 1px solid #dcdfe6;
      height: 35px !important;
    }
    :deep(.el-tag.el-tag--info .el-tag__close) {
      color: #000 !important;
      background-color: #f0f2f5;
    }
  }

  .set-price {
    flex-wrap: nowrap;
    display: flex;
    .unit-time {
      padding: 0 8px 0 0;
      width: 180px;
    }

    .unit-duration {
      padding: 0 8px;
      width: 80px;
    }

    .all-price {
      margin: 0 8px;
      flex: 1;
      width: 180px;
    }
  }
}
</style>