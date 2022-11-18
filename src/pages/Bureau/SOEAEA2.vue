<template>
  <div class="pages">
    <div class="pages-left">
      <ImmigrationClearance></ImmigrationClearance>
      <ImmigrationClearance2></ImmigrationClearance2>
        <ImmigrationClearance3></ImmigrationClearance3>
    </div>
    <div class="pages-content">
      <div class="top">
        <div class="left">
          <div>
            <zSelect></zSelect>
          </div>
          <!-- <filterTool @open="openPopup"></filterTool> -->
        </div>
        <div class="center">
          <count></count>
        </div>
        <div class="right">

          <div></div>
        </div>
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
      </div>
    </div>
    <div class="pages-right">
      <div></div>
      <div class="pages-right-card1">
        <domesticResidentAlien></domesticResidentAlien>
        <top10></top10>
        
        <importantCases></importantCases>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'


//出入境人员检查
import ImmigrationClearance from '../../components/pages/SOEAEA2/ImmigrationClearance.vue'
import ImmigrationClearance2 from '../../components/pages/SOEAEA2/ImmigrationClearance2.vue'
import ImmigrationClearance3 from '../../components/pages/SOEAEA2/ImmigrationClearance3.vue'
//  筛选工具
import filterTool from "../../components/pages/SSO2/filterTool.vue";
//  要情信息
import essentialInformation from "../../components/pages/SSO2/essentialInformation.vue";
//舆情动态
import feelings from "../../components/pages/SSO2/feelings.vue";

//  值班领导
import duty from "../../components/pages/SSO2/duty.vue";

//  出入境证件签发
import issuanceOfEntryAndExitDocuments from '../../components/pages/SSO2/issuanceOfEntryAndExitDocuments.vue'
import importantCases from '../../components/pages/SSO2/importantCases.vue'
import top10 from '../../components/pages/SOEAEA2/top10.vue'
import domesticResidentAlien from '../../components/pages/SOEAEA2/domesticResidentAlien.vue'


import count from '../../components/pages/SOEAEA2/Count.vue'

const router = useRouter()

const toggleIndex = ref(true)
const toggle = () => toggleIndex.value = !toggleIndex.value
</script>

<style scoped lang="scss">


.pages {
  flex: 1;
  box-sizing: border-box;
  overflow: hidden;
  background-image: url("../../assets/img/page/borderSafety/9.png");
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
    grid-template-rows:repeat(3,1fr);
    grid-row-gap: 120px;
    //align-content: space-between;


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
    grid-template-rows: 1fr 590px;

    .top {
      padding-top: 234px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;

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
      height: 590px;
      display: grid;
      grid-template-columns: 1809px 1789px 1771px;
      grid-column-gap: 137px;

      > div {
        height: 590px;
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
