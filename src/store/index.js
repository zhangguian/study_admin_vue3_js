/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-17 20:40:38
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-19 20:03:13
 */
import { createStore } from 'vuex'
import routes from '@/router/routes'
import { getMenuByRoute } from '../utils/menuControl'
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
  modules: {
  }
})
