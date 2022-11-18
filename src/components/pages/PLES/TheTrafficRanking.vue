<template :key="keys">
  <cal title="交通工具国籍排名" type="1">
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>
    </template>

    <template v-slot:right>
      <div class="right-nav cursor-event" :class="{'on':typeStatus==idex}" @click="typeChange(idex)" v-for="(item,idex) in typeList">{{item.name}}({{item.total}} )</div>
    </template>
    <template v-slot:content>
      <div ref="charts" class="IllegalTrendEcharts"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {getRandom} from "../../../utils/util.js";
import apiJson from "../../../../public/apiJson/TheTrafficRanking"

const {proxy} = getCurrentInstance()
const charts = ref()
const keys = ref(0)
let dateStatus = ref(0)
let typeStatus = ref(0)
let typeList = ref([
  {
    name:'入境',
    total:0,
  }, {
    name:'出境',
    total:0,
  }
])

apiJson.data.map((index)=>{
  index.peopleNum == "入境"?typeList.value[0].total += index.peopleNum:typeList.value[1].total += index.peopleNum
})
//日期切换
function dateChange(index){
  dateStatus.value = index
  renderChart()
}

// 国家 类型切换
function typeChange(index){
  typeStatus.value = index
  renderChart()
}

const renderChart = () => {
  const echarts = proxy.$echarts
  const myCharts = proxy.$echarts.init(charts.value)
  let option =ref({
    grid: {
      right: 150,
      top: 190,
      left: 120,
      // bottom: 120
    },
    color: ["#cce0ff", "#d8a43b", "#FF8A8A"],
    tooltip: {
      trigger: "axis",
      textStyle:{
        fontSize:45,
      },
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    legend: {
      top: 10,
      itemWidth: 60,
      itemHeight: 30,
      itemGap: 50,
      // icon: 'roundRect',
      textStyle: {
        fontSize: 56,
        color: '#fff'
      },
    },
    xAxis: [
      {
        type: "category",
        data: ['日本', '美国', '德国', '法国', '英国', '意大利', '西班牙', '老挝', '荷兰', '印度'],
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          margin:30,
          textStyle: {
            fontSize:43,
            color:'#ffffff',
            fontFamily:'ZiHun',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
          },
        },
        axisLine: {
          lineStyle: {
            color: "#4078de",
            width: 2.5
          }
        },
      },
    ],
    yAxis: [
        {
          min: 0,
          max: 300,
          // interval: 5,
          type: "value",
          position: 'left',
          axisLabel: {
            show: true,
            textStyle: {
              color: "#cbd9ef", //更改坐标轴文字颜色
              fontSize: 43, //更改坐标轴文字大小
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)',
            },
          },
        },
        {
          min: 0,
          max: 100,
          // interval: 5,
          type: "value",
          position: 'right',
          axisLabel: {
            show: true,
            textStyle: {
              color: "#cbd9ef", //更改坐标轴文字颜色
              fontSize: 43, //更改坐标轴文字大小
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)',
            },
          },
        },
      ],
    series: [
      {
        name: "数量",
        type: "bar",
        showBackground: true,
        barWidth: 80,
        yAxisIndex: 0,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 1, color: 'rgba(56,170,207,0)'},
            {offset: 0, color: '#38aacf'}
          ])
        },
        data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,),getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)],

      },
      // rgb(56,170,207)
      {
        name: "比重",
        barWidth: 30,
        type: "line",
        yAxisIndex: 1,
        lineStyle: {
          color: '#d8a43b',
        },
        data: [getRandom(0,99,), getRandom(0,99,), getRandom(0,99,),getRandom(0,99,), getRandom(0,99,), getRandom(0,99,), getRandom(0,99,), getRandom(0,99,), getRandom(0,99,), getRandom(0,99,)],
      },
    ],
  })

  apiJson.data.map((index)=>{
    option.value.xAxis[0].data.push(index.country)
    option.value.series[0].data.push(index.peopleNum)
    option.value.series[1].data.push(index.proportion)
})
  myCharts.setOption(option.value)
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
