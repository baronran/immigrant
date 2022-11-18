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
        series: '出境',
        unitX: '',//(选填)
        unitY: '单位: 万人',//(选填)
        x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
        data: [685, 672, 500,  655, 284, 284,356,284, 655, 284, 284, 356,],
        itemStyle: {
          color: 'rgba(0,126,247,1)',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
              },
              {
                offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
        }
      },
      {
        series: '入境',
        unitX: '',//(选填)
        unitY: '单位: 万人',//(选填)
        x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
        data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
        itemStyle: {
          color: 'rgba(216,164,59,1)',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
              },
              {
                offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
        },
      },
      {
        series: '总数',
        unitX: '',//(选填)
        unitY: '单位: 万人',//(选填)
        x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
        data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
        itemStyle: {
          color: 'rgba(194,241,234,1)',
        },
        areaStyle: {
          color: {
          type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(194,241,234,0.6)' // 0% 处的颜色
            },
            { offset: 0.5, color: 'rgba(194,241,235,0.1)' // 0% 处的颜色
            },
            {
              offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },
        }
      },
    ],
    required: false,
  },
  customOption: {},
  pictorialBar: {
    default: false,
  }
})
let chart = null


watch(() => props.chartData, (newVal, oldVal) => {
  // console.log('sssssssssss');
  if (props.chartData.length != 0) initChart()
}, {deep: true})

onMounted(() => {
  chart = Echarts.init(myChartsDom.value);
  // console.log(props.chartData,'yyy');
  if (props.chartData.length != 0) initChart()
  //随着屏幕大小调节图表
  window.addEventListener("resize", () => {
    if (chart) chart.resize();
  });
})

function initChart() {

  let series = []
  series = props.chartData.map((v) => ({
    type: 'line',
    name: v.series,
    // label: {
    //   show: true,
    //   position: 'top',
    //   fontFamily: 'QTypeCond-Book',
    //   fontSize: 46,
    //   fontWeight: 'bold',
    //   color: '#ffffff',
    // },
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
    // color: ['#0080f7', '#cfa244','#33cc0a', '#6959ff',],
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    legend: {
      // orient: 'vertical',
      top: '0%',
      left: series.length>3?'40%':'45%',
      icon: "roundRect",
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
      // name: props.chartData[0]['unitY'],
      // // nameGap: 54,
      // nameTextStyle: {
      //   align: 'right',
      //   fontSize: 54,
      //   color: '#ffffff',
      // },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(127,181,248,0.2)",
          width: 2.5
        }
      },
      axisLabel: {
        fontSize: 55,
        color: '#cbd9ef',
        fontFamily: 'DINPro-Regular',
      }
    },
    grid: {
      top: '25%',
      left: '1%',
      right: '1%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: props.chartData[0]['x'],
      axisLabel: {
        fontSize: 50,
        color: '#adc7e4',
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
