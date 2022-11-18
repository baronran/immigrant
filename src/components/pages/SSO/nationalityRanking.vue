<template>
  <cal title="出入境人员国籍排名" type="1" @open="open">
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>
    </template>

    <template v-slot:right>
      <div class="right-nav cursor-event" :class="{'on':typeStatus==idex}" @click="typeChange(idex)" v-for="(item,idex) in typeList">{{item.name}}({{item.total}} )</div>
    </template>

    <template v-slot:content>
      <div class="echarts" ref="personnelCategory"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, defineEmits} from 'vue'
import {getRandom} from "../../../utils/util.js";
import apiJson from "../../../../public/apiJson/nationalityRanking"
import { indexOf } from 'lodash';

const {proxy} = getCurrentInstance()
const personnelCategory = ref()
const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'nationalityRanking'})

const renderChart = () => {
  const myCharts = proxy.$echarts.init(personnelCategory.value)

  let option = ref({
    // width: '100%',
    grid: {
      top: '20%',
      left: '2%',
      right: '5%',
      bottom: '2%',
      containLabel: true, //包括文本，居中
    },
    tooltip: {//提示框组件
					trigger: 'item', //item数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
					axisPointer: {
						// 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					},
					formatter: '{a} <br/>{b} : {c}' //{a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
},
    legend: {
      itemWidth: 80,
      itemHeight: 40,
      textStyle: {
        fontSize: 49,
        color: '#fff'
      },
      top: 10
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 43,
          color: '#fff'
        },
        axisLine: {
          color: '#4078de'
        },
        // prettier-ignore
        data: []
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Evaporation',
        position: 'right',
        alignTicks: true,
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
            type: 'dashed'
          }
        }
      },
      {
        type: 'value',
        position: 'left',
        alignTicks: true,
        min:0,
        max:100,
        interval:10,
        minInterval: 1,
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
          fontSize: 43,
        }
      }
    ],
    series: [
      {
        name: '人数',
        type: 'bar',
        // yAxisIndex: 1,
        itemStyle: {
          borderRadius: [15, 15, 0, 0],
          color: '#afc7e9'
        },
        label: {
          show: true,
          position: 'top',
          color: '#d4e0f1',
          fontSize: 46,
          fontFamily: 'QTYPECOND-BOOK'
        },
        barWidth: 30,
        data: []
      },
      {
        name: '比重',
        type: 'line',
        yAxisIndex: 1,
        
        itemStyle: {
          color: '#d8a43b',
        },
        lineStyle: {
          width: 5
        },
        data: []
      }
    ]
  });

  apiJson.data.map((index)=>{
    option.value.xAxis[0].data.push(index.country)
    option.value.series[0].data.push(index.peopleNum)
    option.value.series[1].data.push(index.proportion)
})


  myCharts.setOption(option.value)
}

let dateStatus = ref(0)
let typeStatus = ref(0)
let typeList = ref([
{
    name:'全部',
    total:0,
  },
  {
    name:'入境',
    total:0,
  },{
    name:'出境',
    total:0,
  }
])
apiJson.data.map((index)=>{
  typeList.value[0].total+=index.peopleNum;
  index.peopleNum == "入境"?typeList.value[1].total += index.peopleNum:typeList.value[2].total += index.peopleNum
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
onMounted(() => renderChart())
</script>

<style scoped lang="scss"></style>
