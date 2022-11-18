import {defineAsyncComponent} from "vue";

export const bureauPopup = [
  // SSO
  {
    '出入境人员检查': defineAsyncComponent(() => import(`../../pages/SSO2/checkInAndOut.vue`)),
    '出入境交通工具检查': defineAsyncComponent(() => import(`../../pages/SSO2/checkInAndOutOfVehicles.vue`)),
    '出入境人员国籍排名': defineAsyncComponent(() => import(`../../pages/SSO2/nationalityRanking.vue`)),
    '全国检查警力': defineAsyncComponent(() => import(`../../pages/SSO2/Bipod.vue`)),
    '边境辖区执勤警力': defineAsyncComponent(() => import(`../../pages/SSO2/Podiba.vue`)),
    '边境检查': defineAsyncComponent(() => import(`../../pages/SSO2/BorderChecks.vue`)),
    '边境管理态势': defineAsyncComponent(() => import(`../../pages/SSO2/borderManagementSituation.vue`)),
    '要情信息': defineAsyncComponent(() => import(`../../pages/SSO2/essentialInformation.vue`)),
    '出入境证件签发': defineAsyncComponent(() => import(`../../pages/SSO2/issuanceOfEntryAndExitDocuments.vue`)),
    '遣返遣送人员统计': defineAsyncComponent(() => import(`../../pages/SSO2/SentTheCount.vue`)),
    '舆情动态': defineAsyncComponent(() => import(`../../pages/SSO2/feelings.vue`)),
    '值班领导': defineAsyncComponent(() => import(`../../pages/SSO2/duty.vue`)),
    '重要案事件播报': defineAsyncComponent(() => import(`../../pages/SSO2/importantCases.vue`)),
    '境内常驻外国人': defineAsyncComponent(() => import(`../../pages/SSO2/domesticResidentAlien.vue`)),
  },
  // PLES
  {
    /* '边防检查警力': defineAsyncComponent(() => import(`../../pages/PLES/BorderPolice.vue`)),
    '出入境人员检查': defineAsyncComponent(() => import(`../../pages/PLES/AccessToCheck.vue`)),
    '违法违规人员趋势': defineAsyncComponent(() => import(`../../pages/PLES/IllegalTrend.vue`)),
    '违法违规交通工具统计': defineAsyncComponent(() => import(`../../pages/PLES/IllegalCount.vue`)),
    '出入境人员流量': defineAsyncComponent(() => import(`../../pages/PLES/InAndOutOfTraffic.vue`)),
    '出入境人员国籍排名': defineAsyncComponent(() => import(`../../pages/PLES/InAndOutOfRanking.vue`)),
    '要情信息': defineAsyncComponent(() => import(`../../pages/PLES/WantToLove.vue`)),
    '舆情动态': defineAsyncComponent(() => import(`../../pages/PLES/PublicOpinion.vue`)),
    '交通工具流量统计': defineAsyncComponent(() => import(`../../pages/PLES/TheTrafficCount.vue`)),
    '交通工具国籍排名': defineAsyncComponent(() => import(`../../pages/PLES/TheTrafficRanking.vue`)), */
    '出入境人员检查': defineAsyncComponent(() => import(`../../pages/PLES2/ImmigrationClearance.vue`)),
    '出入境交通工具检查': defineAsyncComponent(() => import(`../../pages/PLES2/ImmigrationClearance2.vue`)),
    '查获在控人数': defineAsyncComponent(() => import(`../../pages/PLES2/ImmigrationClearance3.vue`)),
    '当前验放量前十口岸': defineAsyncComponent(() => import(`../../pages/PLES2/top10.vue`)),
    '要情信息': defineAsyncComponent(() => import(`../../pages/SSO2/essentialInformation.vue`)),
    '舆情动态': defineAsyncComponent(() => import(`../../pages/SSO2/feelings.vue`)),
    '值班领导': defineAsyncComponent(() => import(`../../pages/SSO2/duty.vue`)),
    '重要案事件播报': defineAsyncComponent(() => import(`../../pages/SSO2/importantCases.vue`)),
    '出入境证件签发': defineAsyncComponent(() => import(`../../pages/SSO2/issuanceOfEntryAndExitDocuments.vue`)),
  },
  // SCSIBJ
  {
    '执勤力量': defineAsyncComponent(() => import(`../../pages/SCSIBJ/DutyPower.vue`)),
    '案件事件统计': defineAsyncComponent(() => import(`../../pages/SCSIBJ/EventSum.vue`)),
    '要情提示': defineAsyncComponent(() => import(`../../pages/SCSIBJ/ToLoveTip.vue`)),
    '边境检查': defineAsyncComponent(() => import(`../../pages/SCSIBJ/BorderChecks.vue`)),
    '前出点位数': defineAsyncComponent(() => import(`../../pages/SCSIBJ/TheNumberOfLeadingPoints.vue`)),
    '辖区受灾情况': defineAsyncComponent(() => import(`../../pages/SCSIBJ/AreaSituation.vue`)),
    '要情信息': defineAsyncComponent(() => import(`../../pages/SSO2/essentialInformation.vue`)),
    '舆情动态': defineAsyncComponent(() => import(`../../pages/SSO2/feelings.vue`)),
    '值班领导': defineAsyncComponent(() => import(`../../pages/SSO2/duty.vue`)),
  },
  // SOEAEA
  {
    '港澳台签注': defineAsyncComponent(() => import(`../../pages/SOEAEA/GatQZ.vue`)),
    '出入境证件': defineAsyncComponent(() => import(`../../pages/SOEAEA/Crjzs.vue`)),
    '停留居留证件': defineAsyncComponent(() => import(`../../pages/SOEAEA/ResidencePermitForStay.vue`)),
    '遣返遣送人员统计': defineAsyncComponent(() => import(`../../pages/SOEAEA/SentTheCount.vue`)),
    '立案处理违法违规外国人事件': defineAsyncComponent(() => import(`../../pages/SOEAEA/WWRAHCIIF.vue`)),
  }
]
export const standPopup = [
  // SSO
  {
    '出入境人员检查': defineAsyncComponent(() => import(`../../pages/SSO2/checkInAndOut.vue`)),
    '出入境交通工具检查': defineAsyncComponent(() => import(`../../pages/SSO2/checkInAndOutOfVehicles.vue`)),
    '出入境人员国籍排名': defineAsyncComponent(() => import(`../../pages/SSO2/nationalityRanking.vue`)),
    '全国检查警力': defineAsyncComponent(() => import(`../../pages/SSO2/Bipod.vue`)),
    '边境辖区执勤警力': defineAsyncComponent(() => import(`../../pages/SSO2/Podiba.vue`)),
    '边境检查': defineAsyncComponent(() => import(`../../pages/SSO2/BorderChecks.vue`)),
    '边境管理态势': defineAsyncComponent(() => import(`../../pages/SSO2/borderManagementSituation.vue`)),
    '要情信息': defineAsyncComponent(() => import(`../../pages/SSO2/essentialInformation.vue`)),
    '出入境证件签发': defineAsyncComponent(() => import(`../../pages/SSO2/issuanceOfEntryAndExitDocuments.vue`)),
    '遣返遣送人员统计': defineAsyncComponent(() => import(`../../pages/SSO2/SentTheCount.vue`)),
    '舆情动态': defineAsyncComponent(() => import(`../../pages/SSO2/feelings.vue`)),
    '值班领导': defineAsyncComponent(() => import(`../../pages/SSO2/duty.vue`)),
    '重要案事件播报': defineAsyncComponent(() => import(`../../pages/SSO2/importantCases.vue`)),
    '违法事件趋势': defineAsyncComponent(() => import(`../../pages/SSO2/trendOffenders.vue`)),
  },
  // PLES
  {
    /* '边防检查执勤警力': defineAsyncComponent(() => import(`../../pages/PLES/BorderPolice.vue`)),
    '出入境人员检查': defineAsyncComponent(() => import(`../../pages/PLES/AccessToCheck.vue`)),
    '违法违规人员趋势': defineAsyncComponent(() => import(`../../pages/PLES/IllegalTrend.vue`)),
    '违法违规交通工具统计': defineAsyncComponent(() => import(`../../pages/PLES/IllegalCount.vue`)),
    '出入境人员流量': defineAsyncComponent(() => import(`../../pages/PLES/InAndOutOfTraffic.vue`)),
    '出入境人员国籍排名': defineAsyncComponent(() => import(`../../pages/PLES/InAndOutOfRanking.vue`)),
    '要情信息': defineAsyncComponent(() => import(`../../pages/PLES/WantToLove.vue`)),
    '舆情动态': defineAsyncComponent(() => import(`../../pages/PLES/PublicOpinion.vue`)),
    '交通工具流量统计': defineAsyncComponent(() => import(`../../pages/PLES/TheTrafficCount.vue`)),
    '交通工具国籍排名': defineAsyncComponent(() => import(`../../pages/PLES/TheTrafficRanking.vue`)), */
    

  },
  // SCSIBJ
  {
    '执勤力量': defineAsyncComponent(() => import(`../../pages/SCSIBJ/DutyPower.vue`)),
    '案事件统计': defineAsyncComponent(() => import(`../../pages/SCSIBJ/EventSum.vue`)),
    '要情提示': defineAsyncComponent(() => import(`../../pages/SCSIBJ/ToLoveTip.vue`)),
    '边境检查': defineAsyncComponent(() => import(`../../pages/SCSIBJ/BorderChecks.vue`)),
    '前出点位数': defineAsyncComponent(() => import(`../../pages/SCSIBJ/TheNumberOfLeadingPoints.vue`)),
    '辖区受灾情况': defineAsyncComponent(() => import(`../../pages/SCSIBJ/AreaSituation.vue`)),
  },
  // SOEAEA
  {
    '港澳台签注': defineAsyncComponent(() => import(`../../pages/SOEAEA/GatQZ.vue`)),
    '出入境证件': defineAsyncComponent(() => import(`../../pages/SOEAEA/Crjzs.vue`)),
    '停留居留证件': defineAsyncComponent(() => import(`../../pages/SOEAEA/ResidencePermitForStay.vue`)),
    '遣返遣送人员统计': defineAsyncComponent(() => import(`../../pages/SOEAEA/SentTheCount.vue`)),
    '立案处理违法违规外国人事件': defineAsyncComponent(() => import(`../../pages/SOEAEA/WWRAHCIIF.vue`)),
  }
]
