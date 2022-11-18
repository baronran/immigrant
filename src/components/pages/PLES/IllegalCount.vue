<template :key="keys">
  <cal title="违法违规交通工具统计">
    <template v-slot:content>
      <div ref="illegalCountEcharts" class="IllegalTrendEcharts"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import apiJson from "../../../../public/apiJson/IllegalCount"

const {proxy} = getCurrentInstance()
const illegalCountEcharts = ref()
const keys = ref(0)

function andom(min, max, count) {
  let list = []
  new Array(count).forEach(i => list.push(Math.floor(Math.random() * (max - min)) + min))
  return list
}


let eventType1 = ref([]), eventType2 = ref([]), eventType3 = ref([]),eventOther = ref([]),  time = ref([])

  eventType1.value = apiJson.data[0].y
  eventType2.value = apiJson.data[1].y
  eventType3.value = apiJson.data[2].y
  eventOther.value = apiJson.data[3].y
  time.value = apiJson.data[0].x



const renderChart = () => {
  const myCharts = proxy.$echarts.init(illegalCountEcharts.value)
  let option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    color: ['#ffffff', '#0064ff','#ffb125','#8dbaff'],
    grid: {
      top: '25%',
      left: '1%',
      right: '1%',
      bottom: '1%',
      containLabel: true
    },
    legend: {
      top: '2%',
      left: 0,
      textStyle: {
        fontSize: 56,
        color: '#fff'
      },
      itemWidth: 100,
      itemHeight: 10,
      itemGap: 50,
      icon: 'roundRect'
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 43,
          color: '#fff',
          margin:30,
          formatter: '{value}月'
        },
        axisLine: {
          lineStyle: {
            color: "#4078de",
            width: 2.5
          }
        },
        // prettier-ignore
        data: time.value
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '伤亡数',
        alignTicks: true,

        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          fontSize: 43,
          color: '#fff',
          formatter: '{value}'
        },
        axisTick: {
          show: true,
          length: 15,
          inside: true,
          lineStyle: {
            width: 2,
            color: '#fff'
          }
        },
        splitLine:{
          show: true,
          lineStyle: {
            color: "rgba(127,181,248,0.4)",
          }
        }

      },
      {
        type: 'value',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#7fb5f8',
            // opacity: .2
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 43,
        }
      }
    ],
    series: [
      //
      {
        name: '事件类型1',
        type: 'line',
        // emphasis: {
        //   focus: 'series'
        // },
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 255, 255,0.4)'
            },
            {
              offset: 0.5,
              color: 'rgba(255, 255, 255,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(255, 255, 255,0)'
            }
          ])
        },
        data: eventType1.value
      },
      {
        name: '事件类型2',
        type: 'line',
        stack: 'Total',
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0,100,255,0.4)'
            },
            {
              offset: 0.5,
              color: 'rgba(0,100,255,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(0,100,255,0)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: eventType2.value
      },
      {
        name: '事件类型3',
        type: 'line',
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255,177,37,0.4)'
            },
            {
              offset: 0.5,
              color: 'rgba(255,177,37,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(255,97,37,0)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: eventType3.value
      },
      {
        name: '其他',
        type: 'line',
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(141,186,255,0.4)'
            },
            {
              offset: 0.5,
              color: 'rgba(141,186,255,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(141,186,255,0)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: eventOther.value
      },
    ]
  }
  myCharts.setOption(option)
}

// setInterval(() => keys.value++, 5000)
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
