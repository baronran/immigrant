<template>
  <cal title="辖区受灾情况" type="1" @open="open">
    <template v-slot:left>
      <zSelect :list="areaList"></zSelect>
    </template>
    <template v-slot:right>
      <zSelect :list="areaList1"></zSelect>
    </template>
    <template v-slot:content>
      <barEchart :chartData="chatData" :customOption="customOption"></barEchart>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, defineEmits} from 'vue'

import barEchart from '@/components/echarts/bar.vue'

let areaList = ref([2021, 2022, 2019])
let areaList1 = ref(['地质灾害', '气象灾害',])
const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'checkInAndOutOfVehicles'})

let chatData = [
  {
    series: '伤亡数',
    unitX: '',//(选填)
    unitY: '单位: 万(个)',//(选填)
    x: ['1月','2月','3月','4月' ,'5月' ,'6月' ,'7月' ,'8月' ,'9月' ,'10月' ,'11月','12月'],
    data: [
      {
        value: 79,
        itemStyle: {
          color: '#afc7e9'
        }
      },{
        value: 49,
        itemStyle: {
          color: '#008aff'
        }
      },{
        value: 23,
        itemStyle: {
          color: '#afc7e9'
        }
      },{
        value: 53,
        itemStyle: {
          color: '#008aff'
        }
      },{
        value: 46,
        itemStyle: {
          color: '#afc7e9'
        }
      },{
        value: 31,
        itemStyle: {
          color: '#008aff'
        }
      },{
        value: 48,
        itemStyle: {
          color: '#afc7e9'
        }
      },{
        value: 60,
        itemStyle: {
          color: '#008aff'
        }
      },{
        value: 68,
        itemStyle: {
          color: '#afc7e9'
        }
      },{
        value: 60,
        itemStyle: {
          color: '#008aff'
        }
      },{
        value: 48,
        itemStyle: {
          color: '#afc7e9'
        }
      },{
        value: 31,
        itemStyle: {
          color: '#008aff'
        }
      },
    ],
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
