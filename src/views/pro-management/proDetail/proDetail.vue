<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-01 14:44:44
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 10:14:38
-->
<template>
    <el-card shadow="never" :body-style="{padding: '8px'}" style="height: 100%">
       <el-tabs v-model="tab">
        <el-tab-pane label="迭代" name="Iteration"></el-tab-pane>
        <el-tab-pane label="仪表盘" name="ProSpeedometer"></el-tab-pane>
        <el-tab-pane label="文档" name="ProTask"></el-tab-pane>
        <el-tab-pane label="信息" name="ProBug"></el-tab-pane>
      </el-tabs>
      <component :is="tab"></component>
    </el-card>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from 'vue'
import Iteration from './iteration.vue'
import ProSpeedometer from './proSpeedometer.vue'
export default {
  name: 'StudyAdminVue3JsProdetail',
  components: {Iteration,ProSpeedometer},
  setup() {
    const {proxy} = getCurrentInstance()
    const state = reactive({
      tab: proxy.$route.query['tab'] || 'Iteration',
      textareaVal: '',
    })
    return {
      ...toRefs(state),
    }
  }
};
</script>

<style lang="less" scoped>

</style>