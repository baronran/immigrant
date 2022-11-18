<template>
  <cal title="出入境人员检查" bk="lg">
    <template v-slot:content>
      <div class="AccessToCheck">
        <div class="AccessToCheck-left">
          <div class="label">人员类别</div>
          <div ref="BorderPoliceEcharts" id="container">1</div>
        </div>
        <div class="AccessToCheck-right">
          <div class="label">人员目的</div>
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

highchartsMore(Highcharts);
highcharts3d(Highcharts)
funnel3d(Highcharts)
const {proxy} = getCurrentInstance();

const renderChart = () => {
  const option = {
    backgroundColor: 'rgba(0,0,0,.01)',
    chart: {
      type: 'pie',
      backgroundColor: {

      },
      options3d: {
        enabled: true,
        alpha: 75,
        beta: 0
      }
    },
    title: {
      text: '',
      show: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        depth: 135,
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: '浏览器占比',
      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
      ]
    }]
  }
  Highcharts.chart('container', option);
};

onMounted(() => renderChart());
</script>

<style scoped lang="scss">
.AccessToCheck {
  display: grid;
  grid-template-columns: 2117px 1fr;


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
  }

  &-right {

  }
}
</style>
