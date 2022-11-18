<template>
  <div class="pages">
    <div class="pages-left">
      <div></div>
      <div class="pages-left-card1">
        <overallControl></overallControl>
        <caseType></caseType>
        <equipmentUtilization></equipmentUtilization>
      </div>
    </div>
    <div class="pages-content">
      <div class="top">
        <div class="left">
            <zSelect></zSelect>
        </div>

          <count></count>

      </div>
      <div class="bottom">
        <!--   要情信息     -->
        <essentialInformation @open="openPopup" @vnode-mounted="doSomething"></essentialInformation>
        <!--    舆情动态      -->
        <feelings @open="openPopup"></feelings>
        <!-- 值班领导 -->
        <duty ></duty>
      </div>
    </div>
    <div class="pages-right">
      <div></div>
      <div class="pages-right-card1">
        <capturedPersonnel></capturedPersonnel>
        <seizures></seizures>
        <importantCases></importantCases>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()

//  要情信息
import essentialInformation from "../../components/pages/SSO2/essentialInformation.vue";
//舆情动态
import feelings from "../../components/pages/SSO2/feelings.vue";
//  值班领导
import duty from "../../components/pages/SSO2/duty.vue";
//重要案事件播报
import importantCases from '../../components/pages/SSO2/importantCases.vue'
//查获非法出入境人员
import capturedPersonnel from "../../components/pages/SCSIBJ2/capturedPersonnel.vue";
//中间头部文字
import count from "../../components/pages/SCSIBJ2/count.vue";

//边境检查站查获情况
import seizures from "../../components/pages/SCSIBJ2/seizures.vue";

//总体管控情况
import overallControl from "../../components/pages/SCSIBJ2/overallControl.vue"

//主要案件类型
import caseType from "../../components/pages/SCSIBJ2/caseType.vue"

//执勤警力装备动用
import equipmentUtilization from "../../components/pages/SCSIBJ2/equipmentUtilization.vue"

</script>

<style scoped lang="scss">

.pages {
  flex: 1;
  box-sizing: border-box;
  overflow: hidden;
  background-image: url("@/assets/img/layout/back.png");
  //background-image: url("../../assets/img/common/勤务态势总览4.0.jpg");
  //background-repeat: no-repeat;
  background-size: 100% 100%;
  //background-image: url("../../assets/img/page/home/back.png");
  //background-color: black;
  //background-size: 100% 100%;
  //background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;

  padding: 72px 104px 81px 104px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2065px auto 2211px;
  grid-column-gap: 100px;

  &-left {
    pointer-events: auto;
    padding-top: 299px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows:94px 1fr;
    grid-row-gap: 120px;
    //align-content: space-between;
    &-card1 {
      display: grid;
      grid-template-rows: repeat(3,1fr);
      grid-row-gap: 120px;
    }


  }

  &-right {
    pointer-events: auto;
    padding-top: 299px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows:94px 1fr;
    grid-row-gap: 120px;

    &-card1 {
      display: grid;
      grid-template-rows: repeat(3,1fr);
      grid-row-gap: 120px;
    }
  }

  &-content {
    padding-top: 299px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 690px;

    .top {
      padding-top: 234px;
      box-sizing: border-box;
      display: flex;
      //justify-content: space-between;

      .left {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }

      .right {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
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


}

.popup {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .9);

  &-back {
    padding: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-card {
      .com {
        transform: scale(1.9);
      }
    }
  }
}
</style>
