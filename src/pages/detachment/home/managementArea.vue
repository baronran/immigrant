<template>
  <cal title="出入境人员检查" type="1" @open="open">
    <template v-slot:left>
      <div class="left-nav cursor-event on">本日</div>
      <div class="left-nav cursor-event">本月</div>
      <div class="left-nav cursor-event">本年</div>
    </template>
    <template v-slot:right>
      <div class="right-nav cursor-event on">人员数</div>
      <div class="right-nav cursor-event">车辆数</div>
      <div class="right-nav cursor-event">劝返数</div>
    </template>
    <template v-slot:content>
      <barEchart></barEchart>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, defineEmits} from 'vue'

import barEchart from '@/components/echarts/bar.vue'

const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'checkInAndOutOfVehicles'})

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
