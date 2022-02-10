<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-30 21:47:59
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-01 14:32:00
-->
<template>
  <div>
    <!-- <div style="text-align: right;margin-right: 10px" v-if="printShow">
      <el-button icon="md-print"  v-print="'#printMe'"></el-button>
    </div> -->
    <div >
      <el-form :model="applyContent">
          <el-card dis-hover style="margin: 0px auto; border: 1px solid #ccc" >
            <div class="apply-form">
              <span class="title">出差申请单</span>
              <div >
                <el-row>
                  <el-col :span="10" :offset="14">
                    <el-form-item label="编号:" :label-width="80" :prop="applyContent.id">
                      <el-input :border="false" v-model="applyContent.id"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
              <table border="1" class="table">
                <tr>
                  <td class="firstTr">出差人</td>
                  <td class="firstTr">
                    <el-row>
                      <el-col :xs="22" :offset="1">
                        <el-form-item style="line-height: 55px;"  :prop="applyContent.applicant">
                          <el-input :border="false" v-model="applyContent.applicant" readonly ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                  <td class="firstTr">部门</td>
                  <td class="firstTr">
                    <el-row>
                      <el-col :xs="22" :offset="1">
                        <el-el-form-item style="line-height: 55px;" :prop="applyContent.department">
                          <el-input :border="false" v-model="applyContent.department" readonly></el-input>
                        </el-el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                  <td class="firstTr">职务</td>
                  <td class="firstTr">
                    <el-row>
                      <el-col :xs="22" :offset="1">
                        <el-form-item  :prop="applyContent.position">
                          <el-input :border="false" v-model="applyContent.position" readonly></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                </tr>

                <tr>
                  <td class="firstTr">出发地</td>
                  <td colspan="2">
                    <el-row>
                      <el-col >
                        <el-form-item :prop="applyContent.origin">
                          <el-input :border="false" v-model="applyContent.origin"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                  <td class="firstTr">目的地</td>
                  <td colspan="2">
                    <el-row>
                      <el-col >
                        <el-form-item :prop="applyContent.address">
                          <el-input :border="false" v-model="applyContent.address"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                </tr>
                <tr>
                  <td class="firstTr">出发时间</td>
                  <td colspan="2">
                    <el-row>
                      <el-col :span="24">
                        <!-- <el-form-item :prop="applyContent.startDate.toString()"> -->
                          <!-- <DatePicker type="datetime" v-model="applyContent.startDate"></DatePicker> -->
                        <!-- </el-form-item> -->
                      </el-col>
                    </el-row>
                  </td>
                  <td class="firstTr">计划返回时间</td>
                  <td colspan="2">
                    <el-row>
                      <el-col :span="24">
                        <!-- <el-form-item :prop="applyContent.endDate.toString()"> -->
                          <!-- <DatePicker type="datetime" v-model="applyContent.endDate"></DatePicker> -->
                        <!-- </el-form-item> -->
                      </el-col>
                    </el-row>
                  </td>
                </tr>
                <tr>
                  <td class="firstTr">经费支出方式</td>
                  <td colspan="2">
                    <el-row>
                      <el-col :span="24">
                        <el-form-item :prop="applyContent.pay">
                          <!-- <RadioGroup v-model="applyContent.pay" > -->
                            <!-- <Radio  style="margin-right: 10px;" v-for="item in payType" :key="item.label" :label="item.label">{{item.type}}</Radio> -->
                          <!-- </RadioGroup> -->
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                  <td class="firstTr">申请金额</td>
                  <td colspan="2">
                    <el-row>
                      <el-col >
                        <el-form-item :prop="applyContent.amount">
                          <el-input v-model="applyContent.amount" :border="false" placeholder="个人垫付无需填写"/>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <el-row>
                      <el-col :xs="24" :sm="21">
                        <el-form-item label="预计出行路线:" :label-width="115"  :prop="applyContent.route">
                          <el-input v-model="applyContent.route" :border="false" type="textarea" :rows="3" />
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <el-row>
                      <el-col :xs="24" :sm="21">
                        <el-form-item label="任务及事由:" :label-width="100"  :prop="applyContent.desc">
                          <el-input v-model="applyContent.desc" :border="false" type="textarea" :rows="4" show-word-limit maxlength="200"/>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                </tr>
                <tr class="firstTr">
                  <td colspan="3">
                    <el-row>
                      <el-col :span="16">
                        <el-form-item label="部门经理意见:" :label-width="130" >
                          <!-- <el-input :border="false"></el-input> -->
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col :span="16" :offset="4">
                      <el-form-item label="负责人:" :label-width="130"  style="margin: 20px">
                          <!-- <el-input :border="false"></el-input> -->
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                  <td colspan="3">
                    <el-row>
                      <el-col :span="16">
                        <el-form-item label="行政办意见:" :label-width="130" >
                          <!-- <el-input :border="false"></el-input> -->
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col :span="16" :offset="4">
                      <el-form-item label="负责人:" :label-width="130"  style="margin: 20px">
                          <!-- <el-input :border="false"></el-input> -->
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                </tr>
                <tr class="firstTr">
                  <td colspan="3">
                    <el-row>
                      <el-col :span="16">
                        <el-form-item label="财务部意见:" :label-width="130" >
                          <!-- <el-input :border="false"></el-input> -->
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col :span="16" :offset="4">
                      <el-form-item label="负责人:" :label-width="130"  style="margin: 20px">
                          <!-- <el-input :border="false"></el-input> -->
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                  <td colspan="3">
                    <el-row>
                      <el-col :span="16">
                        <el-form-item label="总经理意见:" :label-width="130" >
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col :span="16" :offset="4">
                        <el-form-item label="负责人:" :label-width="130"  style="margin: 20px">
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </td>
                </tr>
              </table>
            </div>
          </el-card>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'applyEvectionForm',
   props: {
    applyContent: {
      type: Object,
      default() {
        return {}
      }
    },
    printShow: {
      type: Boolean,
      default: true
    },
   },
   setup(prop, context) {

   }
}
</script>

<style lang="less" scoped>
@import './index.less'; 
</style>
