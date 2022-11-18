<template>
  <cal title="查获非法出入境人员">
    <template v-slot:content>
      <div class="contentBox chartBox">
          <specialPieChart totalWord="出境" :chartData=peiData :chartOption="peiOption"></specialPieChart>
          <specialPieChart totalWord="入境"  :chartData=peiData1 :chartOption="peiOption"></specialPieChart>

      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {axiosPost} from "../../../apis/service.js";
import CountFlop from '@/components/global/countFlop.vue'
import specialPieChart from '@/components/echarts/specialPieChart/index.vue'

const {proxy} = getCurrentInstance()

let dateStatus = ref(0)

let peiOption = {
  title: {
    show: false,
  },
  legend: {
    show: false,
  },
  label: {
    show: false,
  },
  labelLine: {
    show: false,
  },
  radius: ['34', '50'],
  center: ['50%', '35%'],
  color: ['#2E94D5','#19CAE5','#3892cb', '#ffffff', '#D0C078', '#7FB173', '#2E94D5'],
}
let peiData = ref([{
  name: '中国公民',
  value: 10
},
  {
    name: '越南',
    value: 6
  }, {
    name: '老挝',
    value: 5
  }, {
    name: '缅甸',
    value: 28
  }, {
    name: '朝鲜',
    value: 1
  },{
    name: '其它',
    value: 4
  }])

let peiData1 = ref([
    {
  name: '中国公民',
  value: 25
},
  {
    name: '越南',
    value: 3
  },
  {
    name: '老挝',
    value: 4
  },
  {
    name: '缅甸',
    value: 13
  },
  {
    name: '朝鲜',
    value: 1
  },
  {
    name: '其它',
    value: 2
  }
  ])


//日期切换
function dateChange(index){
  dateStatus.value = index
  getData()
}

//echart数据
function getData(){

  switch (dateStatus.value){
    case 0:
      charData.value = [
        {
          series: '出境',
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
          series: '入境',
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
          series: '总数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['2:00', '4:00', '6:00', '8:00', '10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
          data: [794, 792, 855, 655, 284, 284, 484, 284, 655, 284, 284,584,],
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
    case 1:
      charData.value = [
        {
          series: '出境',
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
          series: '入境',
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
          series: '总数',
          unitX: '',//(选填)
          unitY: '单位: 万人',//(选填)
          x: ['周一', '周二', '周三', '周四', '周五','周六','周天'],
          data: [794, 792, 855, 284, 284,584, 284,],
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
    case 2:
      charData.value = [
        {
          series: '出境',
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
          series: '入境',
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
          series: '总数',
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
          series: '出境',
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
          series: '入境',
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
          series: '总数',
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

.chartBox{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  height: 100%;
}

</style>
