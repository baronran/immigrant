<template>
  <cal title="边境检查站查获情况" >
    <template v-slot:content>
      <div class="flex flex-between ">
        <div class="flex flex-start inspectInfo checkTheVehicle">
            <p class="word"><span>7281</span><span>辆</span></p>
            <p class="baifenbi"><span class="iconfont icon-jiantouxiajiang"></span><span>5%</span></p>
        </div>
        <div class="flex flex-end inspectInfo inspectors">
            <p class="word"><span>7281</span><span>辆</span></p>
            <p class="baifenbi"><span class="iconfont icon-shangsheng"></span><span>5%</span></p>
        </div>
      </div>
      <div class="flex flex-between">
        <div class="flex flex-start timeButt"><div class="flex   flex-center align-center" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['日','周','月','年']">{{item}}</div></div>
        <div class="flex flex-end"><div class="flex nav flex-center align-center" :class="{'on':typeStatus==idex}"  @click="typeChange(idex)" v-for="(item,idex) in ['出境','入境']">{{item}}</div></div>
      </div>
      <div class="chartBox">
        <lineChart :chartData="charData" :customOption="customOption"></lineChart>
      </div>

    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {axiosPost} from "../../../apis/service.js";
import CountFlop from '@/components/global/countFlop.vue'
import lineChart from '@/components/echarts/line.vue'

const {proxy} = getCurrentInstance()

let dateStatus = ref(0)
let typeStatus = ref(0)
let customOption = {
  legend: {
    // orient: 'vertical',
    top: '7%',
    icon: "roundRect",
    itemGap: 70,
    itemHeight: 35,
    itemWidth: 50,
    textStyle: {
      fontSize: 45,
      fontFamily: 'ZiHun',
      color: '#ffffff',
    }
  }
}
let charData =  ref([{
  series: '在逃人员数',
  unitX: '',//(选填)
  unitY: '单位: 万人',//(选填)
  x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
  data: [685, 672, 500,  655, 284, 284,356,284, 655, 284, 284, 356,],
  itemStyle: {
    color: 'rgba(0,126,247,1)',
  },
  areaStyle: {
    color: {
      type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
      colorStops: [
        { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
        },
        { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
        },
        {
          offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    },
  }
},
  {
    series: '三非外国数',
    unitX: '',//(选填)
    unitY: '单位: 万人',//(选填)
    x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
    data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
    itemStyle: {
      color: 'rgba(216,164,59,1)',
    },
    areaStyle: {
      color: {
        type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
          },
          { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
          },
          {
            offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
          }
        ],
        globalCoord: false // 缺省为 false
      },
    },
  },
  {
    series: '毒品(公斤)',
    unitX: '',//(选填)
    unitY: '单位: 万人',//(选填)
    x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
    data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
    itemStyle: {
      color: '#1aefd3',
    },
    areaStyle: {
      color: {
        type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(26,239,211,0.6)' // 0% 处的颜色
          },
          { offset: 0.5, color: 'rgba(26,239,211,0.1)' // 0% 处的颜色
          },
          {
            offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
          }
        ],
        globalCoord: false // 缺省为 false
      },
    }
  },
  {
    series: '枪支数',
    unitX: '',//(选填)
    unitY: '单位: 万人',//(选填)
    x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
    data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
    itemStyle: {
      color: '#34cb57',
    },
    areaStyle: {
      color: {
        type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(52,203,87,0.6)' // 0% 处的颜色
          },
          { offset: 0.5, color: 'rgba(52,203,87,0.1)' // 0% 处的颜色
          },
          {
            offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
          }
        ],
        globalCoord: false // 缺省为 false
      },
    }
  },
  {
    series: '反宣品数',
    unitX: '',//(选填)
    unitY: '单位: 万人',//(选填)
    x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
    data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
    itemStyle: {
      color: '#d23be4',
    },
    areaStyle: {
      color: {
        type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(210,59,228,0.6)' // 0% 处的颜色
          },
          { offset: 0.5, color: 'rgba(210,59,228,0.1)' // 0% 处的颜色
          },
          {
            offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
          }
        ],
        globalCoord: false // 缺省为 false
      },
    }
  },])
//日期切换
function dateChange(index){
  dateStatus.value = index
  getData()
}

//类型切换
function typeChange(index){
  typeStatus.value = index
  getData()
}

//echart数据
function getData(){

  switch (dateStatus.value){
    case 0:
      charData.value = [
        {
          series: '在逃人员数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          data: [685, 672, 500,  655, 284, 284,356,284, 655, 284, 284, 356,],
          itemStyle: {
            color: 'rgba(0,126,247,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '三非外国数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
          itemStyle: {
            color: 'rgba(216,164,59,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          },
        },
        {
          series: '毒品(公斤)',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
          itemStyle: {
            color: '#1aefd3',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(26,239,211,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(26,239,211,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '枪支数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
          itemStyle: {
            color: '#34cb57',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(52,203,87,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(52,203,87,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '反宣品数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
          itemStyle: {
            color: '#d23be4',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(210,59,228,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(210,59,228,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
      ]
      break
    case 1:
      charData.value = [

        {
          series: '在逃人员数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [ 284,356,284, 655, 284, 284, 356,],
          itemStyle: {
            color: 'rgba(0,126,247,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '三非外国数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [ 655, 284, 284, 284, 655, 284, 284,],
          itemStyle: {
            color: 'rgba(216,164,59,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          },
        },
        {
          series: '毒品(公斤)',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [794, 792, 855, 284, 284,584, 284,],
          itemStyle: {
            color: '#1aefd3',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(26,239,211,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(26,239,211,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '枪支数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [92, 855, 655, 284, 284, 484, 284, 655,],
          itemStyle: {
            color: '#34cb57',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(52,203,87,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(52,203,87,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '反宣品数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [284, 484, 284, 655, 284, 284,584,],
          itemStyle: {
            color: '#d23be4',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(210,59,228,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(210,59,228,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
      ]
      break
    case 2:
      charData.value = [
        {
          series: '在逃人员数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [685, 672, 500,  655, 284, 284,356,284, 655, 284, 284, 356,672, 500,  655, 284,],
          itemStyle: {
            color: 'rgba(0,126,247,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '三非外国数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [594, 592, 655, 284, 655, 284, 284, 655, 284, 284, 284, 655, 284, 284,284, 284, 655, 284,],
          itemStyle: {
            color: 'rgba(216,164,59,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          },
        },
        {
          series: '毒品(公斤)',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['1','3','6','8','10','12','14','16','18','20','22','24','26','28','30'],
          data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,284, 484, 284, 655, 284,],
          itemStyle: {
            color: 'rgba(194,241,234,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(194,241,234,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(194,241,235,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
      ]
      break
    case 3:
      charData.value = [
        {
          series: '在逃人员数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [ 655, 284, 356,284, 655, 284, 284, 356,],
          itemStyle: {
            color: 'rgba(0,126,247,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(0,126,247,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(0,126,247,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
        {
          series: '三非外国数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [ 655, 284, 284, 284, 655, 284, 284, 284, 655, 284, 284,],
          itemStyle: {
            color: 'rgba(216,164,59,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(216,164,59,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(216,164,59,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          },
        },
        {
          series: '毒品(公斤)',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2017','2018','2019','2020','2021','2022'],
          data: [484, 284, 655,794, 792, 855, 284, 655, 284, 284,584,],
          itemStyle: {
            color: 'rgba(194,241,234,1)',
          },
          areaStyle: {
            color: {
              type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(194,241,234,0.6)' // 0% 处的颜色
                },
                { offset: 0.5, color: 'rgba(194,241,235,0.1)' // 0% 处的颜色
                },
                {
                  offset: 1, color: 'rgba(194,241,234,0)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
          }
        },
      ]
      break
  }

}

</script>

<style scoped lang="scss">


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

.timeButt{
  display: flex;
  justify-content: flex-start;
  > div {
    width: 173px;
    height: 79px;
    background-color: rgba(117, 195, 255, 0.3);
    border-radius: 10px;
    border: solid 4px rgba(135, 203, 255, 0.7);
    margin-right: 20px;
    font-family: zihun59hao-chuangcuhei;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: -4px;
    color: #ffffff;
    opacity: 0.5;
    cursor: pointer;
  }
}

p{
  margin: 0;
  padding: 0;
}
.inspectInfo{
  width: 900px;
  height: 266px;
  font-family: QTypeCond-Book;
  font-size: 101px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: -5px;
  color: #ffffff;
  flex-direction: column;
  padding-left: 500px;
  padding-bottom: 80px;
  box-sizing: border-box;
  .word{
    font-family: QTypeCond-Book;
    font-size: 101px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: -5px;
    color: #ffffff;
    >span:nth-of-type(2){
      font-family: ZiHun;
      font-size: 60px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: -15px;
      color: #8ab4d7;
    }
  }

  .baifenbi,.iconfont{
    font-family: DINPro-Regular;
    font-size: 51px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ed9d22;
  }

}

.checkTheVehicle{

  background-image: url("@/assets/img/page/SCSIBJ2/checkTheVehicle.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

}

.inspectors{
  background-image: url("@/assets/img/page/SCSIBJ2/inspectors.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.chartBox{
  height: 615px;
}
</style>
