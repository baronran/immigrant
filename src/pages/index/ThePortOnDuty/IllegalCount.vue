<template :key="keys">
  <cal title="违法违规交通工具统计">
    <template v-slot:content>
      <div ref="illegalCountEcharts" class="IllegalTrendEcharts"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const illegalCountEcharts = ref()
const keys = ref(0)

function andom(min, max, count) {
  let list = []
  new Array(count).forEach(i => list.push(Math.floor(Math.random() * (max - min)) + min))
  return list
}

const renderChart = () => {
  const myCharts = proxy.$echarts.init(illegalCountEcharts.value)
  let option = {
    color: ['#ffffff', '#0064ff', '#ffb125'],
    grid: {
      right: 150,
      top: 250,
      left: 120,
      bottom: 50
    },
    legend: {
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
          formatter: '{value}月'
        },
        axisLine: {
          color: '#4078de'
        },
        // prettier-ignore
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '伤亡数',
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
        axisTick: {
          show: true,
          length: 15,
          inside: true,
          lineStyle: {
            width: 2,
            color: '#fff'
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            dashOffset: 125,
            color: 'rgba(127, 181, 248, .4)'
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
        emphasis: {
          focus: 'series'
        },
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 255, 255,1)'
            },
            {
              offset: 1,
              color: 'rgba(255, 255, 255,0)'
            }
          ])
        },
        data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
      },
      {
        name: '事件类型2',
        type: 'line',
        stack: 'Total',
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0,255,241,1)'
            },
            {
              offset: 1,
              color: 'rgba(0,100,255,0)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
      },
      {
        name: '事件类型3',
        type: 'line',
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255,97,37,1)'
            },
            {
              offset: 1,
              color: 'rgba(255,97,37,0)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
      },
      {
        name: '其他',
        type: 'line',
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(141,186,255,1)'
            },
            {
              offset: 1,
              color: 'rgba(141,186,255,0)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
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
