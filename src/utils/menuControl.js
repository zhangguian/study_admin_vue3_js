/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-19 17:51:04
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-19 20:02:51
 */
import {forEach, hasOneOf} from './tools'

/**
 * @name: 
 * @test: test font
 * @description 判断是否有子路由 
 * @param {*}
 * @return {*}
 */

const hasChild = (item) => {
  return item.children && item.children.length !== 0
}

/**
 * @name: 
 * @test: test font
 * @description 
 * @param {*}
 * @return {*}
 */
const showThisMenuEle = (item, access) => {
  if(item.meta && item.meta.access && item.meta.access.length) {
    if(hasOneOf(item.meta.access, access)) return true
    else return false
  } else return true
}

/**
 * @name: 
 * @test: test font
 * @description 通过路由映射表获取菜单列表 
 * @param {*}
 * @return {*}
 */

export const getMenuByRoute = (list, access) => {
  let res = []
  forEach(list, item => {
    if(!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item,access)) {
        obj.children = getMenuByRoute(item.children, access)
      }
      if(item.meta && item.meta.href) obj.href = item.meta.href
      if(showThisMenuEle(item, access)) res.push(obj)
    }
  })
  return res
}
// scrollTop animation
export const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  const scroll = (start, end, step) => {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}
