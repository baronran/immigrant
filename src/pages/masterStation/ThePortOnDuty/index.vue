<template>
  <div class="page">
    <z-select></z-select>
    <div class="page-content">
      <div class="top">
        <BorderPolice></BorderPolice>
        <AccessToCheck></AccessToCheck>
      </div>
      <div class="bottom">
        <IllegalTrend></IllegalTrend>
        <illegalCount></illegalCount>
        <InAndOutOfTraffic></InAndOutOfTraffic>
        <InAndOutOfRanking></InAndOutOfRanking>
        <WantToLove></WantToLove>
        <PublicOpinion></PublicOpinion>
        <TheTrafficCount></TheTrafficCount>
        <TheTrafficRanking></TheTrafficRanking>
      </div>
    </div>
  </div>
</template>

<script setup>
import BorderPolice from './BorderPolice.vue'
import AccessToCheck from './AccessToCheck.vue'
//  违法违规人员趋势
import IllegalTrend from './IllegalTrend.vue'
//  违法违规人员趋势
import illegalCount from './illegalCount.vue'
//  出入境人员流量
import InAndOutOfTraffic from './InAndOutOfTraffic.vue'
//  出入境人员国籍排名
import InAndOutOfRanking from './InAndOutOfRanking.vue'
//  交通工具流量统计
import TheTrafficCount from './TheTrafficCount.vue'
//  交通工具国籍排名
import TheTrafficRanking from './TheTrafficRanking.vue'
//  舆情动态
import PublicOpinion from './PublicOpinion.vue'

//  要情信息
import WantToLove from "./WantToLove.vue";


</script>

<style scoped lang="scss">
.page {
  width: 10240px;
  height: 4320px;
  box-sizing: border-box;
  position: absolute;
  z-index: 888;
  padding: 340px 104px 81px 104px;
  box-sizing: border-box;

  &-content {
    padding-top: 72px;
    display: grid;
    grid-template-rows: 1136px 1fr;
    grid-row-gap: 131px;

    .top {
      height: 1136px;
      display: grid;
      grid-template-columns: repeat(2, calc((100% - 167px) / 2));
      grid-column-gap: 167px;
    }

    .bottom {
      display: grid;
      grid-template-columns: repeat(4, 2379px);
      grid-template-rows: repeat(2, 1125px);
      grid-row-gap: 149px;
      grid-column-gap: 167px;
    }
  }
}
</style>
