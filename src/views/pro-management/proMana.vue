<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-20 11:55:24
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-01 14:49:09
-->
<template>
  <div>
    <el-card :body-style="{ padding: '8px' }" style="height: 100%">
      <el-tabs v-model="activeName">
        <el-tab-pane label="全部项目" name="all">
          <rect-table
            ref="proList"
            action="proManagement/proAllList"
            size="small"
            @handle-pro="handlePro"
            @dele="handleDele"
            @editor="handleEditor"
            
          />
        </el-tab-pane>
        <el-tab-pane label="进行中" name="ongoing">
          <rect-table
            ref="proList"
            action="proManagement/proAllList"
            size="small"
             flag="1"
            @handlePro="handlePro"
            @dele="handleDele"
            @editor="handleEditor"
          />
        </el-tab-pane>
        <el-tab-pane label="已完成" name="done">
          <rect-table
            ref="proList"
            action="proManagement/proAllList"
            size="small"
            flag="2"
            @handlePro="handlePro"
            @dele="handleDele"
            @editor="handleEditor"
          />
        </el-tab-pane>
        <el-tab-pane label="未开始" name="unstart">
          <rect-table
            ref="proList"
            action="proManagement/proAllList"
            size="small"
            flag="0"
            @handlePro="handlePro"
            @dele="handleDele"
            @editor="handleEditor"
          />
        </el-tab-pane>
        <el-tab-pane label="已归档" name="archive">
          <div class="pane-content">
            <rect-table 
            ref="proList"
            action="proManagement/proAllList" 
            size="small" 
            flag="3"
            @handle-pro="handlePro"
             @dele="handleDele"
            @editor="handleEditor"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { reactive, getCurrentInstance, toRefs } from 'vue'
import { useStore } from 'vuex'
import { ElMessageBox, ElMessage } from 'element-plus'
import { RectTable } from '_c/table'
export default {
  name: 'IviewVue3JsPromana',
  components: { RectTable, },
  setup () {
    const { proxy } = getCurrentInstance()
    const store = useStore()
    const state = reactive({
      activeName: 'all',
      data: [],
    })
    const handlePro = (item) => {
      proxy.$router.push({
        name: 'project_management/proDetail_page',
        query: {}
      })
    }
    const delePro = async(id) => {
      let {data, err} = await store.dispatch('proManagement/deleOnePro',{id: id})
      if(data.status === 200) {
        proxy.$refs.proList.getData()
         ElMessage({
            type: 'success',
            message: '删除成功',
          })
      } else {
         ElMessage({
            type: 'info',
            message: '删除失败',
          })
      }
    }
    const handleDele = ({ id }) => {
      console.log('proxy', proxy)
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
          delePro(id)
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '删除取消',
          })
        })
    },
    handleEditor = (data) => {

    }
    return {
      ...toRefs(state),
      handlePro,
      handleDele,
      handleEditor
    }
  }
};
</script>

<style lang="scss" scoped>
</style>