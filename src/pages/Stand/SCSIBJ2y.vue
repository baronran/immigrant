<template>
  <div class="pages">
    <div class="pages-left">
      <!--   执勤力量   -->
      <DutyPower></DutyPower>
      <!--   案件统计   -->
      <EventSum></EventSum>
      <!--   要情提示   -->
      <ToLoveTip></ToLoveTip>
    </div>
    <div class="pages-content">
      <!--   执勤力量   -->
      <count></count>
      <!--   执勤力量   -->
      <z-select></z-select>
    </div>
    <div class="pages-right">
      <!--   边境检查   -->
      <BorderChecks></BorderChecks>
      <!--   前出点位数   -->
      <TheNumberOfLeadingPoints></TheNumberOfLeadingPoints>
      <!--   辖区受灾情况   -->
      <AreaSituation></AreaSituation>
    </div>
  </div>
</template>

<script setup>


import count from "../../components/pages/SCSIBJ/Count.vue";
//  执勤力量
import DutyPower from "../../components/pages/SCSIBJ/DutyPower.vue";
//  案事件统计
import EventSum from "../../components/pages/SCSIBJ/EventSum.vue";
//  要情提示
import ToLoveTip from "../../components/pages/SCSIBJ/ToLoveTip.vue";
//  边境检查
import BorderChecks from "../../components/pages/SCSIBJ/BorderChecks.vue";
//  前出点位数
import TheNumberOfLeadingPoints from "../../components/pages/SCSIBJ/TheNumberOfLeadingPoints.vue";
//  辖区受灾情况
import AreaSituation from "../../components/pages/SCSIBJ/AreaSituation.vue";
import {onMounted, ref} from "vue";

</script>

<style scoped lang="scss">
.pages {
  padding: 380px 104px 81px 104px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  background-image: url("../../assets/img/page/borderSafety/9.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &-left {
    width: 2065px;
    display: grid;
    grid-template-rows:1363px 1181px 1136px;
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
    display: grid;
    grid-auto-rows: 1355px 1167px 1137px;
    grid-row-gap: 76px;
  }
}
</style>
