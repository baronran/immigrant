<template>
  <cal title="出入境人员检查" bk="lg"  @open="open">
    <template v-slot:content>
      <div class="BorderPolice">
        <div class="left">
          <div class="item" v-for="(item,index) in leftData">
            <div class="item-top">
              <div class="flex flex-center align-center">
                <!-- <i class="iconfont icon-jingli"></i> -->
                <div>{{item.checkName}}</div>
                <i class="iconfont icon-youjiantou"></i>
              </div>
              <div>{{item.checkNumber}}</div>
            </div>
            <div class="item-bottom">
              <div class="t flex flex-center align-center">
                <div>同比</div>
                <i class="iconfont icon-shangsheng"></i>
                <div>{{item.percent}}</div>
              </div>
            </div>
          </div>
     
        </div>
        <div class="right">
          <div class="echarts" ref="BorderPoliceEcharts"></div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted,defineEmits} from "vue";
import apiJson from "../../../../public/apiJson/Inspection"
const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'checkInAndOut'})
const {proxy} = getCurrentInstance();
const BorderPoliceEcharts = ref();


let leftData = ref(apiJson.data.peopleType)
let data1 = [];
let data2 = [];
let datacity = [];

 apiJson.data.peopleNumber.map((index)=>{
    data1.push(index.outNumber)
    data2.push(index.inNumber)
    datacity.push(index.day)
}) 


const renderChart = () => {
  const myCharts = proxy.$echarts.init(BorderPoliceEcharts.value);
  
  let option = {
    color: ['#0ce9ff', '#3195fd', '#eef7ff'],
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    legend: {
      // top: '8%',
      bottom:0,
      itemWidth: 30,
      itemHeight: 30,
      itemGap: 250,
      textStyle: {
        fontSize: 56,
        color: '#fff',
        padding: [0, 0, 0, 20]
      }
    },
    grid: { //图表的位置
      top: '10%',
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    yAxis: [{
      type: 'value',
      axisLabel: {
        show: true,
        fontSize: 56,
        interval: 'auto',
        formatter: '{value}',
        textStyle: {
          fontSize:43,
          color:'#ffffff'
        },
      },
      splitLine:{
        show: true,
        lineStyle: {
          color: "rgba(127,181,248,0.4)",
        }
      },
      show: true

    }],
    xAxis: [{
      type: 'category',
      axisLabel: {
        interval: 0,
        show: true,
        splitNumber: 15,
        margin:30,
        textStyle: {
          fontSize:43,
          color:'#ffffff',
          fontFamily:'ZiHun',
        },
      },
      axisLine: {
        lineStyle: {
          color: "#4078de",
          width: 2.5
        }
      },

      data: datacity,
    }],
    series: [
      {
        name: '出境',
        type: 'bar',
        stack:'1',
        barWidth:60,
        data: data1,
        symbol: 'circle' ,
      },
      {
        name: '入境',
        type: 'bar',
        stack:'1',
        barWidth:60,
        data: data2,
        symbol: 'circle' ,
      },
      
    ]
  };
  myCharts.setOption(option);
  setTimeout(() => renderChart(), 5000)
};

onMounted(() => renderChart());
</script>

<style scoped lang="scss">
.BorderPolice {
  height: 100%;
  display: grid;
  grid-template-rows: 170px 1fr;
  grid-row-gap: 70px;

  .left {
    display: flex;
    /* justify-content: space-between;
    flex-direction: column; */
    justify-content: space-around;
    padding: 50px 0;
    box-sizing: border-box;

    .item {
      width: 747px;
      height: 170px;
      background-image: url("../../../assets/img/page/InAndOutFooting/5.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 30px 38px 0 38px;
      box-sizing: border-box;
      color: #cedaee;
      display: flex;
      font-family: ZiHun;
      justify-content: space-around;
      flex-direction: column;
      display: inline-block;
      &-top {
        font-size: 52px;
        display: flex;
        justify-content: space-between;
        font-family: ZiHun;

        .icon-jingli {
          font-size: 48px;
          margin: auto 20px;
        }

        .icon-youjiantou {
          color: #358ad9;
          margin: auto 20px;
        }
      }

      &-bottom {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 36px;
        margin-top: 35px;
        margin-left: 5px;
        > div {
          margin-right: 50px;
        }

        .iconfont {
          font-size: 36px;
          margin: auto 0;
        }
      }
    }
  }

  .right {

    .echarts {
      display: flex;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
