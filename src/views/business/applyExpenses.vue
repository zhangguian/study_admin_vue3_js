<template>
  <div style="height: 100%">
    <el-card :body-style="{padding: '8px'}" style="height: 100%">
      <ele-table ref="eletable" action="business/getEvectionList" :config="config" filter size="small">
        <template #header-l>
          <el-button type="primary" size="mini" @click="addApplyVisible = true" >新增</el-button>
        </template>
      </ele-table>
    </el-card>


<!-- 新增请假申请 (START) -->
<el-dialog v-model="addApplyVisible" :width="900">
    <div>
      <div class="title" style="text-align: center;font-size: 17px;font-weight: 600;">出差申请单</div>
        <div class="header" style="display: flex;justify-content: space-evenly;">
        </div>
        <div class="content" style="padding: 4px 0px">
          <div class="cont-title" style="border-bottom: 1px solid #ccc;font-size: 15px;padding-bottom: 4px">基本信息</div>
          <div class="cont-cxt" style="padding: 6px 0px"></div>
          <form-create
            v-model:api="formObj" 
            :rule="rule"
            ref="applyFormCreate"
            :option="option">
          </form-create>
        </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addApplyVisible = false" size="mini">取消</el-button>
        <el-button type="primary" @click="addApplyVisible = false" size="mini">确认</el-button>
      </span>
    </template>
  </el-dialog>
<!-- 新增出差申请 (END) -->

  </div>
</template>

<script>
import {reactive, toRefs, h, onMounted, getCurrentInstance} from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { Search, RefreshRight, Plus  } from '@element-plus/icons-vue'
import {useStore} from 'vuex'
import {EleTable} from '_c/table'
import ApplyEvectionForm from '_c/form/applyEvectionForm.vue'
export default {
  name: 'IviewVue3JsApplyevection',
  components: {EleTable,ApplyEvectionForm},
  
  setup(props, context) {
    const store = useStore()
    const {proxy} = getCurrentInstance()

    const state = reactive({
     config: {
        form: {
          rule: [
            {type: 'input', title: '出差人', field: 'applicant', col: {span:8},props:{placeholder:"请输入请假原因", clearable: true,}},
            {type: 'div', 
                children: [
                  {type: 'el-button', field: 'search', props: {type: 'primary',icon:Search,size:'small'}, children: ['查询'], emit: ['click'],col: {
                    span:8,push: 16
                },},
                ]
            },
            {type: 'div',
                children: [
                  {type: 'el-button', field: 'clear', props: {type:"primary",icon:RefreshRight,plain: true,size:'small'}, children: ['清空'], emit: ['click'], col:{
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
            {label: '出差人', prop: 'applicant', minWidth: 100,align: 'center'},
            {label: '出差事由', prop: 'reason', minWidth: 100,align: 'center'},
            {label: '目的地', prop: 'address', minWidth: 200,align: 'center'},
            {label: '出发时间', prop: 'startDate', minWidth: 180,align: 'center'},
            {label: '出差天数', prop: 'day', minWidth: 100,align: 'center'},
            {label: '出行工具', prop: 'TravelTool', minWidth: 100,align: 'center'},
            {label: '流程状态', prop: 'applyStatus', minWidth: 100,align: 'center',
              render: (row) =>
              <div>{row.status}</div>
            },
            {label: '操作栏', prop: 'action', minWidth: 120,align: 'center',
            render: (row) => 
              <div>
                <el-button type="text">详情</el-button>
                <el-button type="text" onClick={() => deleOne(row)}>删除</el-button>
              </div>
            },
          ],
           btns: [
                // {text: '新增', cb: (obj) => this.test(obj)},
            ],
        },
      },
      selectedData: [],
      applyForm: {
        name: ''
      },
      addApplyVisible: false,
      formObj: {},  // 表单数据
      rule: [
        {type: 'input', title: '申请人', field: 'applicant', col: {span:8},props:{placeholder:"请输入申请人", clearable: true,size:'mini', readonly: true}},
        {type: 'input', title: '部门', field: 'department', col: {span:8},props:{placeholder:"请输入申请人", clearable: true,size:'mini', readonly: true}},
        {type: 'input', title: '职务', field: 'position', col: {span:8},props:{placeholder:"请输入申请人", clearable: true,size:'mini', readonly: true}},
        {type: 'input', title: '出发地', field: 'origin', col: {span:12},props:{placeholder:"请输入申请人", clearable: true,size:'mini', }},
        {type: 'input', title: '目的地', field: 'address', col: {span:12},props:{placeholder:"请输入申请人", clearable: true,size:'mini', }},
        {type: 'DatePicker', title: '出发时间', field: 'startDate', col: {span:24},props:{ type: "datetime",placeholder:"请输入出发时间", clearable: true,size:'mini', }},
        {type: 'DatePicker', title: '计划返回时间', field: 'endDate', col: {span:24},props:{type: "datetime",placeholder:"请输入计划返回时间", clearable: true,size:'mini', }},
        {
              type:"radio",
              title:"经费支出方式",
              field:"pay",
              value:"0",
              options:[
                  {value:"0",label:"预支工费",disabled:false},
                  {value:"1",label:"个人垫付",disabled:true},
              ],
          },
        {type: 'InputNumber', title: '申请金额', field: 'amount', col: {span:12},props:{placeholder:"请输入申请人", clearable: true,size:'mini', width: 200}},
        {type: 'input', title: '预计出行路线', field: 'route', col: {span:24,},props:{type: 'textarea', rows: 6, placeholder:"请输入申请人", clearable: true,size:'mini', }},
        {type: 'input', title: '任务及事由', field: 'desc', col: {span:24,},props:{type: 'textarea', rows: 6, placeholder:"请输入申请人", clearable: true,size:'mini', }},
      ],
      option: {
        form: {labelWidth: 100},
        submitBtn: false,
        resetBtn: false,
      }
   })

    onMounted( () => {
    })
    const rowChange =  (val) => {
      console.log('val :>> ', val);
    }
    const handleDele = async (id) => {
      let {data, err} = await store.dispatch('business/deleOneEvectionApply', {id: id})
      if(data) {
        proxy.$refs.eletable.getData()
        ElMessage({type: 'success',message: '删除成功',})
      } else {
        ElMessage({type: 'error', message: '删除失败'})
      }
    }
    const deleOne = (row) => {
      const {id} = row
       ElMessageBox.confirm(
        '你确认要删除吗？',
        '确认操作',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(() => {
          handleDele(id)
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '删除取消',
          })
        })
    }

    return {
      Plus,
      Search,
      RefreshRight,
      ...toRefs(state),
      rowChange,
      deleOne
    }
 }
};
</script>

<style lang="less" scoped>
.cont-title {
  &:before {
    content: '|';
    color: transparent;
    width: 2px;
    height: 100%;
    background: #30a4fb;
    margin-right: 6px;
  }
}
</style>