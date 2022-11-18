<template>
  <div class="pages pageContent">
    <div class="leftPage">
      <!-- 案事件统计-->
      <eventStatistics></eventStatistics>
      <!-- 出入境人员流量趋势 -->
      <flowTrend></flowTrend>
      <!-- 出入境交通工具-->
      <vehicle></vehicle>
    </div>
    <div class="middlePage">
      <countTopPage></countTopPage>
    </div>
    <div class="rightPage">
      <!--重点监控-->
      <keyMonitoring></keyMonitoring>
      <!--边防检查执勤警力-->
      <borderInspectionPoliceForce></borderInspectionPoliceForce>
    </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
// 案事件统计
import eventStatistics from '../../../components/pages/SCSIBJ/EventSum.vue'
//出入境人员流量趋势
import flowTrend from './flowTrend.vue'
// 出入境交通工具
import vehicle from './vehicle.vue'
//重点监控
import keyMonitoring from './keyMonitoring.vue'
//边防检查执勤警力
import borderInspectionPoliceForce from './borderInspectionPoliceForce.vue'
//顶部
import countTopPage from './count.vue'

</script>

<style scoped lang="scss">

.pageContent {
  width: 10240px;
  height: 4320px;
  box-sizing: border-box;
  position: absolute;
  z-index: 888;
  padding: 340px 104px 81px 104px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2075px auto 2075px;

  .leftPage {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 40px;
  }

  .middlePage {

  }

  .rightPage {
    display: grid;
    grid-template-rows: 2fr 1fr;
    row-gap: 40px;
  }

}
</style>
