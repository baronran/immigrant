<template>
  <cal title="总体管控情况" >
    <template v-slot:content>
      <div class="contentBox">
        <div class="flex flex-between bosxs" v-for="(item,index) in situationData">
          <img :src="getUrl(index)" alt="">
          <div class="listBox flex flex-column flex-between">
            <div class="titleLis">{{item.name}}</div>
            <div class="listCont" v-for="(item2,index2) in item.contentList">
              <span><i class="jiaohao">+</i> {{item2.name}} <i class="jiaohao">+</i></span>
              <div class="outBox">
                <span class="line"></span>
                <div :class="index2/2 == 0 ?'withinBoxc':'withinBoxBlue'" class="withinBox"></div>
                <img src="@/assets/img/page/SCSIBJ2/yuan.png" alt="">
              </div>
              <div class="wordList">
                <span>{{item2.value}}</span><span class="unit">起</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {axiosPost} from "../../../apis/service.js";

const {proxy} = getCurrentInstance()

let dateStatus = ref(0)
let typeStatus = ref(0)

let situationData = ref([
  {
    name:'110接处警',
    contentList:[
      {
        name:'报警',
        value:'35'
      },
      {
        name:'处警',
        value:'20'
      }
    ]
  },
  {
    name:'刑事案件',
    contentList:[
      {
        name:'立案',
        value:'12'
      },
      {
        name:'破案',
        value:'6'
      }
    ]
  },
  {
    name:'治安案件',
    contentList:[
      {
        name:'受理',
        value:'51'
      },
      {
        name:'查处',
        value:'20'
      }
    ]
  }
])
// 数据
function getData(){

}
let getUrl = function(index){
  return new URL('../../../assets/img/page/SCSIBJ2/listBox'+ index +'.png', import.meta.url).href
}
</script>

<style scoped lang="scss">


.timeButt{
  display: flex;
  //justify-content: flex-start;
  > div {
    width: 173px;
    height: 79px;
    background-color: rgba(117, 195, 255, 0.3);
    border-radius: 10px;
    border: solid 4px rgba(135, 203, 255, 0.7);
    margin-right: 20px;
    font-family: zihun59hao-chuangcuhei;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: -4px;
    color: #ffffff;
    opacity: 0.5;
    cursor: pointer;
  }
}

p{
  margin: 0;
  padding: 0;
}

.contentBox{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .bosxs{
    padding:0 20px;
    box-sizing: border-box;
  }

  .listBox{

    .titleLis{
      font-family: YouSheBiaoTiHei;
      font-size: 70px;
      font-weight: bold;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #87d2f8;
    }

    .listCont{
      font-family: MicrosoftYaHei;
      font-size: 65px;
      font-weight: normal;
      font-style: italic;
      font-stretch: normal;
      letter-spacing: -3px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1660px;
      .line{
        width: 5px;
        height: 55px;
        background-image: linear-gradient(90deg,
            #0e3152 0%,
            #1c91e2 50%,
            #2a84ed 100%);
        border-radius: 2px 2px 2px 2px;
      }

      .outBox{
        width: 1170px;
        height: 31px;
        background-color: #0e3152;
        border-radius: 5px 5px 5px 5px;
        display: flex;
        align-items: center;
        margin-right:20px;
        .withinBox{
          width: 70%;
          height: 100%;

          border-radius: 1px 15px 16px 1px;
        }
        >img{
          position: relative;
          left: -25px;
          height: 60px;
        }


        .withinBoxBlue{
          background-image: linear-gradient(90deg,
              rgba(14, 49, 82, 0.2) 0%,
              rgba(28, 145, 226, 0.81) 75%,
              rgba(35, 139, 232, 0.91) 88%,
              #2985ec 98%,
              #2a84ed 100%);
        }
        .withinBoxc{
          background-image: linear-gradient(90deg,
              rgba(14, 49, 82, 0.2) 0%,
              rgba(93, 128, 165, 0.61) 50%,
              #a8ccf5 98%,
              #abcff8 100%);
        }

      }

      .wordList{
        span:nth-of-type(1){
          width: 90px;
          display: inline-flex;
          margin-right: 20px;
        }

        .unit{
          width: 60px;
          display: inline-flex;
          font-family: MicrosoftYaHei;
          font-size: 44px;
          font-weight: bold;
          font-stretch: normal;
          letter-spacing: -2px;
          color: rgba(194, 223, 239, 0.6);
        }
      }
    }
  }

  .jiaohao{
    margin: 0 10px;
    font-size: 45px;
  }

}



</style>
