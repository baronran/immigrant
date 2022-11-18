<template>
  <cal title="执勤警力装备动用" @open="open">
    <template v-slot:content>
      <div class="contentChart">
        <peiPoliceForceList :chartData="peiData"></peiPoliceForceList>
        <peiPoliceForceList :title="'动用装备数'" :chartData="peiData1"></peiPoliceForceList>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted,} from 'vue'
import peiPoliceForceList from '@/components/echarts/peiPoliceForceList.vue'

const {proxy} = getCurrentInstance()

let peiData =  ref([
  {name: '执勤警力', value: 21, state: 2, percentage: "6%"},
  {name: '备勤警力', value: 27, state: 1, percentage: "6%"},
  {name: '休假警力', value: 109, state: 1, percentage: "6%"},
  {name: '其他警力', value: 109, state: 1, percentage: "6%"},
])

let peiData1 =  ref([
  {name: '车辆', value: 100, state: 2, percentage: "6%"},
  {name: '手枪', value: 100, state: 1, percentage: "6%"},
  {name: '步检', value: 50, state: 1, percentage: "6%"},
  {name: '非致命性武器', value: 50, state: 1, percentage: "6%"},
])

</script>

<style scoped lang="scss">
 .contentChart{
   display:grid;
   grid-template-columns: repeat(2,1fr);
   height: 100%;
 }

</style>
