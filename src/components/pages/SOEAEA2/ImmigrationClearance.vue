<template>
  <cal title="出入境证件签发">
    <template v-slot:content>
      <div class="contentBox ImmigrationClearance">
        <div class="topBox">
          <div class="exitEntryBox">
            <div class=" exitEntry" v-for="i,index in toplist">
              <span class="exitEntryWord">{{i.label}}</span>
              <span class="numVal"> 
                <CountFlop :val="i.num" /><span >{{i.unit}}</span> </span>
              <span class="proportion"><i class="iconfont icon-shangsheng"></i> {{i.point}}%</span>
            </div>
          </div>
        </div>
        <div class="flex flex-between align-center">
          <div class="timeButt">
            <div class="flex flex-center align-center" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['日','周','月','年']">{{item}}</div>
          </div>
        </div>

        <div class="chartBox">
          <lineChart :chartData="charData" :customOption="customOption"></lineChart>
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
{label:'普通护照',unit:"本",num:5093,point:5},
{label:'出入境通行证',unit:"本",num:157,point:5},
{label:'港澳台通行证',unit:"张",num:5035,point:5},
{label:'往来台湾通行证',unit:"本",num:130,point:5},
])
let customOption = {
  legend:{
    itemGap:30,
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
  return new URL('../../../assets/img/page/SSO/lmt'+ index +'.png', import.meta.url).href
}
let charData = ref([
      {
        series: '中华人民共和国',
        type:'bar',
        stack:'1',barWidth: 55,
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
        series: '普通护照',
        type:'bar',
        stack:'1',barWidth: 55,
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

      {
        series: '往来港澳台',
        type:'bar',
        stack:'1',barWidth: 55,
        unitX: '',//(选填)
        unitY: '单位: 人',//(选填)
        x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
        data: [694, 392, 635, 384, 355, 584, 384, 455, 184, 384, 584, 855, 184, 484,],
        itemStyle: {
          color: '#30cbe2',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(48,203,226,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(48,203,226,0.1)' // 0% 处的颜色
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
        series: '大陆居民',
        type:'bar',
        stack:'1',barWidth: 55,
        unitX: '',//(选填)
        unitY: '单位: 人',//(选填)
        x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
        data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
        itemStyle: {
          color: 'rgba(194,241,234,1)',
        },
        areaStyle: {
          color: {
            type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(194,241,234,0.6)' // 0% 处的颜色
              },
              { offset: 0.5, color: 'rgba(194,241,235,0.1)' // 0% 处的颜色
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

//echart数据
function getData(){

  switch (dateStatus.value){
    case 0:
      charData.value = [
        {
          series: '中华人民共和国',
          type:'bar',
        stack:'1',barWidth: 55,
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
        series: '普通护照',
        type:'bar',
        stack:'1',barWidth: 55,
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
        {
          series: '往来港澳台',
          type:'bar',
        stack:'1',barWidth: 55,
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
          itemStyle: {
            color: '#30cbe2',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(48,203,226,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(48,203,226,0.1)' // 0% 处的颜色
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
          series: '大陆居民',
          type:'bar',
        stack:'1',barWidth: 55,
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
          itemStyle: {
            color: 'rgba(194,241,234,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(194,241,234,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(194,241,235,0.1)' // 0% 处的颜色
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
          series: '中华人民共和国',
          type:'bar',
        stack:'1',barWidth: 55,
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
        series: '普通护照',
        type:'bar',
        stack:'1',barWidth: 55,
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
        {
          series: '往来港澳台',
          type:'bar',
        stack:'1',barWidth: 55,
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [ 655, 284, 284, 284, 655, 284, 284,],
          itemStyle: {
            color: '#30cbe2',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(48,203,226,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(48,203,226,0.1)' // 0% 处的颜色
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
          series: '大陆居民',
          type:'bar',
        stack:'1',barWidth: 55,
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [794, 792, 855, 284, 284,584, 284,],
          itemStyle: {
            color: 'rgba(194,241,234,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(194,241,234,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(194,241,235,0.1)' // 0% 处的颜色
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
          series: '中华人民共和国',
          type:'bar',
        stack:'1',barWidth: 55,
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
        series: '普通护照',
        type:'bar',
        stack:'1',barWidth: 55,
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
        {
          series: '往来港澳台',
          type:'bar',
        stack:'1',barWidth: 55,
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,284, 284, 655, 284,],
          itemStyle: {
            color: '#30cbe2',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(48,203,226,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(48,203,226,0.1)' // 0% 处的颜色
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
          series: '大陆居民',
          type:'bar',
        stack:'1',barWidth: 55,
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,284, 484, 284, 655, 284,],
          itemStyle: {
            color: 'rgba(194,241,234,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(194,241,234,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(194,241,235,0.1)' // 0% 处的颜色
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
    case 3:
      charData.value = [
        {
          series: '中华人民共和国',
          type:'bar',
        stack:'1',barWidth: 55,
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
        series: '普通护照',
        type:'bar',
        stack:'1',barWidth: 55,
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
        {
          series: '往来港澳台',
          type:'bar',
        stack:'1',barWidth: 55,
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [ 655, 284, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
          itemStyle: {
            color: '#30cbe2',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(48,203,226,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(48,203,226,0.1)' // 0% 处的颜色
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
          series: '大陆居民',
          type:'bar',
        stack:'1',barWidth: 55,
          unitX: '',//(选填)
          unitY: '单位: 人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [484, 284, 655,794, 792, 855, 284, 655, 284, 284,584,],
          itemStyle: {
            color: 'rgba(194,241,234,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(194,241,234,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(194,241,235,0.1)' // 0% 处的颜色
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
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 50px;
      grid-row-gap: 30px;
    }
    .exitEntry {
      background-image: url("@/assets/img/page/SSO/814.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      font-family: zihun59hao-chuangcuhei;
      font-size: 51px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #98bed8;
      box-sizing: border-box;
      line-height: 140px;
      height: 140px;
      span{
        display: inline-block

      };
      .exitEntryWord{
        font-size: 70px;
        min-width:520px ;
        color: #97c3e8;
      }
      .numVal {
        font-family: QTypeCond-Book;
        font-size: 80px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: -3px;
        color: #fff;
        :deep(.count-flop){
          display: inline-block;
          height: 100px;
          >div{
            font-size: 80px!important;
            margin: 0px!important;
            padding: 28px!important;
          }
        }
        span{
          font-family: zihun59hao-chuangcuhei;
          font-size:   51px;
        }
      }

      .proportion {
        .iconfont {
          font-size: 61px;
          font-weight: bold;
          margin-right: -10px;
        }

        font-family: DINPro-Regular;
        font-size: 61px;
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
