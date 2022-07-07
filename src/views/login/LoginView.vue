<template>
  <div class="login">
    <img
      src="../../assets/img/login/背景图.png"
      alt=""
      class="bcImg"
    >
    <div class="welcome">
      <strong class="welcome-p">欢迎使用</strong>
      <br>
      <strong class="welcome-p">海南省统一身份认证平台</strong>
    </div>
    <div class="login-form">
      <div class="form-in">
        <div class="login-type-box">
          <button
            class="login-type"
            @click="select('personal')"
            :class="{'activity':type == 'personal'}"
          >
            个人登录
          </button>
          <button
            class="login-type"
            @click="select('legalPerson')"
            :class="{'activity':type == 'legalPerson'}"
          >
            法人登录
          </button>
        </div>
        <div class="form-tips">
          <div class="tips">
            为保障账户安全信息，请勿将账号密码泄露
          </div>
        </div>
        <div class="form-input">
          <el-input
            class="username"
            v-model="username"
            placeholder="请输入账号"
          ></el-input>
          <el-input
            class="password"
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
          <div class="other">
            <span>手机验证码登录</span>
            <span>忘记密码</span>
          </div>
          <div>
            <el-row class="login-button-box">
              <el-button
                type="primary"
                class="login-button"
                @click="login"
              >登录</el-button>
            </el-row>
          </div>
        </div>
        <div class="other-platforms">
          <p> <span class="">海易办 </span>|
            <span>电子社保卡 </span>|
            <span>椰城市民云 </span>|
          </p>
          国家政务服务平台账号登陆
        </div>
        <div class="to-signup">
          <span class="has-username">还没有账号？</span>
          <span class="signup">去注册</span>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginView',
  data () {
    return {
      type: 'personal',
      username: '',
      password: '',
    }
  },
  methods: {
    select (type) {
      this.type = type
    },

    login () {
      console.log('login')
      axios.post("http://localhost:8080/auth/login", { username: this.username, password: this.password })
        .then((res) => {
          this.loginSuc(res);

        })
    },
    loginSuc (res) {
      console.log(res)
      console.log('loginSuc')
      if (res.data.meta.status == 200) {
        this.$store.state.user = res.data.user
        console.log(this.$store.state.user)
        this.$router.push('/')
      }
      else {
        alert('登录失败 ')
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  .bcImg {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 900px;
  }
  // background: url('../../assets/img/login/背景图.png') no-repeat;
  // background-size: cover;
  .welcome {
    position: absolute;
    top: 50px;
    left: 450px;
    .welcome-p {
      font-size: 24px;
      // line-height: 24px;
      color: #333333;
    }
  }
  .login-form {
    position: absolute;
    top: 50px;
    left: 1000px;
    background-color: white;
    width: 320px;

    .form-in {
      margin: 20px auto;
      padding: 0 20px;
      .login-type-box {
        .login-type {
          color: #999999;
          height: 30px;
          width: 50%;
        }
        .activity {
          background-color: #0090ff;
          color: white;
        }
      }
      .form-tips {
        border-radius: 5px;
        height: 30px;
        margin-top: 16px;
        background-color: #fffbe6;
        line-height: 30px;
        padding: 0 20px;
        font-size: 12px;
        // opacity: 0.5;
        color: #333333;
      }
      .form-input {
        margin-top: 16px;
        .username {
        }
        .password {
          margin-top: 16px;
        }
        .other {
          margin-top: 8px;
          color: #0090ff;
          font-size: 12px;
          display: flex;
          justify-content: space-between;
        }
        .login-button-box {
          margin-top: 16px;
          .login-button {
            width: 100%;
          }
        }
      }
    }
  }
  .other-platforms {
    margin-top: 16px;
    text-align: center;
    font-size: 12px;
  }
  .to-signup {
    text-align: center;
    margin-top: 24px;
    font-size: 12px;
    .has-username {
      color: #999999;
    }
    .signup {
      color: #0090ff;
    }
  }
}
</style>