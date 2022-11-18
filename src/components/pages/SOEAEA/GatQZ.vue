<template>
  <!--  <div class="GatQZ">-->
  <!--    <z-title title="港澳台签注" @click="open"></z-title>-->
  <!--    <div class="legend">-->
  <!--      <div class="legend-right">-->
  <!--        <div class="flex flex-center align-center on">港澳签注</div>-->
  <!--      </div>-->
  <!--      <div class="legend-left">-->
  <!--        <div class="flex flex-center align-center on">日</div>-->
  <!--        <div class="flex flex-center align-center">月</div>-->
  <!--        <div class="flex flex-center align-center">年</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="GatQZ-content" ref="GAQZEcharts"></div>-->
  <!--    <div class="legend">-->
  <!--      <div class="legend-right">-->
  <!--        <div class="flex flex-center align-center on">台湾签注</div>-->
  <!--      </div>-->
  <!--      <div class="legend-left">-->
  <!--        <div class="flex flex-center align-center on">日</div>-->
  <!--        <div class="flex flex-center align-center">月</div>-->
  <!--        <div class="flex flex-center align-center">年</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="TWQZ-footer" ref="TWQZEcharts"></div>-->
  <!--  </div>-->

  <cal title="港澳台签注">
    <template v-slot:content>
      <div class="GatQZ">
        <div class="legend">
          <div class="legend-right">
            <div class="flex flex-center align-center on">港澳签注(2323)</div>
          </div>
          <div class="legend-left">
            <div class="left-nav cursor-event" :class="{'on':GdateStatus==idex}"  @click="GdateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>

          </div>
        </div>
        <div class="content" ref="GAQZEcharts"></div>
        <div class="legend">
          <div class="legend-right">
            <div class="flex flex-center align-center on">台湾签注(2323)</div>
          </div>
          <div class="legend-left">
            <div class="left-nav cursor-event" :class="{'on':TdateStatus==idex}"  @click="TdateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>

          </div>
        </div>
        <div class="footer" ref="TWQZEcharts"></div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import apiJson from "../../../../public/apiJson/GatQZ"



const {proxy} = getCurrentInstance()
const GAQZEcharts = ref()
const TWQZEcharts = ref()

let GAQZEchartsData = ref([])
let TWQZEchartsData = ref([])
let GAQZEchartstime = ref([])
let TWQZEchartstime = ref([])
let GAQZEchartsyearOnYear = ref([])
let GAQZEchartsringRatio = ref([])
let TWQZEchartsDatayearOnYear = ref([])
let TWQZEchartsDataringRatio = ref([])

let GdateStatus = ref(0)
let TdateStatus = ref(0)

function GdateChange(index){
  GdateStatus.value = index

  renderChart()
}

function TdateChange(index){
  TdateStatus.value = index

  renderChart()
}






apiJson.data.HongKongandMacaovisa.map((index)=>{
    GAQZEchartstime.value.push(index.mouth)
    GAQZEchartsData.value.push(index.value)
    GAQZEchartsyearOnYear.value.push(index.yearOnYear)
    GAQZEchartsringRatio.value.push(index.ringRatio)
})

apiJson.data.Taiwanendorsement.map((index)=>{
  TWQZEchartstime.value.push(index.mouth)
  TWQZEchartsData.value.push(index.value)
  TWQZEchartsData.value.push(index.value)
  TWQZEchartsDatayearOnYear.value.push(index.yearOnYear)
  TWQZEchartsDataringRatio.value.push(index.ringRatio)
})



const renderChart = () => {
  const GAQZ = proxy.$echarts.init(GAQZEcharts.value)
  const TWQZ = proxy.$echarts.init(TWQZEcharts.value)
  GAQZ.setOption({
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    color: ['#ffffff', '#0064ff', '#ffb125'],
    grid: {
      top: '15%',
      left: '3%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    legend: {
      top: '0%',
      // left: 0,
      textStyle: {
        fontSize: 56,
        color: '#fff',
        padding:[0,0,0,20]
      },
      itemWidth: 80,
      itemHeight: 10,
      itemGap: 50,

      // icon: 'roundRect'
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 43,
          color: '#fff',
          formatter: '{value}'
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#4078de',
            width: 3
          },
        },
        // prettier-ignore
        data: GAQZEchartstime.value
      }
    ],
    yAxis: [
      {
        type: 'value',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#7fb5f8',
            // opacity: .2
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 43,
        }
      },
      {
        type: 'value',
        // name: '签注数',
        // alignTicks: true,
        // nameTextStyle: {
        //   fontSize: 43,
        //   color: '#fff',
        //   padding: [3, 4, 50, -16]
        // },
        position: 'right',
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          fontSize: 43,
          color: '#fff',
          formatter: '{value}%'
        },
        axisTick: {
          show: true,
          length: 15,
          inside: true,
          lineStyle: {
            width: 2,
            color: '#fff'
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            dashOffset: 125,
            color: 'rgba(127, 181, 248, .4)'
          }
        }
      }
    ],
    series: [
      {
        name: '签注数',
        type: 'line',
        // stack: 'Total',
        // emphasis: {
        //   focus: 'series'
        // },
        yAxisIndex: 0,
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 255, 255,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(255, 255, 255,0)'
            }
          ])
        },
        data: GAQZEchartsData.value
      },
      {
        name: '同比',
        type: 'line',
        // stack: 'Total',
        yAxisIndex: 1,
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0,255,241,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(0,100,255,0)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: GAQZEchartsringRatio.value
      },
      {
        name: '环比',
        type: 'line',
        // stack: 'Total',
        yAxisIndex: 1,
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255,97,37,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(255,97,37,0)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: GAQZEchartsyearOnYear.value
      },

    ]
  })
  TWQZ.setOption({
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    color: ['#ffffff', '#0064ff', '#ffb125'],
    grid: {
      top: '15%',
      left: '3%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    legend: {
      top: '0%',
      // left: 0,
      textStyle: {
        fontSize: 56,
        color: '#fff',
        padding:[0,0,0,20]
      },
      itemWidth: 80,
      itemHeight: 10,
      itemGap: 50,

      // icon: 'roundRect'
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontSize: 43,
          color: '#fff',
          formatter: '{value}'
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#4078de',
            width: 3
          },
        },
        // prettier-ignore
        data: TWQZEchartstime.value
      }
    ],
    yAxis: [
      {
        type: 'value',
        // name: '伤亡数',
        // alignTicks: true,
        // nameTextStyle: {
        //   fontSize: 43,
        //   color: '#fff',
        //   padding: [3, 4, 50, -16]
        // },
        position: 'left',
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          fontSize: 43,
          color: '#fff',
          formatter: '{value}'
        },
        axisTick: {
          show: true,
          length: 15,
          inside: true,
          lineStyle: {
            width: 2,
            color: '#fff'
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            dashOffset: 125,
            color: 'rgba(127, 181, 248, .4)'
          }
        }
      },
      {
        type: 'value',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#7fb5f8',
            // opacity: .2
          }
        },
        axisLabel: {
          show: true,
          fontSize: 43,
          color: '#fff',
          formatter: '{value}%'
        },
      }
    ],
    series: [
      {
        name: '签注数',
        type: 'line',
        // stack: 'Total',
        yAxisIndex: 0,
        // emphasis: {
        //   focus: 'series'
        // },
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 255, 255,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(255, 255, 255,0)'
            }
          ])
        },
        data: TWQZEchartsData.value
      },
      {
        name: '同比',
        type: 'line',
        // stack: 'Total',
        yAxisIndex: 1,
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0,100,255,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(0,100,255,0)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: TWQZEchartsDatayearOnYear.value
      },
      {
        name: '环比',
        type: 'line',
        // stack: 'Total',
        yAxisIndex: 1,
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255,177,37,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(255,177,37,0)'
            }
          ])
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: TWQZEchartsDataringRatio.value
      },
    ]
  })
}


onMounted(() => renderChart())
</script>

<style scoped lang="scss">
.GatQZ {
  display: grid;
  grid-template-rows: 200px 950px 200px 950px;
  //grid-row-gap: 80px;

  .legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;

    .on {
      opacity: 1;
    }

    &-left {
      display: flex;
      justify-content: flex-start;

      > div {
        width: 173px;
        height: 79px;
        background-color: rgba(117, 195, 255, .2);
        border-radius: 10px;
        border: solid 4px #87cbff;
        margin-right: 20px;
        opacity: .7;
      }
    }

    &-right {
      display: flex;

      > div {
        margin-left: 20px;
        //width: 219px;
        padding: 0 15px;
        box-sizing: border-box;
        height: 78px;
        background-color: rgba(42, 92, 255, .5);
        border-radius: 10px;
        border: solid 4px #4b75ff;
        opacity: .7;
      }
    }

    &-footer {
      display: grid;
      grid-template-columns: 137px 1fr;

      .left {
        font-size: 49px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;

        > div {
          display: flex;
          align-items: center;
          width: 137px;
          height: 158px;
          background-color: rgba(84, 143, 255, .4);
          border-radius: 10px;
        }
      }

      .right {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;

        > div {
          height: 208px;
        }
      }
    }
  }
}

</style>
