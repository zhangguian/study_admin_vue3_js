/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-17 20:40:38
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-02 23:48:47
 */
import { createStore } from 'vuex'
import routes from '@/router/routes'
import { getMenuByRoute } from '../utils/menuControl'

import business from './business'
import login from './login'
import proManagement from './proManagement'
import task from './task'

const modules = {business,login,proManagement,task}

export default createStore({
  state: {
  },
  getters: {
    menuList: (rootState) => {
      return getMenuByRoute(routes,rootState.access)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules:modules
})
