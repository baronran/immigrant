<template :key="keys">
  <cal title="出入境人员国籍排名" type="1">
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>

    </template>
    <template v-slot:right>
      <div class="right-nav cursor-event" :class="{'on':typeStatus==idex}" @click="typeChange(idex)" v-for="(item,idex) in ['全国','TOP口岸']">{{item}}</div>

    </template>
    <template v-slot:content>
      <div ref="echarts" class="IllegalTrendEcharts"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {getRandom} from "../../../utils/util.js";

const {proxy} = getCurrentInstance()
const echarts = ref()
const keys = ref(0)

let dateStatus = ref(0)
let typeStatus = ref(0)

//日期切换
function dateChange(index){
  dateStatus.value = index
  renderChart()
}
// 国家 类型切换
function typeChange(index){
  typeStatus.value = index
  renderChart()
}

const renderChart = () => {
  const myCharts = proxy.$echarts.init(echarts.value)
  let option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    color: ["#cce0ff","#ffae33", "#FF8A8A"],
    grid: {
      right: 150,
      top: 190,
      left: 120,
    },
    legend: {
      top: 10,
      itemWidth: 50,
      // itemHeight: 50,
      itemGap: 50,
      // icon: 'roundRect',
      textStyle: {
        fontSize: 56,
        color: '#fff'
      },
    },
    xAxis: [
      {
        type: "category",
        data: ['日本', '美国', '德国', '法国', '英国', '意大利', '西班牙', '老挝', '荷兰', '印度'],
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          margin:30,
          textStyle: {
            fontSize:43,
            color:'#ffffff',
            fontFamily:'ZiHun',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
          },
        },
        axisLine: {
          lineStyle: {
            color: "#4078de",
            width: 2.5
          }
        },
      },
    ],
    yAxis: [
      {
        min: 0,
        max: 300,
        // interval: 5,
        type: "value",
        position: 'left',
        axisLabel: {
          show: true,
          textStyle: {
            color: "#cbd9ef", //更改坐标轴文字颜色
            fontSize: 43, //更改坐标轴文字大小
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
          },
        },
      },
      {
        min: 0,
        max: 100,
        // interval: 5,
        type: "value",
        position: 'right',
        axisLabel: {
          show: true,
          textStyle: {
            color: "#cbd9ef", //更改坐标轴文字颜色
            fontSize: 43, //更改坐标轴文字大小
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
          },
        },
      },
    ],
    series: [
      {
        name: "人数",
        type: "bar",
        barWidth: 30,
        itemStyle: {
          borderRadius: 15
        },
        yAxisIndex: 0,
        label: {
          show: true,
          position: 'top',
          color: '#d4e0f1',
          fontSize: 46,
          fontFamily: 'QTYPECOND-BOOK'
        },
        data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,),getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)],
      },
      {
        name: "比重",
        barWidth: 30,
        type: "line",
        lineStyle: {
          color: '#ffae33'
        },

        yAxisIndex: 1,
        data: [getRandom(1,100,), getRandom(1,100,), getRandom(1,100,),getRandom(1,100,), getRandom(1,100,), getRandom(1,100,), getRandom(1,100,), getRandom(1,100,), getRandom(1,100,), getRandom(1,100,)],
      },
    ],
  }
  myCharts.setOption(option)
}

onMounted(() => renderChart())
</script>

<style scoped lang="scss">

.IllegalTrendEcharts {
  flex: 1;
  display: block;
  height: 100%;
  width: 100%;
}

.nav {
  margin-left: 20px;
  width: 219px;
  height: 78px;
  background-color: rgba(42, 92, 255, .5);
  border-radius: 10px;
  border: solid 4px #4b75ff;
  opacity: .7;
  font-size: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
