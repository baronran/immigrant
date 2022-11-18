<template>
  <div class="checkInAndOut">
    <z-title title="出入境人员流量趋势"></z-title>
    <div class="legend">
      <div class="legend-left">
        <div class="flex flex-center align-center on">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
      <div class="legend-right">
        <div class="flex flex-center align-center on">入境 (2323)</div>
        <div class="flex flex-center align-center">出境 (2323)</div>
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
    color: ['#e2a730', '#0080f7', '#009E95', '#fff', '#FFEA8F', '#757575'],
    // width: '100%',
    grid:{
      top: '15%',
      left: '2%',
      right: '5%',
      bottom: '5%',
      containLabel: true, //包括文本，居中
    },
    legend: {
      itemWidth: 80,
      itemHeight: 40,
      itemGap: 50,
      textStyle: {
        fontSize: 49,
        color: '#fff'
      },
      top: 0,
      right:'0%'
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 46,
          color: '#fff'
        },
        axisLine: {
          color: '#4078de'
        },
        // prettier-ignore
        data: ['1月','2月','3月','4月' ,'5月' ,'6月' ,'7月' ,'8月' ,'9月' ,'10月' ,'11月','12月']
      }
    ],
    yAxis: [
      {
        type: 'value',
        // position: 'left',
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
          fontSize: 46,
        }
      }
    ],
    series: [
      {
        name: '中国公民',
        type: 'bar',
        stack: "总量",
        // itemStyle: {
        //   borderRadius: [15, 15, 0, 0],
        //   color: '#afc7e9'
        // },
        label: {
          // show: true,
          // position: 'top',
          // color: '#d4e0f1',
          // fontSize: 46,
          // fontFamily: 'QTYPECOND-BOOK'
        },
        barWidth: 30,
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
      },
      {
        name: '外国人',
        type: 'bar',
        stack: "总量",
        // itemStyle: {
        //   borderRadius: [15, 15, 0, 0],
        //   color: '#afc7e9'
        // },
        label: {
          // show: true,
          // position: 'top',
          // color: '#d4e0f1',
          // fontSize: 46,
          // fontFamily: 'QTYPECOND-BOOK'
        },
        barWidth: 30,
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
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
        cursor: pointer;
      }

      .on {
        opacity: 1;
      }
    }
  }
}

</style>
