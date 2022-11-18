<template :key="keys">
  <div class="checkInAndOut">
    <z-title title="出入境交通运输工具检查"></z-title>
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
const keys = ref(0)

function andom(min, max, count) {
  let list = []
  new Array(count).forEach(i => list.push(Math.floor(Math.random() * (max - min)) + min))
  return list
}

const renderChart = () => {
  const myCharts = proxy.$echarts.init(personnelCategory.value)
  myCharts.setOption({
    color: ['#0080f7', '#cfa244'],
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        fontSize: 50
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        fontSize: 40,
        color: '#eef7ff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['飞机', '船舶', '火车', '汽车'],
      axisLabel: {
        fontSize: 50,
        color: '#eef7ff'
      }
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barGap: 10,
        barWidth: 55,
        showBackground: true,
        barCategoryGap: 20,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
          borderRadius: 15
        }
      },
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barGap: '80%',
        barWidth: 55,
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
          borderRadius: 15
        }
      }
    ]
  })
}

// setInterval(() => keys.value++, 5000)
onMounted(() => renderChart())
</script>

<style scoped lang="scss">
.checkInAndOut {
  display: grid;
  grid-template-rows: repeat(1, auto) 767px;
  grid-row-gap: 52px;

  .legend {
    display: flex;
    justify-content: space-between;
    font-size: 50px;
    position: absolute;
    width: 2062px;
    margin-top: 174px;

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
