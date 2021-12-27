<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-20 11:54:29
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-27 12:02:25
-->
<template>
  <div>
    <a-table :config="config" size="small"></a-table>
  </div>
</template>

<script>
import {reactive, toRefs, h} from 'vue'
import { Search } from '@element-plus/icons-vue'
import {ATable} from '_c/table'
export default {
  name: 'IviewVue3JsApplyevection',
  components: {ATable},
  
 setup() {
   const data = reactive({
     config: {
        form: {
          rule: [
            {type: 'input', title: '出差人', field: 'applyReason', col: {span:8},props:{placeholder:"请输入请假原因", clearable: true,}},
            {type: 'div', 
                children: [
                  {type: 'el-button', field: 'search', props: {type: 'primary',icon:'el-icon-upload',size:'small'}, children: ['查询'], emit: ['click'],col: {
                    span:8,push: 16
                },},
                ]
            },
            {type: 'div',
                children: [
                  {type: 'el-button', field: 'clear', props: {type:"primary",icon:'el-icon-upload',plain: true,size:'small'}, children: ['清空'], emit: ['click'], col:{
                    span:12,push: 24
              },}
                ]
            },
          ],
          option: {
            form: {labelWidth: 100},
            submitBtn: false,
            resetBtn: false,
          }
        },
        table: {
          columns: [
            {type: 'selection', minWidth: 40, },
            {label: '出差人', prop: 'name', minWidth: 100,align: 'center'},
            {label: '部门名称', prop: 'department', minWidth: 100,align: 'center'},
            {label: '项目名称', prop: 'project', minWidth: 140,align: 'center'},
            {label: '目的地', prop: 'destination', minWidth: 200,align: 'center'},
            {label: '出发时间', prop: 'startTime', minWidth: 180,align: 'center'},
            {label: '出差天数', prop: 'day', minWidth: 100,align: 'center'},
            {label: '出行工具', prop: 'TravelTool', minWidth: 100,align: 'center'},
            {label: '流程状态', prop: 'status', minWidth: 100,align: 'center',
              render: (h,data) => {
                return h('div', {id: 'root'}, ['this is content'])
              }
              // <div>
              //     <span>{data.row.status}</span>
              //   </div>
            },
            {label: '操作栏', prop: 'action', minWidth: 120,align: 'center',
              render: (ctx) => 
                <div style="width: 100%; display: flex;justify-content: space-evenly;">
                 45667789908
                </div>
            },
          ],
           btns: [
                // {text: '新增', cb: (obj) => this.test(obj)},
            ],
        },
      },
      selectedData: [],
      data: [
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 0,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 0,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 0,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,},
        { name: '张闯', department: '研发部', project: '飞天计划', destination: '天津市/市辖区/河西区', startTime: '2021-11-13 16:21:00',day: '3', TravelTool: '飞机',status: 1,}
      ],
   })
  return {
    ...toRefs(data)
  }
 }
};
</script>

<style lang="scss" scoped>

</style>