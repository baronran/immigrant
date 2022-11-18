import service from "@/apis/service";

//要情信息
export const lettersFind = (params) => service({
  method: "POST",
  url: "dutySystem/yqgl/lettersFind",
  params
})


