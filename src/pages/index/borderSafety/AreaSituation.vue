<template>
  <div class="AreaSituation">
    <z-title title="辖区受灾情况" @click="open"></z-title>
    <div class="AreaSituation-legend">
      <zSelect :list="[]" @open="openPopup"></zSelect>
      <zSelect :list="[]" @open="openPopup"></zSelect>
    </div>
    <div class="AreaSituation-content" ref="AreaSituationEcharts"></div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const AreaSituationEcharts = ref()

const renderChart = () => {
  const charts = proxy.$echarts.init(AreaSituationEcharts.value)
  let option = {
    grid: {
      right: 150,
      top: 120,
      left: 120,
      bottom: 50
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 43,
          color: '#fff'
        },
        axisLine: {
          color: '#4078de'
        },
        // prettier-ignore
        data: ['日本', '美国', '德国', '法国', '英国', '意大利', '西班牙', '老挝', '荷兰', '印度']
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
      {
        name: '人数',
        type: 'bar',
        // yAxisIndex: 1,
        itemStyle: {
          borderRadius: [15, 15, 0, 0],
          color: '#afc7e9'
        },
        label: {
          show: true,
          position: 'top',
          color: '#d4e0f1',
          fontSize: 46,
          fontFamily: 'QTYPECOND-BOOK'
        },
        barWidth: 30,
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
    ]
  };
  charts.setOption(option)
}

const open = () => {
  console.log('1')
}

onMounted(() => setTimeout(() => renderChart(), 1000))
</script>

<style scoped lang="scss">
.AreaSituation {
  width: 2065px;
  height: 1363px;
  display: grid;
  grid-template-rows: 147px 200px 1fr;

  &-legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;
  }

  &-content {
    width: 100%;
  }
}

</style>
