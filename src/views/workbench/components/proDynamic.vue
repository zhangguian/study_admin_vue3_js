<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-20 22:37:28
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-20 22:54:35
-->
<template>
  <div style="maring: 10px 0">
    <el-card shadow="never" :body-style="{padding: '16px'}">
      <template #header>
        <div><span>项目动态</span></div>
      </template>
      <div>
        <ul style="list-style: none;">
          <li class="dynamic-item">
            <div class="avatar">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
            </div>
            <div class="dynamic-content">
              <div class="dynamic-info" >
                <span>
                  <a href="#" style="color: rgba(0,0,0,.85);">猪猪兔兔</a>&nbsp;
                  <span>在&nbsp;<a href="#">飞天疾患团</a>&nbsp;</span>更新项目
                  <a href="#">飞天计划</a>
                </span>
              </div>
              <div class="time"><Time :time="time1" /></div>
            </div>
          </li>
          <li class="dynamic-item">
            <div class="avatar">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
            </div>
            <div class="dynamic-content">
              <div>
                <span >
                  <a href="#" style="color: rgba(0,0,0,.85);">猪猪兔兔</a>&nbsp;
                  <span>在&nbsp;<a href="#">飞天疾患团</a>&nbsp;</span>更新项目
                  <a href="#">飞天计划</a>
                </span>
              </div>
              <div class="time"><Time :time="time1" /></div>
            </div>
          </li>
          <li class="dynamic-item">
            <div class="avatar">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
            </div>
            <div class="dynamic-content">
              <div>
                <span >
                  <a href="#" style="color: rgba(0,0,0,.85);">猪猪兔兔</a>&nbsp;
                  <span>在&nbsp;<a href="#">飞天疾患团</a>&nbsp;</span>更新项目
                  <a href="#">飞天计划</a>
                </span>
              </div>
              <div class="time"><Time :time="time1" /></div>
            </div>
          </li>
          <li class="dynamic-item">
            <div class="avatar">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
            </div>
            <div class="dynamic-content">
              <div>
                <span >
                  <a href="#" style="color: rgba(0,0,0,.85);">猪猪兔兔</a>&nbsp;
                  <span>在&nbsp;<a href="#">飞天疾患团</a>&nbsp;</span>更新项目
                  <a href="#">飞天计划</a>
                </span>
              </div>
              <div class="time" ><Time :time="time1" /></div>
            </div>
          </li>

        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'IviewVue3JsProdynamic',

};
</script>

<style lang="less" scoped>
.dynamic-item {
  display: flex;
  margin-bottom: 13px;
  padding: 10px 0px;
  border-bottom: 1px solid #f0f0f0;
  .dynamic-content {
    margin-left: 16px;
    font-size: 14px;
    .time {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
      margin-top: 8px;
    }
  }
}
</style>