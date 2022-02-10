<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-04 10:15:59
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 10:42:36
-->
<template>
  <div>
    <div class="title" style="fontSize: 13px">
      <span>数量统计</span>
      <slot></slot>
    </div>
    <div class="content" >
      <div class="item" >
        <i-circle :percent="80" :size="60" dashboard stroke-color="#3582fb">
          <!-- <span class="demo-Circle-inner" style="font-size:16px;color: #3582fb">80%</span> -->
        </i-circle>
        <el-progress type="dashboard" :percentage="80" size="mini">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
          </template>
        </el-progress>
        <div>完成度</div>
      </div>
      <div class="item" >
        <div class="num" >64</div>
        <div>总计</div>
      </div>
      <div class="item" >
        <div class="num" >64</div>
        <div>进行中</div>
      </div>
      <div class="item" >
        <div class="num" >64</div>
        <div>已完成</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudyAdminVue3JsProstatus',

};
</script>

<style lang="less" scoped>
@primary-color: #3582fb;
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 7px;
  border-bottom: 1px solid #e8eaec;
  .item {
    text-align:center; 
    font-size: 12px;
    .num {
      color: @primary-color; 
      font-weight: 700; 
      font-size: 16px;
    }
  }
}
</style>