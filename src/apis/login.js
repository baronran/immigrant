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
export const general = (data) => service({
  method: "post",
  url:pageConfigs.VUE_APP_BASE_API2+"exitEntry/general",
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  data

})
