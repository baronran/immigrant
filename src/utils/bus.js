import mitt from "mitt";
import {onBeforeUnmount} from "vue";
const emitters = mitt()
const emitter = (select)=>{
   onBeforeUnmount(() => {
     // if(!select)return
      // console.log('关闭');
     // emitters.off(select)  //关闭
     emitters.all.clear() //取消所有的mitt事件
  })

  return emitters
}


export default emitters
