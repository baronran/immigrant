//
import service from "@/apis/service";
//上市地统计-分页列表查询
export const wxdpListedArea = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/listedArea",
  params
})
//上市年份统计（世界）-分页列表查询
export const wxdpListedYearWorld = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/listedYearWorld",
  params
})

//上市年份统计（国家）-分页列表查询
export const wxdpListedYearCountry = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/listedYearCountry",
  params
})


//上市方式统计（世界）-分页列表查询
export const wxdpListedFormWorld = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/listedFormWorld",
  params
})

//上市方式统计(国家)-分页列表查询
export const wxdpListedFormCountry = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/listedFormCountry",
  params
})
// 已上市企业-分页列表查询
export const wxdpListedCompany = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/listedCompanyPage",
  params
})
//赴国外上市企业-分页列表查询
export const wxdpListedAbroad = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/listedAbroadPage",
  params
})
//企业归属地统计（国家）-分页列表查询
export const wxdpCompanyRegisterAreaCountry = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/registerAreaCountry",
  params
})
//企业归属地统计（世界）-分页列表查询
export const wxdpCompanyRegisterAreaWorld = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/registerAreaWorld",
  params
})
//项目动态播报-分页列表查询
export const projectNewsPage = (params) => service({
  method: "get",
  url: "/wxdp/api/DataStatistics/projectNewsPage",
  params
})
