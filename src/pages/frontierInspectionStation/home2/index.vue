<template>
  <div class="pages">
    <div class="pages-left">
      <div></div>
      <div class="pages-left-card1">
        <!-- 出入境人员检查-->
        <ImmigrationClearance></ImmigrationClearance>
        <!-- 出入境交通工具检查-->
        <ImmigrationClearance2></ImmigrationClearance2>
        <!-- 查获在控人数-->
        <ImmigrationClearance3></ImmigrationClearance3>
      </div>
    </div>
    <div class="pages-content">
      <div class="top">
        <div class="left">
          <zSelect></zSelect>
        </div>

      </div>
      <div class="bottom">

      </div>
    </div>
    <div class="pages-right">
      <div></div>
      <div class="pages-right-card1">
        <!--重点监控-->
        <keyMonitoring></keyMonitoring>
        <!-- 拦阻设施建设情况-->
        <!--拦阻设施建设情况-->
        <!-- <facilityConstruction></facilityConstruction> -->
        <borderInspectionPoliceForce></borderInspectionPoliceForce>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()

//出入境人员检查
import ImmigrationClearance from '@/components/pages/PLES2/ImmigrationClearance.vue'
// 出入境交通工具检查
import ImmigrationClearance2 from '@/components/pages/PLES2/ImmigrationClearance2.vue'
//查获在控人数
import ImmigrationClearance3 from '@/components/pages/PLES2/ImmigrationClearance3.vue'
//重点监控
import keyMonitoring from './keyMonitoring.vue'

//  边防检查执勤警力
import borderInspectionPoliceForce from './borderInspectionPoliceForce.vue'
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
