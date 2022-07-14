<template>
  <div class="create-form-three">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      label-position="top"
    >

      <el-form-item
        label="成功响应实例"
        prop="success"
      >
        <div class="response">

          <el-input
            class="user-defined"
            type="textarea"
            v-model="ruleForm.success"
            resize="none"
            placeholder="请输入成功响应实例，帮助调用者理解和使用您的API"
          ></el-input>
          <el-input
            class="example"
            type="textarea"
            v-model="ruleForm.successExample"
            resize="none"
            disabled
          ></el-input>
        </div>
      </el-form-item>
      <el-form-item label="失败响应实例">
        <div class="response">

          <el-input
            class="user-defined"
            type="textarea"
            v-model="ruleForm.fail"
            resize="none"
            placeholder="请输入失败响应实例"
          ></el-input>
          <el-input
            class="example"
            type="textarea"
            v-model="ruleForm.failExample"
            resize="none"
            disabled
          ></el-input>
        </div>
      </el-form-item>
      <!-- <el-form-item
        label="API调用说明手册："
        label-position="left"
      >
        asdasd
      </el-form-item> -->
      <div class="upload">

        <span class="upload-title">
          API调用说明手册：
        </span>
        <el-upload
          class="upload-demo"
          action="http://localhost:8080/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          accept=".pdf"
          :file-list="fileList"
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
          >支持扩展名：.pdf格式文件，大小不超过10M</div>
        </el-upload>
        <!-- <el-upload
          ref="upload"
          class="upload-demo"
          action="#"
          accept=".xlsx, .xls"
          :auto-upload="false"
          :on-change="fileList"
          :show-file-list="true"
          :limit="1"
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
          >支持扩展名：.pdf格式文件，大小不超过10M</div>
        </el-upload> -->

      </div>
      <el-form-item>
        <!-- <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button> -->
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
            size="small"
            @click="toApiTest"
          >API测试</el-button>
          <el-button
            type="text"
            size="small"
          >取消</el-button>
        </div>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>



export default {
  name: 'CreateFormThree',
  data () {
    return {
      fileList: [],
      ruleForm: {

        success: '',
        successExample: `例：
        { 
                  "code":0,
                  "message":"校验完成",
                  "data":{
                    "result":1,
                    "remark":"验证通过"
                  }
        }`,
        failExample: `例：
        { 
                  "code":0,
                  "message":"校验完成",
                  "data":{
                    "result":1,
                    "remark":"验证通过"
                  }
        }`,
        fail: '',
      },
      rules: {

        success: [
          { required: true, message: '请填写成功响应实例', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    next () {
      this.$emit('next');
    },
    last () {
      this.$emit('last')
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove (file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    toApiTest () {
      this.$router.push('/test')
    }
    // uploadFile (item) {
    //   let formData = new FormData()
    //   let file = item.raw
    //   formData.append('file', file)
    //   this.$http({
    //     url: ' ', //后端提供的接口
    //     method: 'post',
    //     data: formData,
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   }).then(({ data }) => {
    //     this.$alert(data.data)
    //   })
    // }

  }
}

</script>





<style lang="scss" scoped>
.create-form-three {
  // padding: 20px 340px;
  padding: 20px 0;
  .demo-ruleForm {
    // >>> .el-textarea__inner {
    //   height: 400px;
    // }
    .response {
      display: flex;
      .user-defined {
        // height: 400px;
        flex: 1;
      }
      .example {
        // height: 400px;
        width: 500px;
      }
    }
    .upload {
      display: flex;
      .upload-title {
        font-size: 16px;
        position: relative;
        top: 10px;
      }
    }
    .operation {
      text-align: center;
    }
  }
}
</style>