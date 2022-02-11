/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-17 20:40:38
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-19 15:40:20
 */
import { createRouter, createWebHashHistory } from 'vue-router'

import routes from './routes'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 解决多次点击报错
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const LOGIN_PAGE_NAME = 'login'
  const token = window.sessionStorage.getItem('token')
  NProgress.start()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: 'workbench_page' // 跳转到homeName页
    })
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
  window.scrollTo(0, 0);
})
export default router
