<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2022-01-04 17:25:58
 * @LastEditors: zhangguian
 * @LastEditTime: 2022-01-04 20:14:48
-->
<template>
  <el-row :gutter="10">
    <el-col :span="10">
       <el-form ref="userform" v-model="userInfo" :label-width="80" >
          <el-form-item label="姓名">
            <el-input v-model="userInfo.username" placeholder="请输入姓名" :size="size" clearable></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="userInfo.sex"  placeholder="请选择性别" :size="size">
              <el-option value="0" label="男"></el-option>
              <el-option value="1" label="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生">
            <!-- <el-input v-model="userInfo.born" placeholder="Enter something..." > -->
              <el-date-picker  type="date" v-model="userInfo.born" :size="size" placeholder="请选择出生日期" style="width: 250px"></el-date-picker>
            <!-- </el-input> -->
          </el-form-item>
          <el-form-item label="部门">
            <el-input v-model="userInfo.department"  readonly :size="size">
            </el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="userInfo.address" placeholder="请输入地址" :size="size" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="个人技能">
            <el-input v-model="userInfo.skills" type="textarea" :rows="3" :size="size" placeholder="请输入个人技能" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="个性标签">
            <el-input v-model="userInfo.tag" type="textarea" :rows="2" :size="size" placeholder="请输入个性标签" clearable @click="tagChange">
            </el-input>
          </el-form-item>

          <el-form-item >
            <el-button type="primary" @click="submit" :size="size">保存</el-button>
          </el-form-item>
        </el-form>
    </el-col>
     <el-col :span="14" style="text-align: center">
        <div class="avatar-box" style="margin: 20px 0px;">
          <el-avatar :src="userInfo.avatar" :size="120"/>
          <el-upload action="//jsonplaceholder.typicode.com/posts/" style="margin: 10px 0;">
            <el-button :icon="Upload">更换头像</el-button>
          </el-upload>
          <!-- <Button  icon="ios-cloud-upload-outline"></Button> -->
        </div>
      </el-col>
  </el-row>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { ElMessage} from 'element-plus'
import { Upload } from "@element-plus/icons-vue"
export default {
  name: 'StudyAdminVue3JsInfofprm',
  props: {
    userInfo: Object
  },
  setup(props,context) {
    const state = reactive({
      size: 'mini',
      userAvatar: require('@/assets/avatar.jpg'),
      userInfo: {
        name: '',
        sex: '',
        born: '',
        department: '',
        address: '',
        skills: '',
        tag: ''
      }
    })
    const submit = () => {
    }
    const tagChange = () => {
      ElMessage({message: '请以"、"区分标签', center: true, duration: 2000})
    }
    return {
      ...toRefs(state),
      submit,
      Upload,
      tagChange,
    }
  }
};
</script>

<style lang="less" scoped>

</style>