<template>
  <cal title="辖区受灾情况" type="1" @open="open">
    <template v-slot:left>
      <zSelectCom :list="areaList"></zSelectCom>
    </template>
    <template v-slot:right>
      <zSelectCom :list="areaList1"></zSelectCom>
    </template>
    <template v-slot:content>
      <barEchart :chartData="chatData" :customOption="customOption"></barEchart>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

import zSelectCom from "@/components/global/zSelectCom.vue";
import barEchart from '@/components/echarts/bar.vue'
import apiJson from "../../../../public/apiJson/AreaSituation"

let areaList = ref([{name:2021},{name:2022},{name:2019}])
let areaList1 = ref([{name:'地质灾害'},{name:'气象灾害'}])
const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'checkInAndOutOfVehicles'})
let data = ref([])

let color
let city = [];
apiJson.data.map((item,index)=>{

  if(index%2==0){
     color = "#008aff"
  }else{
     color =  "#afc7e9"
  }
  city.push(item.city)
  data.value.push(
    {
        value: item.value,
        itemStyle: {
          color: color
        }
      }
  )
})

let chatData = [
  {
    series: '伤亡数',
    unitX: '',//(选填)
    unitY: '单位: 万(个)',//(选填)
    x: city,
    data: data.value,
    barWidth: 55,
    label: {
      show: false,
    },
    itemStyle: {
      borderRadius: 15
    }
  },
]
let customOption = {
  legend: {
    show: false,

  },
}
</script>

<style scoped lang="scss">


:deep(.z-select-text) {
  border: 4px solid rgb(27, 132, 240);
  border-radius: 18px;
  width: 400px;
  height: 120px;
  color: rgb(124, 159, 187);
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
:deep(.z-select-list) {
  padding: 20px;
  position: absolute;
  width: 19%;
  border: 1px solid rgb(27, 132, 240);
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: black;
  z-index: 999;
}
</style>
