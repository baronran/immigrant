<template>
  <div class="DutyPower">
    <z-title title="出入境人员检查" @click="open"></z-title>
    <div class="legend">
      <div class="legend-left">
        <div class="flex flex-center align-center on">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
      <div class="legend-right">
        <div class="flex flex-center align-center on">执勤警力</div>
        <div class="flex flex-center align-center">装备车辆</div>
      </div>
    </div>
    <div class="DutyPower-echarts" ref="DutyPowerEcharts"></div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
// 人员类别
const DutyPowerEcharts = ref()
// 人员国籍
const personnelNationality = ref()
// 人员目的
const personnelPurpose = ref()

const renderChart = () => {
  const charts = proxy.$echarts.init(DutyPowerEcharts.value)
  let option = {
    color: ['#0ce9ff', '#3195fd', '#eef7ff'],
    grid: {
      right: 150,
      top: 120,
      left: 120,
      bottom: 250
    },
    yAxis: {
      type: 'value',
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
      splitLine: {
        lineStyle: {
          type: 'dashed',
          dashOffset: 125
        }
      }
    },
    legend: {},
    xAxis: {
      type: 'category',
      data: [
        {name: '支队1', t: 10, h: 10},
        {name: '支队2', t: 10, h: 10},
        {name: '支队3', t: 10, h: 10},
        {name: '支队4', t: 10, h: 10},
        {name: '支队5', t: 10, h: 10},
        {name: '支队6', t: 10, h: 10},
        {name: '支队7', t: 10, h: 10},
      ],
      axisLabel: {
        fontSize: 39,
        interval: 0,
        formatter: [
          '{n| { @name } }',
          '{t| 同比 10% }',
          '{h| 环比 10% }',
        ].join('\n'),
        rich: {
          n: {
            fontSize: 35,
            height: 90
          },
          t: {
            fontSize: 30,
            color: '#ed9d22',
            height: 50
          },
          h: {
            fontSize: 30,
            color: '#15e3f5',
            height: 50
          }
        }
      },
      axisLine: {
        // show: false
      },
      axisTick: {
        // show: false
      }
    },
    series: [
      {
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        barWidth: 40,
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
    ]
  }
  charts.setOption(option)
  setTimeout(() => renderChart(), 5000)
}

const open = () => {
  console.log('1')
}

onMounted(() => setTimeout(() => setTimeout(() => renderChart(), 1000), 1000))
</script>

<style scoped lang="scss">
.DutyPower {
  width: 2065px;
  height: 1363px;
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
