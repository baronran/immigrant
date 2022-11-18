<template :key="keys">
  <cal title="出入境人员流量" type="1">
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>
    </template>
    
    <template v-slot:content>
      <div ref="InAndOutOfTrafficEcharts" class="IllegalTrendEcharts"></div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {getRandom} from "../../../utils/util.js";
import apiJson from "../../../../public/apiJson/InAndOutOfTraffic"

const {proxy} = getCurrentInstance()
const InAndOutOfTrafficEcharts = ref()
const keys = ref(0)
let dateStatus = ref(0)


function andom(min, max, count) {
  let list = []
  new Array(count).forEach(i => list.push(Math.floor(Math.random() * (max - min)) + min))
  return list
}

function dateChange(index){
  dateStatus.value = index

  renderChart()
}

const renderChart = () => {
  let echarts = proxy.$echarts
  const offsetX = 20;
  const offsetY = 10;
  // 绘制左侧面
  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      // 会canvas的应该都能看得懂，shape是从custom传入的
      const xAxisPoint = shape.xAxisPoint;
      // console.log(shape);
      const c0 = [shape.x, shape.y];
      const c1 = [shape.x - offsetX, shape.y - offsetY];
      const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
      const c3 = [xAxisPoint[0], xAxisPoint[1]];
      ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
  });
  // 绘制右侧面
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;
      const c1 = [shape.x, shape.y];
      const c2 = [xAxisPoint[0], xAxisPoint[1]];
      const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
      const c4 = [shape.x + offsetX, shape.y - offsetY];
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
  });
  // 绘制顶面
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y];
      const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
      const c3 = [shape.x, shape.y - offsetX];
      const c4 = [shape.x - offsetX, shape.y - offsetY];
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
  });
  // 注册三个面图形
  echarts.graphic.registerShape('CubeLeft', CubeLeft);
  echarts.graphic.registerShape('CubeRight', CubeRight);
  echarts.graphic.registerShape('CubeTop', CubeTop);



  const charts = echarts.init(InAndOutOfTrafficEcharts.value)

  let arr = [];
  let list = [];
  let series = [];
  let legend = [];
  let fontSize = 43;
  let barWidth = 46;
  let barGap = 0;
  let maxList = [];
  let max = 460; //背景最大值取y轴刻度线（最后注释部分）
  let colorStartList = ['transparent', 'transparent', 'transparent', 'transparent'];
  let colorLeftList = ['#000', '#000', '#000', '#000'];
  let colorTopList = ['#1E7EFF', '#d8a43b'];
  let colorEndList = ['#4084EE', '#d8a43b'];
  let chineseCitizens = []; //中国公民检查集合
  let foreigners = []; //外国人集合
  let time = []; //时间集合
apiJson.data.map((index)=>{
   chineseCitizens.push(index.chineseCitizens)
   foreigners.push(index.foreigners)
   time.push(index.mouth)

})

  let chartObj = {
    series: [
      {name: '中国公民', data: chineseCitizens},
      {name: '外国人', data:foreigners},
    ],
    chartList: time,
  };

  function colorRgba(str, alpha) {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = str.toLowerCase();
    if (sColor == 'transparent') {
      return 'transparent';
    }
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = '#';
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //处理六位的颜色值
      var sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
      }
      return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
    } else {
      return sColor;
    }
  }

  if (chartObj.series && chartObj.series.length) {
    chartObj.series.forEach((ele, i) => {
      arr = arr.concat(ele.data);
    });
    maxList = chartObj.series[0].data.map(() => {
      return max;
    });
    list = chartObj.series[0].data.map((item, index) => {
      return 1;
    });
    chartObj.series.forEach((item, index) => {
      legend.push({
        name: item.name,
        itemStyle: {
          color: colorEndList[index % colorEndList.length],
        },
      });
      //背景顶部切片
      series.push({
        data: maxList,
        type: 'pictorialBar',
        barMaxWidth: fontSize * 3,
        itemStyle: {
          color: colorEndList[index],
          opacity: 0.1,
        },
        tooltip: {
          show: false,
        },
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [
          (-0.5 * (chartObj.series.length - 1) +
              index +
              -0.5 * barGap * 0.01 * (chartObj.series.length - 1) +
              barGap * 0.01 * index) *
          barWidth,
          '-50%',
        ],
        symbolSize: [barWidth, barWidth * 0.4],
        zlevel: -1,
      });
      //底部切片
      series.push({
        data: list,
        color: colorStartList[index % colorStartList.length],
        type: 'pictorialBar',
        tooltip: {
          show: false,
        },
        barMaxWidth: fontSize * 3,
        symbol: 'diamond',
        symbolOffset: [
          (-0.5 * (chartObj.series.length - 1) +
              index +
              -0.5 * barGap * 0.01 * (chartObj.series.length - 1) +
              barGap * 0.01 * index) *
          barWidth,
          '50%',
        ],
        symbolSize: [barWidth, barWidth * 0.5],
      });

      //实际数据顶部切片
      series.push({
        data: item.data,
        type: 'pictorialBar',
        tooltip: {
          show: false,
        },
        barMaxWidth: fontSize * 3,
        color: colorTopList[index],
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [
          (-0.5 * (chartObj.series.length - 1) +
              index +
              -0.5 * barGap * 0.01 * (chartObj.series.length - 1) +
              barGap * 0.01 * index) *
          barWidth,
          '-50%',
        ],
        symbolSize: [barWidth, barWidth * 0.4],
        zlevel: 2,
      });
      //实际数据侧边切片
      series.push({
        data: item.data,
        type: 'pictorialBar',
        tooltip: {
          show: false,
        },
        barMaxWidth: fontSize * 3,
        color: {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'transparent',
            },
            {
              offset: 0.2,
              color: colorRgba(colorLeftList[index % colorLeftList.length], 0.2),
            },
            {
              offset: 1,
              color: colorRgba(colorLeftList[index % colorLeftList.length], 0.3),
            },
          ],
        },
        symbolPosition: 'end',
        symbol: 'rect',
        symbolSize: [barWidth / 2, '100%'],
        symbolOffset: [
          (-0.5 * (chartObj.series.length - 1) +
              index +
              -0.5 * barGap * 0.01 * (chartObj.series.length - 1) +
              barGap * 0.01 * index -
              0.25) *
          barWidth,
          0,
        ],
        zlevel: 1,
      });
      //柱子
      series.push({
        data: item.data,
        type: 'bar',
        name: item.name,
        barGap: barGap + '%',
        barWidth: barWidth,
        barMaxWidth: fontSize * 3,
        label: {
          show: false,
          position: 'top',
          distance: fontSize * 0.3,
          textStyle: {
            color: colorEndList[index % colorEndList.length],
            fontSize: fontSize,
          },
          // formatter: function (a, b) {
          //     return a.value==0?'':a.value;
          // },
        },
        // showBackground: true,
        backgroundStyle: {
          color: {
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 0,
                color: colorStartList[index % colorStartList.length],
              },
              {
                offset: 0.2,
                color: colorRgba(colorEndList[index % colorEndList.length], 0.2),
              },
              {
                offset: 1,
                color: colorRgba(colorEndList[index % colorEndList.length], 1),
              },
            ],
          },
          opacity: 0.1,
        },
        itemStyle: {
          color: {
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 0,
                color: colorStartList[index % colorStartList.length],
              },
              {
                offset: 0.2,
                color: colorRgba(colorEndList[index % colorEndList.length], 0.2),
              },
              {
                offset: 1,
                color: colorRgba(colorEndList[index % colorEndList.length], 1),
              },
            ],
          },
        },
      });
    });
  }
  let option = {
    
    // backgroundColor: "#061326",
    grid: {
      right: 150,
      top: 230,
      left: 120,
      // bottom: 120
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        // color: '#fff',
        fontSize: 46,
      },
    },
    title: {
      text: '',
      top: 20,
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 20,
      },
    },
    // grid: {
    //   top: fontSize * 3.5,
    //   left: 5,
    //   right: 5,
    //   bottom: fontSize,
    //   containLabel: true, //包括文本，居中
    // },
    legend: {
      top: 12,
      show: true,
      data: legend,
      selectedMode: false, //图例是否可以点击
      itemGap: 50,
      itemWidth: fontSize,
      itemHeight: fontSize,
      textStyle: {
        color: '#ffffff',
        fontSize: fontSize,
        padding: [0, 0, 0, 20]
      },
    },
    xAxis: {
      data: chartObj.chartList,
      type: 'category',

      axisLabel: {
        fontSize: fontSize,
        margin:30,
        textStyle: {
          fontSize:43,
          color:'#ffffff',
          fontFamily:'ZiHun',
        },
      },
      axisLine: {
        lineStyle: {
          color: "#4078de",
          width: 2.5
        }
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      interval: 0,
    },
    yAxis: [
      {
        type: 'value',
        // name: '单位',
        nameGap: fontSize * 1.5,
        // nameTextStyle: {
        //   align: 'center',
        //   fontSize: fontSize,
        //   color: '#2869A9',
        // },
        splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
          },
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          margin: 10,
          fontSize: fontSize,
          color: '#ffffff',
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#2869A9',
          },
        },
      },
    ],
    series: series,
  };

  charts.setOption(option)
}

// setInterval(() => keys.value++, 5000)
onMounted(() => renderChart())
</script>

<style scoped lang="scss">

.IllegalTrendEcharts {
  flex: 1;
  display: block;
  height: 100%;
  width: 100%;
}

.nav {
  margin-left: 20px;
  width: 219px;
  height: 78px;
  background-color: rgba(42, 92, 255, .5);
  border-radius: 10px;
  border: solid 4px #4b75ff;
  opacity: .7;
  font-size: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
