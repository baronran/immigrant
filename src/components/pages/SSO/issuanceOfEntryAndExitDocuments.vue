<template>
  <cal title="出入境证件签发" type="1">
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>
    </template>
    <!-- <template v-slot:right>
      <div class="right-nav cursor-event on">入境 (2323)</div>
      <div class="right-nav cursor-event">出境 (2323)</div>
    </template> -->
    <template v-slot:content>
      <div class="echarts" ref="personnelCategory"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import apiJson from "../../../../public/apiJson/issuanceOfEntryAndExitDocuments"

const {proxy} = getCurrentInstance()
const personnelCategory = ref()
const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'issuanceOfEntryAndExitDocuments'})

let dateStatus = ref(0)
function dateChange(index){
  dateStatus.value = index
  renderChart()
}
const renderChart = () => {
const myCharts = proxy.$echarts.init(personnelCategory.value)
const data = apiJson.data
let allSum = 0;
apiJson.data.map((index)=>{
  allSum+=index.value
})

  let center = ['50%', '60%']
  myCharts.setOption({
    color: ['#0080f7', '#F4A7A8', '#009E95', '#fff', '#FFEA8F', '#757575'],
    title: {
      text: allSum,
      left: 'center',
      top: '55%',
      textStyle: {
        fontSize: 78,
        color: '#fff',
        fontFamily: 'QTYPECOND-BOOK'
      },
      subtext: '件',
      subtextStyle: {
        fontSize: 58,
        fontFamily: 'ZiHun'
      }
    },
    grid: {
      top: 190,
    },
    series: [
      {
        type: 'pie',
        radius: ['85%', '90%'],
        center,
        hoverAnimation: false,
        avoidLabelOverlap: false,
        itemStyle: {
          color: '#091D2C',
        },
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [100],
      },
      {
        type: 'pie',
        radius: ['0%', '48%'],
        center,
        hoverAnimation: false,
        avoidLabelOverlap: false,
        itemStyle: {
          color: '#091D2C',
        },
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [100],
      },
      {
        type: 'pie',
        radius: ['55%', '70%'],
        center,
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,0.6)',
          },
        },
        label: {
          show: false
        },
        z: 100,
        data,
      },
      {
        type: 'pie',
        radius: ['55%', '80%'],
        center,
        itemStyle: {
          borderColor: '#091524',
          borderWidth: 20
        },
        label: {
          alignTo: 'edge',
          formatter: [
            '{name|{b}} {time|{c}}{unit|本}',
            '{label|同比}{rate|{d}%} {label|环比}{rate| {@chainRatio}% } ',
          ].join('\n'),
          minMargin: 5,
          edgeDistance: 50,
          lineHeight: 50,
          rich: {
            label: {
              fontFamily: 'ZiHun',
              fontSize: 40,
              color: '#b09469'
            },
            time: {
              fontSize: 50,
              fontFamily: 'QTYPECOND-BOOK',
              color: '#fff',
              marginLeft: 50
            },
            unit: {
              fontFamily: 'ZiHun',
              fontSize: 30,
              color: '#fff',
            },
            name: {
              fontFamily: 'ZiHun',
              fontSize: 40,
              color: '#2494e3',
              margin: [0, 50]
            },
            rate: {
              fontSize: 40,
              fontFamily: 'QTYPECOND-BOOK',
              color: '#b09469'
            }
          }
        },
        labelLine: {
          length: 25,
          length2: 0,
          maxSurfaceAngle: 1200,
          lineStyle: {
            width: 5
          }
        },
        data,
      },
    ]
  })
  setTimeout(() => renderChart(), 5000)
}

onMounted(() => renderChart())
</script>

<style scoped lang="scss"></style>
