<template>
  <div class="chartsBox">
    <div class="chartsList">
      <div v-for="(item,idex) in chartData ">
        <div class="flex fieldName flex-between">
          <div class="name" :style="{color:chartOption.color[idex]}">{{ item.name }}</div>
          <div><span class="num">{{ item.value }}</span><span class="unit">间</span></div>
        </div>
        <div class="flex fieldVale"><span>同比 <i class="iconfont icon-shangsheng"></i> 11.3%</span> <span>环比 <i
            class="iconfont icon-jiantouxiajiang"></i> 11.3%</span></div>
      </div>
    </div>
    <div class="chartsDom">
      <slot name="imgBj"><img src="@/assets/img/page/common/bjPei.png" alt=""></slot>
      <div class="mycharts" ref="myChartsDom"></div>
    </div>
  </div>
</template>

<script setup>

import * as Echarts from 'echarts'
import {onBeforeUnmount, onMounted, ref, watch} from 'vue';
import {hexToRgba} from "@/utils/util";

const myChartsDom = ref(null)
let props = defineProps({
  chartData: {
    default: [
      {
        name: '警务室数',
        value: 53
      },
      {
        name: '警务站数',
        value: 32
      },
      {
        name: '联合执勤点',
        value: 65
      },
      {
        name: '临时卡点数',
        value: 32
      },
      {
        name: '护边员执勤点',
        value: 23
      },
      {
        name: '其他',
        value: 19
      },
    ]
  },
  chartOption: {
    title: {
      show: true,
    },
    legend: {
      show: false,
    },
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
    radius: ['60', '80'],
    center: ['28%', '50%'],
    color: ['#1097ff', '#e6aeae', '#229b94', '#ffffff', '#ffeb9b', '#757575'],
  }
})

let chart = null
// console.log(props,'props.data')
watch(() => props.chartData, (newVal, oldVal) => {

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
  console.log(props.chartData, 'iiiiiii');
  if (props.chartData) data = props.chartData
  let color = props.chartOption?.color || ['#1097ff', '#e6aeae', '#229b94', '#ffffff', '#ffeb9b', '#757575'];
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

    baseData.push(
        {
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
    baseData1.push(
        {
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
      text: '{a|' + num + '}',
      // text: '{a|' + num + '}\n{b|' + title + '}\n{c|' + unit + '}',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 78,
            color: 'rgba(255,255,255,0.66)',
            fontFamily: 'QTypeCond-Book',
          },
          b: {
            fontSize: 60,
            color: 'rgba(255,255,255,0.66)',
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
          show: false,
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

.chartsBox {
  //display: grid;
  //grid-template-columns: 1.5fr 2fr  1.5fr;
  width: 100%;
  position: relative;

  .mycharts {
    /*width: calc(100% - 110px);*/
    width: 100%;
    height: 100%;
  }

  .chartsList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-wrap: wrap;
    position: absolute;
    width: 100%;
    align-content: space-evenly;
    height: 100%;

    > div:nth-of-type(2n) {
      display: flex;
      /* justify-content: flex-end; */
      align-items: flex-end;
      flex-direction: column;
    }

    .fieldName, .fieldVale {
      width: 60%;
    }

    .fieldName {
      border-bottom: solid 2px rgba(209, 166, 91, 0.6);

      .name {
        font-family: ZiHun;
        font-size: 47px;
        font-weight: normal;
        font-stretch: normal;
        color: #2494e3;
        display: flex;
        align-items: center;
      }

      .num {
        font-family: QTypeCond-Book;
        font-size: 70px;
        font-weight: normal;
        letter-spacing: 1px;
        color: #ffffff;
      }

      .unit {
        font-family: ZiHun;
        font-size: 43px;
        font-weight: normal;
        letter-spacing: 1px;
        color: #ffffff;
      }
    }

    .fieldVale {
      font-family: zihun59hao-chuangcuhei;
      font-size: 38px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: -3px;
      color: #b09469;
      display: flex;
      justify-content: space-between;

      span:nth-of-type(1) {
        color: #b09469;
      }

      span:nth-of-type(2) {
        color: #39b6d5;
      }

      .iconfont {
        font-size: 48px;
      }

    }
  }


  .chartsDom {
    width: 100%;
    height: 100%;

    > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 84%;
    }
  }


}

</style>
