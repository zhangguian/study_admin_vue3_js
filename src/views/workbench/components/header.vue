<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-20 19:55:12
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-20 20:37:55
-->
<template>
  <div class="header">
    <div class="user-box">
      <el-avatar :size="60" :src="userInfo.userAvatar"></el-avatar>
      <div class="user-info">
        <div class="user-text">早安，{{userInfo.user}} ，祝你开心每一天！</div>
          <div>{{userInfo.company}}－{{userInfo.department}}－{{userInfo.position}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IviewVue3JsHeader',
  props: {
    userInfo: {
      type: Object,
      default() {
        return {}
      }
    },
  }
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 80px;
  background-color: rgb(255, 255, 255);
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  .user-box {
    display: flex;
    .user-info {
      margin-left: 24px;
      color: rgba(0,0,0,.45);
      line-height: 22px;
      font-size: 14px;
      .user-text {
        margin-bottom: 12px;
        color: rgba(0,0,0,.85);
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
  .remind {
    min-width: 242px;
    margin-left: 88px;
    text-align: right;
    .remind-item {
      position: relative;
      display: inline-block;
      padding: 0 32px;
      .remind-item-title {
        margin-bottom: 4px;
        color: rgba(0,0,0,.45);
        font-size: 18px;
      }
      .remind-item-num {
        color: rgba(0,0,0,.85);
        font-size: 24px;
      }
    }
  }
}
</style>