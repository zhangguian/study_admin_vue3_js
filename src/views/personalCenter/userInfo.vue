
<template>
  <div >
    <el-row :gutter="10">
      <el-col :span="7">
        <!-- <div style="backgroundColor: red; height: 100%"></div> -->
        <info-card />
      </el-col>
      <el-col :span="17">
        <editor />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InfoCard from './components/infoCard.vue'
import Editor from './components/editor.vue'
export default {
  name: 'StudyAdminVue3JsUserinfo',
  components: { InfoCard, Editor },
  
};
</script>

<style lang="less" scoped>

</style>