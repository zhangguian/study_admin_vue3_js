<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-20 20:39:13
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-20 23:05:00
-->
<template>
  <div class="pro-content">
    <el-card shadow="never" :body-style="{padding: '8px'}">
      <template #header>
        <div class="card-header">
          <span>进行中的项目</span>
          <a @click="toAllPro" style="fontSize:14px;">全部项目</a>
          <!-- <el-button class="button" type="text" @click="toAllPro">全部项目</el-button> -->
        </div>
      </template>
      <div class="pro-list">
        <div class="pro-item" v-for="(item,index) in proList" :key="index" @click="handlePro(item)">
          <div style="padding: 10px">
            <div class="pro-title">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
              <span class="pro-name">{{item.proName}}</span>
            </div>
            <div class="pro-desc">{{item.proDesc}}</div>
            <div><el-progress :percentage="item.proPercent" :indeterminate="true" :duration="5" /></div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import {getCurrentInstance} from 'vue'
export default {
  name: 'IviewVue3JsProlist',
  props: {
    proList: {
      type: Array,
      default: []
    }
  },
  setup() {
    const {proxy} = getCurrentInstance()

    const toAllPro = () => {
      proxy.$router.push({
        name: 'project_management_page',
        query: {}
      })
    }

    const handlePro = (item) => {
      proxy.$router.push({
        name: 'project_management/proDetail_page',
        query: {}
      })
    }
    return {
      toAllPro,handlePro
    }
  }
};
</script>

<style lang="less" scoped>
.pro-content {
  margin: 10px 0;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pro-list {
    display: flex;
    flex-flow:  wrap;
      .pro-item {
      border: 0;
      border-radius: 0;
      // padding: 10px;
      width: 33.33%;
      box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0, inset 1px 0 0 0 #f0f0f0, inset 0 1px 0 0 #f0f0f0;
      transition: all .3s;
        font-size: 14px;
      .pro-title {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        .pro-name {
          margin-left: 12px;
          color: rgba(0,0,0,.85);
        }
      }
      .pro-desc {
        height: 44px;
        overflow: hidden;
        color: rgba(0,0,0,.45);
        line-height: 22px;
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
}
</style>