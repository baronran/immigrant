import { onUnmounted } from "vue"

export function TimerHooks(RefreshTime=5000){

    let timeClear = null      //定时器清除

    onUnmounted(() => {
      clearTimeout(timeClear)
    })

    return function ApiRefresh(callback){
      callback()
      timeClear = setTimeout(()=>{
        ApiRefresh(callback)
      },RefreshTime)
    }
}

