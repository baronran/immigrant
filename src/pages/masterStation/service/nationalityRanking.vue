<template>
  <div class="nationalityRanking">
    <z-title title="出入境人员国籍排名" @click="open"></z-title>
    <div class="legend">
      <div class="legend-left">
        <div class="flex flex-center align-center on">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
      <div class="legend-right">
        <div class="flex flex-center align-center on">全国</div>
        <div class="flex flex-center align-center">TOP口岸</div>
      </div>
    </div>
    <div class="nationalityRanking-echarts" ref="personnelCategory"></div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, defineEmits} from 'vue'

const {proxy} = getCurrentInstance()
const emit = defineEmits(['open'])
const personnelCategory = ref()

const renderChart = () => {
  const myCharts = proxy.$echarts.init(personnelCategory.value)

  let option = {
    width: '100%',
    grid: {
      // right: '10%',
      // top: 220,
      // left: 120,
      // bottom: 50
    },
    legend: {
      itemWidth: 80,
      itemHeight: 40,
      textStyle: {
        fontSize: 49,
        color: '#fff'
      },
      top: 20
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

const open = () => emit('open', 'nationalityRanking')

onMounted(() => renderChart())
</script>

<style scoped lang="scss">
.nationalityRanking {
  display: grid;
  grid-template-rows: 147px 100px 1fr;
  grid-row-gap: 52px;

  .legend {
    display: flex;
    justify-content: space-between;
    font-size: 50px;
    width: 100%;

    &-left {
      display: flex;
      justify-content: flex-start;

      > div {
        width: 173px;
        height: 79px;
        background-color: rgba(117, 195, 255, .2);;
        border-radius: 10px;
        border: solid 4px #87cbff;
        margin-right: 20px;
        opacity: .7;
      }

      .on {
        opacity: 1;
      }
    }

    &-right {
      display: flex;

      > div {
        margin-left: 20px;
        padding: 0 15px;
        box-sizing: border-box;
        height: 78px;
        background-color: rgba(42, 92, 255, .5);
        border-radius: 10px;
        border: solid 4px #4b75ff;
        opacity: .7;
      }

      .on {
        opacity: 1;
      }
    }
  }

  &-echarts {
    width: 100%;
  }
}

</style>
