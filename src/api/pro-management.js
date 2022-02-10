import request from './request'

export default {
  proAllList: (params,config) => request('post', '/pro/getproList',params),
  delePro: (params,config) => request('post', '/pro/deleOnePro',params),
  getDemandList: (params,config) => request('post', '/pro/getDemandList',params),
  deleOneDemand: (params,config) => request('post', '/pro/deleOneDemand',params),
}