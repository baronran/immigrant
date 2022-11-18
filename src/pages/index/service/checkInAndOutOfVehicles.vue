<template>
  <cal title="出入境人员检查" type="1" @open="open">
    <template v-slot:left>
      <div class="left-nav cursor-event on">本日</div>
      <div class="left-nav cursor-event">本月</div>
      <div class="left-nav cursor-event">本年</div>
    </template>
    <template v-slot:right>
      <div class="right-nav cursor-event on">全国</div>
      <div class="right-nav cursor-event">TOP口岸</div>
    </template>
    <template v-slot:content>
      <div class="echarts" ref="personnelCategory">
        <div></div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const personnelCategory = ref()
const keys = ref(0)
const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'checkInAndOutOfVehicles'})

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
      top: 190,
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
.left-nav {
  width: 173px;
  height: 79px;
  line-height: 79px;
  background-color: rgba(117, 195, 255, .2);
  border-radius: 10px;
  border: solid 4px #87cbff;
  margin-right: 20px;
  opacity: .7;
  font-size: 50px;
  text-align: center;

  &:hover {
    opacity: 1;
  }
}

.right-nav {
  margin-left: 20px;
  width: 219px;
  height: 78px;
  line-height: 78px;
  background-color: rgba(42, 92, 255, .5);
  border-radius: 10px;
  border: solid 4px #4b75ff;
  opacity: .7;
  font-size: 50px;
  text-align: center;

  &:hover {
    opacity: 1;
  }
}
</style>
