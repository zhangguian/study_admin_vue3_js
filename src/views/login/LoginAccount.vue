
<template>
  <el-form ref="model" :model="model" :rules="rules">
    <el-form-item prop="username">
      <el-input v-model="model.username"  placeholder="请输入帐户名" clearable >
        <!-- <Icon slot="prefix" type="md-person" :style="{ color: 'rgba(0,0,0,.25)' }"/> -->
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="model.password" size="default" type="password"  placeholder="请输入密码" clearable >
        <!-- <Icon slot="prefix" type="md-lock" :style="{ color: 'rgba(0,0,0,.25)' }"/> -->
      </el-input>
    </el-form-item>

    <el-row :gutter="0">
      <el-col :span="16">
        <el-form-item prop="inputCode">
          <el-input v-model="model.inputCode" size="default" type="text" placeholder="请输入验证码" clearable>
            <!-- <Icon slot="prefix" type="ios-outlet" :style="{ color: 'rgba(0,0,0,.25)' }"/> -->
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" style="text-align: right">
        <div class="canvas" style="margin-top: 2px;">
          <canvas id="check" :width="contentWidth" :height="contentHeight" @click="drawVertify"></canvas>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'IviewLoginaccount',
  props: {
    contentWidth: {
      type: Number,
      default: 120
    },
    contentHeight: {
      type: Number,
      default: 30
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

  setup(props, context) {
    const {proxy} = getCurrentInstance()
  const state = reactive({
     
    })

    onMounted(() => {
      drawCanvas()
    })

    const drawVertify = () => {
      drawCanvas()
    }

    const randomColor = (min, max) => {
      let r = proxy.$tools.randomNum(min, max)
      let g = proxy.$tools.randomNum(min, max)
      let b = proxy.$tools.randomNum(min, max)
      return `rgb(${r},${g},${b})`;
    }

    const drawText = (canvasId,canvasW,canvasH,num,fsMin,fsMax,frMin,frMax,min,max) => {
      let str = ''
      for(let i = 0; i < num; i++) {
        const char = proxy.$tools.randomStr()[Math.floor(0, proxy.$tools.randomStr.length)]
        const fs = proxy.$tools.randomNum(fsMin, fsMax)
        canvasId.font = fs + 'px Verdana'
        canvasId.fillStyle = randomColor(min, max)
        // 保存绘制状态
        canvasId.save()
        canvasId.translate(canvasW / num * i + canvasW /20, 0)
        // 变换角度
        canvasId.rotate(proxy.$tools.randomNum(frMin, frMax) * Math.PI /180)
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
      drawVertify
    }
  },
};
</script>

<style lang="less" scoped>

</style>