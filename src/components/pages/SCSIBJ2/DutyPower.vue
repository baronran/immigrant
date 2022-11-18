<template>
  <cal title="执勤力量" type="1">
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>

    </template>
    <template v-slot:right>
      <div class="right-nav cursor-event" :class="{'on':typeStatus==idex}" @click="typeChange(idex)" v-for="(item,idex) in ['执勤警力','装备车辆']">{{item}}</div>

    </template>
    <template v-slot:content>
      <div class="echarts" ref="DutyPowerEcharts"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {getRandom} from "../../../utils/util.js";

const {proxy} = getCurrentInstance()
// 人员类别
const DutyPowerEcharts = ref()
// 人员国籍
const personnelNationality = ref()
// 人员目的
const personnelPurpose = ref()

let dateStatus = ref(0)
let typeStatus = ref(0)
//日期切换
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
  const charts = proxy.$echarts.init(DutyPowerEcharts.value)
  let option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    color: ['#0ce9ff', '#3195fd', '#eef7ff'],
    grid: {
      right: 150,
      top: 180,
      left: 120,
      bottom: 250
    },
    length: {},
    yAxis: {
      type: 'value',
      alignTicks: true,
      nameTextStyle: {
        fontSize: 43,
        color: '#fff',
        padding: [3, 4, 50, -16]
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: 43,
        color: '#fff',
        formatter: '{value}'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          dashOffset: 125
          
        }
      }
    },
    legend: {},
    xAxis: [
      {
        type: 'category',
        data: ['广西', '云南', '新疆', '西藏', '甘肃', '黑龙江', '内蒙古',"吉林","辽宁"],
        axisLabel:{
          fontSize: 39,
          interval: 0,
          position: 'bottom',
          offset: 40,
          color: '#fff'
        },
        axisLine: {
          // show: false
        },
        axisTick: {
          // show: false
        }
      },
      {
        type: 'category',
        position: 'bottom',
        offset: 110,
        data: [getRandom(0,100), getRandom(0,100), getRandom(0,100,),getRandom(0,100,), getRandom(0,100,), getRandom(0,100,), getRandom(0,100,), getRandom(0,100,), getRandom(0,100,),getRandom(0,100,)],
        axisLabel: {
          color: '#ed9d22',
          fontSize: 39,
          interval: 0,
          formatter: '同比 {value}%'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          // show: false
        }
      },
      {
        type: 'category',
        position: 'bottom',
        offset: 180,
        data: [getRandom(0,100), getRandom(0,100), getRandom(0,100,),getRandom(0,100,), getRandom(0,100,), getRandom(0,100,), getRandom(0,100,), getRandom(0,100,), getRandom(0,100,),getRandom(0,100,)],
        axisLabel: {
          color: '#15e3f5',
          fontSize: 39,
          interval: 0,
          formatter: '环比 {value}%'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          // show: false
        }
      },
    ],
    series: [
      {
        type: 'bar',
        stack: 'Ad',
        barWidth: 40,
        data: [getRandom(200,500), getRandom(200,500), getRandom(200,500),getRandom(200,500), getRandom(200,500), getRandom(200,500), getRandom(200,500), getRandom(200,500), getRandom(200,500)],
      },
      {
        type: 'bar',
        stack: 'Ad',
        data: [getRandom(200,500), getRandom(200,500), getRandom(200,500),getRandom(200,500), getRandom(200,500), getRandom(200,500), getRandom(200,500), getRandom(200,500), getRandom(200,500)],
      },
      {
        type: 'bar',
        stack: 'Ad',
        data: [getRandom(200,500), getRandom(200,500), getRandom(200,500),getRandom(200,500), getRandom(200,500), getRandom(200,500), getRandom(200,500), getRandom(200,500), getRandom(200,500)],
      },
    ]
  }
  charts.setOption(option)
}


onMounted(() => renderChart())
</script>

<style scoped lang="scss">

</style>
