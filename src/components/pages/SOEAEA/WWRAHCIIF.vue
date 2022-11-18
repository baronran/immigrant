<template>
  <!--  <div class="WWRAHCIIF">-->
  <!--    <z-title title="立案处理违法违规外国人事件" @click="open"></z-title>-->
  <!--    <div class="legend">-->
  <!--      <div class="legend-right"></div>-->
  <!--      <div class="legend-left">-->
  <!--        <div class="flex flex-center align-center on">本日</div>-->
  <!--        <div class="flex flex-center align-center">本月</div>-->
  <!--        <div class="flex flex-center align-center">本年</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="WWRAHCIIF-content">-->
  <!--      <div ref="WWRAHCIIFEcharts"></div>-->
  <!--      <div class="WWRAHCIIF-content-right">-->
  <!--        <div class="item">-->
  <!--          <div class="top">-->
  <!--            <div class="flag">-->
  <!--              <div></div>-->
  <!--            </div>-->
  <!--            <div>警务室数</div>-->
  <!--            <div>900</div>-->
  <!--          </div>-->
  <!--          <div class="bar"></div>-->
  <!--          <div class="bottom flex flex-around">-->
  <!--            <div class="t flex flex-center">-->
  <!--              <div>同比</div>-->
  <!--              <i class="iconfont icon-shangsheng"></i>-->
  <!--              <div>12%</div>-->
  <!--            </div>-->
  <!--            <div class="h flex flex-center">-->
  <!--              <div>环比</div>-->
  <!--              <i class="iconfont icon-shangsheng"></i>-->
  <!--              <div>12%</div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="item">-->
  <!--          <div class="top">-->
  <!--            <div class="flag">-->
  <!--              <div></div>-->
  <!--            </div>-->
  <!--            <div>警务室数</div>-->
  <!--            <div>900</div>-->
  <!--          </div>-->
  <!--          <div class="bar"></div>-->
  <!--          <div class="bottom flex flex-around">-->
  <!--            <div class="t flex flex-center">-->
  <!--              <div>同比</div>-->
  <!--              <i class="iconfont icon-shangsheng"></i>-->
  <!--              <div>12%</div>-->
  <!--            </div>-->
  <!--            <div class="h flex flex-center">-->
  <!--              <div>环比</div>-->
  <!--              <i class="iconfont icon-shangsheng"></i>-->
  <!--              <div>12%</div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="item">-->
  <!--          <div class="top">-->
  <!--            <div class="flag">-->
  <!--              <div></div>-->
  <!--            </div>-->
  <!--            <div>警务室数</div>-->
  <!--            <div>900</div>-->
  <!--          </div>-->
  <!--          <div class="bar"></div>-->
  <!--          <div class="bottom flex flex-around">-->
  <!--            <div class="t flex flex-center">-->
  <!--              <div>同比</div>-->
  <!--              <i class="iconfont icon-shangsheng"></i>-->
  <!--              <div>12%</div>-->
  <!--            </div>-->
  <!--            <div class="h flex flex-center">-->
  <!--              <div>环比</div>-->
  <!--              <i class="iconfont icon-shangsheng"></i>-->
  <!--              <div>12%</div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <cal title="立案处理违法违规外国人事件" type="1">
    <template v-slot:right></template>
    <template v-slot:content>
      <div class="content">
        <div ref="WWRAHCIIFEcharts"></div>
        <div class="content-right">
          <div class="item">
            <div class="top">
              <div class="flag">
                <div></div>
              </div>
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
              <div class="flag">
                <div></div>
              </div>
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
              <div class="flag">
                <div></div>
              </div>
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
    </template>
  </cal>
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
            color: '#ccb17c',
            borderWidth: 5,
            borderColor: '#ccb17c'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(204,177,124,0.3)']],
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
            color: '#e5eeff',
            borderWidth: 5,
            borderColor: '#e5eeff'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(229,238,255,0.3)']],
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
}

const open = () => {
  console.log('1')
}

onMounted(() => renderChart())
</script>

<style scoped lang="scss">
.content {
  height: 100%;
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
        align-items: center;
      }

      .bar {
        margin: 20px 0;
        background-color: rgba(228, 235, 243, .3);
        display: flex;
        justify-content: space-between;

        &::before {
          width: 40px;
          height: 5px;
          content: '';
          display: block;
          background-color: #fff;
        }

        &::after {
          width: 40px;
          height: 5px;
          content: '';
          display: block;
          margin-left: 188px;
          //margin-top: 20px;
          background-color: #fff;
        }
      }


      &:nth-of-type(1) .flag {
        border: 7px #0d84ff solid;

        > div {
          background-color: #0d84ff;
        }
      }

      &:nth-of-type(2) .flag {
        border: 7px #ccb17c solid;

        > div {
          background-color: #ccb17c;
        }
      }

      &:nth-of-type(3) .flag {
        border: 7px #e5eeff solid;

        > div {
          background-color: #e5eeff;
        }
      }

      &:nth-of-type(4) .flag {
        border: 7px #e5eeff solid;

        > div {
          background-color: #e5eeff;
        }
      }

      &:nth-of-type(5) .flag {
        border: 7px #687898 solid;

        > div {
          background-color: #687898;
        }
      }

      &:nth-of-type(6) .flag {
        border: 7px #355696 solid;

        > div {
          background-color: #355696;
        }

      }
    }

    //.flag {
    //  width: 50px;
    //  height: 50px;
    //  margin: auto 0;
    //  border-radius: 50%;
    //  background-color: #4b75ff;
    //}

    .bottom {
      font-size: 40px;

      .iconfont {
        font-size: 55px;
      }
    }
  }
}

.flag {
  width: 50px;
  height: 50px;
  //border: 7px red solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 33px;
    height: 33px;
    margin: auto 0;
    border-radius: 50%;
    background-color: #4b75ff;
  }
}
</style>
