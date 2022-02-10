/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-18 21:18:16
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-03 20:25:47
 */


/**
 * @name: 
 * @test: test font
 * @msg: 检验手机号
 * @param {*} phone
 * @return {*}
 */
export function phoneReg(phone) {
  const cellphoneReg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
  const tellphoneReg = /^(0\d{2}-\d{8}(-\d{1,4})?)|(0\d{3}-\d{7,8}(-\d{1,4})?)$/
  return cellphoneReg.test(phone) || tellphoneReg.test(phone)
}
/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {*} arr
 * @param {*} fb
 * @return {*}
 */
export const forEach=(arr,fn) => {
  if(!arr.length || !fn) return 
  let i = -1
  let len = arr.length
  while(++i < len) {
    let item = arr[i]
    fn(item, i, arr)
  }
}
/**
 * @name: 
 * @test: test font
 * @description 得到两个数组的交集
 * @param {*} arr1
 * @param {*} arr2
 * @return {*}
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length)
  let i = -1
  let res = []
  while(++i < len) {
    const item = arr2[i]
    if(arr1.indexOf(item) > -1) res.push(item)
  }
}

/**
 * @name: 
 * @test: test font
 * @description 得到两个数组的并集 
 * @param {*}
 * @return {*}
 */
export const getUnion= (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @name: 
 * @test: test font
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中 
 * @param {*} target 目标数组
 * @param {*} arr 需要查询的数组
 * @return {*}
 */
export const hasOneOf = (targetArr, arr) => {
  return targetArr.some(_ => arr.indexOf(_) > -1)
}

/**
 * @name: 
 * @test: test font
 * @description 验证字符串或数值是否存在列表中
 * @param {*}
 * @return {*}
 */
export const oneOf = (value, validList) => {
  for(let i = 0; i < validList.length; i++) {
    if(value === validList[i]) return true
  }
  return false
}

/**
 * @name: 
 * @test: test font
 * @description 处理数字，如果传入的数是1位数，则在前面补充0位
 * @param {*}
 * @return {*}
 */
export const getHandleValue = num =>  {
  return num < 10 ? '0' + num : num
}

/**
 * @name: 
 * @test: test font
 * @description  截取指定符号后面的字符串（包括这字符）
 * @param {*}
 * @return {*}
 */
export const getCaption = (obj, d) => {
  let index = obj.indexOf(`${d}`)
  obj = obj.subString(index, obj.length)
  return obj
}
export const splitStr = (obj, d) => {
  return obj.split(`${d}`)
}

/**
 * @name: 
 * @test: test font
 * @description 将状态数字转化为对应label 
 * @param {*} state 状态数字
 * @param {*} stateList 对应状态数组
 * @return {*}
 */
export const changeShow = (state, stateList) => {
  if(state == null || state == undefined) return '--'
  const res = stateList.find(item =>{
    return item.value == state
  })
  return res ? res.label : state
}

/**
 * @name: 
 * @test: test font
 * @description 生成随机数
 * @param {*}
 * @return {*}
 */
export const randomNum = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * @name: 
 * @test: test font
 * @description 生成随机字符串 
 * @param {*}
 * @return {*}
 */
export const randomStr = () => {
  const str = "0123456789"
  return str.split("").sort(() => {
    return Math.random() - 0.5  
  })
}

export const tagType = (type) => {
  let map = {'0': '','1': 'success', '2': 'warning', '3': 'danger'}
  return map[type]
}