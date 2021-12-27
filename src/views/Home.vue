<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-17 20:40:38
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-20 12:22:46
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
   1234657
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, getCurrentInstance } from 'vue'

export default {
  name: 'Home',
  components: {},
  setup(props, contxt) {
    const { proxy } = getCurrentInstance()
    onMounted(() => {
      // console.log('object :>> ', proxy.$tools.randomStr());
    })
    const test = () => {
      // const r = proxy.$tools.randomStr()
      // return r
    }
    return {
      test
    }
  }
}
</script>
