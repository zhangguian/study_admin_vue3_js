<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-01 15:22:29
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 16:24:45
-->
<template>
  <div>
   <el-row :gutter="10">
     <el-col :span="5">
<!-- 迭代列表 (START) -->
      <el-card  :body-style="{padding: '8px'}" style="height: 100%">
        <div style="border-bottom: 1px solid #eee">
          <el-button type="text" :icon="Plus" @click="addItera">新建迭代</el-button>
        </div>
        <div class="itera-list"> 
          <div class="itera-list-item" v-for="(item, index) in iteraList" :key="index" 
          :class="{current: index === iteraCurrentIndex}" @click="changeItera(index)">
            <div class="itera-list-item-head">
              <span style="flex:2; fontSize: 14px" class="omit-inline">{{item.iteration}}</span>
              <span style="flex:1; text-align: right;"><el-tag :type="proxy.$tools.tagType(item.status)" size="small">{{proxy.$tools.changeShow(item.status, proxy.$c.proStatusList)}}</el-tag></span>
            </div>
            <div class="itera-list-item-center" >
              <span >{{item.date}}</span>
              <span>{{item.percent}}%</span>
            </div>
            <div class="itera-list-item-progress"></div>
            <el-progress :percentage="item.percent" :indeterminate="true" :stroke-width="5" :show-text="false"/>
          </div>
        </div>
      </el-card>
<!-- 迭代列表 (END) -->
    </el-col>

<!-- 迭代内容 (START) -->
    <el-col :span="19">
      <div>
        <el-tabs v-model="tab">
          <el-tab-pane label="需求" icon="md-locate" name="ProDemand"></el-tab-pane>
          <el-tab-pane label="任务" icon="md-paper" name="ProTask"></el-tab-pane>
          <el-tab-pane label="缺陷" icon="ios-bug" name="ProBug"></el-tab-pane>
        </el-tabs>
        <component :is="tab"></component>
      </div>
    </el-col>
<!-- 迭代内容 (END) --> 
   </el-row>
  </div>

  <!-- 新增迭代(START) -->
  <el-dialog v-model="addIteraShow" title="新建迭代" width="720px">
    <div class="add-alert-box" style="">
      <div class="add-alert-boder" style=""></div>
      <div class="add-alert-info" style="">
        <p style="">迭代计划周期对应迭代「未开始」和「已完成」阶段的计划开始日期与计划完成日期，设置日期可以帮助您更好的规划迭代进度。</p>
      </div>
    </div>
    <div style="margin: 30px 0px">
      <form-create
      v-model="addIterationFormObj" 
      :rule="addIterationRule" 
      :option="addIterationOption" 
      ></form-create>
    </div>
  </el-dialog>
  <!-- 新增迭代(END) -->
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from 'vue'
import { Search, ArrowDown, Plus  } from '@element-plus/icons-vue'
import { ElMessage,ElMessageBox } from 'element-plus'
import ProDemand from './components/proDemand.vue'
import ProTask from './components/proTask.vue'
import ProBug from './components/proBug.vue'
export default {
  name: 'StudyAdminVue3JsIteration',
  components: {ProDemand,ProTask,ProBug},
  setup() {
    const {proxy} = getCurrentInstance()

    const state = reactive({
      tab: proxy.$route.query['tab'] || 'ProDemand',
      addIteraShow: false,
      iteraCurrentIndex: 0,
      iteraList: [
        {iteration: 'V1.0 订单系统优化', status: '1', date: '11月16日-11月29日', percent: 85},
        {iteration: 'V1.1 订单系统优化', status: '0', date: '11月16日-11月29日', percent: 0},
        {iteration: 'V1.2 订单系统优化', status: '0', date: '11月16日-11月29日', percent: 0},
      ],
      addIterationFormObj: {},
      addIterationRule: addIterationRule(),
      addIterationOption: {
        form: {labelWidth: 80},
        submitBtn: true,
        resetBtn:false,
        onSubmit:()=>{
          proxy.addIteraShow = false
          ElMessage({message: '提交成功',type: 'success',center: true,duration: 1000})
        }
      },

    })

    const changeItera = (index) => {
      state.iteraCurrentIndex = index
    }
    const addItera = () => {
      console.log('122 :>> ', "122");
      state.addIteraShow = true
    }
    return {
      ...toRefs(state),
      Plus,
      proxy,
      changeItera,
      addItera,
    };
  },
};
function addIterationRule() {
  return [
    {type: "input",title: "迭代名称",field: "goods_dame",value: "",col: {span:24},
      props: {"type": "text","clearable": true,"placeholder": "迭代名称","required": false,},
      validate: [{required: true,message: '请输入迭代名称',},],
    },
    {
        type: "select",
        field: "catS_s",
        title: "所属项目",
        value: "0",
        options: [
            {"value": "0", "label": "无需审批", "disabled": false},
            {"value": "104", "label": "周丽莎", "disabled": false},
            {"value": "105", "label": "老司机", "disabled": false},
        ],
        props: {
            multiple: false, 
            filterable: true,
            placeholder: "请选择", 
            notFoundText: "无匹配数据",
            placement: "bottom", 
        },
        validate: [{required: true,message: '请选择审批人',},],
    },
    {
        type: "select",
        field: "catS_sd",
        title: "负责人",
        value: ["0"],
        options: [
            {"value": "0", "label": "无需审批", "disabled": false},
            {"value": "104", "label": "周丽莎", "disabled": false},
            {"value": "105", "label": "老司机", "disabled": false},
        ],
        props: {
            multiple: true, 
            filterable: true,
            placeholder: "请选择", 
            notFoundText: "无匹配数据",
            placement: "bottom", 
        },
        validate: [{required: true,message: '请选择审批人',},],
    },
    {
      type: "DatePicker",
      field: "section_day2",
      title: "开始日期",
      value: '',
      col: {span: 12,},
      props: {
        type: "date",
        placeholder: "请选择活动日期",
      },
      validate: [{required: true,message: '请选择审批人',},],
    },
    {
      type: "DatePicker",
      field: "section_dsy2",
      title: "完成日期",
      col: {span: 12},
      value: '',
      props: {
        type: "date",
        placeholder: "请选择活动日期",
        width: '264px'
      },
      validate: [{required: true,message: '请选择审批人',},],
    },
  ]

}
</script>

<style lang="less" scoped>
.itera-list {
  margin: 6px 0px;
  .itera-list-item {
    border-radius: 2px;
    height: 85px;width: 100%;
    padding: 10px 1px 5px 3px;
    transition: all .3s;
    cursor: pointer;
    .itera-list-item-head {
      height: 26px;
      display: flex;
      margin: 2px 0px;
      align-items: center;
      justify-content: space-between;
    }
    .itera-list-item-center {
      font-size: 12px;
      padding: 5px 0px;
      margin: 2px 0px;
      display: flex;
      justify-content: space-between;
    }
    .itera-list-item-progress {
      margin: 8px 0px;
    }
  }
}

.current {
  background-color: #eaf3fc;
}

.add-alert-box {
  // padding: 20px; 
  height: 66px; 
  display: flex;
  .add-alert-boder {
    width: 4px;
    background-color: #338fe5;
    height: 100%;
    border-radius: 3px 0 0 3px;
  }
  .add-alert-info {
    border-bottom: 1px solid #dedede;
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #dedede;
    border-top: 1px solid #dedede;
    display: flex;
    flex: auto;
    padding: 10px;
    p {
      margin: 0px 20px;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>