/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-18 23:25:13
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-03 20:16:14
 */
import * as utils from './tools'
import consts from './consts'

// const app = createApp({})
const tools = {...utils}

export default {
  install: (app) => {
    app.config.globalProperties.$tools = tools,
    app.config.globalProperties.$c = consts
  }
}