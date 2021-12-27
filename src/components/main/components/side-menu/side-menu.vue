<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-19 17:11:54
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-25 13:50:26
-->
<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <el-menu ref="menu"
      :default-active="activeIndex"
      :default-openeds="openedsIndex"
      @select="handleSelect"
    >
      <template v-for="(item, index) in menuList" :key="index">
        <template v-if="item.children && item.children.length === 1">
          <el-menu-item :index="item.children[0].name" >
            <span>{{showTitle(item.children[0])}}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <side-menu-item :key="`menu-${item.name}`" :parentItem="item" />
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {onMounted,computed, getCurrentInstance, watch, toRef, reactive } from 'vue'
import {useStore} from 'vuex' 
import mixin from './mixin'
import {getUnion} from '@/utils/tools'

import SideMenuItem from './side-menu-item.vue'
export default {
  name: 'IviewVue3JsSideMenu',
  components: {SideMenuItem},
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      },
    },
    activeIndex: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'light'
    }
  },
  setup(props, context) {
    let openedsIndex = reactive([]) // 展开的 Submenu 的 name 集合
    const {showTitle} = mixin.setup()
    const {proxy} = getCurrentInstance()

    const handleSelect = ((index, indexPath,item,) => {
      context.emit('on-select', index)
    })
    
    const handleOpen = ((key, keypath) => {
      context.emit('handle-open', {key,keypath})
    })
    const handleColse = ((key, keypath) => {
      context.emit('handle-colse', {key,keypath})
    })
    const getOpenedNamesByActiveName = ((name) => {
      const res = proxy.$route.matched.map(item => item.name).filter(item => item !== name)
      return res
    })
    
    watch(() => props.activeIndex, (nv, ov) => {
      openedsIndex = getUnion(openedsIndex, getOpenedNamesByActiveName(nv))
    },),
    watch(openedsIndex, (nv, ov) => {
        proxy.$nextTick(() => {
          handleOpen()
        })
      }
    )
    onMounted(() => {
    })
    return {
      showTitle,handleSelect,handleOpen,handleColse
    }
  }
};
</script>

<style lang="less" scoped>

</style>