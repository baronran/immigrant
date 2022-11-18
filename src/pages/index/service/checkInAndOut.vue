<template>
  <cal title="出入境人员检查" type="1" @open="open">
    <template v-slot:left>
      <div class="left-nav cursor-event on">本日</div>
      <div class="left-nav cursor-event">本月</div>
      <div class="left-nav cursor-event">本年</div>
    </template>
    <template v-slot:right>
      <div class="right-nav cursor-event on">全国</div>
      <div class="right-nav cursor-event">TOP口岸</div>
    </template>
    <template v-slot:content>
      <div class="legend-footer">
        <div class="left">
          <div>人员
            类别
          </div>
          <div>人员
            国籍
          </div>
          <div>人员
            目的
          </div>
        </div>
        <div class="right">
          <div ref="personnelCategory"></div>
          <div ref="personnelNationality"></div>
          <div ref="personnelPurpose"></div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'checkInAndOut'})
const {proxy} = getCurrentInstance()
// 人员类别
const personnelCategory = ref()
// 人员国籍
const personnelNationality = ref()
// 人员目的
const personnelPurpose = ref()

const renderChart = () => {
  const Category = proxy.$echarts.init(personnelCategory.value)
  const Nationality = proxy.$echarts.init(personnelNationality.value)
  const Purpose = proxy.$echarts.init(personnelPurpose.value)
  let option = {
    color: ['#e6fdb5', '#d5da60', '#f79914', '#b5f6fd', '#1a76e6'],
    xAxis: {
      type: 'value',
      show: false
    },
    grid: {
      top: 0,
      bottom: 0,
      containLabel: false
    },
    yAxis: {
      type: 'category',
      data: [{value: '入境', textStyle: {color: '#cfa244',fontFamily:'ZiHun', }}, {value: '出境', textStyle: {color: '#548fff',fontFamily:'ZiHun',}}],
      axisLabel: {
        fontSize: 39,
        margin:20
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 45

        },
        markLine: {
          lineStyle: {
            type: 'dashed'
          },
          data: [[{type: 'min'}, {type: 'max'}]]
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 45
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 45
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 45
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 45
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
  Category.setOption(option)
  Nationality.setOption(option)
  Purpose.setOption(option)
  setTimeout(() => renderChart(), 5000)
}



onMounted(() => {

  setTimeout(() => renderChart(), 1000)
})
</script>

<style scoped lang="scss">

.left-nav {
  width: 173px;
  height: 79px;
  line-height: 79px;
  background-color: rgba(117, 195, 255, .2);
  border-radius: 10px;
  border: solid 4px #87cbff;
  margin-right: 20px;
  opacity: .7;
  font-size: 50px;
  text-align: center;

  &:hover {
    opacity: 1;
  }
}

.right-nav {
  margin-left: 20px;
  width: 219px;
  height: 78px;
  line-height: 78px;
  background-color: rgba(42, 92, 255, .5);
  border-radius: 10px;
  border: solid 4px #4b75ff;
  opacity: .7;
  font-size: 50px;
  text-align: center;

  &:hover {
    opacity: 1;
  }
}

.legend {

  &-footer {
    padding-top: 180px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 137px 1fr;

    .left {
      font-size: 49px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      text-align: center;

        > div {
          display: flex;
          align-items: center;
          width: 137px;
          height: 158px;
          background-color: rgba(84, 143, 255, .4);
          border-radius: 10px;
          font-family: ZiHun;
        }
      }

    .right {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      text-align: center;

      > div {
        height: 208px;
      }
    }
  }
}

</style>
