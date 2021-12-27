<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-21 16:04:04
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-21 22:17:10
-->
<template>
  <div >
    <div style="text-align: right">
      <slot name="other"></slot>
      <el-input
        v-model="value"
        style="width: 300px;"
        size="small"
        placeholder="Search something"
        clearable
        :prefix-icon="Search"
        @change="search">
        </el-input>
    </div>
      <div class="pro-list">
        <el-row>
          <template v-if="!total">
            <el-empty description="暂无数据"></el-empty>
          </template>
          <template v-else>
            <el-col :span="6" v-for="(item, index) in tableData" :key="index">
              <div class="pro-item" @click="handlePro(item)">
              <div class="pro-title">
                <el-avatar :size="30" :src="circleUrl" />
                <span class="pro-name">{{item.proName}}</span>
              </div>
              <div class="pro-desc">{{item.proDesc}}</div>
              <div class="pro-publish">
                <a href="#" style="color: rgba(0, 0, 0, 0.45);" ><span>飞天大盗</span></a>
                <div class="time" ></div>
              </div>
            </div>
            </el-col>
          </template>
        </el-row>
      </div>
      <div style="text-align: right">
        <el-pagination
            v-model:currentPage="pageNum"
            :page-size="mPageSize"
            :page-sizes="pageSizeOpts"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange">
          </el-pagination>
      </div>
    <!-- </template> -->
  </div>
</template>

<script >
import { computed, defineComponent, getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
import { Search } from '@element-plus/icons-vue'
export default {
  name: 'IviewVue3JsRexttable',
  props: {
    pageSize: {type: Number, default: 10},
    border: {type: Boolean, default: false},
    size: String,
    tableData: {type: Array,default: []},
  },
  setup() {
    const { proxy } = getCurrentInstance()
    const data = reactive({
      value: '',
      total: proxy.tableData.length,
      mPageSize: proxy.pageSize,
      pageNum: 1,
    })
    const pageSizeOpts = computed(() => {return [...new Set([10,20,30,40, proxy.pageSize])].sort((a, b) => a-b)})
    const search = () => {
      console.log('搜索 :>> ', '搜索');
    }
    const handlePro = (item) => {
      comtext.emit('handlePro', item);
    }
    onMounted(() => {
      // console.log('totle :>> ', data.totle);
    })
    const handleSizeChange = (pageSize) => {
      proxy.mPageSize = pageSize
      console.log('pageSize :>> ', pageSize);
    }
    const handleCurrentChange = (pageNum) => {
      proxy.pageNum = pageNum
      console.log('pageNum :>> ', pageNum);
    }
    return {
      Search,
      search,
      pageSizeOpts,
      handlePro,
      handleSizeChange,
      handleCurrentChange,
      ...toRefs(data)
    }
  }
};
</script>

<style lang="less" scoped>
  .pro-list {
    display: flex;
    flex-flow:  wrap;
    justify-content: center;
    height: 548px;
    overflow: auto;
    margin: 10px 0px;
    .pro-item {
      border: 0;
      border-radius: 0;
      padding: 10px;
      // width: 20%;
      margin: 6px;
      box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0, inset 1px 0 0 0 #f0f0f0, inset 0 1px 0 0 #f0f0f0;
      transition: all .3s;
      .pro-title {
        margin-bottom: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .pro-name {
          margin-left: 12px;
          color: rgba(0,0,0,.85);
          font-size: 14px;
        }
      }
      .pro-desc {
        height: 44px;
        overflow: hidden;
        color: rgba(0,0,0,.45);
        font-size: 14px;
        line-height: 22px;
      }
      .pro-publish {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        .time {
        }
      }
    }
    .pro-item:hover {
      position: relative;
      z-index: 1;
      box-shadow: 0 1px 2px -2px rgba(0, 0, 0 , 16%), 0 3px 6px 0 rgba(0, 0, 0, 12%), 0 5px 12px 4px rgba(0, 0, 0, 9%);
    } 
  }
  .pro-list:before {
    display: table;
    content: "";
  }

</style>