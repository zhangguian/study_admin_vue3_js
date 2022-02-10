/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-19 15:22:54
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 17:35:12
 */
import Main from '_c/main'

export default [
  {
    path: '/login',
    name: 'login',
    meta: { hideInMenu: true, title: "登录" },
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/',
    name: 'workbench',
    redirect: '/workbench_page',
    component: Main,
    meta: { hideInBread: true },
    children: [
      {
        path: 'workbench_page',
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
        path: 'project_management_page',
        name: 'project_management_page',
        meta: {icon: 'md-notifications',title: '项目管理'},
        component: () => import('@/views/pro-management/proMana.vue')
      },
      {
        path: 'project_management/proDetail_page',
        name: 'project_management/proDetail_page',
        meta: {icon: 'md-notifications',hideInMenu: 'false'},
        component: () => import('@/views/pro-management/proDetail/proDetail.vue')
      },
      {
        path: 'project_management/demandDetails_page',
        name: 'project_management/demandDetails_page',
        meta: {icon: 'md-notifications',hideInMenu: 'false'},
        component: () => import('@/views/pro-management/proDetail/components/demandDetails.vue')
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
        path: 'apply_evection_page',
        name: 'apply_evection_page',
        meta: {icon: '_qq',title: '出差申请'},
        component: () => import('@/views/business/applyEvection.vue')
      },
      {
        path: 'apply_expense_page',
        name: 'apply_expense_page',
        meta: {icon: '_qq',title: '报销申请'},
        component: () => import('@/views/business/applyExpenses.vue'),
      },
    ]
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: Main,
    meta: { hideInBread: true },
    children: [
      {
        path: 'personal-center_page',
        name: 'personal-center_page',
        meta: {icon: 'md-notifications',title: '个人中心'},
        component: () => import('@/views/personalCenter/userInfo.vue')
      }
    ]
  },
]