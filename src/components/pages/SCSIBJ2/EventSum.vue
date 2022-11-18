<template>
  <cal :title=title >
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>
    </template>
    <template v-slot:content>
      <div style="position: absolute;left: 0px;top: 201px;display: flex;">
            <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['日','月','年']">{{item}}</div>
          </div>
      <div class="echarts">
        <specialPie :chartData="peiData" :chartOption="peiOption"></specialPie>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {getRandom} from "../../../utils/util.js";
import specialPie from "@/components/echarts/specialPie.vue";
import apiJson from "../../../../public/apiJson/EventSum"
import apiJson2 from "../../../../public/apiJson/ResidencePermitForStay"

let dateStatus = ref(0)
let peiData = ref([])
const {proxy} = getCurrentInstance()

//根据路由判断标题
let title = ref("");

switch(proxy.$router.currentRoute.value.fullPath){
   case "/Stand/SOEAEA":
     peiData.value = apiJson2.data
     title.value = "停留居留证件"
      break;

      case "/Bureau/SOEAEA":
      peiData.value = apiJson2.data
     title.value = "停留居留证件"
      break;
      case "/Bureau/SCSIBJ":
      peiData.value = apiJson.data
     title.value = "案事件统计"
      break;

      case "/Stand/SCSIBJ":
     peiData.value = apiJson.data
     title.value = "案件事件统计"
      break;
   case "/frontierInspectionStation/frontierInspectionStationHome":
   peiData.value = apiJson.data
     title.value = "案件事件统计"
  
      break;


}



let peiOption = {
  legend: {
    show: false,
  },
  label: {
    show: false,
  },
  labelLine: {
    show: false,
  },
  radius: ['50', '70'],
  center: ['50%', '50%'],
  color: ['#1097ff', '#e6aeae', '#229b94', '#ffffff', '#ffeb9b', '#757575'],
}
//日期切换
function dateChange (index){
  dateStatus.value = index
  peiData.value = [
    {
      name: '警务室数',
      value: getRandom(10,50)
    },
    {
      name: '警务站数',
      value: getRandom(10,50)
    },
    {
      name: '联合执勤点',
      value: getRandom(10,50)
    },
    {
      name: '临时卡点数',
      value: getRandom(10,50)
    },
    {
      name: '护边员执勤点',
      value: getRandom(10,50)
    },
    {
      name: '其他',
      value: getRandom(10,50)
    },
  ]
}


const open = () => {
  console.log('1')
}

onMounted(() => {

})
</script>

<style scoped lang="scss"></style>
