<template :key="keys">
  <cal title="交通工具国籍排名" type="1">
    <template v-slot:left>
      <div class="nav">本日</div>
      <div class="nav">本月</div>
      <div class="nav">本年</div>
    </template>
    <template v-slot:right>
      <div class="nav">入境 (2323)</div>
      <div class="nav">出境 (2323)</div>
    </template>
    <template v-slot:content>
      <div ref="charts" class="IllegalTrendEcharts"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const charts = ref()
const keys = ref(0)

const renderChart = () => {
  const echarts = proxy.$echarts
  const myCharts = proxy.$echarts.init(charts.value)
  let option = {
    grid: {
      right: 150,
      top: 190,
      left: 120,
      // bottom: 120
    },
    color: ["#cce0ff", "#ffae33", "#FF8A8A"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    legend: {
      top: 10,
      itemWidth: 100,
      itemHeight: 10,
      itemGap: 50,
      icon: 'roundRect',
      textStyle: {
        fontSize: 56,
        color: '#fff'
      },
    },
    xAxis: [
      {
        type: "category",
        data: [
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
        ],
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          fontSize: 56
        }
      },
    ],
    yAxis: [
      {
        axisLabel: {
          show: true,
          textStyle: {
            color: "#c3dbff", //更改坐标轴文字颜色
            fontSize: 52, //更改坐标轴文字大小
          },
        },
      },
      {
        type: "value",
      },
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "人数",
        type: "bar",
        showBackground: true,
        barWidth: 80,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 1, color: 'rgba(56,170,207,0)'},
            {offset: 0, color: '#38aacf'}
          ])
        },
        data: [
          100, 95, 85, 75, 65, 55, 45, 35, 25, 15
        ],
      },
      // rgb(56,170,207)
      {
        name: "比重",
        barWidth: 30,
        type: "line",
        data: [
          50, 35, 65, 55, 75, 25, 19, 35, 10, 15
        ],
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
