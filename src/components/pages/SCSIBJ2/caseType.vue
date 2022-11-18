<template>
  <cal title="主要案件类型" >
    <template v-slot:content>
      <div class="flex flex-end timeButt">
        <div class="flex flex-center align-center" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['周','月','年']">{{item}}</div>
      </div>
      <div class="flex flex-wrap flex-around caseBox">
        <div class="case" >
          <span>毒品案件</span><span>3</span><span>起</span>
        </div>
        <div class="case case1" >
          <span>走私案件</span><span>5</span><span>起</span>
        </div>
        <div class="case case2" >
          <span>非法入境案件</span>7<span></span><span>起</span>
        </div>
        <div class="case case3" >
          <span>涉枪案件</span><span>2</span><span>起</span>
        </div>
      </div>
      <div class="chartBox">
        <lineChart :chartData="charData" :customOption="customOption"></lineChart>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {axiosPost} from "../../../apis/service.js";
import lineChart from '@/components/echarts/line.vue'

const {proxy} = getCurrentInstance()

let dateStatus = ref(0)
let typeStatus = ref(0)
let customOption = {
  legend: {
    show:false,
  },
  grid: {
    top: '15%',
    left: '1%',
    right: '1%',
    bottom: '3%',
    containLabel: true
  }
}
let charData =  ref([
  {
    series: '毒品案件',
    unitX: '',//(选填)
    unitY: '单位: 万人',//(选填)
    x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
    data: [ 284,356,284, 655, 284, 284, 356,],
    itemStyle: {
      color: '#ee712e',
    },
    areaStyle: {
      color: {
        type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(238,113,46,0.6)' // 0% 处的颜色
          },
          { offset: 0.5, color: 'rgba(238,113,46,0.1)' // 0% 处的颜色
          },
          {
            offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
          }
        ],
        globalCoord: false // 缺省为 false
      },
    }
  },
  {
    series: '走私案件',
    unitX: '',//(选填)
    unitY: '单位: 万人',//(选填)
    x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
    data: [ 655, 284, 284, 284, 655, 284, 284,],
    itemStyle: {
      color: '#0cfddc',
    },
    areaStyle: {
      color: {
        type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(12,253,220,0.6)' // 0% 处的颜色
          },
          { offset: 0.5, color: 'rgba(12,253,220,0.1)' // 0% 处的颜色
          },
          {
            offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
          }
        ],
        globalCoord: false // 缺省为 false
      },
    },
  },
  {
    series: '非法入境案件',
    unitX: '',//(选填)
    unitY: '单位: 万人',//(选填)
    x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
    data: [794, 792, 855, 284, 284,584, 284,],
    itemStyle: {
      color: '#0064ff',
    },
    areaStyle: {
      color: {
        type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(0,100,255,0.6)' // 0% 处的颜色
          },
          { offset: 0.5, color: 'rgba(0,100,255,0.1)' // 0% 处的颜色
          },
          {
            offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
          }
        ],
        globalCoord: false // 缺省为 false
      },
    }
  },
  {
    series: '涉枪案件',
    unitX: '',//(选填)
    unitY: '单位: 万人',//(选填)
    x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
    data: [92, 855, 655, 284, 284, 484, 284, 655,],
    itemStyle: {
      color: '#e2a730',
    },
    areaStyle: {
      color: {
        type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(226,167,48,0.6)' // 0% 处的颜色
          },
          { offset: 0.5, color: 'rgba(226,167,48,0.1)' // 0% 处的颜色
          },
          {
            offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
          }
        ],
        globalCoord: false // 缺省为 false
      },
    }
  },
])
//日期切换
function dateChange(index){
  dateStatus.value = index
  getData()
}

//类型切换
function typeChange(index){
  typeStatus.value = index
  getData()
}

//echart数据
function getData(){

  switch (dateStatus.value){
    case 0:
      charData.value = [
        {
          series: '毒品案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [ 284,356,284, 655, 284, 284, 356,],
          itemStyle: {
            color: '#ee712e',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(238,113,46,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(238,113,46,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '走私案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [ 655, 284, 284, 284, 655, 284, 284,],
          itemStyle: {
            color: '#0cfddc',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(12,253,220,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(12,253,220,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          },
        },
        {
          series: '非法入境案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [794, 792, 855, 284, 284,584, 284,],
          itemStyle: {
            color: '#0064ff',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,100,255,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,100,255,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '涉枪案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [92, 855, 655, 284, 284, 484, 284, 655,],
          itemStyle: {
            color: '#e2a730',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(226,167,48,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(226,167,48,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
      ]
      break
    case 1:
      charData.value = [
        {
          series: '毒品案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [685, 672, 500,  655, 284, 284,356,284, 655, 284, 284, 356,672, 500,  655, 284,],
          itemStyle: {
            color: '#ee712e',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(238,113,46,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(238,113,46,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '走私案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,284, 284, 655, 284,],
          itemStyle: {
            color: '#0cfddc',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(12,253,220,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(12,253,220,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          },
        },
        {
          series: '非法入境案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,284, 484, 284, 655, 284,],
          itemStyle: {
            color: '#0064ff',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,100,255,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,100,255,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '涉枪案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [ 284, 284, 484, 284,794, 792, 855, 655, 655, 284, 284,584,284, 484, 284, 655, 284,],
          itemStyle: {
            color: '#e2a730',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(226,167,48,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(226,167,48,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
      ]
      break
    case 2:
      charData.value = [
        {
          series: '毒品案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [ 655, 284, 356,284, 655, 284, 284, 356,],
          itemStyle: {
            color: '#ee712e',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(238,113,46,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(238,113,46,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '走私案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [ 655, 284, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
          itemStyle: {
            color: '#0cfddc',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(12,253,220,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(12,253,220,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          },
        },
        {
          series: '非法入境案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [484, 284, 655,794, 792, 855, 284, 655, 284, 284,584,],
          itemStyle: {
            color: '#0064ff',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,100,255,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,100,255,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '涉枪案件',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [484, 284, 855, 284, 655, 284, 655, 284, 284,584,],
          itemStyle: {
            color: '#e2a730',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(226,167,48,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(226,167,48,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
      ]
      break
  }

}
let getUrl = function(index){
  return new URL('../../../assets/img/page/SCSIBJ2/top'+ index +'.png', import.meta.url).href
}
</script>

<style scoped lang="scss">


.timeButt{
  display: flex;
  //justify-content: flex-start;
  > div {
    width: 173px;
    height: 79px;
    background-color: rgba(117, 195, 255, 0.3);
    border-radius: 10px;
    border: solid 4px rgba(135, 203, 255, 0.7);
    margin-right: 20px;
    font-family: zihun59hao-chuangcuhei;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: -4px;
    color: #ffffff;
    opacity: 0.5;
    cursor: pointer;
  }
}

p{
  margin: 0;
  padding: 0;
}

.caseBox{
  height: 330px;
  align-content: space-between;
  margin-top: 50px;
  .case{
    width: 910px;
    height: 150px;
    background-repeat: no-repeat;
    background-image: url("@/assets/img/page/SCSIBJ2/case0.png");
    background-size: 100% 100%;
    display: grid;
    grid-template-columns: 330px 190px auto;
    font-family: ZiHun;
    font-size: 56px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: -3px;
    color: rgba(194, 223, 239, 0.7);
    padding-left: 190px;
    box-sizing: border-box;
    align-items: center;


    span:nth-of-type(2){
      font-family: QTypeCond-Book;
      font-size: 71px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 6px;
      color: #ffffff;
    }
    span:nth-of-type(3){
      font-family: MicrosoftYaHei;
      font-size: 48px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: -2px;
      color: rgba(194, 223, 239, 0.6);

    }

  }

  .case1{
    background-image: url("@/assets/img/page/SCSIBJ2/case1.png")
  }
  .case2{
    background-image: url("@/assets/img/page/SCSIBJ2/case2.png")
  }
  .case3{
    background-image: url("@/assets/img/page/SCSIBJ2/case3.png")
  }
}

.chartBox{
  height: 500px;
}
</style>
