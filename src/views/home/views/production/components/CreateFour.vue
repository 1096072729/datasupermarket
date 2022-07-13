<template>


  <div class="create-form-four">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="200px"
      class="demo-ruleForm"
      size="small"
    >
      <el-form-item
        label="数据产品框架协议："
        prop="agreement"
      >
        <el-upload
          class="upload-demo"
          action="http://localhost:8080/upload"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          accept=".rar, .zip, .doc, .docx, .pdf, .jpg"
          :file-list="ruleForm.agreement"
        >
          <el-button
            plain
            size="mini"
          >
            <span class="iconfont">&#xe667;</span>
            上传文件
          </el-button>
          <div
            slot="tip"
            class="el-upload__tip"
          >支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>
        </el-upload>
      </el-form-item>
      <el-form-item
        label="软件注册权："
        prop="registrationRight"
        class="registration-right"
      >
        <div>

          <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8080/upload"
            multiple
            :file-list="ruleForm.registrationRight"
            accept=".jpg,.jepg,.bmp,.png"
          >
            <span class="el-icon-circle-plus plus"></span>
          </el-upload>
          <span>上传的图片格式要求.jpg、.jepg、.bmp、.png，不超过10M</span>
        </div>
      </el-form-item>
      <el-form-item
        label="数据来源说明书："
        prop="dataSourceSpecification"
        class="registration-right"
      >
        <el-upload
          class="upload-demo"
          action="http://localhost:8080/upload"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          accept=".rar, .zip, .doc, .docx, .pdf, .jpg"
          :file-list="ruleForm.dataSourceSpecification"
        >
          <el-button
            plain
            size="mini"
          >
            <span class="iconfont">&#xe667;</span>
            上传文件
          </el-button>
          <div
            slot="tip"
            class="el-upload__tip"
          >支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>
        </el-upload>
      </el-form-item>

      <el-form-item
        label="数据产品准入承诺书："
        prop="letterOfCommitment"
        class="registration-right"
      >
        <el-upload
          class="upload-demo"
          action="http://localhost:8080/upload"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="ruleForm.letterOfCommitment"
        >
          <el-button
            plain
            size="mini"
          >
            <span class="iconfont">&#xe667;</span>
            上传文件
          </el-button>

        </el-upload>
      </el-form-item>

      <el-form-item
        label="数据产品准入公证告知书："
        prop="notificationLetter"
        class="registration-right"
      >
        <el-upload
          class="upload-demo"
          action="http://localhost:8080/upload"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="ruleForm.notificationLetterL"
        >
          <el-button
            plain
            size="mini"
          >
            <span class="iconfont">&#xe667;</span>
            上传文件
          </el-button>
          <div
            slot="tip"
            class="el-upload__tip"
          >支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>

        </el-upload>
      </el-form-item>
      <el-form-item
        label="其他："
        prop="other"
        class="registration-right"
      >
        <el-upload
          class="upload-demo"
          action="http://localhost:8080/upload"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="ruleForm.other"
        >
          <el-button
            plain
            size="mini"
          >
            <span class="iconfont">&#xe667;</span>
            上传文件
          </el-button>
          <div
            slot="tip"
            class="el-upload__tip"
          >支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>

        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >
          <!-- @click="submitForm('ruleForm')" -->
          创建
        </el-button>
        <el-button
          size="small"
          @click="last"
        >上一步</el-button>
        <el-button type="text">取消</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>



export default {
  name: 'CreateFormFour',
  data () {
    return {
      ruleForm: {
        agreement: [],
        registrationRight: [],
        dataSourcenSpecification: [],
        letterOfCommitment: [],
        notificationLetterL: [],
        other: []
      },
      rules: {
        agreement: [
          { required: true, message: '请选择数据产品框架协议', trigger: 'blur' },
        ],
        label: [
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
      createFormFour: {
        registrationRightImg: ''
      }

    }
  },
  methods: {

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
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 ${files.length + fileList.length - 1} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove (file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    last () {
      this.$emit('last')
    },
  }
}
</script>





<style lang="scss" scoped>
.create-form-four {
  padding: 20px 300px;
  .registration-right {
    .plus {
      font-size: 36px;
      position: relative;
      top: 40%;
    }
  }
}
</style>