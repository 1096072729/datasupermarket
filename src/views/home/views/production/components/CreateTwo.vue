<template>


  <div class="create-form-one">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormOne"
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
        prop="label"
      >
        <el-input suffix-icon="el-icon-plus">
        </el-input>
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
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
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag"
          size="small"
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
          @click="next"
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
       
      },
      rules: {
        name: [
          { required: true, message: '请输入API名称', trigger: 'blur' },
          { min: 3, max: 255, message: '长度在 3 到 255 个字符', trigger: 'blur' }
        ],
   

        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
      },
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
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
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}
</style>