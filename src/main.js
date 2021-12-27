/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-17 20:40:38
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-22 13:59:05
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ElementUI from 'element-plus/es/index'
import formCreate from '@form-create/element-ui'
import './index.less'
import './assets/iconfont/color_icon/iconfont.css';
import './assets/iconfont/color_icon/iconfont.js';

const app = createApp(App)

app.use(store)
.use(router)
.use(utils)
.use(ElementUI)
.use(ElementPlus)
.use(formCreate)
.mount('#app')
