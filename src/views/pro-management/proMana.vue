<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-20 11:55:24
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-22 21:10:20
-->
<template>
  <div>
    <el-card :body-style="{padding: '8px'}" style="height: 100%">
      <el-tabs v-model="activeName">
        <el-tab-pane label="全部项目" name="all">
          <rect-table :tableData="data" size="small" @handlePro="handlePro" />
        </el-tab-pane>
        <el-tab-pane label="进行中" name="ongoing"><rect-table :tableData="data" size="small" @handlePro="handlePro" /></el-tab-pane>
        <el-tab-pane label="已完成" name="done"><rect-table :tableData="data" size="small" @handlePro="handlePro" /></el-tab-pane>
        <el-tab-pane label="未开始" name="unstart"><rect-table :tableData="data" size="small" @handlePro="handlePro" /></el-tab-pane>
        <el-tab-pane label="已归档" name="archive">
          <div class="pane-content" >
            <rect-table :tableData="[]" size="small" @handlePro="handlePro" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { reactive,getCurrentInstance, toRefs } from 'vue'
import { RectTable } from '_c/table'
export default {
  name: 'IviewVue3JsPromana',
  components: {RectTable,},
  setup() {
    const {proxy} = getCurrentInstance()
    const data = reactive({
      activeName: 'all',
      data: [
        {id: 123451, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-13 14:08:07'},
        {id: 123452, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 03:08:07'},
        {id: 123453, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-08 11:08:07'},
        {id: 123454, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {id: 123455, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-13 11:08:07'},
        {id: 123456, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 18:08:07'},
        {id: 123457, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {id: 123458, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-10 11:08:07'},
        {id: 123459, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-11 11:08:07'},
        {id: 123450, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {id: 1234501, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 05:08:07'},
        {id: 1234502, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {id: 1234503, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {id: 1234504, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {id: 1234505, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
        {id: 1234506, proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的',time: '2021-11-12 11:08:07'},
      ],
      // tab: proxy.$route.query['tab'] || 'all'
    })
    return {
      ...toRefs(data)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>