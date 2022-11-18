<template>
  <cal title="出入境人员检查" bk="lg">
    <template v-slot:content>
      <div class="AccessToCheck">
        <div class="AccessToCheck-left">
          <div class="label">人员类别</div>
          <div class="right">
            <div class="right-content">
              <div ref="BorderPoliceEcharts" id="containerExit"></div>
              <div class="text">
                <div class="item flex flex-between" v-for="(item,index) in personnelTypeDataExitData">
                  <div class="item-bar"></div>
                  <div class="flex flex-between">
                    <div class="item-label">{{item.name}}</div>
                    <div class="item-value">{{item.value}}</div>
                  </div>
                  <div class="flex flex-around">
                    <div class="t ">同比 <i class="iconfont icon-shangsheng"></i> {{item.yearOnYear}}</div>
                    <div class="h ">环比 <i class="iconfont icon-jiantouxiajiang"></i> {{item.ringRatio}}</div>
                  </div>
                </div>
              
              </div>
            </div>
            <div class="right-content">
              <div ref="BorderPoliceEcharts" class="Entry" id="containerEntry"></div>
              <div class="text">
                <div class="item flex flex-between" v-for="(item,index) in personnelTypeDataIntoData">
                  <div class="item-bar"></div>
                  <div class="flex flex-between">
                    <div class="item-label">{{item.name}}</div>
                    <div class="item-value">{{item.value}}</div>
                  </div>
                  <div class="flex flex-around">
                    <div class="t ">同比 <i class="iconfont icon-shangsheng"></i>{{item.yearOnYear}}</div>
                    <div class="h ">环比 <i class="iconfont icon-jiantouxiajiang"></i>{{item.ringRatio}}</div>
                  </div>
                </div>
           
              </div>
            </div>
          </div>
        </div>
        <div class="AccessToCheck-right">
          <div class="label">人员目的</div>
          <div class="right">
            <div class="right-content">
              <div ref="containerExit"></div>
              <div class="text flex flex-between">
                <div class="flex flex-around flex-column" v-for="(item,index) in data">
                  <div class="bar">
                    <div :style="{color: color[index]}">{{item.name}}</div>
                    <div class="val">{{item.value}}件</div>
                  </div>
                  <div>
                    <div class="t ">同比 <i class="iconfont icon-shangsheng"></i> {{item.yearOnYear}}</div>
                    <div class="h ">环比 <i class="iconfont icon-jiantouxiajiang"></i> {{item.ringRatio}}</div>
                  </div>
                </div>

              </div>
            </div>
            <div class="right-content">
              <div ref="containerEntry"></div>
              <div class="text flex flex-between">
                <div class="flex flex-around flex-column" v-for="(item,index) in data1" >
                  <div class="bar">
                    <div :style="{color: color1[index]}">{{item.name}}</div>
                    <div class="val">{{item.value}}件</div>
                  </div>
                  <div>
                    <div class="t ">同比 <i class="iconfont icon-shangsheng"></i> {{item.yearOnYear}}</div>
                    <div class="h ">环比 <i class="iconfont icon-jiantouxiajiang"></i> {{item.ringRatio}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from "vue";
import Highcharts from "highcharts"; //必须引入
import highchartsMore from "highcharts/highcharts-more";
import highcharts3d from "highcharts/highcharts-3d";
import funnel3d from "highcharts/modules/funnel3d";
import EntryImage from '../../../assets/img/page/ThePortOnDuty/r.png'
import image from "../../../assets/img/page/InAndOutFooting/3.png";
import apiJson from "../../../../public/apiJson/AccessToCheck"


highchartsMore(Highcharts);
highcharts3d(Highcharts)
funnel3d(Highcharts)
const {proxy} = getCurrentInstance();
const containerExit = ref()
const containerEntry = ref()
// defineProps({ })
// let data = ref(apiJson.data.personnelobjective.exit)
// let color = ['#757575', '#ffffff', '#229b94', '#1096ff']


let personnelTypeDataExitData =  ref(apiJson.data.personnelType.exit)
console.log(personnelTypeDataExitData.value,"7777777777")
let personnelTypeDataIntoData =  ref(apiJson.data.personnelType.into)

let personnelTypeDataExit =  ref([])
let personnelTypeDataInto =  ref([])
let personnelTypeDataExitallSUm =  ref(0)
let personnelTypeDataIntoallSUm =  ref(0)
 

apiJson.data.personnelType.exit.map((item,index)=>{
  let data = []
  data[0] =  item.name
  data[1] =  item.value
  personnelTypeDataExitallSUm.value+=item.value
  personnelTypeDataExit.value.push(data)
})

apiJson.data.personnelType.into.map((item,index)=>{
  let data = []
  data[0] =  item.name
  data[1] =  item.value
  personnelTypeDataIntoallSUm.value+=item.value
  personnelTypeDataInto.value.push(data)
})

let data =  ref(apiJson.data.personnelobjective.exit)
let color = ['#757575', '#ffffff', '#229b94', '#1096ff']

let data1 = ref(apiJson.data.personnelobjective.into)
let color1 = ['#757575', '#ffffff', '#229b54', '#10ffe6']
const renderHighcharts = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    backgroundColor: 'rgba(0,0,0,.01)',
    chart: {
      type: 'pie',
      backgroundColor: {},
      options3d: {
        enabled: true,
        alpha: 80,
        beta: 0
      },
      plotBackgroundImage: EntryImage
      // width: 1000
    },
    title: {
      text: `<div><span style="color:rgba(142,165,187,0.5)">入境</span> <span>`+personnelTypeDataIntoallSUm.value+`</span></div>`,
      style: {
        color: "#fff",
        fontSize: "58px"
      },
      y: 150,
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        depth: 55,
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        }
      }
    },
    series: [
      {
        type: 'pie',
        data: personnelTypeDataInto.value
      }
    ]
  }

  const option1 = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    backgroundColor: 'rgba(0,0,0,.01)',
    chart: {
      type: 'pie',
      backgroundColor: {},
      options3d: {
        enabled: true,
        alpha: 80,
        beta: 0
      },
      plotBackgroundImage: EntryImage
      // width: 1000
    },
    title: {
      text: `<div><span style="color:rgba(142,165,187,0.5)">出境</span> <span>`+personnelTypeDataExitallSUm.value+`</span></div>`,
      style: {
        color: "#fff",
        fontSize: "58px"
      },
      y: 150,
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        depth: 55,
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        }
      }
    },
    series: [
      {
        type: 'pie',
        data: personnelTypeDataExit.value
      }
    ]
  }
  Highcharts.chart('containerExit', option);
  Highcharts.chart('containerEntry', option1);
};

const renderEcharts = () => {
  const echarts1 = proxy.$echarts.init(containerExit.value)
  const echarts2 = proxy.$echarts.init(containerEntry.value)

  let option = {
    color,
    title: [
      {
        text: '出境',
        left: 'center',
        top: 340,
        textStyle: {
          fontSize: 56,
          color: 'rgba(142,165,187,0.52)',
          fontFamily: 'QTYPECOND-BOOK'
        }
      },
      {
        text: '180',
        left: 'center',
        top: 240,
        textStyle: {
          fontSize: 78,
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'QTYPECOND-BOOK'
        }
      }
    ],
    graphic: {
      elements: [{
        type: 'image',
        style: {
          image,
          width: 700,
          height: 540
        },
        left: 'center',
        top: 'middle'
      }]
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '80%'],
        itemStyle: {
          borderColor: '#091524',
          borderWidth: 20,
        },
        label: {
          show: false
        },
        labelLine: {
          length: 105,
          length2: 150,
          maxSurfaceAngle: 1200,
          lineStyle: {
            width: 5,
            cap: 'round',
          }
        },
        labelLayout: function (params) {
          const isLeft = params.labelRect.x < echarts1.getWidth() / 2;
          const points = params.labelLinePoints;
          // Update the end point.
          if (!points) return
          points[2][0] = isLeft
              ? params.labelRect.x
              : params.labelRect.x + params.labelRect.width;
          return {
            labelLinePoints: points
          };
        },
        data:data.value,
      },
      // 值内
      {
        type: 'pie',
        radius: ['50%', '70%'],
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,0.6)',
          },
        },
        label: {
          show: false
        },
        z: 100,
        data:data.value,
      },
    ]
  }
  let option1 = {
    color: color1,
    title: [
      {
        text: '入境',
        left: 'center',
        top: 340,
        textStyle: {
          fontSize: 56,
          color: 'rgba(142,165,187,0.52)',
          fontFamily: 'QTYPECOND-BOOK'
        }
      },
      {
        text: '180',
        left: 'center',
        top: 240,
        textStyle: {
          fontSize: 78,
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'QTYPECOND-BOOK'
        }
      }
    ],
    graphic: {
      elements: [{
        type: 'image',
        style: {
          image,
          width: 700,
          height: 540
        },
        left: 'center',
        top: 'middle'
      }]
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '80%'],
        itemStyle: {
          borderColor: '#091524',
          borderWidth: 20,
        },
        label: {
          show: false
        },
        labelLine: {
          length: 105,
          length2: 150,
          maxSurfaceAngle: 1200,
          lineStyle: {
            width: 5,
            cap: 'round',
          }
        },
        data:data1.value,
      },
      // 值内
      {
        type: 'pie',
        radius: ['50%', '70%'],
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,0.6)',
          },
        },
        label: {
          show: false
        },
        z: 100,
        data:data1.value,
      },
    ]
  }
  echarts1.setOption(option)
  echarts2.setOption(option1)
};

onMounted(() => {
  renderHighcharts()
  renderEcharts()
});
</script>

<style scoped lang="scss">
.AccessToCheck {
  display: grid;
  grid-template-columns: 2117px 1fr;
  height: 967px;
  font-family: ZiHun;


  .label {
    width: 112px;
    height: 926px;
    background-image: linear-gradient(90deg, rgba(156, 199, 232, 1) 0%, rgba(145, 189, 230, 0.52) 12%, rgba(74, 129, 215, 0.03) 85%, rgba(60, 117, 212, 0.03) 100%);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    //border-style: solid;
    //border-width: 1px;
    //border-image-source: linear-gradient(90deg, rgba(159, 195, 255, 1) 0%, rgba(60, 117, 212, 0.02) 100%);
    //border-image-slice: 1;
    font-size: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &-left {
    display: grid;
    grid-template-columns: 112px 1fr;

    .right {
      display: grid;
      grid-template-rows:462px 462px;
      height: calc(462px * 2);

      &-content {
        display: grid;
        grid-template-columns: 863px 1fr;


        .text {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          padding: 90px 60px 60px 60px;
          box-sizing: border-box;

          .item {
            display: grid;
            grid-template-columns:40px 316px 1fr;
            align-items: center;
            font-size: 54px;

            &-bar {
              display: flex;
              justify-content: center;
              flex-direction: column;

              &:after, &:before {
                content: '';
                transform: rotate(45deg);
                display: inline-block;
                width: 20px;
                height: 20px;
                background-color: #eeeeee;
              }
            }

            .t, .h {
              font-size: 38px;
            }

            &-label {
              color: #d8e7f8
            }

            .iconfont {
              font-size: 38px;
            }
          }
        }

        &:nth-child(1) {
          .item {
            &:nth-of-type(1) {
              .item-value {
                color: #fff;
              }

              .item-bar {
                &:after, &:before {
                  background-color: #fff;
                }
              }
            }

            &:nth-of-type(2) {
              .item-value {
                color: #1792e0;
              }

              .item-bar {
                &:after, &:before {
                  background-color: #1792e0;
                }
              }
            }

            &:nth-of-type(3) {
              .item-value {
                color: #69fffd;
              }

              .item-bar {
                &:after, &:before {
                  background-color: #69fffd;
                }
              }
            }
          }
        }

        &:nth-child(2) {
          .item {
            &:nth-of-type(1) {
              .item-value {
                color: #fff;
              }

              .item-bar {
                &:after, &:before {
                  background-color: #fff;
                }
              }
            }

            &:nth-of-type(2) {
              .item-value {
                color: #F5BB6E;
              }

              .item-bar {
                &:after, &:before {
                  background-color: #F5BB6E;
                }
              }
            }

            &:nth-of-type(3) {
              .item-value {
                color: #D78A41;
              }

              .item-bar {
                &:after, &:before {
                  background-color: #D78A41;
                }
              }
            }
          }
        }
      }
    }
  }

  &-right {
    display: grid;
    grid-template-columns: 112px 1fr;

    .right {
      display: grid;
      grid-template-columns: 1183px 1183px;

      &-content {
        display: grid;
        grid-template-rows: 650px 276px;

        .text {
          padding: 0 65px;
          box-sizing: border-box;
          font-size: 47px;

          .iconfont {
            font-size: 38px;
            margin: auto 0;
          }

          .t, .h {
            font-size: 38px;
            margin-bottom: 10px;
          }

          .bar {
            padding-left: 20px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            &:after {
              content: '';
              display: inline-block;
              position: absolute;
              margin-left: -25px;
              margin-top: 30px;
              width: 20px;
              height: 40px;
              border-bottom: 1px solid #4b75ff;
              border-left: 1px solid #4b75ff;
              //background-color: #4b75ff;
            }

            &:before {
              content: '';
              position: absolute;
              display: inline-block;
              width: 10px;
              margin-left: -29px;
              margin-top: 20px;
              height: 10px;
              background-color: #4b75ff;
            }
          }
        }

        &:nth-child(1) {
          .text {
            &:nth-child(1) {
              .bar {
                &:after,&:before{
                  background-color: #757575!important;
                  border-color: #757575!important;
                }
              }
            }
          }
        }
      }
    }
  }

  .val{
    color: #c0e5f7;
    font-size: 62px;
    margin-top: 20px;
    font-family: 'ZiHun';
  }

}
</style>
