/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-19 15:22:54
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-21 22:19:58
 */
import Main from '_c/main'

export default [
  {
    path: '/',
    name: 'home',
    component: Main,
    meta: {},
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home_page',
        meta: {title: '首页'},
        component: ()=> import('@/views/Home')
      }
    ]
  },
  {
    path: '/workbench',
    name: 'workbench',
    component: Main,
    meta: { hideInBread: true },
    children: [
      {
        path: '/workbench_page',
        name: 'workbench_page',
        meta: {icon: 'md-notifications',title: '工作台'},
        component: () => import('@/views/workbench/workbench.vue')
      }
    ]
  },
  {
    path: '/project_management',
    name: 'project_management',
    component: Main,
    meta: { hideInBread: true, title: '项目管理'},
    children: [
      {
        path: '/project_management_page',
        name: 'project_management_page',
        meta: {icon: 'md-notifications',title: '项目管理'},
        component: () => import('@/views/pro-management/proMana.vue')
      },
    ]
  },
  {
    path: '/personal-business',
    name: 'personal-business',
    component: Main,
    meta: { hideInBread: true,title: '业务办理' },
    children: [
      {
        path: '/apply_evection_page',
        name: 'apply_evection_page',
        meta: {icon: '_qq',title: '出差申请'},
        component: () => import('@/views/business/applyEvection.vue')
      },
      {
        path: '/apply_expense_page',
        name: 'apply_expense_page',
        meta: {icon: '_qq',title: '报销申请'},
        component: () => import('@/views/business/applyExpenses.vue'),
      },
    ]
  },

]