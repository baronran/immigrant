<template>
  <cal :title=title>
    <template v-slot:content>
      <div class="TNOLP">
        <div ref="TNOLPEcharts"></div>
        <div class="TNOLP-content">
          <div class="item" v-for="(item,index) in gaugeData">
            <div class="flag"> <div></div></div>
            <div>{{item.name}}</div>
            <div>{{item.value}}</div>
          </div>
       
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import apiJson from "../../../../public/apiJson/TheNumberOfLeadingPoints"
import apiJson2 from "../../../../public/apiJson/WWRAHCIIF"

const {proxy} = getCurrentInstance()
const gaugeData = ref([]);

let title = ref("");
switch(proxy.$router.currentRoute.value.fullPath){
   case "/Stand/SOEAEA":
     gaugeData.value = apiJson2.data
     title.value = "立案处理违法违规外国人事件"
      break;
   case "/Stand/SCSIBJ":
     gaugeData.value = apiJson.data
     title.value = "前出点位数"
      break;
   case "/Bureau/SOEAEA":
     gaugeData.value = apiJson2.data
     title.value = "立案处理违法违规外国人事件"
      break;
   case "/Bureau/SCSIBJ":
     gaugeData.value = apiJson.data
     title.value = "前出点位数"
      break;       
     
}


const TNOLPEcharts = ref()
const renderChart = () => {
  const charts = proxy.$echarts.init(TNOLPEcharts.value)
 

  const startAngle = -270
  const endAngle = 0
  const option = {
    
    series: [
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 400,
        clockwise: false,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'rgb(13,132,255)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(13,132,255,.3)']],
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 120
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData.value,
        title: {
          show: false,
          fontSize: 34
        },
        detail: {
          show: false
        }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 350,
        clockwise: false,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'rgba(121,221,236)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(121,221,236,.3)']],
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 120
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData.value,
        title: {
          show: false,
          fontSize: 34
        },
        detail: {
          show: false
        }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 300,
        clockwise: false,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'rgb(204,177,124)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(204,177,124,.3)']],
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 120
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData.value,
        title: {
          show: false,
          fontSize: 34
        },
        detail: {
          show: false
        }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 250,
        clockwise: false,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'rgb(229,238,255)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(229,238,255,.3)']],
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 120
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData.value,
        title: {
          show: false,
          fontSize: 34
        },
        detail: {
          show: false
        }
      },
      {
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 200,
        clockwise: false,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'rgb(104,120,152)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(104,120,152,.3)']],
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 120
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData.value,
        title: {
          show: false,
          fontSize: 34
        },
        detail: {
          show: false
        }
      },
      {
        
        type: 'gauge',
        startAngle,
        endAngle,
        radius: 150,
        clockwise: false,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'rgb(53,86,150)',
            borderWidth: 5,
            borderColor: 'rgba(17, 136, 255, .01)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [[1, 'rgba(53,86,150,.3)']],
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 120
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData.value,
        title: {
          show: false,
          fontSize: 34
        },
        detail: {
          show: false
        }
      },
    ]
  };
  charts.setOption(option)
  setTimeout(() => renderChart(), 5000)
}

const open = () => {
  console.log('1')
}

onMounted(() => renderChart())
</script>

<style scoped lang="scss">
.TNOLP {
  height: 100%;
  display: grid;
  grid-template-columns:1fr 700px;
  padding-left: 20px;
  box-sizing: border-box;

  &-content {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 80px 0px;
    box-sizing: border-box;
    align-content: center;

    .item {
      display: grid;
      grid-template-columns: 50px repeat(2, auto);
      grid-column-gap: 30px;
      font-size: 56px;
      font-family: QTYPECOND-BOOK;
      border-bottom: 1px solid rgba(255, 255, 255, .2);
      justify-content: space-between;

      &::before, &::after {
        width: 30px;
        height: 5px;
        content: '';
        display: inline-block;
        position: absolute;
        background-color: #eeeeee;
      }
      &::after {
        margin-top: 80px;
        margin-left: 700px;
      }
      &::before {
        margin-top: 80px;
        margin-left: 0px;
      }

      &:nth-of-type(1) .flag {
        border: 7px #0d84ff solid;
        >div{
          background-color: #0d84ff;
        }

      }

      &:nth-of-type(2) .flag {
        border: 7px #71e2f3 solid;
        >div{
          background-color: #71e2f3;
        }

      }

      &:nth-of-type(3) .flag {
        border: 7px #ccb17c solid;
        >div{
          background-color: #ccb17c;
        }

      }

      &:nth-of-type(4) .flag {
        border: 7px #e5eeff solid;
        >div{
          background-color: #e5eeff;
        }

      }

      &:nth-of-type(5) .flag {
        border: 7px #687898 solid;
        >div{
          background-color: #687898;
        }

      }

      &:nth-of-type(6) .flag {
        border: 7px #355696 solid;
        >div{
          background-color: #355696;
        }

      }
    }



    .flag {
      width: 50px;
      height: 50px;
      //border: 7px red solid;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      >div{
        width: 33px;
        height: 33px;
        margin: auto 0;
        border-radius: 50%;
        background-color: #4b75ff;
      }
    }
  }
}


</style>
