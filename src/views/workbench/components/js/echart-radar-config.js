/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-21 14:11:34
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-21 14:36:14
 */
export default {
  option: {
    title: {
      text: '',
      x: 'center'
    },
    legend: {
      itemHeight: 1,
      bottom: '5'
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '引用', max: 10.0 },
        { name: '口碑', max: 10.0 },
        { name: '热度', max: 10.0 },
        { name: '贡献', max: 10.0 },
        { name: '产量', max: 10.0 },
      ]
    },
    series: [
      {
        type: 'radar',
        data: [],
        label: {
          position: "top",
          show: true,
          distance: 5
        }
      }
    ]
  }
}