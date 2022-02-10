<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-04 10:14:03
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 10:32:51
-->
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card dis-hover :body-style="{padding: '8px'}">
          <template #header>
            <span style="fontSize: 14px">需求</span>
          </template>
          <pro-status />
          <div style="height: 200px" ref="echartDemand"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card dis-hover  :body-style="{padding: '8px'}">
          <template #header>
            <span style="fontSize: 14px">任务</span>
          </template>
          <pro-status />
          <div style="height: 200px" ref="echartTask"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" :body-style="{padding: '8px'}">
          <template #header>
            <span style="fontSize: 14px">缺陷</span>
          </template>
          <pro-status />
          <div style="width: 100%; height: 200px" ref="echartBug"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue'
import * as echarts from 'echarts';
import echartDemand from './components/js/echart-demand-config'
import echartTask from './components/js/echart-task-config'
import echartBug from './components/js/echart-bug-config'
import ProStatus from './components/proStatus.vue'
export default {
  name: 'StudyAdminVue3JsProspeedometer',
  components: {ProStatus},
  setup() {
    const {proxy} = getCurrentInstance()
    onMounted(() => {
      initEcharts()
    })
    const initEcharts = () => {
      initDemandChart()
      initTaskChart()
      initBugChart()
    }
   // 初始化需求仪表盘图表
    const initDemandChart = async () => {
      proxy.proDemandChart = echarts.init(proxy.$refs.echartDemand)
      let getEchartDemand = await getDemandDate(echartDemand)
      proxy.proDemandChart.setOption(getEchartDemand.option, true)
    }
    // 初始化任务仪表盘图表
    const initTaskChart = async () => {
      proxy.proTaskChart = echarts.init(proxy.$refs.echartTask)
      let getEchartTask = await getTaskData(echartTask)
      proxy.proTaskChart.setOption(getEchartTask.option, true)
    }
    // 初始化缺陷仪表盘图表
    const initBugChart = async() => {
      proxy.proBugChart = echarts.init(proxy.$refs.echartBug)
      let getEchartBug = await getBugData(echartBug)
      proxy.proBugChart.setOption(getEchartBug.option, true)
    }

    // 获取需求图表数据
    const getDemandDate = (echartDemand) => {
      let data1 = [20, 25, 23, 25, 25,30]
      let data2 = [10, 9, 8, 8, 6, 7]
      echartDemand.option.series[0].data = data1
      echartDemand.option.series[1].data = data2
      return echartDemand
    }
    const getTaskData = (echartTask) => {
      let data1 = [50, 30, 20, 40, 30,60]
      // let data2 = [10, 9, 8, 8, 6, 7]
      echartTask.option.series[0].data = data1
      return echartTask
    }
    const getBugData = (echartBug) => {
      let data1 = [6, 3, 7, 3, 6,5]
      let data2 = [4, 4, 8, 1, 6, 7]
      echartBug.option.series[0].data = data1
      echartBug.option.series[1].data = data2
      return echartBug
    }
  }
};
</script>

<style lang="less" scoped>

</style>