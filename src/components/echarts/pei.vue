<template>
  <div class="mycharts" ref="myChartsDom"></div>
</template>

<script setup>

import * as Echarts from 'echarts'
import {onBeforeUnmount, onMounted, ref, watch} from 'vue';
import {hexToRgba} from "@/utils/util";

const myChartsDom = ref(null)
let props = defineProps({
  chartData: {
    default:[
      {
        name: '1号楼',
        value: 384
      }, {
        name: '2号楼',
        value: 840
      }, {
        name: '3号楼',
        value: 512
      }, {
        name: '4号楼',
        value: 123
      }
    ]
  },
  chartOption: {}
})

let chart = null
// console.log(props,'props.data')
watch(() => props.data, (newVal, oldVal) => {

  initChart()
}, {deep: true})


onMounted(() => {
  chart = Echarts.init(myChartsDom.value);
  initChart()

  //随着屏幕大小调节图表
  window.addEventListener("resize", () => {
    if (chart) chart.resize();
  });

})
onBeforeUnmount(() => {
  if (chart) chart.dispose()
})

function initChart() {
  let data = [];
  if (!props.chartData)  return;
  data = props.chartData
  let color = props.chartOption?.color || ['#fa8542', '#34a8f3', '#34dfe0', '#95b0b0', '#41ec99', '#f7ee92'];
  let baseData = [];
  let baseData1 = [];
  let title = '总数';
  let unit = 'kWh';
  let num = 0
  num = data.reduce(function (prev, cur, index, arr) {
    cur = Number(cur.value)
    return prev + cur;
  }, 0)
  for (let i = 0; i < data.length; i++) {

    baseData.push({
          value: data[i].value,
          name: data[i].name,
          itemStyle: {
            color: color[i],
            borderColor: color[i],
          }
        },
        {
          value: num * 0.02,
          itemStyle: {
            color: 'transparent',
            borderColor: 'transparent',
          }
        }
    );
    baseData1.push({
          value: data[i].value,
          name: data[i].name,
          itemStyle: {
            color: hexToRgba(color[i], 0.3),
            borderColor: hexToRgba(color[i], 0.3),
          }
        },
        {
          value: num * 0.02,
          itemStyle: {
            color: 'transparent',
            borderColor: 'transparent',
          }
        }
    );
  }

  let option = {
    title: {
      text: '{a|' + num + '}\n{b|' + title + '}\n{c|' + unit + '}',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 14,
            color: '#ffff',
            fontFamily: 'QTypeCond-Book',
          },
          b: {
            fontSize: 14,
            color: '#ffd45f',
            padding: [20, 0, 4, 0]
          },
          c: {
            fontSize: 14,
            color: 'rgba(255,255,255,0.4)',
            // padding: [0, 0]
          }
        }
      }
    },
    grid: { //调整图表上下左右位置
      top: '10%',
      left: '3%',
      right: '8%',
      bottom: '11%',
      containLabel: true
    },
    legend: {
      // selectedMode: true, // 取消图例上的点击事件
      // type: 'plain',
      // orient: 'vertical',
      left: 'right',
      top: 'middle',
      // align: 'left',
      itemGap: 10,
      itemWidth: 10, // 设置宽度
      itemHeight: 10, // 设置高度
      // symbolKeepAspect: false,
      formatter: function (name) {
        let findData = data.find((v) => name == v.name)
        // console.log(findData,'name');
        return '{name| ' + name + '}  ' + '{value| ' + findData.value + '}'
      },
      textStyle: {
        color: '#000',
        rich: {
          name: {
            verticalAlign: 'right',
            align: 'left',
            width: 90,
            fontSize: 14,
            color: '#b7e4ec',
            fontFamily: 'MicrosoftYaHeiLight',
          },
          value: {
            align: 'left',
            width: 50,
            fontSize: 14,
            color: 'rgba(92,164,177,0.7)',
            fontFamily: 'QTypeCond-Book'
          }
        }
      },
    },
    series: [
      {
        type: 'pie',
        color: color,
        radius: [(props.chartOption?.radius[1] - 12) + '%', props.chartOption?.radius[1] + '%'],
        center: ['50%', '50%'],
        tooltip: {
          show: false
        },
        label: {
          alignTo: 'edge',
          formatter: (params) => {
            if (params.name !== '') {
              return '{name|' + params.name + '}\n{value|' + params.value + '}'
            } else {
              return '';
            }
          },
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 20,
          rich: {
            name: {
              fontSize: 14,
              // align: 'left',
              // padding: [0, 0, 14, 0],
              color: '#2696a7'
            },
            value: {
              fontSize: 18,
              color: '#ffffff',
              fontFamily: 'QTypeCond-Book'
            }
          }
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80,
          // color: '#00ffff',
          lineStyle: {
            width: 1
          }
        },
        labelLayout: function (params) {

          const isLeft = params.labelRect.x < chart.getWidth() / 2;
          const points = params.labelLinePoints;
          // Update the end point.
          if (!points) return
          points[2][0] = isLeft
              ? params.labelRect.x
              : params.labelRect.x + params.labelRect.width;
          return {
            labelLinePoints: points
          };
        },
        data: baseData
      },
      {
        type: 'pie',
        color: color,
        radius: [(props.chartOption?.radius[0]) + '%', (props.chartOption?.radius[1] - 12) + '%'],
        center: ['50%', '50%'],
        tooltip: {
          show: false
        },
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: baseData1
      },
    ]
  };


  if (!props.chartOption) return

  if (props.chartOption.label) {
    option.series[0]['label'] = props.chartOption.label
  }
  if (props.chartOption.roseType) {
    option.series[1]['roseType'] = props.chartOption.roseType
  }
  if (props.chartOption.clockWise) {
    option.series[1]['clockWise'] = props.chartOption.clockWise
    option.series[0] = props.chartOption.clockWise
  }
  if (props.chartOption.center) {
    option.series[0]['center'] = props.chartOption.center
    option.series[1]['center'] = props.chartOption.center
    // option.title['x'] = props.chartOption.center[0]
    // option.title['y'] = props.chartOption.center[1]
  }

  if (props.chartOption.labelLine) {
    option.series[0]['labelLine'] = props.chartOption.labelLine
  }

  let newOption = Object.assign(option, props.chartOption)

  // console.log(newOption, 'newOptionnewOption');
  // if (props.chartOption.legend) {
  //   newOption.legend = props.chartOption.legend
  // }
  // console.log(newOption.legend);
  chart.setOption(newOption);


}


</script>

<style lang="scss" scoped>
.mycharts {
  /*width: calc(100% - 110px);*/
  width: 100%;
  height: 100%;
}


</style>
