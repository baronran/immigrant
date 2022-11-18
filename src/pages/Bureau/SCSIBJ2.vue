<template>
  <div class="pages">
    <div class="pages-left">
      <!-- <DutyPower></DutyPower> -->
<borderManagement></borderManagement>
      <EventSum></EventSum>
      <ToLoveTip></ToLoveTip>
    </div>
    <div class="pages-content">
      <div class="top">
        <z-select></z-select>
        <count></count>
      </div>
      <div class="bottom">
        <!--   出入境人员国籍 排名    -->
        <!-- <nationalityRanking @open="openPopup"></nationalityRanking> -->
        <!--   要情信息     -->
        <essentialInformation @open="openPopup" @vnode-mounted="doSomething"></essentialInformation>
        <!--    舆情动态      -->
        <feelings @open="openPopup"></feelings>
        <!-- 值班领导 -->
        <duty ></duty>
        <!--   疫情防控专题    -->
        <!-- <epidemicPreventionAndControlTopics @open="openPopup"></epidemicPreventionAndControlTopics> -->
      </div>
      
    </div>
    <div class="pages-right">
      <BorderChecks></BorderChecks>
      <!-- <TheNumberOfLeadingPoints></TheNumberOfLeadingPoints> -->
      <!--   出入境人员检查   -->
      <checkInAndOut @open="openPopup"></checkInAndOut>
      <!-- <AreaSituation></AreaSituation> -->
      <!-- 重要案件播报 -->
      <importantCases @open="openPopup"></importantCases>
    </div>
  </div>
</template>

<script setup>
import count from "../../components/pages/SCSIBJ2/Count.vue";
//  执勤力量
import DutyPower from "../../components/pages/SCSIBJ2/DutyPower.vue";
//  案事件统计
import EventSum from "../../components/pages/SCSIBJ2/EventSum.vue";
//  要情提示
import ToLoveTip from "../../components/pages/SCSIBJ2/ToLoveTip.vue";
//  边境检查
import BorderChecks from "../../components/pages/SCSIBJ2/BorderChecks.vue";
//  前出点位数
import TheNumberOfLeadingPoints from "../../components/pages/SCSIBJ2/TheNumberOfLeadingPoints.vue";
//  辖区受灾情况
import AreaSituation from "../../components/pages/SCSIBJ2/AreaSituation.vue";

//  要情信息
// import essentialInformation from "../../components/pages/PLES/WantToLove.vue";
import essentialInformation from "../../components/pages/SSO2/essentialInformation.vue";
//  舆情动态
import feelings from "../../components/pages/SSO2/feelings.vue";
//  值班领导
import duty from "../../components/pages/SSO2/duty.vue";
//  边境辖区执勤警力
import borderManagement from '../../components/pages/SCSIBJ2/borderManagement.vue'
//  重要案件播报
import importantCases from '../../components/pages/SSO2/importantCases.vue'

import checkInAndOut from '../../components/pages/SCSIBJ2/checkInAndOut.vue'
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
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 123px;
    pointer-events: auto;
  }
  &-content {
    // padding-top: 299px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 967px;

    .top {
      padding-top: 234px;
      display: grid;
    grid-template-columns: 900px 1fr;
    }

    .bottom {
      background: -webkit-linear-gradient(rgba(76, 186, 255, 0) 10%, rgba(76, 186, 255, 0.1) 20%, rgba(76, 186, 255, 0.1) 80%, rgba(76, 186, 255, 0) 100%);
      pointer-events: auto;
      height: 967px;
      display: grid;
      grid-template-columns: 1809px 1789px 1771px;
      grid-column-gap: 137px;

      > div {
        height: 967px;
      }
    }
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
