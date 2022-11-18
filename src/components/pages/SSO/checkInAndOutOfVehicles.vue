<template>
  <cal title="出入境交通运输工具检查" type="1">
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>
    </template>
    <template v-slot:right>
<!--      <div class="right-nav cursor-event" :class="{'on':typeStatus==idex}" @click="typeChange(idex)" v-for="(item,idex) in ['全国','TOP口岸']">{{item}}</div>-->
    </template>
    <template v-slot:content>
      <bar :chartData="chartData" :customOption="customOption"></bar>
    </template>
  </cal>
</template>

<script setup>
import bar from '../../../components/echarts/bar.vue'
import {ref, getCurrentInstance, onMounted, defineEmits,onBeforeUnmount} from 'vue'
import {getRandom} from "../../../utils/util.js";
import apiJson from "../../../../public/apiJson/trafficCheck"

onBeforeUnmount(() => {
  clearInterval(timer)
})
const {proxy} = getCurrentInstance()
let customOption = ref({
  tooltip: {
      trigger: 'item',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
})
let chartData = ref([{
  series: '飞机',
  unitX: '',//(选填)
  unitY: '单位: 万(个)',//(选填)
  x: [],
  data: [],
  stack: 'one',
  label: {
      show: false,},
  barWidth: 55,
  itemStyle: {
    borderRadius: 0
  }
},
{
  series: '船舶',
  unitX: '',//(选填)
  unitY: '单位: 万(个)',//(选填)
  x: [],
  data: [],
  stack: 'one',
  label: {
      show: false,},
  barWidth: 55,
  itemStyle: {
    borderRadius: 0
  }
},
{
  series: '火车',
  unitX: '',//(选填)
  unitY: '单位: 万(个)',//(选填)
  x: [],
  data: [],
  stack: 'one',
  label: {
      show: false,},
  barWidth: 55,
  itemStyle: {
    borderRadius: 0
  }
},
{
  series: '汽车',
  unitX: '',//(选填)
  unitY: '单位: 万(个)',//(选填)
  x: [],
  data: [],
  stack: 'one',
  barWidth: 55,
  label: {
      show: false,},
  itemStyle: {
    borderRadius: 0
  }
},
  {
    series: '飞机',
    unitX: '',//(选填)
    unitY: '单位: 万(个)',//(选填)
    x: [],
    data: [],
    stack: 'two',
    label: {
      show: false,},
    barWidth: 55,
    itemStyle: {
      borderRadius: 0
    }
  },{
    series: '船舶',
    unitX: '',//(选填)
    unitY: '单位: 万(个)',//(选填)
    x: [],
    data: [],
    stack: 'two',
    label: {
      show: false,},
    barWidth: 55,
    itemStyle: {
      borderRadius: 0
    }
  },{
    series: '火车',
    unitX: '',//(选填)
    unitY: '单位: 万(个)',//(选填)
    x: [],
    data: [],
    stack: 'two',
    label: {
      show: false,},
    barWidth: 55,
    itemStyle: {
      borderRadius: 0
    }
  },{
    series: '汽车',
    unitX: '',//(选填)
    unitY: '单位: 万(个)',//(选填)
    x: [],
    data: [],
    stack: 'two',
    label: {
      show: false,},
    barWidth: 55,
    itemStyle: {
      borderRadius: 0
    }
  },])

let dateStatus = ref(0)
let typeStatus = ref(0)
let count=8
let showData = apiJson.data.slice(0,count);
getChart(showData)
var timer = null
timer = setInterval(()=>{
  showData.push(apiJson.data[count%apiJson.data.length])
  showData.shift()
  getChart(showData)
  count++
},4000)
function getChart(data){
  chartData.value.map((item,index)=>{
    item.x = data.map((items)=>{ return items.name})
    item.data = []
  })
//接口
data.map((index)=>{
     chartData.value[0].data.push(index.leaveNum[0])
     chartData.value[1].data.push(index.leaveNum[1])
     chartData.value[2].data.push(index.leaveNum[2])
     chartData.value[3].data.push(index.leaveNum[3])
     chartData.value[4].data.push(index.intoNum[0])
     chartData.value[5].data.push(index.intoNum[1])
     chartData.value[6].data.push(index.intoNum[2])
     chartData.value[7].data.push(index.intoNum[3])

  })
}



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

function andom(min, max, count) {
  let list = []
  new Array(count).forEach(i => list.push(Math.floor(Math.random() * (max - min)) + min))
  return list
}
function renderChart(){}
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
