<template>
  <div class="pages">
    <div class="pages-left">
      <!--   基本信息   -->
      <basicInformation @click="toggle"></basicInformation>
      <div class="pages-left-card1" v-if="toggleIndex">
        <!--   出入境人员检查   -->
        <checkInAndOut @open="openPopup"></checkInAndOut>
        <!--   出入境交通运输工具检查   -->
<!--        <checkInAndOutOfVehicles @open="openPopup"></checkInAndOutOfVehicles>-->
        <checkInAndOutOfVehicles ></checkInAndOutOfVehicles>
        <!--   边防检查执勤警力   -->
        <borderInspectionPoliceForce @open="openPopup"></borderInspectionPoliceForce>
      </div>
      <div class="pages-left-card2" v-else>
        <basicInformationDetail></basicInformationDetail>
      </div>
    </div>
    <div class="pages-content">
      <div class="top">
        <div class="left">
          <div>
            <zSelect></zSelect>
          </div>
          <filterTool @open="openPopup"></filterTool>
        </div>
        <div class="right">
          <!--    舆情动态      -->
          <feelings @open="openPopup"></feelings>
          <!--    飞机航线      -->
          <!--          <detail></detail>-->
          <div></div>
        </div>
      </div>
      <div class="bottom">
        <!--   出入境人员国籍 排名    -->
        <nationalityRanking @open="openPopup"></nationalityRanking>
        <!--   要情信息     -->
        <essentialInformation @open="openPopup" @vnode-mounted="doSomething"></essentialInformation>
        <!--   疫情防控专题    -->
        <epidemicPreventionAndControlTopics @open="openPopup"></epidemicPreventionAndControlTopics>
      </div>
    </div>
    <div class="pages-right">
      <!--  出入境证件签发    -->
      <issuanceOfEntryAndExitDocuments @open="openPopup"></issuanceOfEntryAndExitDocuments>
      <!--  边境管理态势    -->
      <borderManagementSituation @open="openPopup"></borderManagementSituation>
      <!--  边境辖区执勤警力   -->
      <borderManagement @open="openPopup" ></borderManagement>
    </div>
  </div>
  <!-- 弹框 -->
  <div class="popup" v-if="isPopup" @click.stop="isPopup=false">
    <div class="popup-back">
      <div class="popup-back-card">
        <component :is="com[showComponent]" class="com" :style="popupStyle"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

//  出入境人员检查
import checkInAndOut from '../../components/pages/SSO/checkInAndOut.vue'
//  基本信息
import basicInformation from '../../components/pages/SSO/basicInformation.vue'
//  基本信息内容
import basicInformationDetail from '../../components/pages/SSO/basicInformationDetail.vue'
//  出入境交通运输工具检查
import checkInAndOutOfVehicles from '../../components/pages/SSO/checkInAndOutOfVehicles.vue'
//  边防检查执勤警力
import borderInspectionPoliceForce from '../../components/pages/SSO/borderInspectionPoliceForce.vue'
//  出入境人员国籍排名
import nationalityRanking from '../../components/pages/SSO/nationalityRanking.vue'
//  边境辖区执勤警力
import borderManagement from '../../components/pages/SSO/borderManagement.vue'
//  边境管理态势
import borderManagementSituation from '../../components/pages/SSO/borderManagementSituation.vue'
//  出入境证件签发
import issuanceOfEntryAndExitDocuments from '../../components/pages/SSO/issuanceOfEntryAndExitDocuments.vue'

//  要情信息
import essentialInformation from "../../components/pages/PLES/WantToLove.vue";
//  疫情防控专题
import epidemicPreventionAndControlTopics from '../../components/pages/SSO/epidemicPreventionAndControlTopics.vue'
//  筛选
import zSelect from '../../components/global/zSelect.vue'
//  筛选工具
import filterTool from "../../components/pages/SSO/filterTool.vue";
//  舆情动态
import feelings from "../../components/pages/SSO/feelings.vue";
//  详情
import detail from "../../components/pages/SSO/detail.vue";

const router = useRouter()
const isPopup = ref(false)
const com = ref({
  basicInformation,
  checkInAndOut,
  checkInAndOutOfVehicles,
  borderInspectionPoliceForce,
  nationalityRanking,
  borderManagement,
  borderManagementSituation,
  issuanceOfEntryAndExitDocuments,
  essentialInformation,
  epidemicPreventionAndControlTopics,
  zSelect,
  filterTool,
  feelings,
  detail
})
const routerList = [
  {path: '/Bureau/SSO', name: '国家移民管理局'},
  {path: '/Stand/SSO', name: '北京总站'},
  {path: '/Stand/SSO', name: '广西总站'},
  // {path: '/frontierInspectionStation', name: '边检站'},
  // {path: '/detachment', name: '支队'},
]
const showComponent = ref('')
const toggleIndex = ref(true)
const areaList = ref(['总站', '局', '新疆总站'])
const popupStyle = ref({})
const openChange = e => {
  router.push({path: routerList[e].path})
}
//
const selectChange = (e) => router.push({path: ['/', '/bureau', ''][e]})

const openPopup = (e) => {
  showComponent.value = e.el;
  popupStyle.value = e.style
  console.log('style', e.style)
  console.log('OpenPopup', e)
  isPopup.value = isPopup.value == true ? isPopup.value = false : isPopup.value = true
}
const toggle = () => toggleIndex.value = !toggleIndex.value
</script>

<style scoped lang="scss">


.pages {
  flex: 1;
  box-sizing: border-box;
  overflow: hidden;
  background-image: url("../../assets/img/page/borderSafety/9.png");
  background-repeat: no-repeat;
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
    align-content: space-between;

    &-card1 {
      display: grid;
      grid-template-rows: 1091px 1125px 1168px;
      grid-row-gap: 120px;
    }

    &-card2 {

    }
  }

  &-right {
    pointer-events: auto;
    padding-top: 299px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows:1179px 1107px 1155px;
    grid-row-gap: 193px;
    align-content: space-between;

    > div {
    }
  }

  &-content {
    padding-top: 299px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 967px;

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
