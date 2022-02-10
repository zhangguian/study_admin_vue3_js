<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-19 15:28:58
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-20 20:24:53
-->
<template>
  <el-container style="height: 100%;width: 100%;position: fixed;" class="main">
    <el-aside width="200px" 
      class="left-sider"
      :style="{overflow: 'hidden'}">
        <side-menu :menuList="menuList" @on-select="toPage">
          <div style="height: 50px;line-height: 50px; backgroundColor: var(--themeColor)">
            <img src="../../assets/logo2.png" alt="" style="width: 100%; height: 100%;">
          </div>
        </side-menu>
      </el-aside>

    <el-container>
      <el-header class="header-con">
        <header-bar>
          <header-user :userInfo="userInfo"></header-user>
          <notice style="margin-right: 20px" size=""></notice>
        </header-bar>
      </el-header>

      <el-main class="main-content">
        <el-container class="main-container-con">
          <el-main class="content-wrapper"> 
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
    
  </el-container>
</template>

<script>
import "./main.less"
import {onMounted, computed, getCurrentInstance, reactive, toRefs} from 'vue'
import { useStore} from 'vuex'

import HeaderBar from "./components/header-bar"
import sideMenu from './components/side-menu'
import HeaderUser from './components/header-user'
import Notice from './components/notice'
export default {
  name: 'IviewVue3JsMain',
  components: {HeaderBar, sideMenu,HeaderUser, Notice},
  setup(props, context) {
    let store =  useStore()
    const {proxy} = getCurrentInstance()
    const state = reactive({
      userInfo: JSON.parse(sessionStorage.getItem('userInfo'))
    })
    let menuList = computed(() => store.getters.menuList).value
    onMounted(() => {
    })
    const toPage = (route) => {
      let {name, params, query} = {}
      if(typeof route === 'string') name = route
      else {
        name = item.name,
        params = item.params,
        query = item.query
      }
      proxy.$router.push({name,params, query})
    }
    return{
      ...toRefs(state),
      menuList,toPage
    }
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}



body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>