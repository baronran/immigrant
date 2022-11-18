//
import service from "@/apis/service";

export const addEmergencyPlan = (data) => service({
  method: "post",
  url: "emergency/addEmergencyPlan",
  data
})
export const queryEmergencyPlanInfor = (params) => service({
  method: "post",
  url:"emergency/queryEmergencyPlanInfor",
  params
})
