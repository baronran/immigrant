<template>
  <div class="pages">
    <z-select></z-select>
    <div class="pages-content">
      <div class="top">
        <BorderPolice></BorderPolice>
        <AccessToCheck></AccessToCheck>
      </div>
      <div class="bottom">
        <IllegalTrend></IllegalTrend>
        <IllegalCount></IllegalCount>
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
//  边防检查执勤警力
import BorderPolice from '../../components/pages/PLES/BorderPolice.vue'
//  出入境人员检查
import AccessToCheck from '../../components/pages/PLES/AccessToCheck.vue'
//  违法违规人员趋势
import IllegalTrend from '../../components/pages/PLES/IllegalTrend.vue'
//  违法违规人员趋势
import IllegalCount from '../../components/pages/PLES/IllegalCount.vue'
//  出入境人员流量
import InAndOutOfTraffic from '../../components/pages/PLES/InAndOutOfTraffic.vue'
//  出入境人员国籍排名
import InAndOutOfRanking from '../../components/pages/PLES/InAndOutOfRanking.vue'
//  交通工具流量统计
import TheTrafficCount from '../../components/pages/PLES/TheTrafficCount.vue'
//  交通工具国籍排名
import TheTrafficRanking from '../../components/pages/PLES/TheTrafficRanking.vue'
//  舆情动态
import PublicOpinion from '../../components/pages/PLES/PublicOpinion.vue'
//  要情信息
import WantToLove from "../../components/pages/PLES/WantToLove.vue";

</script>

<style scoped lang="scss">
.pages {
  padding: 340px 104px 81px 104px;
  box-sizing: border-box;
  background-image: url('../../assets/img/page/ThePortOnDuty/back.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;

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
