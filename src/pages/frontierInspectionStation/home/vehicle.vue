<template>
<!--  <div class="checkInAndOut">-->
    <cal title="出入境交通工具" type="1" @open="open" @timeChange="timeChange">
      <template v-slot:right>
        <div class="right-nav cursor-event" :class="{'on':typeStatus==idex}" @click="typeChange(idex)" v-for="(item,idex) in typeList">{{item.name}}({{item.total}} )</div>
      </template>
      <template v-slot:content>
        <div class="echarts" ref="personnelCategory"></div>
      </template>
    </cal>
<!--  </div>-->
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const personnelCategory = ref()
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

const renderChart = () => {
  const myCharts = proxy.$echarts.init(personnelCategory.value)
  let option = {
    color: ["#cce0ff", "#ffae33", "#FF8A8A"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    grid:{
      top: '15%',
      left: '2%',
      right: '5%',
      bottom: '2%',
      containLabel: true, //包括文本，居中
    },
    legend: {
      itemWidth: 80,
      itemHeight: 10,
      itemGap: 50,
      top: '0%',
      icon: 'roundRect',
      textStyle: {
        fontSize: 49,
        color: '#fff'
      },
      right:'0%'
    },
    xAxis: [
      {
        type: "category",
        data: [
          "美国",  "德国",  "法国",  "英国",  "意大利", "西班牙", "荷兰", "老挝", "越南", "印度",
        ],
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          show: true,
          margin:30,
          textStyle: {
            color: "#ffffff", //更改坐标轴文字颜色
            fontSize: 43, //更改坐标轴文字大小
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(64,120,222,1)",
            width: 3,
          }
        },
      },
    ],
    yAxis: [
      {
        axisLabel: {
          show: true,
          textStyle: {
            color: "#ffffff", //更改坐标轴文字颜色
            fontSize: 43, //更改坐标轴文字大小

          },
        },
      },
      {
        type: "value",
      },
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "人数",
        type: "bar",
        barWidth: 30,
        data: [
          100, 95, 85, 75, 65, 55, 45, 35, 25, 15
        ],
        itemStyle: {
          borderRadius: [15, 15, 0, 0],
          //   color: '#afc7e9'
        },
      },

      {
        name: "比重",
        barWidth: 30,
        type: "line",
        data: [
          50, 35, 65, 55, 75, 25, 19, 35, 10, 15
        ],
        itemStyle: {
          borderRadius: [15, 15, 0, 0],
        //   color: '#afc7e9'
        },
      },
    ],
  }
  myCharts.setOption(option)

}

onMounted(() => renderChart())

// 国家 类型切换
function typeChange(index){
  typeStatus.value = index

  renderChart()
}
</script>

<style scoped lang="scss">

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
  .echarts{
    height: 100%;
  }

</style>
