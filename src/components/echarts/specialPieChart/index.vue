<template>
  <div class="specialPieChart">
    <slot name="imgBj" ><img src="./bjPei.png" alt="" :style="{left:chartOption.center[0],top:chartOption.center[1]}"></slot>
    <slot name="chart" ><peiChart :data=chartData :chartOption="chartOption"></peiChart></slot>
    <div class="total" :style="{left:chartOption.center[0],top:chartOption.center[1]}" v-show="totalShow">
      <p>{{ total }}</p>
      <p>{{totalWord}}</p>
    </div>
    <div class="legendBox">
      <div class="legend">
        <div class="legendDiv" v-for="(item,idex) in chartData " @click="changeLegend(item)">
          <div class="top">
            <div class="topH"><span><i :style="{background:chartOption.color[idex]}"></i><i
                :style="{background:chartOption.color[idex]}"></i></span><span
                 >{{ item.name }}</span></div>
            <span class="word">{{ item.value }}</span>
            <span v-show="percentage "  class="word">{{total?((item.value / total) * 100).toFixed(2):'0.00'}}%</span>
          </div>
          <img v-show="legendImgShowa" src="./line.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, watch,} from 'vue'

import peiChart from "@/components/echarts/pei.vue"

let props = defineProps({
  chartOption: {
    type:Object,
    default:{
      title: {
        show: false,
      },
      legend: {
        show: false,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      radius: ['60', '80'],
      center: ['28%', '50%'],
      color: ['#34a8f3', '#43ced3', '#41ec99', '#f7ee92', '#fa8542'],
    },
    required:false
  },
  chartData: {
    type:Array,
    default:[{
      name: '中国公民',
      value: 10
    },
      {
      name: '越南',
      value: 6
    }, {
      name: '老挝',
      value: 5
    }, {
      name: '缅甸',
      value: 28
    }, {
      name: '朝鲜',
      value: 1
    },{
      name: '其它',
      value: 4
    }],
    required:false
  },
  totalShow:{
    type:Boolean,
    default:true,
    required:false
  },
  legendImgShowa:{
    type:Boolean,
    default:false,
    required:false
  },
  percentage:{
    type:Boolean,
    default:false,
    required:false
  },
  totalWord:{
    type:String,
    default:'总数',
    required:false
  }
})

const total = computed(()=>{
  // 该函数的返回值就是计算属性的值
  // console.log(props.chartData,'hff');
  return props.chartData.reduce(function(prev, cur, index, arr) {
    cur = Number(cur.value)
    return prev + cur;
  },0)
})
// console.log(props,'jjjj');
watch(() => props.chartData, (newVal, oldVal) => {

}, {deep: true})
const emit = defineEmits(["changeLegend"])
function changeLegend(item){
  emit('changeLegend',item)
}
</script>


<style lang="scss" scoped>

.specialPieChart {
  position: relative;

  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .total {
    width: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;

    p:nth-of-type(1) {
      font-family: QTypeCond-Book;
      font-size: 76px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 5px;
    }

    p:nth-of-type(2) {
      font-family: AdobeHeitiStd-Regular;
      font-size: 56px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 2px;
      color: rgba(142, 165, 187, 0.8);
    }

  }

  .legendBox {
    position: absolute;
    //right: 4%;
    top: 0;
    height: 100%;
    font-family: QTypeCond-Book;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;

    left: 50%;
    top: 75%;
    height: 24%;
    width: 80%;
    transform: translate(-50%,0);
    .legend {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      //flex-direction: column;
      justify-content: space-evenly;
      flex-wrap: wrap;
      .legendDiv {
        width: 330px;
        height: 25px;
        display: flex;
        //flex-direction: column;
        justify-content: space-between;
        margin: 6px 0;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: QTypeCond-Book;
          font-size: 60px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #d8e7f8;
          width: 100%;
          .word{
            margin: 0 3px;

          }
          .topH {
            display: flex;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;

            span:nth-of-type(1) {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0 15px 0 0;
              justify-content: center;
              i {
                display: inline-block;
                width: 15px;
                height: 15px;
                transform: rotateZ(45deg) skew(5deg, 3deg);
                background: blue;
              }
            }
            span:nth-of-type(2) {
              font-family: FZY3JW--GB1-0;
              font-size: 42px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: -2px;
              color: rgba(216, 231, 248, 0.6);
            }
          }
        }
      }

    }
  }

}


</style>
