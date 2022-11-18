<template>
  <div class="EventSum">
    <z-title title="案事件统计" @click="open"></z-title>
    <div class="legend">
      <div class="legend-left">
        <div class="flex flex-center align-center on">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
    </div>
    <div class="EventSum-Echarts" ref="EventSumEcharts"></div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const EventSumEcharts = ref()

const renderChart = () => {
  const echarts = proxy.$echarts.init(EventSumEcharts.value)
  let option = {
    color: ['#0080f7', '#F4A7A8', '#009E95', '#fff', '#FFEA8F', '#757575'],
    title: {
      text: '180',
      left: 'center',
      top: 'center',
      textStyle: {
        fontSize: 78,
        color: '#fff',
        fontFamily: 'QTYPECOND-BOOK'
      },
      subtext: '件',
      subtextStyle: {
        fontSize: 58,
        fontFamily: 'ZiHun'
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['65%', '70%'],
        hoverAnimation: false,
        avoidLabelOverlap: false,
        itemStyle: {
          color: '#091D2C',
        },
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [100],
      },
      {
        type: 'pie',
        radius: ['0%', '30%'],
        hoverAnimation: false,
        avoidLabelOverlap: false,
        itemStyle: {
          color: '#091D2C',
        },
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [100],
      },
      {
        type: 'pie',
        radius: ['40%', '60%'],
        itemStyle: {
          borderColor: '#091524',
          borderWidth: 20
        },
        label: {
          alignTo: 'edge',
          formatter: [
            '{name|{b}} {time|{c}}{unit|本}',
            '{label|同比}{rate|{d}%} {label|环比}{rate| {@chainRatio}% } ',
          ].join('\n'),
          minMargin: 5,
          edgeDistance: 50,
          lineHeight: 50,
          rich: {
            label: {
              fontSize: 40,
              color: '#b09469'
            },
            time: {
              fontSize: 50,
              color: '#fff',
              marginLeft: 50
            },
            unit: {
              fontSize: 30,
              color: '#fff',
            },
            name: {
              fontSize: 40,
              color: '#2494e3',
              margin: [0, 50]
            },
            rate: {
              fontSize: 40,
              color: '#b09469'
            }
          }
        },
        labelLine: {
          length: 25,
          length2: 0,
          maxSurfaceAngle: 1200,
          lineStyle: {
            width: 5
          }
        },
        data: [
          {name: '普通护照总数', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '往来港澳通行证', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '内地居民赴港澳签注', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '出入境通行证数', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '往来台湾通行证', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '内地居民赴台湾签注', value: 23092, rate: 13.2, chainRatio: 12}
        ],
      },
    ]
  }
  echarts.setOption(option)
}

const open = () => {
  console.log('1')
}

onMounted(() => setTimeout(() => setTimeout(() => renderChart(), 1000), 1000))
</script>

<style scoped lang="scss">
.EventSum {
  width: 2065px;
  height: 1181px;
  display: grid;
  overflow: hidden;
  grid-template-rows: 147px 200px 1fr;

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
