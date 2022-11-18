let data=[{ name: "北京", value: [116.405289, 39.904987] },
{ name: "天津", value: [117.190186, 39.125595] },
{ name: "河北", value: [114.502464, 38.045475] },
{ name: "黑龙江", value: [126.642464, 45.756966] },
{ name: "吉林", value: [125.324501, 43.886841] },
{ name: "辽宁", value: [123.429092, 41.796768], },
{ name: "内蒙古", value: [111.75199, 40.84149] },
{ name: "山西", value: [112.549248, 37.857014] },
{ name: "山东", value: [117.000923, 36.675808] },
{ name: "河南", value: [113.665413, 34.757977] },
{ name: "陕西", value: [108.948021, 34.263161] },
{ name: "湖北", value: [114.298569, 30.584354] },
{ name: "江苏", value: [118.76741, 32.041546] },
{ name: "安徽", value: [117.283043, 31.861191] },
{ name: "上海", value: [121.472641, 31.231707] },
{ name: "湖南", value: [112.982277, 28.19409] },
{ name: "江西", value: [115.892151, 28.676493] },
{ name: "浙江", value: [120.15358, 30.287458] },
{ name: "福建", value: [119.306236, 26.075302] },
{ name: "广东", value: [113.28064, 23.125177] },
// { name: "台湾", value: [121.520076, 25.030724] },
{ name: "海南", value: [110.19989, 20.04422] },
{ name: "广西", value: [108.320007, 22.82402] },
{ name: "重庆", value: [106.504959, 29.533155] },
{ name: "云南", value: [102.71225, 25.040609] },
{ name: "贵州", value: [106.713478, 26.578342] },
{ name: "四川", value: [104.065735, 30.659462] },
{ name: "宁夏", value: [106.23248, 38.48644] },
{ name: "甘肃", value: [103.83417, 36.06138] },
{ name: "青海", value: [101.77782, 36.61729] },
{ name: "西藏", value: [91.1145, 29.64415] },
{ name: "新疆", value: [87.61688, 43.82663] },
{ name: "香港", value: [114.16546, 22.27534] },
{ name: "澳门", value: [113.54913, 22.19875] },]
for (let index = 0; index < data.length; index++) {
   data[index].leaveNum = [Math.ceil(Math.random()*100 + 20),Math.ceil(Math.random()*100 + 20),Math.ceil(Math.random()*100 + 20),Math.ceil(Math.random()*100 + 20)]
   data[index].intoNum = [Math.ceil(Math.random()*100 + 20),Math.ceil(Math.random()*100 + 20),Math.ceil(Math.random()*100 + 20),Math.ceil(Math.random()*100 + 20)]
}

export default 
   {
   message:{},
   data,
   /* data:[
      {
         "address":"飞机", //类型
         "leaveNum":25, //出境
         "intoNum":300  //入境
      },
      {
         "address":"船舶",
         "leaveNum":255,
         "intoNum":30
      },
      {
         "address":"火车",
         "leaveNum":78,
         "intoNum":300
      },
      {
         "address":"汽车",
         "leaveNum":66,
         "intoNum":300
      }
   ] */
   }
  
