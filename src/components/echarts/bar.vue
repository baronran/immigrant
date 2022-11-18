<template>
  <div class="echarts" ref="myChartsDom"></div>
</template>

<script setup>

import * as Echarts from 'echarts'
import {onBeforeUnmount, onMounted, ref, watch} from 'vue';

const myChartsDom = ref(null)
let props = defineProps({
  chartData: {
    type: Array,
    default: [
      {
        series: '离开',
        unitX: '',//(选填)
        unitY: '单位: 万(个)',//(选填)
        x: ['新疆', '内蒙', '广西', '西藏', '云南'],
        data: [685, 672, 500, 356, 356,],
        barWidth: 55,
        itemStyle: {
          borderRadius: 15
        }
      },
      {
        series: '进入',
        unitX: '',//(选填)
        unitY: '单位: 万(个)',//(选填)
        x: ['新疆', '内蒙', '广西', '西藏', '云南'],
        data: [594, 592, 655, 284, 284,],
        barWidth: 55,
        itemStyle: {
          borderRadius: 15
        }
      },

    ],
    required: false,
  },
  customOption: {},
  pictorialBar: {
    default: true,
  }
})
let chart = null


watch(() => props.chartData, (newVal, oldVal) => {
  // console.log('sssssssssss');
  if (props.chartData.length != 0) initChart()
}, {deep: true})

onMounted(() => {
  chart = Echarts.init(myChartsDom.value);
  console.log(props.chartData,'yyy');
  if (props.chartData.length != 0) initChart()
  //随着屏幕大小调节图表
  window.addEventListener("resize", () => {
    if (chart) chart.resize();
  });
})

function initChart() {

  let series = []
  series = props.chartData.map((v) => ({
    type: 'bar',
    name: v.series,
    label: {
      show: true,
      position: 'top',
      fontFamily: 'QTypeCond-Book',
      fontSize: 46,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    ...v,
  }))
  let maxArr = [];
  let maxnum = 0
  for (let i = 0; i < props.chartData.length; i++) {
    maxArr.push(Math.max(...props.chartData[i]['data']));
  }
  maxnum = Math.max(...maxArr)

  const array = new Array(props.chartData[0]['data'].length).fill(maxnum + maxnum * 0.1)
  let pictorialBar = {
    data: array,
    type: 'pictorialBar',
    symbol: "rect",
    // barGap: '-100%',
    barWidth: '60%',
    itemStyle: {
      color: "rgba(0,128,247,0.1)",
      // borderRadius: 15
    }
  }
  if (props.pictorialBar) series.push(pictorialBar)

  let option = {
    color: ['#0080f7', '#cfa244','#33cc0a', '#6959ff',],
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    legend: {
      // orient: 'vertical',
      top: '15%',
      left: 'right',
      itemGap: 70,
      itemHeight: 35,
      itemWidth: 50,
      textStyle: {
        fontSize: 45,
        fontFamily: 'ZiHun',
        color: '#ffffff',
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(127,181,248,0.2)",
          width: 2.5
        }
      },
      axisLabel: {
        fontSize: 43,
        color: '#eef7ff',
        fontFamily: 'DINPro-Regular',
      }
    },
    grid: {
      top: '15%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: props.chartData[0]['x'],
      axisLabel: {
        fontSize: 50,
        color: '#eef7ff',
        margin: 30,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(64,120,222,1)",
          width: 3,
        }
      },

    },
    series
  };

  // console.log(option,'optionsssss')
  // chart.setOption(option, true);
  let newOption = Object.assign(option, props.customOption)
  // console.log(newOption,'sssss');
  chart.setOption(newOption, true);


}

onBeforeUnmount(() => {
  if (chart) chart.dispose()
})


</script>

<style lang="scss" scoped>
.mycharts {
  /*width: calc(100% - 110px);*/
  width: 100%;
  height: 100%;
}

</style>
