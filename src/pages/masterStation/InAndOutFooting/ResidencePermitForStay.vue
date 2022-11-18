<template>
  <div class="card">
    <z-title title="遣返遣送人员统计" @click="open"></z-title>
    <div class="legend">
      <div class="legend-right"></div>
      <div class="legend-left">
        <div class="flex flex-center align-center on">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
    </div>
    <div ref="ResidencePermitForStayEcharts"></div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import image from '../../../assets/img/page/InAndOutFooting/3.png'

const {proxy} = getCurrentInstance()
const ResidencePermitForStayEcharts = ref()

const renderChart = () => {
  const echarts = proxy.$echarts.init(ResidencePermitForStayEcharts.value)
  let data = [
    {name: '普通护照总数', value: 23092, rate: 13.2, chainRatio: 12},
    {name: '往来港澳通行证', value: 23092, rate: 13.2, chainRatio: 12},
    {name: '内地居民赴港澳签注', value: 23092, rate: 13.2, chainRatio: 12},
    {name: '出入境通行证数', value: 23092, rate: 13.2, chainRatio: 12},
  ]
  let option = {
    color: ['#0080f7', '#d1a65b', '#fff', '#757575'],
    title: [
      {
        text: '证件总数',
        left: 'center',
        top: 300,
        textStyle: {
          fontSize: 66,
          color: '#cfe2f5',
          fontFamily: 'QTYPECOND-BOOK'
        }
      },
      {
        text: '180',
        left: 'center',
        top: 400,
        textStyle: {
          fontSize: 78,
          color: '#fff',
          fontFamily: 'QTYPECOND-BOOK'
        },
        subtext: '件',
        subtextStyle: {
          fontSize: 58,
          color: '#cfe2f5',
          fontFamily: 'ZiHun'
        }
      }
    ],
    graphic: {
      elements: [{
        type: 'image',
        style: {
          image,
          width: 900,
          height: 740
        },
        left: 'center',
        top: 'middle'
      }]
    },
    series: [
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
          edgeDistance: 90,
          lineHeight: 80,
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
          length: 105,
          length2: 150,
          maxSurfaceAngle: 1200,
          lineStyle: {
            width: 5,
            cap: 'round',
          }
        },
        labelLayout: function (params) {

          const isLeft = params.labelRect.x < echarts.getWidth() / 2;
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
        data,
      },
      // 值内
      {
        type: 'pie',
        radius: ['60%', '70%'],
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,0.6)',
          },
        },
        label: {
          show: false
        },
        z: 100,
        data,
      },
    ]
  }
  echarts.setOption(option)
}

const open = () => {
  console.log('1')
}

onMounted(() => setTimeout(() => renderChart(), 1000))
</script>

<style scoped lang="scss">
.card {
  //width: 2065px;
  height: 1163px;
  display: grid;
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
        //width: 219px;
        height: 78px;
        padding: 0 15px;
        box-sizing: border-box;
        white-space: nowrap;
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

  &-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .top {
      width: 100%;
      height: 152px;
      background-image: linear-gradient(180deg, rgba(110, 184, 237, 0.3) 0%, rgba(103, 180, 236, 0.15) 7%, rgba(57, 159, 232, 0.06) 50%, rgba(27, 144, 229, 0) 78%, rgba(3, 133, 227, 0) 100%);
      font-size: 76px;
      display: flex;
      justify-content: space-between;
      font-family: QTYPECOND-BOOK;
      align-items: center;

      &-left {
        font-family: ZiHun;
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .item {
        height: 295px;
        display: grid;
        margin: 20px 0;
        grid-template-columns: 290px 1fr;
        grid-column-gap: 102px;

        &-left {
          img {
            width: 290px;
          }
        }

        &-right {
          align-items: center;
          display: grid;
          grid-template-rows: 102px 1fr;

          .title {
            width: 100%;
            height: 102px;
            background-image: linear-gradient(-90deg, rgba(3, 133, 227, 0.3) 0%, rgba(3, 133, 227, 0) 100%);
            font-size: 56px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 80px 0 80px;
            box-sizing: border-box;

            .name {
              font-family: ZiHun;
            }

            .value {
              font-family: QTYPECOND-BOOK;
            }
          }

          .text {
            height: 100%;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            font-size: 40px;
            font-family: ZiHun;
            padding: 0 80px 0 80px;
            box-sizing: border-box;

            .iconfont {
              margin-top: -5px;
              font-size: 40px;
            }
          }
        }
      }
    }
  }
}

</style>
