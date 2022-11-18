<template :key="keys">
  <cal title="违法违规人员趋势" type="1">
    <template v-slot:right>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="typeChange(idex)" v-for="(item,idex) in ['全国','top口岸']">{{item}}</div>
    </template>
    <template v-slot:content>
      <div ref="IllegalTrendEcharts" class="IllegalTrendEcharts"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {getRandom} from "../../../utils/util.js";
import apiJson from "../../../../public/apiJson/IllegalTrend"

const {proxy} = getCurrentInstance()
const IllegalTrendEcharts = ref()
const keys = ref(0)
let dateStatus = ref(0)


function andom(min, max, count) {
  let list = []
  new Array(count).forEach(i => list.push(Math.floor(Math.random() * (max - min)) + min))
  return list
}
// 国家 类型切换
function typeChange(index){
  dateStatus.value = index
  renderChart()
}

let evadingBorderInspectionData = ref([]), IllegalDocumentsData = ref([]), otherData = ref([]), time = ref([])
apiJson.data.map((index)=>{
  evadingBorderInspectionData.value.push(index.evadingBorderInspection)
  IllegalDocumentsData.value.push(index.IllegalDocuments)
  otherData.value.push(index.other)
  time.value.push(index.mouth)
})


const renderChart = () => {
  const myCharts = proxy.$echarts.init(IllegalTrendEcharts.value)
  let option = {
    color: ["#b9d3fc", "#0064ff", "#66799a"],
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '1%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    legend: {
      show: true,
      top:'2%',
      itemGap: 60,
      itemWidth: 52,
      itemHeight: 52,
      left:'left',
      textStyle: {
        color: '#ffffff',
        fontSize: 50,
        padding: [0, 0, 0, 20]
      },
    },
    xAxis: {
      // type: "value",
      // min: 1,
      // max: 12,
      type: 'category',
      data: time.value,
      axisLabel: {
        interval: 0,
        formatter: '{value}',
        fontSize: 52, //更改坐标轴文字大小
        color:'#eef7ff',
        margin:30,
      },
      axisLine: {
        lineStyle: {
          color: "#4078de",
          width: 2.5
        }
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        textStyle: {
          color: "#cbd9ef", //更改坐标轴文字颜色
          fontSize: 52, //更改坐标轴文字大小
        },
      },
      splitLine:{
        show: true,
        lineStyle: {
          color: "rgba(127,181,248,0.4)",
        }
      }
    },
    series: [
      {
        name: "逃避边防检查",
        type: "bar",
        barWidth: 30,
        data:evadingBorderInspectionData.value
      },
      {
        name: "非法证件",
        barWidth: 30,
        type: "bar",
        data: IllegalDocumentsData.value,
      },
      {
        name: "其他",
        type: "bar",
        barWidth: 30,
        data: otherData.value,
      },
    ],
  }
  myCharts.setOption(option)
}

onMounted(() => renderChart())
</script>

<style scoped lang="scss">

.IllegalTrendEcharts {
  flex: 1;
  display: block;
  height: 100%;
  width: 100%;
}

.nav {
  margin-left: 20px;
  width: 219px;
  height: 78px;
  background-color: rgba(42, 92, 255, .5);
  border-radius: 10px;
  border: solid 4px #4b75ff;
  opacity: .7;
  font-size: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
