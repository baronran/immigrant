<template>
  <div class="checkInAndOut">
    <z-title title="出入境证件签发"></z-title>
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
    <div ref="personnelCategory"></div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const personnelCategory = ref()

const renderChart = () => {
  const myCharts = proxy.$echarts.init(personnelCategory.value)

  myCharts.setOption({
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
        radius: ['95%', '90%'],
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
        radius: ['0%', '50%'],
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
        radius: ['60%', '80%'],
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
        // labelLayout: function (params) {
        //   const isLeft = params.labelRect.x < myCharts.getWidth() / 2;
        //   const points = params.labelLinePoints;
        //   // Update the end point.
        //   points[2][0] = isLeft
        //       ? params.labelRect.x
        //       : params.labelRect.x + params.labelRect.width;
        //   return {
        //     labelLinePoints: points
        //   };
        // },
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
  })
  setTimeout(() => renderChart(), 5000)
}

onMounted(() => renderChart())
</script>

<style scoped lang="scss">
.checkInAndOut {
  display: grid;
  grid-template-rows: 147px 205px 1fr;
  grid-row-gap: 52px;

  .legend {
    display: flex;
    justify-content: space-between;
    font-size: 50px;

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
}

</style>
