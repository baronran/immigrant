<template>
  <div class="TheNumberOfLeadingPoints">
    <z-title title="前出点位数" @click="open"></z-title>
    <div class="TheNumberOfLeadingPoints-content">
      <div ref="TheNumberOfLeadingPointsEcharts"></div>
      <div class="TheNumberOfLeadingPoints-content-right">
        <div class="item">
          <div class="flag"></div>
          <div>警务室数</div>
          <div>900</div>
        </div>
        <div class="item">
          <div class="flag"></div>
          <div>警务室数</div>
          <div>900</div>
        </div>
        <div class="item">
          <div class="flag"></div>
          <div>警务室数</div>
          <div>900</div>
        </div>
        <div class="item">
          <div class="flag"></div>
          <div>警务室数</div>
          <div>900</div>
        </div>
        <div class="item">
          <div class="flag"></div>
          <div>警务室数</div>
          <div>900</div>
        </div>
        <div class="item">
          <div class="flag"></div>
          <div>警务室数</div>
          <div>900</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const TheNumberOfLeadingPointsEcharts = ref()

const renderChart = () => {
  const charts = proxy.$echarts.init(TheNumberOfLeadingPointsEcharts.value)
  const gaugeData = [
    {
      value: 20,
      name: 'Perfect',
    },
  ];
  const startAngle = -270
  const endAngle = 0
  const option = {
    series: [
      {
        type: 'gauge',
        startAngle,
        endAngle,
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
        // detail: {
        //   width: 50,
        //   height: 14,
        //   fontSize: 14,
        //   color: 'auto',
        //   borderColor: 'auto',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   // formatter: '{value}%'
        // }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 370,
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
        // detail: {
        //   width: 50,
        //   height: 14,
        //   fontSize: 14,
        //   color: 'auto',
        //   borderColor: 'auto',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   // formatter: '{value}%'
        // }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 320,
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
        // detail: {
        //   width: 50,
        //   height: 14,
        //   fontSize: 14,
        //   color: 'auto',
        //   borderColor: 'auto',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   // formatter: '{value}%'
        // }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 270,
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
            color: 'rgb(229,238,255)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(229,238,255,.3)']],
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
        // detail: {
        //   width: 50,
        //   height: 14,
        //   fontSize: 14,
        //   color: 'auto',
        //   borderColor: 'auto',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   // formatter: '{value}%'
        // }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 220,
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
            color: 'rgb(104,120,152)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(104,120,152,.3)']],
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
        // detail: {
        //   width: 50,
        //   height: 14,
        //   fontSize: 14,
        //   color: 'auto',
        //   borderColor: 'auto',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   // formatter: '{value}%'
        // }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 170,
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
            color: 'rgb(53,86,150)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(53,86,150,.3)']],
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
        // detail: {
        //   width: 50,
        //   height: 14,
        //   fontSize: 14,
        //   color: 'auto',
        //   borderColor: 'auto',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   // formatter: '{value}%'
        // }
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
.TheNumberOfLeadingPoints {
  width: 2065px;
  height: 1363px;
  display: grid;
  grid-template-rows: 147px  1fr;

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
        display: grid;
        grid-template-columns: 50px repeat(2, auto);
        grid-column-gap: 30px;
        font-size: 56px;
        font-family: QTYPECOND-BOOK;
        border-bottom: 1px solid rgba(255, 255, 255, .2);

        &::before, &::after {
          width: 10px;
          height: 2px;
          content: '';
          display: block;
          position: absolute;
          background-color: #eeeeee;
        }

        &::before {
          margin-top: 550px;
          margin-left: 20px;
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
    }
  }
}

</style>
