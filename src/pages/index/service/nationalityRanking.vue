<template>
  <cal title="出入境人员国籍排名" type="1" @open="open">
    <template v-slot:left>
      <div class="left-nav cursor-event on">本日</div>
      <div class="left-nav cursor-event">本月</div>
      <div class="left-nav cursor-event">本年</div>
    </template>
    <template v-slot:right>
      <div class="right-nav cursor-event on">入境 (2323)</div>
      <div class="right-nav cursor-event">出境 (2323)</div>
    </template>
    <template v-slot:content>
      <div class="echarts" ref="personnelCategory"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, defineEmits} from 'vue'

const {proxy} = getCurrentInstance()
const personnelCategory = ref()
const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'nationalityRanking'})
const renderChart = () => {
  const myCharts = proxy.$echarts.init(personnelCategory.value)

  let option = {
    width: '100%',
    grid: {
      top: 190,
    },
    legend: {
      itemWidth: 80,
      itemHeight: 40,
      textStyle: {
        fontSize: 49,
        color: '#fff'
      },
      top: 10
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
        name: 'Evaporation',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          fontSize: 43,
          color: '#fff',
          formatter: '{value} ml'
        },
        splitLine: {
          lineStyle: {
            type: 'dashed'
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
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
      },
      {
        name: '比重',
        type: 'line',
        yAxisIndex: 1,
        itemStyle: {
          color: '#d8a43b',
        },
        lineStyle: {
          width: 5
        },
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };
  myCharts.setOption(option)
  setTimeout(() => renderChart(), 5000)
}

onMounted(() => renderChart())
</script>

<style scoped lang="scss"></style>
