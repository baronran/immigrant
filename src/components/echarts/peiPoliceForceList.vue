<template>
  <div class="item">
    <div class="title">{{ title }}</div>
    <div ref="policeForce" class="chart"></div>
    <div class="footer">
      <div class="left" v-for="(item,idex) in chartData">
        <div class="label">{{ item.name }}</div>
        <div class="ableWord">
          <div class="value">{{ item.value }}</div>
          <div class="flex flex-center align-center">
            <i :class="['iconfont',item.state==1?'icon-shangsheng':'icon-jiantouxiajiang']"></i>
            <div>{{ item.percentage }}</div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script setup>
import {ref, getCurrentInstance, onMounted, watch, onBeforeUnmount} from 'vue'

const {proxy} = getCurrentInstance()
const policeForce = ref()

let props = defineProps({
  chartData: {
    type: Array,
    default: [
      {name: '执勤警力', value: 21, state: 2, percentage: "6%"},
      {name: '备勤警力', value: 27, state: 1, percentage: "6%"},
      {name: '休假警力', value: 109, state: 1, percentage: "6%"},
      {name: '辅警数', value: 109, state: 1, percentage: "6%"},
    ],
    required: false,
  },
  colorOption:{
    default:['#2eb6d0','#0a94ff', '#e8e36d', '#bbdbf4'],
    type:Array,
  },
  chartOption: { },
  title: {
    type: String,
    default: '警力数'
  }
})
let chart = null


const initChart = () => {
  const chart = proxy.$echarts.init(policeForce.value)
  const policeForceList = props.chartData
  let num = 0
  num = policeForceList.reduce(function (prev, cur, index, arr) {
    cur = Number(cur.value)
    return prev + cur;
  }, 0)
  let option = {
    color: props.colorOption,
    title: {
      text: num,
      textStyle: {
        color: '#fff',
        fontSize: 82,
        fontFamily: 'QTYPECOND-BOOK'
      },
      left: 'center',
      top: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      //  中间
      {
        type: 'pie',
        radius: ['0', '40%'],
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
      //  内容环
      {
        type: 'pie',
        radius: ['45%', '70%'],
        hoverAnimation: false,
        avoidLabelOverlap: false,
        itemStyle: {
          borderColor: '#0A0F18',
          borderWidth: 20
        },
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: policeForceList,
      },
      //  内边框环
      {
        type: 'pie',
        radius: ['60%', '45%'],
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,0.6)',
          },
        },
        label: {
          show: false
        },
        z: 100,
        data: policeForceList,
      },
      //  最外环
      {
        type: 'pie',
        radius: ['80%', '85%'],
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
    ]
  };

  let newOption = Object.assign(option, props.chartOption)
  console.log(newOption);
  chart.setOption(newOption, true);
}

watch(() => props.chartData, (newVal, oldVal) => {
  // console.log('sssssssssss');
  if (props.chartData.length != 0) initChart()
}, {deep: true})

onMounted(() => {
  if (props.chartData.length != 0) initChart()
  //随着屏幕大小调节图表
  window.addEventListener("resize", () => {
    if (chart) chart.resize();
  });

})
onBeforeUnmount(() => {
  if (chart) chart.dispose()
})
</script>

<style scoped lang="scss">

.item {

  .chart{
    width: 100%;
    height:60%;
  }

  .title {
    margin: 0 auto;
    width: 830px;
    height: 90px;
    //background-color: #102335;
    font-size: 68px;
    text-align: center;
    font-family: ZiHun;
    align-items: center;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    background-image: linear-gradient(180deg,
        rgba(205, 227, 235, 0.15) 0%,
        rgba(205, 227, 235, 0.15) 100%);
    border-radius: 12px;

  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80%;
    justify-content: space-between;
    height: 280px;
    .iconfont {
      font-size: 48px;
    }

    .left {
      width: 360px;
      height: 110px;
      display: grid;
      //justify-content: space-between;
      font-size: 40px;
      align-items: center;
      padding-left: 20px;
      grid-template-columns: 0 240px auto;
      &:before {
        content: "";
        display: inline-block;
        width: 9px;
        height: 31px;
        background-color: #2eb6d0;
        position: relative;
        top: -40px;
        left: -24px;
      }

      .ableWord{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .value {
          font-family: QTypeCond-Book;
          font-size: 50px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #ffffff;
        }

        .flex {
          color: #ed9d22;
          font-weight: bold;
          font-size: 40px;
        }


      }

      &:nth-child(1) {
        background-image: linear-gradient(-90deg, rgba(10, 148, 255, 0) 0%, rgba(46, 182, 208, 0.5) 100%);
        border-left: 2px solid #2eb6d0;

        &:before {
          background-color: #2eb6d0;
        }

        .label {
          font-family: ZiHun;
          color: #2eb6d0
        }
      }

      &:nth-child(2) {
        background-image: linear-gradient(-90deg, rgba(10, 148, 255, 0) 0%, rgba(10, 148, 255, 0.5) 100%);
        border-left: 2px solid #0a94ff;

        &:before {
          background-color: #0a94ff;
        }

        .label {
          font-family: ZiHun;
          color: #0a94ff
        }
      }

      &:nth-child(3) {
        background-image: linear-gradient(-90deg, rgba(10, 148, 255, 0) 0%, rgba(239, 234, 113, 0.5) 100%);
        border-left: 2px solid rgb(239, 234, 113);

        &:before {
          background-color: rgb(239, 234, 113);
        }

        .label {
          font-family: ZiHun;
          color: rgb(239, 234, 113)
        }
      }

      &:nth-child(4) {
        background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(187, 219, 244, 0.5) 100%);
        border-left: 2px solid rgba(187, 219, 244, 1);

        &:before {
          background-color:rgba(187, 219, 244,1);
        }

        .label {
          font-family: ZiHun;
          color: rgba(187, 219, 244,1);
        }
      }
    }

  }

}


</style>
