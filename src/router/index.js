/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-17 20:40:38
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-19 15:40:20
 */
import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
