<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-20 11:55:55
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-21 15:05:11
-->
<template>
  <div>
    <work-header :userInfo="userInfo"></work-header>
    <el-row :gutter="20">
      <el-col :span="16">
        <pro-list :proList="proList" />
        <pro-dynamic />
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" :body-style="{padding: '8px'}" style="margin: 10px 0;">
          <template #header>
            <span>贡献</span>
          </template>
          <div style="height: 300px" ref="echartRadar"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
import * as echarts from 'echarts'
import echartRadarConfig from './components/js/echart-radar-config'

import {WorkHeader, ProList, ProDynamic} from './components' 
export default {
  name: 'IviewVue3JsWorkbench',
  components: {WorkHeader,ProList,ProDynamic},
  setup() {
    const data = reactive({
      userInfo: {
        user: 'zhangguian',
        userAvatar: require('@/assets/avatar.jpg'),
        company: '平安科技',
        department: '前端技术部',
        position: '前端工程师',
      },
      proList: [
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 45},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 90},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 30},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 96},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 80},
        {proName: '飞天计划', proDesc: '那是一种内在的东西，他们到达不了，也无法触及的', proPercent: 70},
      ],
    })
    const {proxy} = getCurrentInstance()
    onMounted(() => {
      initEchart()
      console.log('proxy :>> ', echartRadarConfig);
    })
    // 绘制图表
    // 初始化图表
    const getRadarConfig = (echartRadarConfig) => {
      let radarValue = [
       {
          value: [4.2, 8.0, 4.0, 6.5, 8.69, 8.8],
          name: 'fg团队'
        },
        {
          value: [5.0, 5.5, 6.6, 4.3, 3.5, 6.7],
          name: 'gos团队'
        }
      ]
      let legend = radarValue.map(_ => _.name)
      echartRadarConfig.option.legend.data = legend
      echartRadarConfig.option.series[0].data = radarValue
      return echartRadarConfig
    }
    const initRadarEchart = async () => {
      proxy.radarEchart = echarts.init(proxy.$refs.echartRadar)
      let radarConfig = await getRadarConfig(echartRadarConfig)
      proxy.radarEchart.setOption(radarConfig.option, true)
    }
    const initEchart = () => {
      initRadarEchart()
    }

    return {
      ...toRefs(data),
    }
  }
};
</script>

<style lang="scss" scoped>

</style>