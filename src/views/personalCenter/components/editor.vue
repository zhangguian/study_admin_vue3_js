<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-04 17:26:11
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 20:29:41
-->
<template>
  <el-card shadow="never" :body-style="{padding: '8px'}" style="height: 100%">
    <el-tabs>
      <el-tab-pane label="基本信息">
        <info-form :userInfo="userInfo"/>
      </el-tab-pane>
      <el-tab-pane label="标签二">标签二的内容</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from 'vue'

import InfoForm from './infoForm.vue'
export default {
  name: 'StudyAdminVue3JsEditor',
  components: {InfoForm},
  setup() {
    const {proxy} = getCurrentInstance()

    const state = reactive({
       userInfo: JSON.parse(sessionStorage.getItem('userInfo'))
    })

    return {
      ...toRefs(state)
    }
  }
};
</script>

<style lang="less" scoped>

</style>