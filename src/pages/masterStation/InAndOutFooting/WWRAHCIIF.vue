<template>
  <div class="WWRAHCIIF">
    <z-title title="立案处理违法违规外国人事件" @click="open"></z-title>
    <div class="legend">
      <div class="legend-right"></div>
      <div class="legend-left">
        <div class="flex flex-center align-center on">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
    </div>
    <div class="WWRAHCIIF-content">
      <div ref="WWRAHCIIFEcharts"></div>
      <div class="WWRAHCIIF-content-right">
        <div class="item">
          <div class="top">
            <div class="flag"></div>
            <div>警务室数</div>
            <div>900</div>
          </div>
          <div class="bar"></div>
          <div class="bottom flex flex-around">
            <div class="t flex flex-center">
              <div>同比</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>12%</div>
            </div>
            <div class="h flex flex-center">
              <div>环比</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>12%</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="flag"></div>
            <div>警务室数</div>
            <div>900</div>
          </div>
          <div class="bar"></div>
          <div class="bottom flex flex-around">
            <div class="t flex flex-center">
              <div>同比</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>12%</div>
            </div>
            <div class="h flex flex-center">
              <div>环比</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>12%</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="flag"></div>
            <div>警务室数</div>
            <div>900</div>
          </div>
          <div class="bar"></div>
          <div class="bottom flex flex-around">
            <div class="t flex flex-center">
              <div>同比</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>12%</div>
            </div>
            <div class="h flex flex-center">
              <div>环比</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>12%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const WWRAHCIIFEcharts = ref()

const renderChart = () => {
  const charts = proxy.$echarts.init(WWRAHCIIFEcharts.value)
  const gaugeData = [
    {
      value: 20,
      name: 'Perfect',
    },
  ];
  const startAngle = -270
  const endAngle = 0
  const option = {
    title: [
      {
        text: '98800件',
        textStyle: {
          fontSize: 76,
          color: '#fff'
        },
        left: 800,
        top: 120
      },
      {
        text: '总事件数',
        textStyle: {
          fontSize: 66,
          color: '#cfe2f5'
        },
        left: 800,
        top: 270
      }
    ],
    series: [
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 400,
        clockwise: false,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'rgb(13,132,255)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(13,132,255,.3)']],
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 120
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData,
        title: {
          show: false,
          fontSize: 34
        },
        detail: {
          show: false
          //   width: 50,
          //   height: 14,
          //   fontSize: 14,
          //   color: 'auto',
          //   borderColor: 'auto',
          //   borderRadius: 20,
          //   borderWidth: 1,
          //   // formatter: '{value}%'
        }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 350,
        clockwise: false,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'rgba(121,221,236)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(121,221,236,.3)']],
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 120
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData,
        title: {
          show: false,
          fontSize: 34
        },
        detail: {
          show: false
          //   width: 50,
          //   height: 14,
          //   fontSize: 14,
          //   color: 'auto',
          //   borderColor: 'auto',
          //   borderRadius: 20,
          //   borderWidth: 1,
          //   // formatter: '{value}%'
        }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 300,
        clockwise: false,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'rgb(204,177,124)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(204,177,124,.3)']],
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 120
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData,
        title: {
          show: false,
          fontSize: 34
        },
        detail: {
          show: false
          //   width: 50,
          //   height: 14,
          //   fontSize: 14,
          //   color: 'auto',
          //   borderColor: 'auto',
          //   borderRadius: 20,
          //   borderWidth: 1,
          //   // formatter: '{value}%'
        }
      },
    ]
  };
  charts.setOption(option)
  setTimeout(() => renderChart(), 5000)
}

const open = () => {
  console.log('1')
}

onMounted(() => setTimeout(() => setTimeout(() => renderChart(), 1000), 1000))
</script>

<style scoped lang="scss">
.WWRAHCIIF {
  width: 2065px;
  height: 1363px;
  display: grid;
  grid-template-rows: 147px 200px 1fr;

  .legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;
    margin: auto 0;

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
    display: grid;
    grid-template-columns:1fr 700px;

    &-right {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: 50px 0;
      box-sizing: border-box;
      //align-items: center;
      align-content: center;

      .item {


        .top {
          display: grid;
          grid-template-columns: 50px repeat(2, auto);
          grid-column-gap: 30px;
          font-size: 56px;
          font-family: QTYPECOND-BOOK;
        }

        .bar {
          margin: 20px 0;
          background-color: rgba(228, 235, 243, .3);
          display: flex;
          justify-content: space-between;

          &::before {
            width: 10px;
            height: 2px;
            content: '';
            display: block;
            background-color: #fff;
          }

          &::after {
            width: 10px;
            height: 2px;
            content: '';
            display: block;
            margin-left: 188px;
            //margin-top: 20px;
            background-color: #fff;
          }
        }


        &:nth-of-type(1) .flag {
          background-color: #0d84ff;
        }

        &:nth-of-type(2) .flag {
          background-color: #71e2f3;
        }

        &:nth-of-type(3) .flag {
          background-color: #ccb17c;
        }

        &:nth-of-type(4) .flag {
          background-color: #e5eeff;
        }

        &:nth-of-type(5) .flag {
          background-color: #687898;
        }

        &:nth-of-type(6) .flag {
          background-color: #355696;
        }
      }

      .flag {
        width: 50px;
        height: 50px;
        margin: auto 0;
        border-radius: 50%;
        background-color: #4b75ff;
      }

      .bottom {
        font-size: 40px;

        .iconfont {
          font-size: 55px;
        }
      }
    }
  }
}

</style>
