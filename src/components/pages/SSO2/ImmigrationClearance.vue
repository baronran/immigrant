<template>
  <cal title="出入境人员检查">
    <template v-slot:content>
      <div class="contentBox ImmigrationClearance">
        <div class="topBox">
          <div>
            <div class="imgLeft">
              <img class="rotate_animation" src="@/assets/img/page/SSO/qun.png" alt="">
              <img src="@/assets/img/page/SSO/889.png" alt="">
            </div>
            <div class="numBox">
              <div class="total">总数
                <span><i class="iconfont icon-jiantouxiajiang"></i> 5%</span>
              </div>
              <div>
                <CountFlop :val="2320" />
              </div>
            </div>
          </div>
          <div>
            <div class="exit exitEntry">
              <p><img src="@/assets/img/page/SSO/exit.png" alt=""><span class="exitEntryWord">入境</span></p>
              <div class="bar"></div>
              <p><span class="numVal">161408</span> <span class="proportion"><i class="iconfont icon-jiantouxiajiang"></i> 5%</span></p>
            </div>
            <div class="entry exitEntry">
              <p><img src="@/assets/img/page/SSO/entry.png" alt=""><span class="exitEntryWord">入境</span></p>
              <div class="bar"></div>
              <p><span class="numVal">161408</span> <span class="proportion"><i class="iconfont icon-jiantouxiajiang"></i> 5%</span></p>
            </div>
          </div>
        </div>
        <div class="flex flex-between align-center">
          <div class="timeButt">
            <div class="flex flex-center align-center" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['日','周','月','年']">{{item}}</div>
          </div>
          <div class="unit">单位：万人</div>
        </div>

        <div class="chartBox">
          <lineChart :chartData="charData"></lineChart>
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

let charData = ref([
      {
        series: '出境',
        unitX: '',//(选填)
        unitY: '单位: 万人',//(选填)
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
        series: '入境',
        unitX: '',//(选填)
        unitY: '单位: 万人',//(选填)
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
        series: '总数',
        unitX: '',//(选填)
        unitY: '单位: 万人',//(选填)
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
          series: '出境',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
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
          series: '入境',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
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
          series: '总数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
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
          series: '出境',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
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
          series: '入境',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [ 655, 284, 284, 284, 655, 284, 284,],
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
          series: '总数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
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
          series: '出境',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
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
          series: '入境',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,284, 284, 655, 284,],
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
          series: '总数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
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
          series: '出境',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
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
          series: '入境',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [ 655, 284, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
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
          series: '总数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
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
    background-image: url("@/assets/img/page/SSO/ImmigrationClearanceBox.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    >div{
      display: flex;
      align-items: center;
    }

    .imgLeft{
      position: relative;
      width: 265px;

      >img:nth-of-type(2){
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
      }
    }

    .numBox{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 270px;
      margin-left: 40px;

      .total{
        font-family: zihun59hao-chuangcuhei;
        font-size: 60px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 30px;
        letter-spacing: -3px;
        color: #ffffff;

        .iconfont{
          font-size: 41px;
          font-weight: bold;
        }

        >span{
          font-family: DINPro-Regular;
          font-size: 41px;
          font-weight: bold;
          font-stretch: normal;
          color: #ed9d22;
        }
      }

      :deep(.count-flop-box){
        width: 89px;
        height: 142px;
        padding:30px;
        background-image: url("@/assets/img/page/SSO/num.png");
      }

      :deep(.count-flop-num){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
      }

    }

    .exitEntry {
      width: 442px;
      height: 241px;
      background-image: url("@/assets/img/page/SSO/entryExit.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin: 0px 25px;
      font-family: zihun59hao-chuangcuhei;
      font-size: 51px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #98bed8;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 0 35px;
      box-sizing: border-box;
      .numVal {
        font-family: QTypeCond-Book;
        font-size: 71px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: -3px;
        color: #bacce8;
      }

      .proportion {
        .iconfont {
          font-size: 41px;
          font-weight: bold;
        }

        font-family: DINPro-Regular;
        font-size: 41px;
        font-weight: bold;
        font-stretch: normal;
        color: #ed9d22;

      }

      p:nth-of-type(1){
        display: flex;
        align-items: center;
      }

      .bar {
        width: 100%;
        height: 5px;
        background-color: rgba(208, 238, 255, 0.2);

        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 49px;
          height: 5px;
          background-color: rgba(208, 238, 255, 0.5);
        }
      }

      .exitEntryWord{
        margin-left: 20px;
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
