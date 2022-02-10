/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-02 19:27:31
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-02 23:46:47
 */
import api from '../api/index'

const state = {}
const mutations = {}
const actions ={
  proAllList(context, params) {
    return api.proManagement.proAllList(params)
  },
  deleOnePro(context, params) {
    return api.proManagement.delePro(params)
  },
  getDemandList(context, params) {
    return api.proManagement.getDemandList(params)
  },
  deleOneDemand(context, params) {
    return api.proManagement.deleOneDemand(params)
  },
}
export default {namespaced: true, state, mutations, actions}