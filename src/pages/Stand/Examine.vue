<template>
  <div class="pages">
    <div class="pages-left">
      <!--   基本信息   -->
      <basicInformation @click="toggle"></basicInformation>
      <div class="pages-left-card1" v-if="toggleIndex">
        <!--   出入境人员检查   -->
        <checkInAndOut></checkInAndOut>
        <!--   违法违规人员趋势   -->
        <IllegalTrend></IllegalTrend>
        <!--   出入境人员国籍排名   -->
        <nationalityRanking></nationalityRanking>
      </div>
      <div class="pages-left-card2" v-else>
        <basicInformationDetail></basicInformationDetail>
      </div>
    </div>
    <div class="pages-content">
      <div class="top">
        <count></count>
        <zSelect :list="routerList" @change="openChange"></zSelect>
      </div>
      <div class="bottom">
        <!--  边防检查执勤警力   -->
        <Bipod></Bipod>
        <!--  要情信息   -->
        <essentialInformation></essentialInformation>
      </div>
    </div>
    <div class="pages-right">
      <!--  出入境交通运输工具检查    -->
      <checkInAndOutOfVehicles></checkInAndOutOfVehicles>
      <!--  违法违规交通工具统计    -->
      <IllegalCount></IllegalCount>
      <!--   交通工具国籍排名     -->
      <TheTrafficRanking></TheTrafficRanking>
    </div>
  </div>
</template>

<script setup>
//  基本信息
import basicInformation from '../../components/pages/SSO/basicInformation.vue'
//  基本信息详情
import basicInformationDetail from '../../components/pages/SSO/basicInformationDetail.vue'

//  出入境人员检查
import checkInAndOut from '../../components/pages/SSO/checkInAndOut.vue'
//  违法违规人员趋势
import IllegalTrend from '../../components/pages/PLES/IllegalTrend.vue'
//  出入境人员国籍排名
import nationalityRanking from '../../components/pages/SSO/nationalityRanking.vue'


//  统计
import count from '../../components/pages/SSO/Count.vue'
//  边防检查执勤警力
import Bipod from '../../components/pages/SSO/Bipod.vue'
//  要情信息
// import essentialInformation from '../../components/pages/SSO/essentialInformation.vue'
//  要情信息
import essentialInformation from "../../components/pages/PLES/WantToLove.vue";

//  出入境交通运输工具检查
import checkInAndOutOfVehicles from '../../components/pages/SSO/checkInAndOutOfVehicles.vue'
//  违法违规交通工具统计
import IllegalCount from '../../components/pages/PLES/IllegalCount.vue'
//  交通工具国籍排名
import TheTrafficRanking from '../../components/pages/PLES/TheTrafficRanking.vue'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const routerList = [
  {path: '/Stand/SSO', name: '天津站'},
  {path: '/Bureau/SSO', name: '北京总局'},
  {path: '/frontierInspectionStation', name: '边检站'},
  {path: '/detachment', name: '支队'},
]
const showComponent = ref('')
const toggleIndex = ref(true)
const beforeEnter = () => {
  console.log('1')
}
const afterEnter = () => {
  console.log('1')
}
const openChange = e => {
  router.push({path: routerList[e].path})
}
const toggle = () => {
  toggleIndex.value = !toggleIndex.value
}
</script>

<style scoped lang="scss">

.pages {
  flex: 1;
  background-image: url("../../assets/img/page/borderSafety/9.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  //background-image: url("../../assets/img/page/home/back.png");
  //background-size: 100% 100%;
  //background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
  padding: 72px 104px 81px 104px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2062px auto 2070px;
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
      width: 100%;
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
  }

  &-content {
    //padding-top: 299px;
    padding: 299px 0 50px 0;
    box-sizing: border-box;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 967px;

    .top {

    }

    .bottom {
      background: -webkit-linear-gradient(rgba(76, 186, 255, 0) 10%, rgba(76, 186, 255, 0.1) 20%, rgba(76, 186, 255, 0.1) 80%, rgba(76, 186, 255, 0) 100%);
      pointer-events: auto;
      height: 967px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 137px;

      > div {
        height: 967px;
      }
    }
  }
}

</style>

