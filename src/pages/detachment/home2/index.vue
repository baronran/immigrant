<template>
  <div class="pages pageContent">
    <div class="leftPage">
      <checkInAndOut @open="openPopup"></checkInAndOut>
        <!--   出入境交通运输工具检查   -->
        <checkInAndOutOfVehicles ></checkInAndOutOfVehicles>
      <!-- 出入境交通工具-->
      <!-- <vehicle></vehicle> -->
      <peopleUnderControl></peopleUnderControl>
    </div>
    <div class="middlePage">
      <countTopPage></countTopPage>
      <!-- <div class="bottomc">
        <onDutyPoliceForce></onDutyPoliceForce>
      </div> -->
    </div>
    <div class="rightPage">
      <!--重点监控-->
      <keyMonitoring></keyMonitoring>
      <!-- 拦阻设施建设情况-->
      <!--拦阻设施建设情况-->
      <!-- <facilityConstruction></facilityConstruction> -->
      <borderInspectionPoliceForce></borderInspectionPoliceForce>
    </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

// 边境管理态势
import borderManagementSituation from '@/components/pages/SSO/borderManagementSituation.vue'

//进出边境管理区情况
// import checkInAndOutOfVehicles from './managementArea.vue'

// 出入境交通工具
import vehicle from './vehicle.vue'

//重点监控
import keyMonitoring from './keyMonitoring.vue'

//拦阻设施建设情况
import facilityConstruction from './facilityConstruction.vue'


//顶部
import countTopPage from './count.vue'
//边境辖区执勤警力  中间底部
import onDutyPoliceForce from './onDutyPoliceForce.vue'
//  出入境人员检查
import checkInAndOut from './checkInAndOut.vue'
//  出入境交通运输工具检查
import checkInAndOutOfVehicles from './checkInAndOutOfVehicles.vue'
import peopleUnderControl from './peopleUnderControl.vue'
//  边境辖区执勤警力
//  边防检查执勤警力
import borderInspectionPoliceForce from './borderInspectionPoliceForce.vue'
</script>

<style scoped lang="scss">

.pageContent {
  width: 10240px;
  height: 4320px;
  box-sizing: border-box;
  position: absolute;
  z-index: 888;
  padding: 340px 104px 81px 104px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2075px auto 2075px;

  .leftPage {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 40px;

    :deep(.borderManagementSituation) {
      grid-template-rows:auto;
    }

  }

  .middlePage {
    position: relative;

    .bottomc {
      width: 5254px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
    }

  }

  .rightPage {
    display: grid;
    grid-template-rows: 2fr 1fr;
    row-gap: 40px;
  }

}
</style>
