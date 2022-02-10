
<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">
        <router-link to="/">
          <span class="title">ANJING学习管理系统</span>
        </router-link>
      </div>
      <div class="login-content">
        <el-form ref="account" :model="model" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="model.username" placeholder="请输入帐户名" clearable>
              <!-- <Icon slot="prefix" type="md-person" :style="{ color: 'rgba(0,0,0,.25)' }"/> -->
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="model.password"
              size="default"
              type="password"
              placeholder="请输入密码"
              clearable
            >
              <!-- <Icon slot="prefix" type="md-lock" :style="{ color: 'rgba(0,0,0,.25)' }"/> -->
            </el-input>
          </el-form-item>

          <el-row :gutter="0">
            <el-col :span="16">
              <el-form-item prop="inputCode">
                <el-input
                  v-model="model.inputCode"
                  size="default"
                  type="text"
                  placeholder="请输入验证码"
                  clearable
                >
                  <!-- <Icon slot="prefix" type="ios-outlet" :style="{ color: 'rgba(0,0,0,.25)' }"/> -->
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" style="text-align: right">
              <div class="canvas" style="margin-top: 1px">
                <canvas
                  id="check"
                  :width="contentWidth"
                  :height="contentHeight"
                  @click="drawVertify"
                ></canvas>
              </div>
            </el-col>
          </el-row>
          <el-form-item>
            <div style="color: #515a6e; text-align: left">
              <el-checkbox v-model="single">自动登录</el-checkbox>
            </div>
          </el-form-item>
          <el-form-item class="login-item">
            <el-button type="primary" class="login-btn" @click="loginSubmit">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, getCurrentInstance, toRefs, h } from 'vue'
import { useStore } from 'vuex'
import { ElMessage, ElNotification } from 'element-plus'
import LoginAccount from './LoginAccount.vue'
export default {
  name: 'Login',
  components: { LoginAccount },
  props: {
    contentWidth: {
      type: Number,
      default: 120
    },
    contentHeight: {
      type: Number,
      default: 38
    },
    identifyCode: {
      type: String,
      default: '1234'
    },
    fontSizeMin: {
      type: Number,
      default: 16
    },
    fontSizeMax: {
      type: Number,
      default: 40
    },
  },

  setup (props, context) {
    const { proxy } = getCurrentInstance()
    const store = useStore()
    const state = reactive({
      single: true,
      model: {
        username: 'admin',
        password: '1234',
        inputCode: '',
      },
      codeText: '',
      rules: {
        username: [
          { required: true, message: '请输入用户名!', trigger: 'blur' },
        ],
        password: [{
          required: true, message: '请输入密码!', validator: 'click'
        }],
        inputCode: [{
          required: true, message: '请输入验证码!'
        }]
      }
    })
    onMounted(() => {
      drawCanvas()
    })

    const loginSubmit = async () => {
      console.log('first', 'first')
      let { username, password, inputCode } = state.model
      if (!username || !password) return ElMessage({ showClose: true, message: '请输入用户名或密码', type: 'error', center: true, duration: 3000 })
      let codeText = state.codeText
      if (inputCode != codeText) {
        ElMessage({ showClose: true, message: '验证码错误！', type: 'error', center: true, duration: 2000 })
        drawCanvas()
      } else {
        const { data, err } = await store.dispatch('login/logintest', { username, password })
        const { tokenList, member } = data.result
        if (data.code) {
          ElNotification({
            title: '登录成功',
            message: h('i', { style: 'color: teal' }, 'welcome to AnJing_Study_Dome'),
          })
          window.sessionStorage.setItem('token', tokenList.accessToken)
          window.sessionStorage.setItem('userInfo', JSON.stringify(member))
          store.commit('login/SET_LOGGED', { tokenList, userInfo: member });
          proxy.$router.push({
            name: 'workbench_page',
            query: {}
          })
        } else {
          ElNotification({
            title: '登录失败',
            message: 'error message',
            type: 'error',
          })
        }
      }
    }
    const drawVertify = () => {
      drawCanvas()
    }

    const randomColor = (min, max) => {
      let r = proxy.$tools.randomNum(min, max)
      let g = proxy.$tools.randomNum(min, max)
      let b = proxy.$tools.randomNum(min, max)
      return `rgb(${r},${g},${b})`;
    }

    const drawText = (canvasId, canvasW, canvasH, num, fsMin, fsMax, frMin, frMax, min, max) => {
      let str = ''
      for (let i = 0; i < num; i++) {
        const char = proxy.$tools.randomStr()[Math.floor(0, proxy.$tools.randomStr.length)]
        const fs = proxy.$tools.randomNum(fsMin, fsMax)
        canvasId.font = fs + 'px Verdana'
        canvasId.fillStyle = randomColor(min, max)
        // 保存绘制状态
        canvasId.save()
        canvasId.translate(canvasW / num * i + canvasW / 20, 0)
        // 变换角度
        canvasId.rotate(proxy.$tools.randomNum(frMin, frMax) * Math.PI / 180)
        canvasId.fillText(char, 0, (canvasH + fs) / 2.5, canvasW / num)
        // 返回之前保存过的路径状态和属性
        canvasId.restore()
        str += char
      }
      return str
    }

    const drawBg = (canvasId, canvasW, canvasH, min, max) => {
      canvasId.fillStyle = randomColor(min, max)
      canvasId.fillRect(0, 0, canvasW, canvasH)
    }

    const drawCircle = (canvasId, canvasW, canvasH, num, r, min, max) => {
      for (var i = 0; i < num; i++) {
        canvasId.beginPath()
        canvasId.arc(proxy.$tools.randomNum(0, canvasW), proxy.$tools.randomNum(0, canvasH), r, 0, 2 * Math.PI)
        canvasId.fillStyle = randomColor(min, max)
        canvasId.fill()
        canvasId.closePath()
      }
    }

    // 绘制验证码
    const drawCanvas = () => {
      var canvasId = document.getElementById("check").getContext("2d")
      var ctxW = document.getElementById("check").clientWidth
      var ctxH = document.getElementById("check").clientHeight
      canvasId.clearRect(0, 0, 200, 60)
      drawBg(canvasId, ctxW, ctxH, 200, 255)
      drawCircle(canvasId, ctxW, ctxH, 20, 5, 200, 255)
      // 绘制验证码
      var str = drawText(canvasId, ctxW, ctxH, 4, 10, 40, -30, 30, 0, 100)
      state.codeText = str
      return str
    }
    return {
      ...toRefs(state),
      loginSubmit,
      drawVertify
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  height: 100vh;
  width: 100%;
  color: #fff;
  align-items: center;
  background: #f5f5f5 url("../../assets/background.svg") no-repeat 0 0;
  background-size: 100% 100%;
  .login-box {
    margin: auto;
    border-radius: 4px;
    .login-title {
      text-align: center;
      margin: 8px 0px;
      font-size: 25px;
      color: #000;
    }
    .login-content {
      padding: 30px 20px 20px 20px;
      background: #fff;
      width: 400px;
      border-radius: 8px;
      .login-item {
        text-align: center;
        .login-btn {
          // width: 140px;
          font-size: 16px;
          padding: 0px 80px;
          margin: auto;
        }
      }
    }
  }
}
/deep/ .ivu-el-tabs-nav {
  // color: #fff;
}
</style>