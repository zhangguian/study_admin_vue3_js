<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-24 20:37:01
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-27 12:02:47
-->
<template>
  <div class="table">
    <div style="padding: 0px 10px">
      <!-- 表格头部操作栏 (START) -->
      <div style="float: left">
        <slot name="header-l"></slot>
      </div>

      <div  style="float: right">
        <slot name="header-r"></slot>
        <!-- 表头筛选 -->
        <div class="transfer">
          <el-popover placement="bottom" :width="400" trigger="click" title="表头筛选">
            <template #reference>
              <el-button :icon="Filter" size="mini"></el-button>
            </template>
            <el-checkbox-group v-model="value" @change="handleColumnsChange">
              <el-checkbox  v-for="item in checkColumns" :key="item.prop" :label="item.label"></el-checkbox>
            </el-checkbox-group>
          </el-popover>
        </div>
      </div>
    </div>
    <!-- 表格头部操作栏 (END) -->
    <el-table
    :data="tableData"
    v-loading="options.loading"
    :size="options.size"
    :max-height="options.maxHeight"
    :stripe="options.stripe"
    :border="options.border"
    :fit="options.fit"
    :highlight-current-row="options.heightCurrentRow"
    :lazy="options.lazy"
    ref="eleTable"
    @row-click="clickRow"
    @row-dblclick="dblclickRow"
    @row-contextmenu="contextmenu"
    @header-click="headClick"
    @header-contextmenu="headcontextmenu"
    @select="select"
    @select-all="selectAll"
    @current-change="rowChange"
    @selection-change="handleSelectionChange"
    >
      <template v-for="(item, index) in filterColumns" :key="index">
        <!-- 复选框 (START)-->
        <el-table-column v-if="item.type === 'selection'" type="selection" :width="item.minWidth?item.minWidth : 60" ></el-table-column>
        <!-- 复选框 (END) -->

        <!-- 序号 (START) -->
        <el-table-column v-else-if="item.type === 'index'" type="index" :label="item.label?item.label : '序号'" :width="item.minWidth?item.minWidth : 80" :align="item.align?item.align : 'center'"></el-table-column>
        <!-- 序号 (END) -->

        <!-- 自定义slot (START) -->
        <slot v-else-if="item.slot" :name="item.slot" :tit="index"></slot>
        <!-- 自定义slot (END) -->

        <!-- 默认渲染列 (START) -->
        <el-table-column v-else
          :prop="item.prop"
          :label="item.label"
          :align="item.align"
          :min-width="item.minWidth"
          :show-overflow-tooltip="true"
        >
          <template #default="scope">
            <template v-if="!item.render">
              <template v-if="item.formatter">
                <span v-html="item.formatter(scope.row, column)"></span>
              </template>
              <template v-else>
                <span>{{scope.row[item.prop]}}</span>
              </template>
            </template>
            <template v-else>
              <!-- <Expand :column="item" :row="scope.row" :render="item.render" :index="scope.$index" /> -->
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import { onMounted, h, reactive, computed, watch, ref, getCurrentInstance, toRefs, nextTick } from 'vue'
import {Filter} from '@element-plus/icons-vue'
import Expand from './expand.js'

export default {
  name: 'IviewVue3JsEletable',
  components: {Expand},
  props: {
    tableData: { // 表格数据
      type: Array,
      defailt: () => []
    },
    columns: { // 表头展示列
      type: Array,
      defailt: () => []
    },
    options: { // 表格配置项
      type: Object,
      default: () => {
        return {
          // height: 400,
          stripe: false, // 斑马纹
          highlightCurrentRow: true, // 是否要高亮当前行
          border: false, // 是否有纵向边框
          fit: false, // 列的宽度是否自撑开
          size: 'medium', // Table 的尺寸
          maxHeight: 600, // Table 的最大高度。 
          loading:false,//是否需要等待效果
          lazy:false,// 是否需要懒加载
        }
      }
    },
    // tableCalss:{
    //   type: String,
    //   default: 'hxTable'
    // },
  },
  setup(props, context) {
    const {proxy} = getCurrentInstance()

    const data = reactive({
      isChange: false,
      value: [],
    })
    // 复选框选择项
    const checkColumns = computed(() => {return props.columns.filter(i => i.label)})
    // 复选框已选项 -model
    const checked = computed(() => {return proxy.checkColumns.map((i, index) =>{ return i.label})})
   
    onMounted(() => {
      data.value = checked.value
    })
    // 筛选后的表头
    const filterColumns = computed( () => {
      if(!data.isChange) return props.columns
      return props.columns.filter( i => !i.type &&  data.value.includes(i.label) || i.type)})
    const handleColumnsChange = (value) => {
      data.isChange = true
      data.value = value
    }
    const clickRow = (row, column, event) => {
      let data = {row,column,event}
      context.emit('clickRow', data)
    }
    const dblclickRow = (row, column, event) => {
      let data = {row,column,event}
       context.emit('dblclickRow', data)
    }
    const contextmenu = (row, column, event) => {
      let data = {row,column,event}
       context.emit('contextmenu', data)
    }
    const headClick = (row, column, event) => {
      let data = {row,column,event}
       context.emit('headClick', data)
    }
    const headcontextmenu = (row, column, event) => {
      let data = {row,column,event}
       context.emit('headcontextmenu', data)
    }
    const select = (row, column, event) => {
      let data = {row,column,event}
       context.emit('select', data)
    }
    const selectAll = (row, column, event) => {
      let data = {row,column,event}
       context.emit('selectAll', data)
    }
    const rowChange = (row, column, event) => {
      let data = {row,column,event}
       context.emit('rowChange', data)
    }
    const handleSelectionChange = (row, column, event) => {
      let data = {row,column,event}
       context.emit('handleSelectionChange', data)
    }

    return {
      Filter,
      ...toRefs(data),
      checkColumns,
      filterColumns,
      clickRow,
      dblclickRow,
      contextmenu,
      headClick,
      headcontextmenu,
      select,
      selectAll,
      rowChange,
      handleSelectionChange,
      handleColumnsChange
    }
  }
  
};
</script>

<style lang="less" scoped>

/deep/ .el-table .cell {
  white-space: nowrap;
  width: fit-content;
}

</style>