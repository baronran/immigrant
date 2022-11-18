<template>
  <cal title="遣返遣送人员统计" type="1">
    <template v-slot:right>
    </template>
    <template v-slot:content>
      <div class="content">
        <div class="top">
          <div class="top-left flex">
            <i class="iconfont icon-shangsheng"></i>
            <div>人员总数</div>
          </div>
          <div class="top-right flex flex-end">
            <div>3602</div>
            <div>人</div>
          </div>
        </div>
        <div class="bottom">
          <div v-for="(item,index) in data" class="item">

            <div class="item-left">
              <img src="../../../assets/img/page/InAndOutFooting/1.png" alt="">
            </div>
            <div class="item-right">
              <div class="title">
                <div class="name">{{ item.content }}</div>
                <div class="value">{{ item.val }}</div>
              </div>
              <div class="text">
                <div class="t flex flex-between">
                  <div class="flex-start flex align-center">
                    <i class="iconfont icon-shangsheng"></i>
                    <div>同比</div>
                  </div>
                  <div>{{ item.ringRatio }}%</div>
                </div>
                <div class="h flex flex-between">
                  <div class="flex-start flex align-center">
                    <i class="iconfont icon-shangsheng"></i>
                    <div>环比</div>
                  </div>
                  <div>{{ item.yearOnYear }}%</div>
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
import {ref, getCurrentInstance, onMounted} from 'vue'
import apiJson from "../../../../public/apiJson/SentTheCount"


const {proxy} = getCurrentInstance()
const SentTheCountEcharts = ref()

let dateStatus = ref(0)
  function dateChange(index){
  dateStatus.value = index
  renderChart()
}
const data = ref(apiJson.data)
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

  const VALUE = [100, 200, 300, 400, 300, 200, 100];

  const charts = echarts.init(SentTheCountEcharts.value)

  let arr = [];
  let list = [];
  let series = [];
  let legend = [];
  let fontSize = 16;
  let barWidth = 46;
  let barGap = 0;
  let maxList = [];
  let max = 460; //背景最大值取y轴刻度线（最后注释部分）
  let colorStartList = ['transparent', 'transparent', 'transparent', 'transparent'];
  let colorLeftList = ['#000', '#000', '#000', '#000'];
  let colorTopList = ['#1E7EFF', '#d8a43b', '#6ACC29', '#9833FF'];
  let colorEndList = ['#4084EE', '#d8a43b', '#6ACC29', '#9833FF'];
  let chartObj = {
    series: [
      {name: '当前资源', data: [269, 460, 400, 170]},
      {name: '其他资源', data: [39, 50, 40, 100]},
    ],
    chartList: ['南宁', '崇左', '柳州', '来宾', '桂林', '梧州'],
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
        showBackground: true,
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
    title: {
      text: '',
      top: 20,
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 20,
      },
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      backgroundColor: 'rgba(116,176,222,0.3)',
      extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
      borderWidth: 0,
      confine: false,
      appendToBody: true,
      formatter: (params) => {
        ////console.log(params,'---paramsshopping')
        let result = "<div style='margin-bottom:5px;'>" + params[0].name + '</div>';
        params.forEach((item, index) => {
          var dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:${fontSize}px;height:${fontSize}px;background:${colorEndList[index]}"></span>`;
          result +=
              "<div style='display:flex;align-items:center;margin-bottom:5px'>" +
              dotHtml +
              item.seriesName +
              (item.seriesName ? "<span style='display:inline-block;margin-right:6px;'></span>" : '') +
              item.data +
              '</div>';
        });
        return result;
      },
      //轴触发提示才有效
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(35,49,77,0.01)',
        },
      },
      textStyle: {
        color: '#fff',
        fontSize: fontSize,
      },
    },
    grid: {
      top: fontSize * 3.5,
      left: 5,
      right: 5,
      bottom: fontSize,
      containLabel: true, //包括文本，居中
    },
    legend: {
      show: true,
      data: legend,
      selectedMode: false, //图例是否可以点击
      type: 'scroll',
      icon: 'circle',
      itemWidth: fontSize,
      itemHeight: fontSize,
      textStyle: {
        color: '#C3E3F9',
        fontSize: fontSize,
      },
    },
    xAxis: {
      data: chartObj.chartList,
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#2B72A1',
        },
      },
      axisLabel: {
        fontSize: fontSize,
        color: '#87CCFF',
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
        name: '单位',
        nameGap: fontSize * 1.5,
        nameTextStyle: {
          align: 'center',
          fontSize: fontSize,
          color: '#2869A9',
        },
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
          color: '#2869A9',
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

const open = () => {
  console.log('1')
}

onMounted(() => setTimeout(() => renderChart(), 1000))
</script>
内容

<style scoped lang="scss">
.content {
  padding-top: 90px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .top {
    width: 100%;
    height: 152px;
    background-image: linear-gradient(180deg, rgba(110, 184, 237, 0.3) 0%, rgba(103, 180, 236, 0.15) 7%, rgba(57, 159, 232, 0.06) 50%, rgba(27, 144, 229, 0) 78%, rgba(3, 133, 227, 0) 100%);
    font-size: 76px;
    display: flex;
    justify-content: space-between;
    font-family: QTYPECOND-BOOK;
    align-items: center;

    &-left {
      font-family: ZiHun;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .item {
      height: 295px;
      display: grid;
      margin: 20px 0;
      grid-template-columns: 290px 1fr;
      grid-column-gap: 102px;

      &-left {
        img {
          width: 290px;
        }
      }

      &-right {
        align-items: center;
        display: grid;
        grid-template-rows: 102px 1fr;

        .title {
          width: 100%;
          height: 102px;
          background-image: linear-gradient(-90deg, rgba(3, 133, 227, 0.3) 0%, rgba(3, 133, 227, 0) 100%);
          font-size: 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 80px 0 80px;
          box-sizing: border-box;

          .name {
            font-family: ZiHun;
          }

          .value {
            font-family: QTYPECOND-BOOK;
          }
        }

        .text {
          height: 100%;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          font-size: 40px;
          font-family: ZiHun;
          padding: 0 80px 0 80px;
          box-sizing: border-box;

          .iconfont {
            margin-top: -5px;
            font-size: 40px;
          }
        }
      }
    }
  }
}
</style>
