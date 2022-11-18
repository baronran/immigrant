<template :key="keys">
  <cal title="违法违规人员趋势" type="1">
    <template v-slot:right>
      <div class="nav">本日</div>
      <div class="nav">本月</div>
      <div class="nav">本年</div>
    </template>
    <template v-slot:content>
      <div ref="IllegalTrendEcharts" class="IllegalTrendEcharts"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const IllegalTrendEcharts = ref()
const keys = ref(0)

function andom(min, max, count) {
  let list = []
  new Array(count).forEach(i => list.push(Math.floor(Math.random() * (max - min)) + min))
  return list
}

const renderChart = () => {
  const myCharts = proxy.$echarts.init(IllegalTrendEcharts.value)
  let option = {
    color: ["#b9d3fc", "#0064ff", "#66799a"],
    grid: {
      left: 120,
      right: 100
    },
    legend: {
      data: ["美国", "美国", "美国"],
    },
    xAxis: {
      // type: "value",
      // min: 1,
      // max: 12,
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      axisLabel: {
        interval: 0,
        formatter: '{value}月',
        fontSize: 52, //更改坐标轴文字大小
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        textStyle: {
          color: "#c3dbff", //更改坐标轴文字颜色
          fontSize: 52, //更改坐标轴文字大小
        },
      },
    },
    series: [
      {
        name: "逃避边防检查",
        type: "bar",
        barWidth: 30,
        data: [100, 95, 85, 75, 65, 55, 45, 35, 25, 15],
      },
      {
        name: "非法证件",
        barWidth: 30,
        type: "bar",
        data: [50, 35, 65, 55, 75, 25, 19, 35, 10, 15],
      },
      {
        name: "其他",
        type: "bar",
        barWidth: 30,
        data: [100, 95, 85, 75, 65, 55, 45, 35, 25, 15],
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
