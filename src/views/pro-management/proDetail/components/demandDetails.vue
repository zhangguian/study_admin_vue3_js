<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-03 21:19:36
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 09:57:03
-->
<template>
  <el-card shadow="never" style="height: 100%">
    <div class="demand-detail" style="padding: 5px 10px">
      <div style="display: flex;justify-content: space-between; padding-bottom: 4px;border-bottom: 1px solid #f8f8f8">
        <el-page-header title="返回" :icon="ArrowLeft" @back="goBack" />
      </div>
      <!-- 标题 -->
      <div class="demand-title">
        <div><span>【{{demandForm.id}}】</span></div>
        <!-- 详情展示 -->
        <div style="flex: 1" >
          <div data-private="true"  @click="editable" v-if="!isEditor" style="padding: 0px">{{demandForm.title}}</div>
          <!-- 可编辑 -->
          <el-input type="text" size="small"
            v-else class="input-call" 
            v-model="demandForm.title" 
            @blur="onBlur" 
            @change="inputOnChange"
            :autofocus="true"
            ref="focusInputs"
            clearable></el-input>
        </div>
      </div>

      <!-- 内容 -->
      <div>
        <el-tabs>
          <el-tab-pane label="详情">
              <!-- 基础属性 -->
            <div class="demand-desc" style="padding: 0px 0px">
              <div style="font-size: 15px;color: #303030;padding: 3px 0px">基础属性</div>
              <div class="demand-info">
                <div class="demand-info-item">
                  <el-dropdown  style="margin-left: 20px" transfer>
                    <div class="demand-info-box">
                      <el-avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg"></el-avatar>
                      <div class="demand-info-content">
                        <div class="demand-info-content-title omit-inline;">实现中</div>
                        <div class="demand-info-content-subtitle">负责人</div>
                      </div>
                    </div>
                    <template #dropdown>
                      <el-dropdown-menu >
                          <div style="text-align: right;margin:10px;">
                            <el-input v-model="texta" clearable :prefix-icon="Search" size="mini" placeholder="请搜索工作负责人"/>
                          </div>
                          <el-dropdown-item>驴打滚</el-dropdown-item>
                          <el-dropdown-item>炸酱面</el-dropdown-item>
                          <el-dropdown-item>豆汁儿</el-dropdown-item>
                          <el-dropdown-item>冰糖葫芦</el-dropdown-item>
                          <el-dropdown-item>北京烤鸭</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown> 
                </div>
                <div class="demand-info-item">
                  <el-dropdown  style="margin-left: 20px" transfer>
                    <div class="demand-info-box">
                      <el-avatar icon="ios-infinite" size="large" style="color: #ffffff;background-color:#f0a100"></el-avatar>
                      <div class="demand-info-content">
                        <div class="demand-info-content-title omit-inline;">实现中</div>
                        <div class="demand-info-content-subtitle">当前状态</div>
                      </div>
                    </div>
                    <template #dropdown>
                      <el-dropdown-menu >
                        <div style="text-align: right;margin:10px;">
                          <p>选择步骤更改状态</p>
                        </div>
                        <el-dropdown-item>驴打滚</el-dropdown-item>
                        <el-dropdown-item>炸酱面</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
                <div class="demand-info-item">
                  <el-dropdown  style="margin-left: 20px" transfer>
                    <div class="demand-info-box">
                      <el-avatar icon="ios-infinite" size="large" style="color: #ffffff;background-color:#f0a100"></el-avatar>
                      <div class="demand-info-content">
                        <div class="demand-info-content-title omit-inline;">实现中</div>
                        <div class="demand-info-content-subtitle">优先级</div>
                      </div>
                    </div>
                    <template #dropdown>
                      <el-dropdown-menu >
                          <div style="text-align: right;margin:10px;">
                              <el-input v-model="textc" clearable :prefix-icon="Search"  size="mini"/>
                          </div>
                          <el-dropdown-item>驴打滚</el-dropdown-item>
                          <el-dropdown-item>炸酱面</el-dropdown-item>
                          <el-dropdown-item>豆汁儿</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
                <div class="demand-info-item">
                    <el-dropdown  style="margin-left: 20px" transfer>
                    <div class="demand-info-box">
                      <el-avatar icon="ios-infinite" size="large" style="color: #ffffff;background-color:#f0a100"></el-avatar>
                      <div class="demand-info-content">
                        <div class="demand-info-content-title omit-inline;">实现中</div>
                        <div class="demand-info-content-subtitle">所属迭代</div>
                      </div>
                    </div>
                    <template #dropdown>
                      <el-dropdown-menu >
                          <div style="text-align: right;margin:10px;">
                            <el-input v-model="textd" clearable :prefix-icon="Search" size="mini"/>
                          </div>
                          <el-dropdown-item>驴打滚</el-dropdown-item>
                          <el-dropdown-item>炸酱面</el-dropdown-item>
                          <el-dropdown-item>豆汁儿</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </div>
            </div>
             <!-- 需求描述 -->
            <div class="demand-desc" style="padding: 0px 0px">
              <div style="font-size: 15px;color: #303030;padding: 3px 0px">需求描述</div>
              <div>
                <div id="wangEditor"></div>
              </div>
            </div>

            <div style="margin: 10px 0px">
              <div style="font-size: 15px;color: #303030; padding: 5px 0px">基础信息</div>
              <div class="msg-item" style="display: flex">
                <div class="msg-label">所属项目</div>
                <div>敏捷是研发管理</div>
              </div>
              <div class="msg-item">
                <div class="msg-label">工作项类型</div>
                <div>需求</div>
              </div>
              <div class="msg-item">
                <div class="msg-label">创建者</div>
                <div>zhangguian</div>
              </div>
              <div class="msg-item">
                <div class="msg-label">创建时间</div>
                <div>2020-10-11 12:12:00</div>
              </div>
              <div class="msg-item">
                <div class="msg-label">更新时间</div>
                <div>2020-10-11 12:12:00</div>
              </div>
              <div class="msg-item">
                <div class="msg-label">完成度</div>
                <div>68%</div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="周期与进度">
            <div>
            <div class="msg-item">
              <div class="msg-label">创建者</div>
              <div>zhangguian</div>
            </div>
            <div class="msg-item">
              <div class="msg-label">创建时间</div>
              <div>2020-10-11 12:12:00</div>
            </div>
            <div class="msg-item">
              <div class="msg-label">计划开始时间</div>
              <div>2020-10-11 12:12:00</div>
            </div>
            <div class="msg-item">
              <div class="msg-label">计划完成时间</div>
              <div>2020-10-11 12:12:00</div>
            </div>
            <div class="msg-item">
              <div class="msg-label">完成度</div>
              <div>68%</div>
            </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="测试情况"></el-tab-pane>
          <el-tab-pane label=" 变更记录">
            <el-timeline>
              <el-timeline-item>
                  <p class="time">2011年10月5日</p>
                  <p class="content">史蒂夫·乔布斯去世</p>
              </el-timeline-item>
              <el-timeline-item>
                  <p class="time">2010年</p>
                  <p class="content">发布 iPad</p>
              </el-timeline-item>
              <el-timeline-item>
                  <p class="time">2007年</p>
                  <p class="content">发布 iPhone</p>
              </el-timeline-item>
              <el-timeline-item>
                  <p class="time">1976年</p>
                  <p class="content">Apple I 问世</p>
              </el-timeline-item>
              <el-timeline-item>
                  <p class="time">1984年</p>
                  <p class="content">发布 Macintosh</p>
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-card>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Plus, ArrowLeft } from '@element-plus/icons-vue'
import E from 'wangeditor'
export default {
  name: 'StudyAdminVue3JsDemanddetail',
  setup() {
    const {proxy} = getCurrentInstance()
    const state = reactive({
      editorData: '',
      texta: '',
      textb: '',
      textc: '',
      textd: '',
      isEditor: false,
      demandForm: {
        id: '25644564',
        title: '支持商家主动取消订单',
        principal: 'zhangguian',
        priority: '0',
      }
    })
    onMounted(() => {
      editor()
    })
    const goBack = () => {
      proxy.$router.go(-1);
    }
    const editable = () => {
      proxy.isEditor = true
      setTimeout(function () {
        proxy.$refs['focusInputs'].focus()
      },200);
    }
    const onBlur = (i) => {
      console.log('object :>> ', i);
      if(state.demandForm.title == ''){
        editable()
        ElMessage({showClose: false,message: '标题不能为空',type: 'error',center: true,duration: 1000})
      } else {
        state.isEditor = false
      }
    }
    const editor = () => {
      const editor = new E("#wangEditor");
      editor.config.showFullScreen = true;
      // 设置编辑区域高度为 500px
      editor.config.height = 150
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (newHtml) => {
        this.editorData = newHtml
      }
      editor.config.uploadImgServer = "/api/upload-img";
      // 配置菜单栏，删减菜单，调整顺序
      editor.config.menus = ['head','bold','fontSize','foreColor','redo','image','justify','quote','table',]
      // 创建编辑器
      editor.create()
    }
    const beforeDestroy = () => {
      // 调用销毁 API 对当前编辑器实例进行销毁
      this.editor.destroy()
      this.editor = null
    }
    return {
      ...toRefs(state),
      ArrowLeft,
      Search,
      goBack,
      editable,
      onBlur,
      editor,
      beforeDestroy
    }
  }

};
</script>

<style lang="less" scoped>
.demand-detail {
  .demand-title {
    display: flex;
    font-size: 17px;
    color: #303030;
    font-weight: 500;
    align-items: center;
    padding: 0px 0px 4px 0px;
    margin: 4px 0px;
    height: 34px;
    border-bottom: 1px solid #e8eaec;
    textarea {
      height: 34px;
      width: 100%;
      border: none;
      resize: none;
      outline: none;
      box-shadow: none;
      min-height: 34px;
      max-height: 9.0072e+15px;
      resize: none;
      &:focus,&:hover {
        background-color: #f8f8f8;
      }
    }
  }
  .demand-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    min-height: 47px;
    border-bottom: 1px solid #e8eaec;
    .demand-info-item{
      flex: 1;
      width: calc(50% - 5px);
      margin-bottom: 10px;
      padding: 4px;
      cursor: pointer;
      transition: background-color .2s;
      border-radius: 30px;
      &:hover {
        background-color: #e8f3ff;
      }
      .demand-info-box {
        display: flex;
        align-items: center;
        .demand-info-content {
          overflow: hidden;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          .demand-info-content-title {
            font-size: 15px;
            color: #303030;
            font-weight: 500;
          }
          .demand-info-content-subtitle {
            line-height: 1;
            margin-top: 5px;
            font-size: 12px;
            color: #909090;
            font-weight: 500;
          }
        }
      }
    }
  }
}
.msg-item {
  display: flex;
  margin-bottom: 10px;
  .msg-label {
    width: 90px;
    margin-right: 80px;
  }
}

 .input-call :nth-last-child(1){       
  font-size: 17px !important;
  color: #303030;
  font-weight: 500;
  }
</style>