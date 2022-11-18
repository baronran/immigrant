
// 想要使用必须先引入 defineStore；
import { defineStore } from 'pinia';

// 这里我们使用的是es6 的模块化规范进行导出的。

// defineStore 方法有两个参数，第一个参数是模块化名字（也就相当于身份证一样，不能重复）

// 第二个参数是选项，对象里面有三个属性，相比于vuex 少了一个 mutations.
export const commonStore = defineStore('common', {
  state(){  // 存放的就是模块的变量
    return {
      //当前选择的级别
      selectLevel: {},
      userInfo:{},
    }
  },
  // 开启持久化
  persist: {
    enabled: true, // 启用
    // storage 可选localStorage或sessionStorage
    // paths 给指定数据持久化
    strategies: [
      {
        key:'selectLevel',
        storage: sessionStorage,
        paths: ['selectLevel']
      },
      {
        key:'userInfo',
        storage: sessionStorage,
        paths: ['userInfo']
      }
    ]
  },
  getters:{ // 相当于vue里面的计算属性，可以缓存数据

  },
  actions:{ // 可以通过actions 方法，改变 state 里面的值。
    // setUserInfo(data){
    //   // console.log(data,'oooooooo');
    //   this.userInfo = data
    // },
    // setSelectLevel(data){
    //   this.selectLevel = data
    // }

  }

})
