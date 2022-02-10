<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-02 10:21:53
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 16:52:36
-->
<template>
  <div>
    <ele-table action="proManagement/getDemandList" :config="config" size="mini" ref="eleTable">
      <template #header-l>
        <div style="margin: 0px 10px; width: 200px">
          <el-input v-model="value" size="mini" placeholder="请输入需求名称" :suffix-icon="Search" clearable @change="searchDemand" @clear="clearDemand"/>
        </div>
        <div><el-button type="primary" :icon="Plus" size="mini" @click="addDeamnd">新增需求</el-button></div>
      </template>
    </ele-table>
  </div>
<!-- 任务流转(START) -->
    <el-dialog v-model="tranShow" title="任务流转">
      <div>
        <form-create v-model="tranFormObj" :rule="tranRules" :option="tranOption"></form-create>
      </div>
    </el-dialog>
<!-- 任务流转(END) -->

<!-- 新增项目需求(START) -->
    <el-dialog v-model="addDemandShow" title="新增项目需求" :width="800">
      <div>
        <form-create v-model="addDemandformObj" :rule="addDemandRule" :option="addDemandOption"></form-create>
      </div>
    </el-dialog>
<!-- 新增项目需求(START) -->

</template>

<script>
import { getCurrentInstance, reactive, toRefs,onMounted } from 'vue'
import {useStore} from 'vuex'
import { ElMessage,ElMessageBox } from 'element-plus'
import { Search, Plus } from '@element-plus/icons-vue'
import {EleTable} from '_c/table'
export default {
  name: 'StudyAdminVue3JsProdemand',
  components: {EleTable},
  setup(props, context) {
    const {proxy} = getCurrentInstance()
    const store = useStore()
    const state = reactive({
      config: {
        table: {
          columns: [
            {label: 'ID', prop: 'id',minWidth: 40 },
            {label: '标题', prop: 'title', minWidth: 120},
            {label: '优先级', prop: 'priority', minWidth: 50, align: 'center', 
              render: (row) =>
              <div>
                <el-tag class="ml-2" type={proxy.$tools.tagType(row.priority)} size="mini">{proxy.$tools.changeShow(row.priority, proxy.$c.priStatus)}</el-tag>
              </div>
            },
            {label: '状态', prop: 'status', minWidth: 50, align: 'center', 
              render: (row) => 
                <div>{proxy.$tools.changeShow(row.status, proxy.$c.demandStatus)}</div>
            },
            {label: '负责人', prop: 'handler',align: 'center', minWidth: 50},
            {label: '操作', prop: 'action', align: 'center', 
              render: (row) => 
                <template style="width: 100%; display: flex;justify-content: space-evenly;">
                  <el-button type="text" size="mini" onClick={() => proxy.demandDetails(row)}>详情</el-button>
                  <el-button type="text" size="mini" onClick={() => proxy.demandDelete(row)}>删除</el-button>
                  <el-button type="text" size="mini" onClick={() => proxy.demandTrans(row)}>流转</el-button>
                </template>
            },
          ]
        },
      },
      options: {
        // hideFilter: false
      },
      value: '',
      addDemandShow: false,  // 新增需求模态框
      addDemandformObj: {},
      addDemandRule: addDemandRule(),
      addDemandOption: {
        form: {labelWidth: 100},
        submitBtn: true,
        resetBtn:false,
        onSubmit: (formObj) => {
          console.log('object :>> ', "12132");
        }
      },
      tranShow: false, // 流转模态框
      tranFormObj: {},
      tranOption: {
        form: {labelWidth: 100},
        submitBtn: true,
        resetBtn:false,
        onSubmit: (formObj) => {
          console.log('object :>> ', "12132");
        }
      },
      tranRules: tranRules()
    })
    onMounted(() => {
    })
    const searchDemand = (event) => {
      let parmas = {
        value: event
      }
      proxy.$refs.eleTable.getData(parmas)
    }
    const deleOneDemand = async (id) => {
      let {data,err} = await store.dispatch('proManagement/getDemandList', {id: id})
      if(data) {
         proxy.$refs.eleTable.getData(parmas)
         ElMessage({
            type: 'success',
            message: '删除成功',
          })
      } else {
         ElMessage({
            type: 'error',
            message: '删除失败',
          })
      }
    }
    const clearDemand = () => {}
    const demandDelete = (row) => {
      const {id} = row 
      ElMessageBox.confirm(
        '您确认删除这条内容吗？',
        'Warning',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(() => {
         deleOneDemand(id)
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '删除取消',
          })
        })
    }
    const demandTrans = (row) => {
      state.tranFormObj = row
      state.tranShow = true
    }
    const demandDetails = (row) => {
      proxy.$router.push({
        name: '/project_management/demandDetails_page'
      })
    }
    const addDeamnd = () => {
      state.addDemandShow = true
    }
    return {
      Search,
      Plus,
      ...toRefs(state),
      searchDemand,
      clearDemand,
      demandDelete,
      demandTrans,
      demandDetails,
      addDeamnd
    }
  }
};
function addDemandRule() {
  return [
    {type: "input",title: "需求名称",field: "goods_ame",value: "",col: {span:12},
      props: {"type": "text","clearable": true,"placeholder": "请输入需求名称","required": false,},
      validate: [{required: true,message: '请输入需求名称',},],
    },
    {type: "input",title: "所属模块",field: "goods_1ame",value: "",col: {span:12},
      props: {"type": "text","clearable": true,"placeholder": "请输入所属模块","required": false,},
      validate: [{required: true,message: '请输入所属模块',},],
    },
    {type: "input",title: "预计工时",field: "goods_3ame",value: "",col: {span:12},
      props: {"type": "text","clearable": true,"placeholder": "请输入预计工时","required": false,},
      validate: [{required: true,message: '请输入预计工时',},],
    },
    {type: "radio",title: "优先级",field: "is_postage",value: "0",col: {span:12},
    options: [
        {value: "0",label: "宽和",},
        {value: "1",label: "一般",},
        {value: "2",label: "紧急",},
      ],
      props: {"type": undefined,"size": "default","vertical": false,},
    },
    {
      type: "DatePicker",
      field: "section_day2",
      title: "预计开始",
      value: '',
      col: {span: 12},
      props: {
        type: "datetime",
        placeholder: "请选择预计开始时间",
      }
    },
    {
      type: "DatePicker",
      field: "section_day4",
      title: "预计结束",
      value: '2018-02-20 23:23:23',
      col: {span: 12},
      props: {
        type: "datetime",
        placeholder: "请选择预计结束时间",
      }
    },
    {
      type: "select",
      field: "catS_id",
      title: "处理人",
      value: ["0"],
      col: {span: 24},
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
      validate: [{required: true,message: '请选择处理人',},],
    },
    {
        type: "select",
        field: "cate_id",
        title: "由谁审批",
        value: "0",
        col: {span: 12},
        options: [
            {"value": "0", "label": "无需审批", "disabled": false},
            {"value": "104", "label": "周丽莎", "disabled": false},
            {"value": "105", "label": "老司机", "disabled": false},
        ],
        props: {
            multiple: false, 
            placeholder: "请选择", 
            notFoundText: "无匹配数据",
            placement: "bottom", 
        },
        validate: [{required: true,message: '请选择审批人',},],
    },
    {type: "input",title: "需求描述",field: "goods_2ame",value: "",col: {span:24},
      //input值,
      props: {"type": "textarea","clearable": true,"placeholder": "请输入需求描述","required": false,rows: 5},
      validate: [{required: true,message: '请输入需求描述',},],
    },
    {
      type: "Upload",
      field: "pic",
      title: "图片",
      value: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910021S351A06-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639932480&t=1d3b35c681f6fbc03f98f45a1d11e24b'],
      //input值
      props: {
        "type": "select",
        //上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）
        "uploadType": "image",
        //上传文件类型，可选值为 image（图片上传），file（文件上传）
        "action": "",
        //上传的地址，必填
        "headers": {},
        //设置上传的请求头部
        "multiple": true,
        //是否支持多选文件
        "data": {},
        //上传时附带的额外参数
        "name": "",
        //上传的文件字段名
        "withCredentials": false,
        //支持发送 cookie 凭证信息
        "accept": "",
        //接受上传的文件类型
        "format": [],
        //支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用
        "maxSize": undefined,
        //文件大小限制，单位 kb
        "maxLength": 4,
        //上传文件最大数
        "beforeUpload": () => {},
        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
        "onProgress": () => {},
        //文件上传时的钩子，返回字段为 event, file, fileList
        "onSuccess": function() {
          return 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910021S351A06-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639932480&t=1d3b35c681f6fbc03f98f45a1d11e24b';
        },
        //文件上传成功时的钩子，返回字段为 response, file, fileList, 使用$f.uploadPush(field,filePath) 将上传后的路径添加到value中
        "onError": (error, file, fileList) => {
          alert('上传失败')
        },
        //文件上传失败时的钩子，返回字段为 error, file, fileList
        "onPreview": () => {},
        //点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
        "onRemove": () => {},
        //文件列表移除文件时的钩子，返回字段为 file, fileList
        "onFormatError": () => {},
        //文件格式验证失败时的钩子，返回字段为 file, fileList
        "onExceededSize": () => {},
        //文件超出指定大小限制时的钩子，返回字段为 file, fileList
        //操作按钮的图标 ,设置为false将不显示
        handleIcon: 'ios-eye-outline',
        //点击操作按钮事件
        // onHandle:(src)=>{},
        //是否可删除,设置为false是不显示删除按钮
        allowRemove: true,
      },
      validate: [{
        required: false,
        type: 'array',
        min: 3,
        message: '请上传3张图片',
        trigger: 'change'
      }]
    },
  ]
}

function tranRules() {
  return [
    {type: "input",title: "任务名称",field: "title",value: "",col: {span:12},
      props: {"type": "text","clearable": true,"size": "mini", "placeholder": "请输入商品名称","required": false, "readonly": true},
    },
    {type: "input",title: "原处理人",field: "handler",value: "",col: {span:12},
      props: {"type": "text","clearable": true,"size": "mini","placeholder": "请输入商品名称","required": false, "readonly": true},
    },
    {
        type: "select",
        field: "catS_id",
        title: "流转给",
        value: ["0"],
        col: {span: 24},
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
            size: "mini",
        },
        validate: [{required: true,message: '请选择审批人',},],
    },
  ]

}
</script>

<style lang="less" scoped>

</style>