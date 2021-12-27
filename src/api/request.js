/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-23 20:55:42
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-23 23:21:52
 */
import {createApp} from 'vue'
import axios from 'axios'

import { ElMessage } from 'element-plus'

const app = createApp()

const that = app.config.globalProperties
const BASE_URL  = process.env.VUE_APP_BASE_URL

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 9000,
  headers: {
    get: {
      'Contnet-Type': 'application/x-www-form-urlencoded;charset-utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  transformRequest: [(params) => {
    return JSON.stringify(params)
  }],
  transformResponse: [(data) => {
    if(typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data)
    }
    return data
  }]
})

// 异常拦截
const err = (error) => {
  if(error.response) {
    let data = error.response.data
    switch (error.response.status) {
      case 403: 
        ElMessage({showClose: true,message: '拒绝访问',type: 'error',center,duration: '3000'})
        break;
      case 401:
        
        break;
      case 504:
        ElMessage({showClose: true,message: '网络超时',type: 'error',center,duration: '3000'})
        break
      default:
        ElMessage({showClose: true,message: data.message,type: 'error',center,duration: '3000'})
        break
    }
  } else if(error.message) {
    if(error.message.include('timeout')) {
      ElMessage({showClose: true,message: '网络超时',type: 'error',center,duration: '3000'})
    } else {
      ElMessage({showClose: true,message: data.message,type: 'error',center,duration: '3000'})
    }
  }
  return Promise.reject(error)
}

request.interceptors.request.use(config => {
  const token = window.seeionStorage.getItem('token')

  // 如果token存在
  // 让每个请求携带自定义的token
  token && (config.headers['Access-Token'] = token)
  return config
}, err)

request.interceptors.response.use((response) => {
  return response.data
}, err)

export default function (method, url, params,config = {}) {
  return request({method, url, 
    params: method === 'get' || method === 'DELETE' ? params : null,
    data: method === 'post' || method === 'PUT' ? params : null
  })
  .then(res => {
    return {data: res || {}}
  })
  .catch(error =>{
    if(error.status === 404) {
      ElMessage({showClose: true,message: '服务接口未找到!',type: 'error',center,duration: '3000'})
    } else {
      ElMessage({showClose: true,message: error,type: 'error',center,duration: '3000'})
    }
  })
}

