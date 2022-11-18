<template>
  <div ref="back" id="container" class="back"></div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import geoJson from '../../../assets/JSON/450000.json'
import imgMap from '../../../assets/img/page/borderSafety/10.png'
import AMapLoader from '@amap/amap-jsapi-loader';

const {proxy} = getCurrentInstance()
const back = ref()

const renderChart = () => {
  const charts = proxy.$echarts.init(back.value)
  proxy.$echarts.registerMap('GX', geoJson);

  console.log('geo', geoJson)
  let option = {
    visualMap: {
      show: false,
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {},
    },
    // geo: {
    //   map: 'LKX',
    //   show: false,
    //   roam: false,
    //   label: {
    //     fontSize: 40,
    //     normal: {
    //       fontSize: 40,
    //       show: false,
    //     },
    //     emphasis: {
    //       show: false,
    //     },
    //   },
    //   itemStyle: {
    //     fontSize: 40,
    //     normal: {
    //       areaColor: '#00091a',
    //
    //       borderColor: '#00091a', //线
    //       shadowColor: 'rgb(76,130,235)', //外发光
    //       shadowBlur: 20,
    //     },
    //     emphasis: {
    //       areaColor: '#3A63BC', //悬浮区背景
    //     },
    //   },
    // },
    series: [
      // {
      //   name: '广西',
      //   type: 'map3D',
      //   // mapType: 'LKX',
      //   map:'GX',
      //   label: {
      //     normal: {
      //       textStyle: {
      //         fontSize: 65,
      //         fontWeight: 'bold',
      //         color: '#fff',
      //       },
      //     },
      //   },
      //   top: 650,
      //   left: 1750,
      //   aspectScale: 1.2,
      //   zoom: .9,
      //   itemStyle: {
      //     normal: {
      //       label: {show: true},
      //       color: '#F4F4F4',
      //       borderWidth: 0.5, //区域边框宽度
      //       borderColor: '#080E1F', //区域边框颜色
      //       areaColor: "#5389EB", //区域颜色
      //       // areaColor: 'rgba(0,0,0,.01)', //区域颜色
      //     },
      //     areaColor: {
      //       image: imgMap, //
      //       repeat: 'repeat' // // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
      //     },
      //     emphasis: {
      //       label: {show: false},
      //       borderWidth: 0.5,
      //       borderColor: '#4b0082',
      //       areaColor: '#3B64BA',
      //     },
      //   },
      // },
      {
        type: 'map3D',
        name: '广西',
        selectedMode: 'single', //地图高亮单选
        regionHeight: 1, //地图高度
        map: 'GX',
        viewControl: {
          distance: 110, //地图视角 控制初始大小
          rotateSensitivity: [1, 1],
        },
        label: {
          show: true, //是否显示市
          textStyle: {
            color: 'white', //文字颜色
            fontSize: 20, //文字大小
          },
        },
        itemStyle: {
          color: '#2B5890', //地图颜色
          borderWidth: 3, //分界线wdith
          borderColor: '#5578A5', //分界线颜色
        },
        emphasis: {
          label: {
            show: true, //是否显示高亮
            textStyle: {
              color: '#fff', //高亮文字颜色
            },
          },
          itemStyle: {
            color: '#0489d6', //地图高亮颜色
          },
        },
        data: [],
      }
    ],
  }
  charts.setOption(option)
}

const renderMap = () => {
  AMapLoader.load({
    "key": "ad00e92b5ae0ac22f52d0490025f0c8e",              // 申请好的Web端开发者Key，首次调用 load 时必填
    "version": "2.0",       // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    AMapUI: {
      // 是否加载 AMapUI，缺省不加载
      version: "1.1", // AMapUI 缺省 1.1
      plugins: ["geo/DistrictExplorer"], // 需要加载的 AMapUI ui插件
    },
    plugins: ["AMap.DistrictLayer", "AMap.Scale", "AMap.ToolBar"],
    Loca: {
      // 是否加载 Loca， 缺省不加载
      version: "2.0.0", // Loca 版本，缺省 2.0.0
    },
  }).then((AMap, AMapUI) => {

    let markers = []
    const allowCollision = false;
    const map = new AMap.Map('container', {
      center: [108.37, 22.82],
      zoom: 11.1,
      mapStyle: 'amap://styles/7b053888e4db2f973b00c9918d0d9bf7',
      viewMode: '3D',  // 地图设置成 3D 模式，否则图层会失去高度信息
    });
    const layer = new AMap.LabelsLayer({
      zooms: [3, 20],
      zIndex: 1000,
      allowCollision,
    });
    var icon = {
      // 图标类型，现阶段只支持 image 类型
      type: 'image',
      // 图片 url
      image: imgMap,
      // 图片尺寸
      size: [118, 155],
      // 图片相对 position 的锚点，默认为 bottom-center
      anchor: 'center',
    };
    var textStyle = {
      fontSize: 12,
      fontWeight: 'normal',
      fillColor: '#22886f',
      strokeColor: '#fff',
      strokeWidth: 2,
      fold: true,
      padding: '2, 5',
    };
    var LabelsData = [
      {
        position: [108.37, 22.82],
        zooms: [10, 20],
        opacity: 1,
        zIndex: 10,
        fold: true,
        icon,
        text: {
          // 要展示的文字内容
          content: '崇左边境管理支队',
          // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
          direction: 'right',
          // 在 direction 基础上的偏移量
          offset: [20, -5],
          // 文字样式
          style: {
            backgroundColor: '#4c82eb',
            fontSize: 57,
            height: 100,
            whiteSpace: 'nowrap',
            lineHeight: 89,
            fillColor: '#fff',
            fold: true,
            fontWeight: 'normal',
            padding: '3, 5',
            borderColor: '#fff',
            borderWidth: 1,
          }
        }
      },
      {
        position: [107.36,22.38],
        zooms: [10, 20],
        opacity: 1,
        zIndex: 10,
        fold: true,
        icon,
        text: {
          // 要展示的文字内容
          content: '崇左边境管理支队',
          // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
          direction: 'right',
          // 在 direction 基础上的偏移量
          offset: [20, -5],
          // 文字样式
          style: {
            backgroundColor: '#4c82eb',
            fontSize: 57,
            height: 100,
            whiteSpace: 'nowrap',
            lineHeight: 89,
            fillColor: '#fff',
            fold: true,
            fontWeight: 'normal',
            padding: '3, 5',
            borderColor: '#fff',
            borderWidth: 1,
          }
        }
      },
    ];
    // 初始化 labelMarker
    for (var i = 0; i < LabelsData.length; i++) {
      var curData = LabelsData[i];
      curData.extData = {
        index: i
      };
      var labelMarker = new AMap.LabelMarker(curData);
      markers.push(labelMarker);
    }

    // 图层添加到地图
    map.add(layer);

    layer.add(markers);
  }).catch(e => {
    console.log(e);
  })
}

onMounted(() => setTimeout(() => renderMap(), 1000))
</script>

<style scoped lang="scss">
.back {
  width: 10240px;
  height: 4320px;
  position: absolute;
  background-color: black;
  //background-image: url("../../../assets/img/page/SCSIBJ/8.png");
  //background-repeat: no-repeat;
  //background-size: 100% 100%;
}
</style>
