<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-20 13:04:17
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-27 19:57:48
-->
<template>
  <div class="user-avatar-dropdown">
    <el-dropdown @command="handelCommand" size="medium">
      <el-badge is-dot class="badge-item">
        <el-avatar :src="userInfo.avatar" :size="34"/>
      </el-badge>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="message">
           消息中心 <el-badge is-dot class="mark" ></el-badge>
          </el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import {ref, reactive, toRefs, h, getCurrentInstance} from 'vue'
import { ElNotification } from 'element-plus'
export default {
  name: 'IviewVue3JsUser',
  props: ['userInfo'],
  setup() {
    const {proxy} = getCurrentInstance()
    const state = reactive({}) 
    
    const handelCommand = (command) => {
      if(command === 'message') {
        console.log('command :>> ', command);
      } else if(command === 'logout') {
        proxy.$router.push({
          name: 'login',
        })
         window.sessionStorage.clear()
          ElNotification({
            title: '退出成功',
            message: h('i', { style: 'color: orange' }, 'Thank you for coming, Bye'),
          })
        console.log('command :>> ', command);
      }
    }
    return {
      ...toRefs(state),
      handelCommand
      }
  }
};
</script>

<style lang="less" scoped>
.badge-item {
  margin-right: 10px;
}
.msg-item {
  margin-right: 10px;
  padding-top: 70px;
}
</style>