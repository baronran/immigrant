import service from "@/apis/service";
import qs from 'qs';
export const login = (data) => service({
  method: "post",
  // url:"dutySystem/user/login",
  url:"imos/yhdl",
  data
})

//机构列表获取 820000050500
export const imosOrgInfoQueryOne = (params='000000000000') => service({
  method: "get",
  url:"dutySystem/user/imosOrgInfoQueryOne/"+params,
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  // params:qs.stringify(params),

})

// 通用接口
// 参数
// {
//   "organizationCode":"820000000000",
//   "organizationName":"国家移民管理局",
//   "screenName":"勤务态势总览-局",
//   "targetName":"出入境人员检查",
//   "timeType":"日",
//   "argumentsType":"top口岸",
//   "beginTime":"2022-11-02 10:20:00",
//   "endTime":"2022-11-02 10:30:00"
// }
export const general = (data) => service({
  method: "post",
  url:pageConfigs.VUE_APP_BASE_API2+"exitEntry/general",
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  data
})
// 通用接口2
// 参数
// {
//   "organizationCode":"820000000000",
//   "organizationName":"国家移民管理局",
//   "screenName":"勤务态势总览-局",
//   "targetName":"出入境人员检查",
//   "timeType":"日",
//   "argumentsType":"top口岸"
// }
export const generalQuery = (data) => service({
  method: "post",
  url:pageConfigs.VUE_APP_BASE_API2+"exitEntry/generalQuery",
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  data
})

// organizationCode   820000000000     组织机构代码
export const message = (params) => service({
  method: "get",
  url:pageConfigs.VUE_APP_BASE_API2+"information/message",
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  params
})

// 添加数据
// {
//   "organizationCode":"820000000000",
//   "organizationName":"国家移民管理局",
//   "screenName":"勤务态势总览-局",
//   "targetName":"出入境人员检查",
//   "content":"{'checkName':'旅客','checkNumber':355}",
//   "timeType":"月",
//   "argumentsType":"test_insert"
// }

export const saveGeneral = (data) => service({
  method: "get",
  url:pageConfigs.VUE_APP_BASE_API2+"exitEntry/saveGeneral",
  data
})
