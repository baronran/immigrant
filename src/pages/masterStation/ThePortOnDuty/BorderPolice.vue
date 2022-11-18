<template>
  <cal title="边防检查执勤警力" bk="lg">
    <template v-slot:content>
      <div class="BorderPolice">
        <div class="left">
          <div class="item">
            <div class="item-top">
              <div class="flex flex-center align-center">
                <i class="iconfont icon-jingli"></i>
                <div>动用装备数</div>
                <i class="iconfont icon-youjiantou"></i>
              </div>
              <div>21241</div>
            </div>
            <div class="item-bottom">
              <div class="t flex flex-center">
                <div>同比</div>
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
              <div class="h flex flex-center">
                <div>同比</div>
                <i class="iconfont icon-jiantouxiajiang"></i>
                <div>5%</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="flex flex-center align-center">
                <i class="iconfont icon-jingli"></i>
                <div>动用装备数</div>
                <i class="iconfont icon-youjiantou"></i>
              </div>
              <div>21241</div>
            </div>
            <div class="item-bottom">
              <div class="t flex flex-center">
                <div>同比</div>
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
              <div class="h flex flex-center">
                <div>同比</div>
                <i class="iconfont icon-jiantouxiajiang"></i>
                <div>5%</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="flex flex-center align-center">
                <i class="iconfont icon-jingli"></i>
                <div>动用装备数</div>
                <i class="iconfont icon-youjiantou"></i>
              </div>
              <div>21241</div>
            </div>
            <div class="item-bottom">
              <div class="t flex flex-center">
                <div>同比</div>
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
              <div class="h flex flex-center">
                <div>同比</div>
                <i class="iconfont icon-jiantouxiajiang"></i>
                <div>5%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="echarts" ref="BorderPoliceEcharts"></div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from "vue";

const {proxy} = getCurrentInstance();
const BorderPoliceEcharts = ref();

const renderChart = () => {
  const myCharts = proxy.$echarts.init(BorderPoliceEcharts.value);

  let data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
  let data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
  let datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市'];
  let option = {
    color: ['#0ce9ff', '#3195fd', '#eef7ff'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: '8%',
      itemWidth: 90,
      itemHeight: 50,
      itemGap: 30,
      textStyle: {
        fontSize: 56,
        color: '#fff'
      }
    },
    grid: { //图表的位置
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    yAxis: [{
      type: 'value',
      axisLabel: {
        show: true,
        fontSize: 56,
        interval: 'auto',
        formatter: '{value} '
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      },
      show: true

    }],
    xAxis: [{
      type: 'category',
      axisLabel: {
        interval: 0,
        show: true,
        splitNumber: 15,
        textStyle: {
          fontSize: 56,
        },
      },
      data: datacity,
    }],
    series: [
      {
        name: '执勤警力',
        type: 'bar',
        stack: 'sum',
        barWidth: 50,
        data: data1

      },
      {
        name: '备勤警力',
        type: 'bar',
        barWidth: 50,
        stack: 'sum',
        data: data2,
      },
      {
        name: '其他',
        type: 'bar',
        barWidth: 50,
        stack: 'sum',
        data: data2,
      }
    ]
  };
  myCharts.setOption(option);
  setTimeout(() => renderChart(), 5000)
};

onMounted(() => renderChart());
</script>

<style scoped lang="scss">
.BorderPolice {
  height: 100%;
  display: grid;
  grid-template-columns: 750px 1fr;
  grid-row-gap: 170px;

  .left {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 50px 0;
    box-sizing: border-box;

    .item {
      width: 747px;
      height: 217px;
      background-image: url("../../../assets/img/page/InAndOutFooting/5.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 30px 38px 0 38px;
      box-sizing: border-box;
      color: #cedaee;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      &-top {
        font-size: 52px;
        display: flex;
        justify-content: space-between;
        font-family: ZiHun;

        .icon-jingli {
          font-size: 48px;
          margin: auto 20px;
        }

        .icon-youjiantou {
          color: #358ad9;
          margin: auto 20px;
        }
      }

      &-bottom {
        display: flex;
        justify-content: flex-start;
        font-size: 36px;

        > div {
          margin-right: 50px;
        }

        .iconfont {
          font-size: 36px;
          margin: auto 0;
        }
      }
    }
  }

  .right {

    .echarts {
      display: flex;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
