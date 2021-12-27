/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-19 20:59:12
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-19 22:15:17
 */
import { computed } from "vue"

export default {
  setup() {
    const getMenuName = ((item, _children) => {
      return _children ? item.children[0].name : item.name
    })
    const showTitle = ((item) => {
      let {title} = item.meta
      title = (item.meta && item.meta.title) || item.name
      return title
    })
    const showChildren = ((item) => {
      return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
    })
    const getNameOrHref = ((item, children0) => {
      return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
    })
    return {
      getMenuName,showTitle,showChildren,getNameOrHref
    }
  }
}