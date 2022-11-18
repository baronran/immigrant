<template>
  <cal title="港澳台区域证件签发">
    <template v-slot:content>
      <div class="contentBox ImmigrationClearance">
        <div class="topBox">
          <div class="exitEntryBox">
            <div class=" exitEntry" v-for="i,index in toplist">
              <span class="exitEntryWord">{{i.label}}</span>
              <span class="numVal"> 
                <CountFlop :val="i.num" />  <span class="proportion"><i class="iconfont icon-shangsheng"></i> {{i.point}}%</span></span>
             
            </div>
          </div>
        </div>
        <div class="flex flex-between align-center">
          <div class="timeButt">
            <div class="flex flex-center align-center" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['日','周','月','年']">{{item}}</div>
          </div>
        </div>

        <div class="chartBox">
          <lineChart :chartData="charData" :customOption='customOption'></lineChart>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {axiosPost} from "../../../apis/service.js";
import CountFlop from '@/components/global/countFlop.vue'
import lineChart from '@/components/echarts/line.vue'

const {proxy} = getCurrentInstance()

let dateStatus = ref(0)
let toplist = ref([
{label:'港澳居民来往内地通行证',num:3082,point:5},
{label:'台湾居民来往大陆通行证',num:459,point:5},
])
let customOption = {
  legend:{
    itemGap:70,
    top: '0%',
      left:'40%',
      icon: "roundRect",
      itemHeight: 35,
      itemWidth: 50,
      textStyle: {
        fontSize: 45,
        fontFamily: 'ZiHun',
        color: '#ffffff',
      }
  }
}
let getUrl = function(index){
  return new URL('../../../assets/img/page/SSO/ltt'+ index +'.png', import.meta.url).href
}
let charData = ref([
      {
        series: '港澳居民来往内地通行证',
        unitX: '',//(选填)
        unitY: '单位: 人',//(选填)
        x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
        data: [685, 672, 500,  655, 284, 284,356,284, 655, 284, 284, 356,],
        itemStyle: {
          color: 'rgba(0,126,247,1)',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
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
        series: '台湾居民来往大陆通行证',
        unitX: '',//(选填)
        unitY: '单位: 人',//(选填)
        x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
        data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
        itemStyle: {
          color: 'rgba(216,164,59,1)',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
              },
              {
                offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
        },
      },

])
//日期切换
function dateChange(index){
  dateStatus.value = index
  getData()
}

//echart数据
function getData(){

  switch (dateStatus.value){
    case 0:
      charData.value = [
        {
          series: '港澳居民来往内地通行证',
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          data: [685, 672, 500,  655, 284, 284,356,284, 655, 284, 284, 356,],
          itemStyle: {
            color: 'rgba(0,126,247,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
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
        series: '台湾居民来往大陆通行证',
        unitX: '',//(选填)
        unitY: '单位: 人',//(选填)
        x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
        data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
        itemStyle: {
          color: 'rgba(216,164,59,1)',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
              },
              {
                offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
        },
      },
      ]
      break
    case 1:
      charData.value = [
        {
          series: '港澳居民来往内地通行证',
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [ 284,356,284, 655, 284, 284, 356,],
          itemStyle: {
            color: 'rgba(0,126,247,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
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
        series: '台湾居民来往大陆通行证',
        unitX: '',//(选填)
        unitY: '单位: 人',//(选填)
        x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [ 184,356,184, 555, 184, 384, 456,],
        itemStyle: {
          color: 'rgba(216,164,59,1)',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
              },
              {
                offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
        },
      },
        
      ]
      break
    case 2:
      charData.value = [
        {
          series: '港澳居民来往内地通行证',
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [685, 672, 500,  655, 284, 284,356,284, 655, 284, 284, 356,672, 500,  655, 284,],
          itemStyle: {
            color: 'rgba(0,126,247,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
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
        series: '台湾居民来往大陆通行证',
        unitX: '',//(选填)
        unitY: '单位: 人',//(选填)
        x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [585, 172, 600,  755, 384, 254,356,254, 555, 784, 234, 326,172, 540,  155, 484,],
        itemStyle: {
          color: 'rgba(216,164,59,1)',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
              },
              {
                offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
        },
      },
      ]
      break
    case 3:
      charData.value = [
        {
          series: '港澳居民来往内地通行证',
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [ 655, 284, 356,284, 655, 284, 284, 356,],
          itemStyle: {
            color: 'rgba(0,126,247,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
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
        series: '台湾居民来往大陆通行证',
        unitX: '',//(选填)
        unitY: '单位: 人',//(选填)
        x: ['2017','2018','2019','2020','2021','2022'],
         data: [ 355, 284, 256,184, 355, 184, 184, 956,],
        itemStyle: {
          color: 'rgba(216,164,59,1)',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
              },
              {
                offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
        },
      },
      ]
      break
  }
}

</script>

<style scoped lang="scss">

.contentBox {

.topBox{
  width: 2028px;
  height: 319px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 30px;
  .exitEntryBox{
    width: 2028px;
    height: 319px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 50px;
  }
  .exitEntry {
    background-image: url("@/assets/img/page/SSO/5016792.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: zihun59hao-chuangcuhei;
    font-size: 51px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #98bed8;
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 30px;
    span{
      display: block;
      width: 100%;
      text-align:left;
      height: 130px;
      line-height: 130px;
    };
    .exitEntryWord{
      font-size: 70px;
      min-width:520px ;
      color: #97c3e8;
    }
    .numVal {

      width: max-content;
      font-family: QTypeCond-Book;
      font-size: 100px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: -3px;
      color: #fff;
      :deep(.count-flop){
        display: inline-block;
        height: 100px;
        >div{
          font-size: 100px!important;
          margin: 0px!important;
          padding: 32px!important;
        }
      }
    }

    .proportion {
      line-height: 70px;
      width: max-content;
      display: inline-block;
      .iconfont {
        font-size: 70px;
        font-weight: bold;
        margin-right: -10px;
      }

      font-family: DINPro-Regular;
      font-size: 70px;
      font-weight: bold;
      font-stretch: normal;
      color: #ed9d22;

    }

  }

}

.timeButt{
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 11;
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

.unit{
  font-family: zihun59hao-chuangcuhei;
  font-size: 54px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: -4px;
  color: #ffffff;
}

.chartBox{
  height: 650px;
  margin-top: -70px;
}

}

</style>
