<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-19 17:12:07
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-20 12:28:12
-->
<template>
  <el-sub-menu :index="`${parentIndex}`">
    <template #title>
      <span>{{showTitle(parentItem)}}</span>
    </template>
    <template v-for="item in children">
      <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
      <el-menu-item v-else :index="getNameOrHref(item)" :key="`menu-${item.name}`"><span>{{showTitle(item)}}</span></el-menu-item>
    </template>
  </el-sub-menu>
</template>

<script>
import {computed} from 'vue'
import mixin from './mixin'
export default {
  name: 'IviewVue3JsSideMenuItem',
  props: {
    parentItem: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, conmtext) {
    const {getMenuName,showTitle,showChildren,getNameOrHref} = mixin.setup()
    let parentIndex = computed(() => props.parentItem.name)
    let children = computed(() => props.parentItem.children)
    return {
      showTitle,showChildren,getNameOrHref, parentIndex,children
    }
  }
};
</script>

<style lang="less" scoped>

</style>