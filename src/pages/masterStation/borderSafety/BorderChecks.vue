<template>
  <div class="BorderChecks">
    <z-title title="边境检查" @click="open"></z-title>
    <div class="legend">
      <div class="legend-left">
        <div class="flex flex-center align-center on">本日</div>
        <div class="flex flex-center align-center">本月</div>
        <div class="flex flex-center align-center">本年</div>
      </div>
    </div>
    <div class="BorderChecks-content">
      <div v-for="(item,index) in 3" class="item">
        <div class="item-left">
          <img src="../../../assets/img/page/borderSafety/b0.png" alt=""/>
        </div>
        <div class="item-right">
          <div class="top">
            <div class="flag"></div>
            <div class="label">进入边境管理区人数</div>
            <div>2610人</div>
            <div class="flex flex-center">
              <div class="h">环比<i class="iconfont icon-jiantouxiajiang"></i> 20%</div>
              <div class="t">同比<i class="iconfont icon-shangsheng"></i> 20%</div>
            </div>
          </div>
          <div class="bar"></div>
          <div class="top">
            <div class="flag"></div>
            <div class="label">进入边境管理区人数</div>
            <div>2610人</div>
            <div class="flex flex-center">
              <div class="h">环比<i class="iconfont icon-jiantouxiajiang"></i> 20%</div>
              <div class="t">同比<i class="iconfont icon-shangsheng"></i> 20%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const BorderChecksEcharts = ref()

const renderChart = () => {
  const charts = proxy.$echarts.init(BorderChecksEcharts.value)
  let option = {
    color: ['#0080f7', '#F4A7A8', '#009E95', '#fff', '#FFEA8F', '#757575'],
    title: {
      text: '180',
      left: 'center',
      top: 'center',
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
    series: [
      {
        type: 'pie',
        radius: ['65%', '70%'],
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
        radius: ['0%', '30%'],
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
        radius: ['40%', '60%'],
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
              fontSize: 40,
              color: '#b09469'
            },
            time: {
              fontSize: 50,
              color: '#fff',
              marginLeft: 50
            },
            unit: {
              fontSize: 30,
              color: '#fff',
            },
            name: {
              fontSize: 40,
              color: '#2494e3',
              margin: [0, 50]
            },
            rate: {
              fontSize: 40,
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
        data: [
          {name: '普通护照总数', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '往来港澳通行证', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '内地居民赴港澳签注', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '出入境通行证数', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '往来台湾通行证', value: 23092, rate: 13.2, chainRatio: 12},
          {name: '内地居民赴台湾签注', value: 23092, rate: 13.2, chainRatio: 12}
        ],
      },
    ]
  }
  charts.setOption(option)
}

onMounted(() => setTimeout(() => renderChart(), 1000))
</script>

<style scoped lang="scss">
.BorderChecks {
  width: 2065px;
  height: 1363px;
  display: grid;
  grid-template-rows: 147px 200px 1fr;


  .legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;

    .on {
      opacity: 1;
    }

    &-left {
      display: flex;
      justify-content: flex-start;

      > div {
        cursor: pointer;
        width: 173px;
        height: 79px;
        background-color: rgba(117, 195, 255, .2);
        border-radius: 10px;
        border: solid 4px #87cbff;
        margin-right: 20px;
        opacity: .7;
      }
    }

    &-right {
      display: flex;
      justify-content: flex-end;

      > div {
        cursor: pointer;
        white-space: nowrap;
        padding: 0 10px;
        box-sizing: border-box;
        margin-left: 20px;
        //width: 219px;
        height: 78px;
        line-height: 78px;
        background-color: rgba(42, 92, 255, .5);
        border-radius: 10px;
        border: solid 4px #4b75ff;
        opacity: .7;
      }
    }
  }

  &-content {
    font-family: ZiHun;

    .item {
      height: 283px;
      display: grid;
      grid-template-columns: 247px 1fr;
      grid-column-gap: 49px;
      margin: 29px 0;

      &-left {
        img {
          width: 247px;
          height: 283px;
        }
      }

      &-right {
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        font-size: 58px;
        background-image: linear-gradient(180deg, rgba(85, 201, 255, 0.2) 0%, rgba(85, 201, 255, 0.03) 100%);

        .bar {
          width: 1614px;
          height: 1px;
          background-color: rgba(181, 225, 245, 1);
          opacity: 0.3;

          &::before {
            content: '';
            display: block;
            position: absolute;
            background-color: rgb(181, 225, 245);
            width: 70px;
            margin-top: -3px;
            height: 6px;
          }
        }

        .top {
          display: grid;
          grid-template-columns:50px 550px auto auto;
          text-align: center;

          .flag {
            height: 49px;
            width: 49px;
            border-radius: 50%;
            background-color: rgba(181, 225, 245, .2);

            &::before {
              content: '';
              display: inline-block;
              position: relative;
              bottom: 6px;
              height: 11px;
              width: 11px;
              border-radius: 50%;
              border: 8px solid rgba(181, 225, 245, 1);
            }
          }

          .label {
            color: #bfe2fa
          }

          .iconfont {
            font-size: 58px;
          }
        }
      }
    }
  }
}

</style>
