<template>
  <div class="pages">
    <div class="pages-left">
      <GatQZ></GatQZ>
      <Crjzs></Crjzs>
    </div>
    <div class="pages-content">
      <Count></Count>
      <z-select></z-select>
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
import GatQZ from "../../components/pages/SOEAEA/GatQZ.vue";
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
    grid-template-rows: 1fr 1250px;
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
}
</style>
