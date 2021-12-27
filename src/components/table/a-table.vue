<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-21 16:04:28
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-25 20:08:41
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-21 16:04:28
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-24 17:07:00
-->
<template>
  <div>
    <el-card :body-style="{padding: '8px'}" style="height: 100%">
      <form-create
        v-model:api="formObj" 
        :rule="rule"
        ref="formCreate"
        :option="option" 
        @search-click="onSearch" 
        @clear-click="OnClear"
        ></form-create>
      <slot name="other"></slot>
      
      <ele-table :tableData="tableData" :columns="tableConfig.columns" style="width: 100%"></ele-table>
    </el-card>
  </div>
</template>

<script>
import { computed, getCurrentInstance, onMounted, reactive, toRefs, watch,toRaw } from 'vue'
import EleTable from './eleTable.vue'
export default {
  components: {EleTable},
  name: 'IviewVue3JsATable',
  props: {
    config: {type: Object},
    action: {type: String},                                   
    tableHeight: {type: Number},
    size: String,
    keyField: {type: String, default: 'id'},
    selected: {type: [Object, Array], default: () => ([])},
    pageSize: {type: Number, default: 10},
    simple: Boolean,
    border: {type: Boolean, default: false}
  },
  setup(props, context) {
    const {proxy}  = getCurrentInstance()

    const data = reactive({
      formObj: {},
      rule: [],
      data: [],
      option: {},
      hideColumnKeys: [],
      loading: false,
      total: 0,
      mPageSize: props.pageSize,
      pageNum: 1,
      tableData: [
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 0,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 0,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 0,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
      ],
    })
    
    data.rule = computed(() => {return [...props.config.form.rule]}).value
    data.option = computed(() => {return props.config.form.option}).value 
    const tableConfig = computed(() => {return props.config.table}).value


    onMounted(() => {
      // console.log('data.rule :>> ', data.rule);
      // console.log('tableConfig :>> ', tableConfig.columns);
    })
    const handleEdit = (index, row) => {
      console.log('scope', toRaw(row))
    }
    const onSearch = () => {
      data.pageNum = 1
      console.log('搜索 :>> ', '搜索');
    }
    const OnClear = () => {
      proxy.formObj.resetFields()
      console.log('清空 :>> ', '清空');
    }
    return {
      ...toRefs(data),
      tableConfig,
      handleEdit,
      onSearch,
      OnClear,
    }
  }
};
</script>

<style lang="less" scoped>

</style>