<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-20 14:10:06
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-27 19:57:57
-->
<template>
  <div>
    <el-dropdown>
      <div class="mg-badge" >
        <el-badge is-dot class="item" style="padding-right: 8px">
          <el-icon>
            <i class="i-icon icon-tongzhi1" style="fontSize: 22px"></i>
          </el-icon>
        </el-badge>
      </div>

      <template #dropdown>
        <el-dropdown-menu class="msg-dropdownMenu">
          <div style="padding: 0px 20px;fontSize: 14px">
            <el-tabs @tab-click="handleClick"  size="small" >
              <el-tab-pane v-for="item in msgdata" :label="getmsgLabel(item)" :key="item.label" >
                <div class="msg-content">
                  <template v-if="item.count === 0">
                    <el-empty description="暂无数据" :image-size="60"></el-empty>
                  </template>
                  <div v-else>{{item.content}}</div>
                </div>
                <div class="msg-button">
                  <el-button plain size="small" @click="emptyRecord()">清空记录</el-button>
                  <el-button plain size="small" @click="lookMore()">查看更多</el-button>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import {ref, reactive, toRefs,} from 'vue'
export default {
  name: 'IviewVue3JsNotice',
  setup() {
    const state = reactive({
      msgdata: [
        {label: '我的待办', count: 0, content: '十多年书法的订单'},
        {label: '系统消息', count: 2, content: '时代峻峰男生的减肥呢的身份'},
        {label: '邮件消息', count: 3, content: '时代峻峰男生的减肥呢的身份'},
      ]
    })

    const handleClick = (item) => {
      console.log('tabsItem :>> ', item);
    }

    const getmsgLabel = (item) => {
      return item['label'] + '(' + item.count + ')'
    }
    const emptyRecord = () => {
      console.log('object :>> ', 'object');
    }
    const lookMore = () => {
      console.log('object :>> ', 'obje1132ct');
    }
    return {
      ...toRefs(state),getmsgLabel,emptyRecord,lookMore,handleClick
    }
  }
};
</script>

<style lang="less" scoped>
.item {

}
.msg-dropdownMenu {
  //  position: relative;
  padding: 10px;
  .msg-content {
    width: 100%;
    height: 200px;
  }
  .msg-button {
    display: grid;
    width: 100%;
    text-align: center;
    // position: relative;
    // top: 80px;
    &> button {
      margin: 5px 0px;
    }
  }
}
</style>