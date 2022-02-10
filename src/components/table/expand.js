/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-24 16:55:30
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-27 23:13:54
 */
import { getCurrentInstance, toRaw, h, onMounted } from "vue"
// export default {
//   name: 'TableExpand',
//   functional: true,
//   props: {
//       row: Object,
//       render: Function,
//       index: Number,
//       column: {
//           type: Object,
//           default: null
//       }
//   },
//   setup(props, ctx) {
//     onMounted(() => {
//       // console.log('props :>> ', props.row);
//     })
//     const render = () => {
//       // console.log('props :>> ', props);
//       // let data = JSON.parse(JSON.stringify(h))
//       // console.log('h :>> ', h);
//       // console.log('ctx :>> ', data);
//         const params = {
//             row: props.row,
//             index: props.index
//         };
//         if (props.column) params.column = props.column;
//        return props.render(h, params)
        
//     }
//     return {render}
//   }

//   // render: (h, ctx) => {
//   //   console.log('ctx :>> ', ctx);
//   //   // const params = {
//   //   //   row: ctx.props.row,
//   //   //   index: ctx.props.index
//   //   // }
//   //   // if (ctx.props.column) params.column = ctx.props.column
//   //     return ctx.props.render(h, ctx.props.row)
//   //   }

//   // render: (h, ctx) => {
//   //   let data = JSON.parse(JSON.stringify(h))
//   //   console.log('h :>> ', h);
//   //   console.log('ctx :>> ', data);
//   //     const params = {
//   //         row: data.row,
//   //         index: data.index
//   //     };
//   //     if (data.column) params.column = data.column;
//   //     if(data.render) {return data.render(h, params)}
//   //     else return data
      
//   // }
// }
export default {
  name: 'TableExpand',
  // functional: true,
  props: {
      row: Object,
      render: Function,
      index: Number,
      column: {
          type: Object,
          default: null
      }
  },
  render: (ctx) => {
    // let data = JSON.parse(JSON.stringify(h))
      // const params = {
      //     row: ctx.props.row,
      //     index: ctx.props.index
      // };
      // if (ctx.props.column) params.column = ctx.props.column;
      return  this.render(this.row);
  }
};