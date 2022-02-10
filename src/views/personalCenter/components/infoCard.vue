<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-04 17:26:26
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 21:03:36
-->
<template>

  <el-card shadow="never" class="info-box">
    <div class="avater">
      <el-avatar :src="userInfo.avatar" :size="80"/>
      <span class="name" style="padding: 7px;fontSize: 25px">{{userInfo.username}}</span>
      <span class="introduce" style="padding: 7px;fontSize: 12px;color: #626b7d;">{{userInfo.introduce}}</span>
    </div>

    <ul class="user-info">
      <li><i class="i-icon icon-meiyuemubiaofenxi-02"></i>{{userInfo.born}}</li>
      <li><i class="i-icon icon-meiyuemubiaofenxi-02"></i>{{userInfo.sex == '0' ? '男' : '女'}}</li>
      <li><i class="i-icon icon-qiyebanguanli-02"></i>集团 - 事业群 - 技术部</li>
      <li><i class="i-icon icon-qiyebanliebiao-02"></i>{{userInfo.address}}</li>
      <li><i class="i-icon icon-tupianpachong-02"></i>{{userInfo.skills}}</li>
      
    </ul>
        <div class="hor"></div>
        <div style="color: #626b7d; fontSize: 14px;text-align: left;padding-left: 28px;margin: 10px 0px">个性标签</div>
        <div>
          <el-tag size="mini" style="margin: 4px 5px" v-for="(item, index) in proxy.$tools.splitStr(userInfo.tag, '、')" :key="index">{{item}}</el-tag>
        </div>
  </el-card>

</template>

<script>
import { getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
export default {
  name: 'StudyAdminVue3JsInfocard',

  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
    })
    onMounted(() => {})
    return {
      ...toRefs(state),
      proxy,
    }
  }
};
</script>

<style lang="less" scoped>
.info-box {
  // padding: 10px 20px 0px 20px;
  text-align: center;
  height: 100%;
  .avater {
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    flex-direction: column;
    /* height: 200px; */
  }
  .user-info {
    font-size: 13px;
    padding-top: 18px;
    line-height: 30px;
    text-align: left;
    list-style: none;
    padding-left: 38px;
  }
  .i-icon {
    margin-right: 8px;
  }
  .hor {
    margin: 8px 0px 28px 0px;
    background-color: #dcdfe6;
    height: 1px;
  }
}
</style>