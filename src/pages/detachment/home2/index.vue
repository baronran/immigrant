<template>
  <div class="pages">
    <div class="pages-left">
      <div></div>
      <div class="pages-left-card1">
        <!-- 出入境人员检查-->
        <issuanceOfEntryAndExitDocuments ></issuanceOfEntryAndExitDocuments>
        <!-- 重要案事件播报-->
        <importantCases></importantCases>
        <!-- 非法出入境趋势-->
        <seizures></seizures>
      </div>
    </div>
    <div class="pages-content">
      <div class="top">
        <div class="left">
          <zSelect></zSelect>
        </div>

      </div>
      <div class="bottom">
        <onDutyPoliceForce></onDutyPoliceForce>
      </div>
    </div>
    <div class="pages-right">
      <div></div>
      <div class="pages-right-card1">
        <!--重点监控-->
        <keyMonitoring></keyMonitoring>
        <!-- 拦阻设施建设情况-->
        <!--拦阻设施建设情况-->
        <facilityConstruction></facilityConstruction>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()

//  出入境证件签发
import issuanceOfEntryAndExitDocuments from './issuanceOfEntryAndExitDocuments.vue'
//重要案事件播报
import importantCases from '@/components/pages/SSO2/importantCases.vue'
 //重点监控
import keyMonitoring from './keyMonitoring.vue'
//拦阻设施建设情况
import facilityConstruction from './facilityConstruction.vue'
//边境辖区执勤警力  中间底部
import onDutyPoliceForce from './onDutyPoliceForce.vue'
//  边防检查执勤警力
import borderInspectionPoliceForce from './borderInspectionPoliceForce.vue'

//边境检查站查获情况
import seizures from "./seizures.vue";

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
    //grid-row-gap: 120px;
    //align-content: space-between;
    &-card1 {
      display: grid;
      grid-template-rows: repeat(3,1fr);
      grid-row-gap: 50px;
    }


  }

  &-right {
    pointer-events: auto;
    padding-top: 299px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows:94px 1fr;
    //grid-row-gap: 120px;

    &-card1 {
      display: grid;
      grid-template-rows: 2fr 1fr;
      grid-row-gap: 50px;
    }
  }

  &-content {
    padding-top: 299px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1090px;

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


  }


}


</style>
