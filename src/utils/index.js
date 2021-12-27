/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-18 23:25:13
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-19 00:03:03
 */
import * as utils from './tools'
// import { createApp } from 'vue'

// const app = createApp({})
const tools = {...utils}

export default {
  install: (app) => {
    app.config.globalProperties.$tools = tools
  }
}