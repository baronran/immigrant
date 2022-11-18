import service from "@/apis/service";
// 政策法令统计分析（世界）-饼图
export const queryDecreeToWorld = (params) => service({
  method: "get",
  url: "/wxdp/api/policyDecree/queryDecreeToWorld",
  params
})
// 政策法令统计分析（国家）-饼图
export const queryByCountry = (params) => service({
  method: "get",
  url: "/wxdp/api/policyDecree/queryByCountry",
  params
})
// 监管举措事件-分页列表查询
export const wxdpRegulatoryInitiatives = (params) => service({
  method: "get",
  url:"/wxdp/safetyReview/wxdpRegulatoryInitiatives/list",
  params
})
// 制裁清单-分页列表查询
export const wxdpSanctionsList = (params) => service({
  method: "get",
  url:"/wxdp/safetyReview/wxdpSanctionsList/list",
  params
})
// 言论分析-分页列表查询
export const wxdpSpeechAnalysis = (params) => service({
  method: "get",
  url:"/wxdp/safetyReview/wxdpSpeechAnalysis/list",
  params
})
// 言论类型分析-饼图,country为空则查所有
export const speechAnalysisType = (params) => service({
  method: "get",
  url:"/wxdp/api/speechAnalysisType/getInfo",
  params
})
