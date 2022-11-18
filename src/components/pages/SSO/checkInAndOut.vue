<template>
  <cal title="出入境人员检查" type="1" @open="open" @timeChange="timeChange">
    <template v-slot:left>
      <div class="block">

  </div>
      <div class=" cursor-event">
        <el-date-picker
      v-model="timeValue"
      class="input-class"
      style="width:450px;height: 80px;"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      size="large"
      popper-class="timeDarkHourBox"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
    </template>
    <template v-slot:right>
      <div class="right-nav cursor-event" :class="{'on':typeStatus==idex}" @click="typeChange(idex)" v-for="(item,idex) in ['全国']">{{item}}</div><!-- ,'TOP口岸' -->
    </template>
    <template v-slot:content>
      <div class="footer">
        <div class="left">
          <div>人员
            类别
          </div>
          <div>人员
            国籍
          </div>
          <div>人员
            目的
          </div>
        </div>
        <div class="right">
          <div ref="personnelCategory"></div>
          <div ref="personnelNationality"></div>
          <div ref="personnelPurpose"></div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, defineEmits} from 'vue'
import {getRandom} from "../../../utils/util.js";
import apiJson from "../../../../public/apiJson/Inspection"
import {axiosPost} from "../../../apis/service.js";
import {general} from "../../../apis/login.js";

const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'checkInAndOut'})
const {proxy} = getCurrentInstance()
// 人员类别
const personnelCategory = ref()
// 人员国籍
const personnelNationality = ref()
// 人员目的
const personnelPurpose = ref()
const timeValue = ref()

let dateStatus = ref(0)
let typeStatus = ref(0)

//日期切换
function timeChange(index){
  // dateStatus.value = index
  renderChart()
}
// 国家 类型切换
function typeChange(index){
  typeStatus.value = index
  renderChart()
}

const renderChart = () => {
  const Category = proxy.$echarts.init(personnelCategory.value)
  const Nationality = proxy.$echarts.init(personnelNationality.value)
  const Purpose = proxy.$echarts.init(personnelPurpose.value)

  // 人员类别
  const peopleType = ref([
    {
      name: '旅客22',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },
      barWidth: 45,

      // emphasis: {
      //   focus: 'series'
      // },
      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '员工',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '其他',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '统计',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}',
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    }
  ])
  // 人员国籍
  const peopleCountry = ref([
    {
      name: '俄罗斯',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },

      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '美国',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },

      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '韩国',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },

      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '日本',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },

      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '其他',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '统计',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{b}',
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [{name: '500', value: 0}, {name: '500', value: 0}]
    }
  ])
  // 人员目的
  const peopleGoal = [
    {
      name: '旅游',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },
      barWidth: 45,
      markLine: {
        lineStyle: {
          type: 'dashed'
        },
        data: [[{type: 'min'}, {type: 'max'}]]
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '探亲',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '因公',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '其他',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{a}'
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
    },
    {
      name: '统计',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        fontSize: 40,
        formatter: '{b}',
        color: '#fff',
        offset: [50, 0]
      },
      // emphasis: {
      //   focus: 'series'
      // },
      data: [{name: '500', value: 0}, {name: '500', value: 0}]
    }
  ]
  // 人员类别
  let option = {
    color: ['#e6fdb5', '#d5da60', '#f79914', '#b5f6fd', '#1a76e6'],
    xAxis: {
      type: 'value',
      show: false,
      min: 0,
      max: 2000
    },
    grid: {
      top: -10,
      left: 120,
      bottom: -20,
      containLabel: false
    },
    yAxis: {
      type: 'category',
      data: [
        {value: '入境', textStyle: {color: '#cfa244', fontFamily: 'ZiHun',}},
        {value: '出境', textStyle: {color: '#548fff', fontFamily: 'ZiHun',}},
      ],
      axisLabel: {
        fontSize: 39,
        margin: 20
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: '旅客',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 40,
          formatter: '{a}'
        },
        barWidth: 45,
        markLine: {
          lineStyle: {
            type: 'dashed'
          },
          data: [[{type: 'min'}, {type: 'max'}]]
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
      },
      {
        name: '员工',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 40,
          formatter: '{a}'
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
      },
      {
        name: '其他',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 40,
          formatter: '{a}'
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 40
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          fontSize: 40
        },
        // emphasis: {
        //   focus: 'series'
        // },
        data: [getRandom(100,320,), getRandom(200,320,), getRandom(200,320,), getRandom(200,420,), getRandom(100,320,), getRandom(200,520,), getRandom(100,460,)]
      }
    ]
  }


  // setTimeout(() => renderChart(), 5000)

  let query = [];
   let checkNumber = [];
   apiJson.data.peopleType.map((index)=>{
    checkNumber.push(index.checkNumber)
   })

   apiJson.data.peopleType.map((index)=>{
    var a = {
          name: index.checkName,
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            fontSize: 40,
            formatter: '{a}'
      },
      data: checkNumber
     }
     if(index.checkName=='统计'){
      a.label['color'] = '#fff'
      a.label['offset'] = [50, 0]
      a.label['formatter'] = '{b}'
      a.data = [{name: index.checkNumber, value: 0}, {name: index.checkNumber, value: 0}]

     }
    query.push(a)

   })

   peopleType.value = query;


   let query1 = [];
   let checkNumber1 = [];
   apiJson.data.peopleCountry.map((index)=>{
    checkNumber1.push(index.checkNumber)
   })

   apiJson.data.peopleCountry.map((index)=>{
    var a = {
          name: index.checkName,
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            fontSize: 40,
            formatter: '{a}'
      },
      data: checkNumber1
     }
     if(index.checkName=='统计'){
      a.label['color'] = '#fff'
      a.label['offset'] = [50, 0]
      a.label['formatter'] = '{b}'
      a.data = [{name: index.checkNumber, value: 0}, {name: index.checkNumber, value: 0}]

     }
    query1.push(a)

   })

    peopleCountry.value = query1;

    Category.setOption({...option, series: peopleType.value})
    Nationality.setOption({...option, series: query1})
    Purpose.setOption({...option, series: peopleGoal})
}



onMounted(() => {
  getDataFun()
  renderChart()
})

async function getDataFun(){
  let res
  let parameter = {
    "argumentsType":"全部口岸",
    "organizationCode":"820000000000",
    "organizationName":"国家移民管理局",
    "screenName":"勤务态势总览-局",
    "targetName":"出入境人员检查",
    "timeType":"20221103",
    "reserve":"1"
  }
  if (pageConfigs.isRequest) res = await general(parameter)
  else res = {}
  console.log(res,'通用接口-------------');
}

</script>

<style scoped lang="scss">

.input-class{
    width: 8500px;
    height: 8840px;
}
.left-nav {
  width: 173px;
  height: 79px;
  line-height: 79px;
  background-color: rgba(117, 195, 255, .2);
  border-radius: 10px;
  border: solid 4px #87cbff;
  margin-right: 20px;
  opacity: .7;
  font-size: 50px;
  text-align: center;

  &:hover {
    opacity: 1;
  }
}

.right-nav {
  margin-left: 20px;
  width: 219px;
  height: 78px;
  line-height: 78px;
  background-color: rgba(42, 92, 255, .5);
  border-radius: 10px;
  border: solid 4px #4b75ff;
  opacity: .7;
  font-size: 50px;
  text-align: center;

  &:hover {
    opacity: 1;
  }

}
.on {
  opacity: 1;
}
.footer {
  padding-top: 100px;
  box-sizing: border-box;
  display: grid;
  height: 100%;
  grid-template-columns: 137px 1fr;

  .left {
    font-size: 49px;
    display: flex;

    justify-content: space-around;
    flex-direction: column;
    text-align: center;

    > div {
      display: flex;
      align-items: center;
      width: 137px;
      height: 158px;
      background-color: rgba(84, 143, 255, .4);
      border-radius: 10px;
      font-family: ZiHun;
    }
  }

  .right {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;

    > div {
      height: 158px;
    }
  }
}
:deep(.card){
  width: 100%;
  display: grid;
  grid-template-rows: 1091px 1125px 1168px;
  grid-row-gap: 120px;
  position: relative;
}
</style>
