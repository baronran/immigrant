<template>
  <div class="pages">
    <div class="pages-left">
      <ResidencePermitForStay title-prop="出入境证件签发"></ResidencePermitForStay>
      <div></div>
      <GatQZ></GatQZ>
<!--      <Crjzs></Crjzs>-->
    </div>
    <div class="pages-content">
      <Count></Count>
      <z-select></z-select>
      <div class="bottom">
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
      <EventSum>1</EventSum>
      <SentTheCount>2</SentTheCount>
      <TheNumberOfLeadingPoints>3</TheNumberOfLeadingPoints>
    </div>
  </div>
</template>

<script setup>
//  统计
import Count from "../../components/pages/SOEAEA/Count.vue";
//  港澳台签注
import GatQZ from "../../components/pages/SOEAEA/GatQZ2.vue";
//  出入境证书
import Crjzs from "../../components/pages/SOEAEA/Crjzs.vue";
//  停留居留证件
import ResidencePermitForStay from "../../components/pages/SOEAEA/ResidencePermitForStay.vue";
//  立案处理违法违规外国人事件
import WWRAHCIIF from "../../components/pages/SOEAEA/WWRAHCIIF.vue";
//  遣返遣送人员统计
import SentTheCount from '../../components/pages/SOEAEA/SentTheCount.vue'
import EventSum from "../../components/pages/SCSIBJ/EventSum.vue";
import TheNumberOfLeadingPoints from "../../components/pages/SCSIBJ/TheNumberOfLeadingPoints.vue";

//要情信息
import essentialInformation from "../../components/pages/SSO2/essentialInformation.vue";
//  值班领导
import duty from "../../components/pages/SSO2/duty.vue";
//  重要案件播报
import importantCases from '../../components/pages/SSO2/importantCases.vue'
//  舆情动态
import feelings from "../../components/pages/SSO2/feelings.vue";

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
    grid-template-rows: repeat(3,1fr);
    grid-row-gap: 123px;
    pointer-events: auto;
  }

  &-content {
    width: 5252px;
  }

  &-right {
    pointer-events: auto;
    width: 2061px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .bottom {
    background: -webkit-linear-gradient(rgba(76, 186, 255, 0) 10%, rgba(76, 186, 255, 0.1) 20%, rgba(76, 186, 255, 0.1) 80%, rgba(76, 186, 255, 0) 100%);
    pointer-events: auto;
    height: 967px;
    display: grid;
    grid-template-columns: 1809px 1789px 1771px;
    grid-column-gap: 137px;
    bottom: 0;
    position: absolute;
    > div {
      height: 967px;
    }
  }

}
</style>
