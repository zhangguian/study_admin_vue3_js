<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-25 17:36:06
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-25 18:19:24
-->
<template>
  {{render(h)}}
</template>

<script>
import {onMounted,h} from 'vue'
export default {
  name: 'TableExpand',
  functional: true,
  props: {
      row: Object,
      render: Function,
      index: Number,
      column: {
          type: Object,
          default: null
      }
  },
  setup(props, ctx) {
    onMounted(() => {
      console.log('props :>> ', props);
      console.log('render :>> ', render);
    })
    const render = () => {
      console.log('props :>> ', props);
      // let data = JSON.parse(JSON.stringify(h))
      // console.log('h :>> ', h);
      // console.log('ctx :>> ', data);
      //   const params = {
      //       row: data.row,
      //       index: data.index
      //   };
      //   if (data.column) params.column = data.column;
       return props.render(h, props.row)
        
    }
    return {render}
  }
};
</script>

<style lang="less" scoped>

</style>