<template>
  <div class="GatQZ">
    <z-title title="辖区受灾情况" @click="open"></z-title>
    <div class="legend">
      <div class="legend-right">
        <div class="flex flex-center align-center on">港澳签注</div>
      </div>
      <div class="legend-left">
        <div class="flex flex-center align-center on">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
    </div>
    <div class="GatQZ-content" ref="GAQZEcharts"></div>
    <div class="legend">
      <div class="legend-right">
        <div class="flex flex-center align-center on">台湾签注</div>
      </div>
      <div class="legend-left">
        <div class="flex flex-center align-center on">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
    </div>
    <div class="TWQZ-footer" ref="TWQZEcharts"></div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const GAQZEcharts = ref()
const TWQZEcharts = ref()

const renderChart = () => {
  const GAQZ = proxy.$echarts.init(GAQZEcharts.value)
  const TWQZ = proxy.$echarts.init(TWQZEcharts.value)
  GAQZ.setOption({
    color: ['#ffffff', '#0064ff', '#ffb125'],
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
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
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
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0,100,255,1)'
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
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255,177,37,1)'
            },
            {
              offset: 1,
              color: 'rgba(255,177,37,0)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
      },
    ]
  })

  TWQZ.setOption({
    color: ['#ffffff', '#0064ff', '#ffb125'],
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
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
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
        name: 'Union Ads',
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
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
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
    ]
  })
}

const open = () => {
  console.log('1')
}

onMounted(() => setTimeout(() => renderChart(), 1000))
</script>

<style scoped lang="scss">
.GatQZ {
  width: 2065px;
  height: 1163px;
  display: grid;
  grid-template-rows: 147px 300px 830px 300px 830px;

  .legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;

    .on {
      opacity: 1;
    }

    &-left {
      display: flex;
      justify-content: flex-start;

      > div {
        width: 173px;
        height: 79px;
        background-color: rgba(117, 195, 255, .2);
        border-radius: 10px;
        border: solid 4px #87cbff;
        margin-right: 20px;
        opacity: .7;
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
    }

    &-footer {
      display: grid;
      grid-template-columns: 137px 1fr;

      .left {
        font-size: 49px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;

        > div {
          display: flex;
          align-items: center;
          width: 137px;
          height: 158px;
          background-color: rgba(84, 143, 255, .4);
          border-radius: 10px;
        }
      }

      .right {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;

        > div {
          height: 208px;
        }
      }
    }
  }
}

</style>
