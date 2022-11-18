<template>
  <div class="onDuty">
    <z-title title="边防检查执勤警力"></z-title>
    <div class="onDuty-footer">
      <div class="item">
        <div class="item-title">警力数</div>
        <div class="chartBox">
          <div> <div ref="policeForce"></div></div>
          <div class="item-footer">
            <div class="left">
              <div class="label">执勤警力数</div>
              <div class="value">100</div>
              <div class="flex flex-center align-center">
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
            </div>
            <div class="left">
              <div class="label">备勤警力数</div>
              <div class="value">100</div>
              <div class="flex flex-center align-center">
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
            </div>
            <div class="left">
              <div class="label">其他</div>
              <div class="value">100</div>
              <div class="flex flex-center align-center">
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="item">
        <div class="item-title">动用装备数警力数</div>
        <div class="chartBox">
          <div> <div ref="equipment"></div></div>
          <div class="item-footer">
            <div class="content">
              <div class="label">车辆数</div>
              <div class="value">100</div>
              <div class="flex flex-center align-center">
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
            </div>
            <div class="content">
              <div class="label">动用武器数</div>
              <div class="value">100</div>
              <div class="flex flex-center align-center">
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
            </div>
            <div class="content">
              <div class="label">动用弹药数</div>
              <div class="value">100</div>
              <div class="flex flex-center align-center">
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="item">
        <div class="item-title">口岸数</div>
        <div class="chartBox">
          <div><div ref="port"></div></div>
          <div class="item-footer">
            <div class="right">
              <div class="label">开关口岸</div>
              <div class="value">100</div>
              <div class="flex flex-center align-center">
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
            </div>
            <div class="right">
              <div class="label">闭关口岸</div>
              <div class="value">100</div>
              <div class="flex flex-center align-center">
                <i class="iconfont icon-shangsheng"></i>
                <div>5%</div>
              </div>
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
const policeForce = ref()
const equipment = ref()
const port = ref()

const renderChart = () => {
  const myChart1 = proxy.$echarts.init(policeForce.value)
  const myChart2 = proxy.$echarts.init(equipment.value)
  const myChart3 = proxy.$echarts.init(port.value)
  let chartData = [
    {name: '消防栓', value: 201},
    {name: '烟感', value: 237},
    {name: '喷淋', value: 209},
  ]


  let option = {
    title: {
      text: '180',
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
        radius: ['56%', '70%'],
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
        data: chartData,
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

  myChart1.setOption({color: ['#0a94ff', '#ffffff', '#6959ff'], ...option})
  myChart2.setOption({color: ['#0affba', '#ffffff', '#0adeff'], ...option})
  myChart3.setOption({color: ['#cfa244', '#ffffff', '#6959ff'], ...option})
}

onMounted(() => renderChart())
</script>

<style scoped lang="scss">
.onDuty {
  display: grid;
  grid-template-rows: 143px 1fr;
  row-gap: 150px;

  &-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    .item {
      display: grid;
      grid-template-rows: 90px 575px;

      .chartBox{
        display: grid;
        grid-template-columns: 400px auto;
        column-gap: 20px;
        align-items: center;
        >div:nth-of-type(1){
           width: 100%;
           height: 100%;
          >div:nth-of-type(1){
            width: 100%;
            height: 100%;
          }
        }
      }

      &-title {
        margin: 0 auto;
        width: 725px;
        height: 90px;
        background-color: #102335;
        font-size: 68px;
        text-align: center;
        font-family: ZiHun;
        align-items: center;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
      }

      &-footer {

        .left, .content, .right {
          //width: 509px;
          height: 92px;
          display: flex;
          //justify-content: space-between;
          font-size: 40px;
          margin: 5px auto;
        }

      .label{
        width: 210px;
        margin-right: 20px;
      }

        .iconfont {
          font-size: 48px;
        }

        .left {
          align-items: center;
          padding-left: 20px;

          &:before {
            content: '';
            display: inline-block;
            width: 7px;
            height: 7px;
            background-color: aqua;
            position: relative;
            top: -45px;
            left: -25px;
          }

          .value {
            font-family: QTYPECOND-BOOK;
          }

          .flex {
            color: #ed9d22;
            font-weight: bold;
            font-size: 40px;
          }

          &:nth-child(1) {
            background-image: linear-gradient(-90deg, rgba(10, 148, 255, 0) 0%, rgba(10, 148, 255, .1) 100%);
            border-left: 2px solid rgba(10, 148, 255, 1);

            &:before {
              content: '';
              display: inline-block;
              width: 7px;
              height: 7px;
              background-color: rgba(10, 148, 255, 1);
              position: relative;
              top: -45px;
              left: -25px;
            }

            .label {
              font-family: ZiHun;
              color: rgba(10, 148, 255, 1)
            }
          }

          &:nth-child(2) {
            background-image: linear-gradient(-90deg, rgba(10, 148, 255, 0) 0%, rgba(255, 255, 255, .1) 100%);
            border-left: 2px solid rgba(255, 255, 255, 1);

            &:before {
              content: '';
              display: inline-block;
              width: 7px;
              height: 7px;
              background-color: rgba(255, 255, 255, 1);
              position: relative;
              top: -45px;
              left: -25px;
            }

            .label {
              font-family: ZiHun;
              color: #fff
            }
          }

          &:nth-child(3) {
            background-image: linear-gradient(-90deg, rgba(10, 148, 255, 0) 0%, rgba(105, 89, 255, .1) 100%);
            border-left: 2px solid rgba(105, 89, 255, 1);

            &:before {
              content: '';
              display: inline-block;
              width: 7px;
              height: 7px;
              background-color: rgba(105, 89, 255, 1);
              position: relative;
              top: -45px;
              left: -25px;
            }

            .label {
              font-family: ZiHun;
              color: #6959ff
            }
          }
        }

        .content {
          align-items: center;
          padding-left: 20px;

          .value {
            font-family: QTYPECOND-BOOK;
          }

          .flex {
            color: #ed9d22;
            font-weight: bold;
            font-size: 40px;
          }

          &:nth-child(1) {
            background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(10, 255, 186, .1) 100%);
            border-left: 2px solid #0affba;

            &:before {
              content: '';
              display: inline-block;
              width: 7px;
              height: 7px;
              background-color: #0affba;
              position: relative;
              top: -45px;
              left: -25px;
            }

            .label {
              font-family: ZiHun;
              color: #0affba
            }
          }

          &:nth-child(2) {
            background-image: linear-gradient(-90deg, rgba(10, 148, 255, 0) 0%, rgba(255, 255, 255, .1) 100%);
            border-left: 2px solid rgba(255, 255, 255, 1);

            &:before {
              content: '';
              display: inline-block;
              width: 7px;
              height: 7px;
              background-color: #fff;
              position: relative;
              top: -45px;
              left: -25px;
            }

            .label {
              font-family: ZiHun;
              color: #fff
            }
          }

          &:nth-child(3) {
            background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(10, 222, 255, .1) 100%);
            border-left: 2px solid rgba(10, 222, 255, 1);

            &:before {
              content: '';
              display: inline-block;
              width: 7px;
              height: 7px;
              background-color: rgba(10, 222, 255, 1);
              position: relative;
              top: -45px;
              left: -25px;
            }

            .label {
              font-family: ZiHun;
              color: rgba(10, 222, 255, 1)
            }
          }
        }

        .right {
          align-items: center;
          padding-left: 20px;

          .value {
            font-family: QTYPECOND-BOOK;
          }

          .flex {
            color: #ed9d22;
            font-weight: bold;
            font-size: 40px;
          }

          &:nth-child(1) {
            background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(207, 162, 68, .1) 100%);
            border-left: 2px solid rgba(207, 162, 68, 1);

            &:before {
              content: '';
              display: inline-block;
              width: 7px;
              height: 7px;
              background-color: rgba(207, 162, 68, 1);
              position: relative;
              top: -45px;
              left: -25px;
            }

            .label {
              font-family: ZiHun;
              color: rgba(207, 162, 68, 1)
            }
          }

          &:nth-child(2) {
            background-image: linear-gradient(-90deg, rgba(10, 148, 255, 0) 0%, rgba(255, 255, 255, .1) 100%);
            border-left: 2px solid rgba(255, 255, 255, 1);

            &:before {
              content: '';
              display: inline-block;
              width: 7px;
              height: 7px;
              background-color: #fff;
              position: relative;
              top: -45px;
              left: -25px;
            }

            .label {
              font-family: ZiHun;
              color: #fff
            }
          }

          &:nth-child(3) {
            background-image: linear-gradient(-90deg, rgba(10, 148, 255, 0) 0%, rgba(105, 89, 255, .1) 100%);
            border-left: 2px solid rgba(105, 89, 255, 1);

            .label {
              font-family: ZiHun;
              color: #6959ff
            }
          }
        }
      }
    }
  }
}

</style>
