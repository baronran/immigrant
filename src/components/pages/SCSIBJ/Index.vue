<template>
  <!--  <BackEcharts></BackEcharts>-->
  <div class="pages">
    <div class="pages-left">
      <DutyPower></DutyPower>
      <EventSum></EventSum>
      <ToLoveTip></ToLoveTip>
    </div>
    <div class="pages-content">
      <count></count>
      <z-select></z-select>
    </div>
    <div class="pages-right">
      <BorderChecks></BorderChecks>
      <TheNumberOfLeadingPoints></TheNumberOfLeadingPoints>
      <AreaSituation></AreaSituation>
    </div>
  </div>
</template>

<script setup>
import BackEcharts from '../components/back.vue';

import count from "./Count.vue";
//  执勤力量
import DutyPower from "./DutyPower.vue";
//  案事件统计
import EventSum from "./EventSum.vue";
//  要情提示
import ToLoveTip from "./ToLoveTip.vue";
//  边境检查
import BorderChecks from "./BorderChecks.vue";
//  前出点位数
import TheNumberOfLeadingPoints from "./TheNumberOfLeadingPoints.vue";
//  辖区受灾情况
import AreaSituation from "./AreaSituation.vue";


</script>

<style scoped lang="scss">
.pages {
  padding: 380px 104px 81px 104px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  background-image: url("../../../assets/img/page/borderSafety/9.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &-left {
    width: 2065px;
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 123px;
    pointer-events: auto;
  }

  &-content {
    width: 5252px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  &-right {
    pointer-events: auto;
    width: 2061px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
