<template>
  <div class="checkInAndOut">
    <z-title title="出入境人员国籍排名"></z-title>
    <div class="legend">
      <div class="legend-left">
        <div class="flex flex-center align-center">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
      <div class="legend-right">
        <div class="flex flex-center align-center">入境 (2323)</div>
        <div class="flex flex-center align-center">处境 (2323)</div>
      </div>
    </div>
    <div ref="personnelCategory"></div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";

const { proxy } = getCurrentInstance();
const personnelCategory = ref();

const renderChart = () => {
  const myCharts = proxy.$echarts.init(personnelCategory.value);

  myCharts.setOption({
    color: ["#cce0ff", "#ffae33", "#FF8A8A"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    legend: {
      data: ["美国", "美国", "美国"],
    },
    xAxis: [
      {
        type: "category",
        data: [
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
          "美国",
        ],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        axisLabel: {
          show: true,
          textStyle: {
            color: "#c3dbff", //更改坐标轴文字颜色
            fontSize: 52, //更改坐标轴文字大小
          },
        },
      },
      {
        type: "value",
      },
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "人数",
        type: "bar",
        barWidth: 30,
        data: [
          100,95,85,75,65,55,45,35,25,15
        ],
      },

      {
        name: "比重",
        barWidth: 30,
        type: "line",
        data: [
          50,35,65,55,75,25,19,35,10,15
        ],
      },
    ],
  });
  setTimeout(() => renderChart(), 5000)
};

onMounted(() => renderChart());
</script>

<style scoped lang="scss">
.checkInAndOut {
  display: grid;
  grid-template-rows: repeat(2, auto) 767px;
  grid-row-gap: 52px;

  .legend {
    display: flex;
    justify-content: space-between;
    font-size: 50px;

    &-left {
      display: flex;
      justify-content: flex-start;

      > div {
        width: 173px;
        height: 79px;
        background-color: #75c3ff;
        border-radius: 10px;
        border: solid 4px #87cbff;
        margin-right: 20px;
      }
    }

    &-right {
      display: flex;

      > div {
        margin-left: 20px;
        padding: 0 15px;
        box-sizing: border-box;
        height: 78px;
        background-color: #2a5cff;
        border-radius: 10px;
        border: solid 4px #4b75ff;
      }
    }
  }
}
</style>
