<template>
  <BackEcharts></BackEcharts>
  <div class="pages">
    <div class="pages-left">
      <GatQZ></GatQZ>
      <Crjzs></Crjzs>
    </div>
    <div class="pages-content">
      <Count></Count>
    </div>
    <div class="pages-right">
      <ResidencePermitForStay>1</ResidencePermitForStay>
      <SentTheCount>2</SentTheCount>
      <WWRAHCIIF>3</WWRAHCIIF>
    </div>
  </div>
</template>

<script setup>
import BackEcharts from '../components/back.vue';
//  统计
import Count from "./Count.vue";
//  港澳台签注
import GatQZ from "./GatQZ.vue";
//  出入境证书
import Crjzs from "./Crjzs.vue";
//  停留居留证件
import ResidencePermitForStay from "./ResidencePermitForStay.vue";
//  立案处理违法违规外国人事件
import WWRAHCIIF from "./WWRAHCIIF.vue";
//  遣返遣送人员统计
import SentTheCount from './SentTheCount.vue'


</script>

<style scoped lang="scss">
.pages {
  position: absolute;
  top: 0;
  left: 0;
  width: 10240px;
  height: 4320px;
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
