<template>
  <div ref="echartsMap" class="EChartsMap"></div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import * as Echarts from "echarts";
import mapTexture from "./map/img/map5.jpg";
import china from '../../assets/JSON/china.json'

const {proxy} = getCurrentInstance()
let props = defineProps({
  chartData: {
    type: Array,
    default: [
      {name: '天津', labName: '天津', value: 48},
      {name: '湖北', labName: '湖北', value: 2},
    ]
  },
  chartOption: {},
})
const echartsMap = ref()
const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'nationalityRanking'})
let chart = null

const renderChart = () => {
  const echarts = proxy.$echarts
  const myCharts = proxy.$echarts.init(echartsMap.value)
  echarts.registerMap('china', china);

  var mapName = 'china';
  var data = props.chartData;

  var geoCoordMap = {};

  /*获取地图数据*/

  var mapFeatures = Echarts.getMap(mapName).geoJson.features;
  mapFeatures.forEach(function (item) {
    // 地区名称
    var name = item.properties.name;
    // 地区经纬度
    geoCoordMap[name] = item.properties.cp;
  });

  var pointData = []
  let max = 10;
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name.replace('省', '')];
    max += Number(data[i]['value'])
    if (geoCoord) {
      pointData.push({
        name: data[i].name.replace('省', ''),//
        // name:data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  // console.log(pointData, '-----');
  let option = {
    tooltip: {
      show: false,
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      // show: true,
      right: '5%',
      top: 5,
      bottom: '10%',
      left: '10%',
    },
    // graphic: {
    //   elements: [
    //     {
    //       type: 'image',
    //       zlevel: 0,
    //       style: {
    //         image: back,
    //         width: 10240,
    //         height: 4320,
    //       },
    //     }
    //   ]
    // },
    geo: [
      {
        map: mapName,
        zlevel: -1,
        zoom: 1.0,
        silent: true,
        layoutCenter: ['50%', '50%'],
        layoutSize: '100%',
        roam: false,
        itemStyle: {
          normal: {
            borderColor: 'rgba(192,245,249,.8)',
            borderWidth: 3,
            shadowColor: '#6FFDFF',
            shadowOffsetY: 0,
            shadowBlur: 10,
            // areaColor: 'rgba(29,85,139,.6)',
          },
        },
        label: {
          normal: {
            //静态的时候展示样式
            show: false, //是否显示地图省份得名称
            textStyle: {
              color: '#fff',
              fontSize: 12,
              fontFamily: 'Arial',
            },
          },
          emphasis: {
            //动态展示的样式
            show: false,
            color: '#fff',
          },
        },
      },
      {
        show: true,
        map: mapName,
        zoom: 1.0,
        layoutCenter: ['50%', '50%'],
        layoutSize: '100%',
        label: {
          normal: {
            //静态的时候展示样式
            show: false, //是否显示地图省份得名称
            textStyle: {
              color: '#fff',
              fontSize: 12,
              fontFamily: 'Arial',
            },
          },
          emphasis: {
            //动态展示的样式
            color: '#fff',
          },
        },

        blur: {
          label: {show: true, color: '#000'},
        },
        roam: false, // 是否开启鼠标滚轮缩放
        itemStyle: {
          normal: {
            label: {
              show: true,
              color: '#fff',
            },
            color: '#fff',
            borderColor: '#32CBE0',
            borderWidth: 1.5,
            // areaColor: {
            //   type: 'linear-gradient',
            //   x: 0,
            //   y: 1000,
            //   x2: 0,
            //   y2: 0,
            //   colorStops: [
            //     {
            //       offset: 0.5,
            //       color: '#0D59C1', // 0% 处的颜色
            //     },
            //     {
            //       offset: 1,
            //       color: '#53C9C7', // 100% 处的颜色
            //     },
            //   ],
            //   global: true, // 缺省为 false
            // },
            // areaColor: { // 旧版本才可以在颜色中使用图片
            //   image: mapTexture,
            //   repeat: 'no-repeat'
            // },
          },
          emphasis: {
            label: {
              show: true,
              color: '#fff',
            },
            borderWidth: 3,
            borderColor: 'rgba(255, 230, 175,0.8)',
            shadowColor: 'rgba(255, 230, 175,0.5)',
            shadowBlur: 30,
            textStyle: {
              color: '#fff',
              fontSize: 12,
              backgroundColor: 'transparent',
            },
            areaColor: new Echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#1cfbfe',
                  },
                  {
                    offset: 1,
                    color: '#3348e7',
                  },
                ],
                false
            ),
          },
        },
      },
      {
        type: 'map',
        map: mapName,
        zlevel: -2,
        zoom: 1.0,
        layoutCenter: ['50%', '51.4%'],
        layoutSize: '100%',
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderColor: 'rgba(35, 161, 184,0.5)',
            shadowColor: 'rgba(35, 161, 184,0.8)',
            shadowOffsetY: 5,
            shadowBlur: 15,
            areaColor: '#257AB2',
          },
        },
      },
      {
        type: 'map',
        map: mapName,
        zlevel: -3,
        zoom: 1.0,
        layoutCenter: ['50%', '52.4%'],
        layoutSize: '100%',
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderColor: 'rgba(7, 65, 117,0.5)',
            shadowColor: 'rgba(7, 65, 117,0.8)',
            shadowOffsetY: 15,
            shadowBlur: 8,
            areaColor: '#0A2763',
          },
        },
      },
    ],
    visualMap: {
      bottom: 20,
      left: 50,
      show: true,
      color: ['#f59e21', '#91b07d', '#2dc1d9'],
      min: 0,
      max:100,
      calculable: true,
      seriesIndex: 1,  //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
      textGap: 20,
      textStyle: {
        color: '#68d7d8',
        fontSize: 34,
        fontFamily: 'FZLTHK--GBK1-0',
      },

    },

    series: [
      {
        type: 'map',
        layoutCenter: ['50%', '50%'],
        layoutSize: '100%',
        label: {
          normal: {
            //静态的时候展示样式
            show: false, //是否显示地图省份得名称
            textStyle: {
              color: '#fff',
              fontSize: 12,
            },
          },
          emphasis: {
            //动态展示的样式
            color: '#fff',
          },
        },
        // geoIndex: 0,
        silent: true,
        map: mapName,
        tooltip: {
          show: false,
          trigger: 'item',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          extraCssText: 'z-index:100;color:#fff;',
          confine: true, //是否将 tooltip 框限制在图表的区域内
          formatter: function (params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = '';
            var name = params.name;
            var count = params.value ? params.value : 0;
            res = `<div style="box-shadow: 0 0 10px #3BD9D9; padding: 10px; position: absolute; top: 0; left:0;  border-radius: 4px; border: 1px solid #04b9ff; background: linear-gradient(to bottom,  #51bfd4 0%,rgba(35,90,178,.8) 100%);">
                             <div style='color:#F4BD59; font-size: 14px;'>${name}</div>
                             <div style="display: flex; align-items: center;padding-top: 6px;">
                              <div style="height: 6px; width: 6px; border-radius: 50%; background:#F4BD59; margin-right: 10px;"></div> <span style='color:#fff;font-size: 12px;margin-right: 20px;'>tooltip</span><span style="font-size: 12px;font-family: 'PangMenZhengDao'">${count}</span>
                             </div>
                          </div>`;
            return res;
          },
        },
        itemStyle: {
          normal: {
            label: {
              show: true,
              color: '#fff',
            },
            color: '#fff',
            borderColor: '#32CBE0',
            borderWidth: 1.5,
            // areaColor: {
            //   type: 'linear-gradient',
            //   x: 0,
            //   y: 1000,
            //   x2: 0,
            //   y2: 0,
            //   colorStops: [
            //     {
            //       offset: 0.5,
            //       color: '#0D59C1', // 0% 处的颜色
            //     },
            //     {
            //       offset: 1,
            //       color: '#53C9C7', // 100% 处的颜色
            //     },
            //   ],
            //   global: true, // 缺省为 false
            // },
            areaColor: { // 旧版本才可以在颜色中使用图片
              image: mapTexture,
              repeat: 'repeat'
            },
          },
          emphasis: {
            label: {
              show: true,
              color: '#fff',
            },
            borderWidth: 3,
            borderColor: 'rgba(255, 230, 175,0.8)',
            shadowColor: 'rgba(255, 230, 175,0.5)',
            shadowBlur: 30,
            textStyle: {
              color: '#fff',
              fontSize: 12,
              backgroundColor: 'transparent',
            },
            // areaColor: new Echarts.graphic.LinearGradient(
            //     0,
            //     0,
            //     0,
            //     1,
            //     [
            //       {
            //         offset: 0,
            //         color: '#1cfbfe',
            //       },
            //       {
            //         offset: 1,
            //         color: '#3348e7',
            //       },
            //     ],
            //     false
            // ),
          },
        },
        select: {},
        data: data,
      },
      {
        // type: 'effectScatter',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: "path://M569.5999755859375,838.4000244140625c89.60003662109375,-128,256,-396.8000183105469,256,-524.8000183105469c0,-166.40000915527344,-134.39996337890625,-307.2000060081482,-307.199951171875,-307.2000060081482S211.1999969482422,147.1999969482422,211.1999969482422,313.6000061035156c0,121.60000610351562,166.40000915527344,390.3999938964844,256.00001525878906,524.8000183105469C492.79998779296875,870.4000244140625,544,870.4000244140625,569.5999755859375,838.4000244140625ZM326.3999938964844,313.6000061035156c0,-102.40000915527344,83.20001220703125,-192.00000762939453,192.00003051757812,-192.00000762939453c102.39996337890625,0,192,83.20000457763672,192,192.00000762939453s-83.20001220703125,192,-192,192C416,499.20001220703125,326.3999938964844,416,326.3999938964844,313.6000061035156ZM633.5999755859375,313.6000061035156c0,-64,-51.199951171875,-115.20001220703125,-115.199951171875,-115.20001220703125S403.20001220703125,249.60000610351562,403.20001220703125,313.6000061035156c0,64,51.199981689453125,115.19998168945312,115.20001220703125,115.19998168945312S633.5999755859375,377.6000061035156,633.5999755859375,313.6000061035156ZM672,723.2000122070312c-12.79998779296875,19.20001220703125,-25.5999755859375,38.39996337890625,-38.4000244140625,57.5999755859375c102.4000244140625,19.20001220703125,153.60003662109375,51.20001220703125,153.60003662109375,70.4000244140625c0,25.5999755859375,-96,83.20001220703125,-275.20001220703125,83.20001220703125s-275.1999969482422,-57.60003662109375,-275.1999969482422,-83.20001220703125c0,-19.20001220703125,51.19999694824219,-57.60003662109375,153.59999084472656,-70.4000244140625c-12.79998779296875,-19.20001220703125,-25.600006103515625,-38.39996337890625,-38.399993896484375,-57.5999755859375c-102.39999389648438,19.20001220703125,-179.1999969482422,64,-179.1999969482422,128c0,96,166.40000915527344,140.79998779296875,332.8000030517578,140.79998779296875s332.8000183105469,-51.20001220703125,332.8000183105469,-140.79998779296875C851.2000122070312,787.2000122070312,774.4000244140625,742.4000244140625,672,723.2000122070312Z",
        symbolKeepAspect: true,
        symbolSize: function (val) {
          // var value = val[2];
          // if (value < max) {
          //   return 15;
          // }
          return 120;
        },
        showEffectOn: 'render', //加载完毕显示特效
        itemStyle: {
          normal: {
            color: '#FEBE13', // 圆点的颜色
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },
        rippleEffect: {
          brushType: 'fill',
        },
        label: {
          show: true,
          color: '#fff',
          backgroundColor: "#5e6584",
          borderWidth: 40,
          position: "right",
          distance: 210,
          align: "center",
          width: 400,
          height: 150,
          fontSize:64,
          // formatter: function (params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            // console.log(params,'---0-');
            // var res = '';
            // var name = params.name;
            // var count = params.value[2] ? params.value[2] : 0;
            // console.log(count,'sss');
            // res = `<div style="box-shadow: 0 0 10px #3BD9D9; padding: 10px; position: absolute; top: 0; left:0;  border-radius: 4px; border: 1px solid #04b9ff; background: linear-gradient(to bottom,  #51bfd4 0%,rgba(35,90,178,.8) 100%);">
            //                  <div style='color:#F4BD59; font-size: 14px;'>${name}</div>
            //                  <div style="display: flex; align-items: center;padding-top: 6px;">
            //                   <div style="height: 6px; width: 6px; border-radius: 50%; background:#F4BD59; margin-right: 10px;"></div> <span style='color:#fff;font-size: 12px;margin-right: 20px;'>tooltip</span><span style="font-size: 12px;font-family: 'PangMenZhengDao'">${count}</span>
            //                  </div>
            //               </div>`;
            // return res;
          // },
          // formatter: '{b}: {@[2]}',
          formatter: '{b}: {@[2]}',
        },
        zlevel: 6,
        data: pointData,
      },
    ],
  };


  // if (props.chartOption && props.chartOption.visualMap) {
  //   option.visualMap = props.chartOption.visualMap
  // }
  myCharts.setOption(option,true)

}

onMounted(() => renderChart())
</script>

<style scoped>
.EChartsMap {
  display: flex;
  height: 100%;
  width: 100%;
  background-image: url("../../assets/img/page/common/back2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
