<template>
  <cal title="要情信息">
    <template v-slot:content>
      <div class="content">
        <Vue3SeamlessScroll :list="list" :hover="true">
          <div class="item" @click="yqClick(item)" v-for="(item,index) in list">
            <div class="item-left">
              <div class="label"><i class="iconfont icon-dizhi1"></i> {{ item.bt }}</div>
              <div class="small" v-html="item.yqNr"></div>
            </div>
            <div class="item-right">
              <div class="date"><i class="iconfont icon-shijian"></i>{{ item.tbSj }}</div>
              <div class="state" :style="{color:yqzt[item.zt].color}">{{ yqzt[item.zt].text }}</div>
            </div>
          </div>
        </Vue3SeamlessScroll>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, toRef, watch} from 'vue'
import {Vue3SeamlessScroll} from "vue3-seamless-scroll";
import {useTool} from '../../../store/filterTool.js'
import {imosOrgInfoQueryOne} from "../../../apis/login.js";
import { commonStore } from "@/store/common";
const store = commonStore();
const {proxy} = getCurrentInstance()
import {axiosPost} from "../../../apis/service.js";
// 状态 0另存稿 1未填写 2未发送 3已发送  4待签收 5已签收 6退回
let yqzt = [
  {
    text: '另存稿',
    color: '#008080'
  },
  {
    text: '未填写',
    color: '#420080'
  },
  {
    text: '未发送',
    color: '#4E59FB'
  },
  {
    text: '已发送',
    color: '#7F7F7F'
  },
  {
    text: '待签收',
    color: '#F59A23'
  }, {
    text: '已签收',
    color: '#70B603'
  }, {
    text: '退回',
    color: '#D9001B'
  }
]

const list = ref([
  {
    "yqId": "202211021150551870",
    "orgName": "国家移民局",
    "orgNumber": "820000000000",
    "tbSj": "2022-11-02 11:50:55",
    "bcSj": null,
    "bt": "边检处理事件",
    "zt": 3,
    "yqNr": "我是一个兵ddd",
    "isDelete": 0,
    "isSend": null,
    "mbGs": null,
    "fsNr": null,
    "level": 1,
    "yqMc": "国家移民局要情快报",
    "mbDl": null,
    "mbXl": null,
    "mbNr": "[{}]",
    "isFollow": 0,
    "location": " [{ \"longitude\": \"116.382288\", \"latitude\": \"39.923131\", \"name\": \"北京市西城区西安门大街1号院3号名\"}, { \"longitude\": \"116.30701\", \"latitude\": \"39.971818\", \"name\": \"北京市海淀区苏州街55号\" } ]",
    "receiveOrgNumber": null,
    "receiveOrgName": null,
    "xbBh": null,
    "yqBh": "20221102"
  },

]);
// let selectLevel = ref(JSON.parse(localStorage.getItem('selectLevel')))
// console.log(selectLevel.value,'sss');
// alert('999')
// console.log(store.selectLevel,'watchwatchwatchwatchwatchv');
watch(()=>store.selectLevel,()=>{
  console.log(store.selectLevel,'watchwatchwatchwatchwatchv');
  getDataFun()
},{deep: true,})

onMounted(() => {
  getDataFun()
})

async function getDataFun() {
  // alert('4444')
  list.value = []
  let res = null
  let userInfo = JSON.parse(localStorage.getItem('selectLevel'))
  // console.log(userInfo,'userInfouserInfouserInfouserInfo');
  if (!userInfo) proxy.$message({showClose: true, message: '请登陆',});

  let res1, orgNumberList;
  let orgNumber = userInfo.jgbh
  // debugger
  // console.log(orgNumber,'orgNumberorgNumberorgNumberorgNumberorgNumberorgNumberorgNumber');
  if (pageConfigs.isRequest) res1 = await imosOrgInfoQueryOne(orgNumber)
  else return;
  if ( res1.code != 200) {
    proxy.$message({showClose: true, message: res1.msg,});
  } else {
    let mechanism = ['边检总站', '边防检查站', '边检执勤队', '边管支队']
    // const { level } = node
    orgNumberList = res1.data.filter((v) => (mechanism.includes(v.jgsxmc))).map((v) => (v.jgbh))
    let parameter = {
      "orgNumber": orgNumber,
      "orgNumberList": orgNumberList,
      // "startTime": "开始时间",
      // "endTime": "结束时间",
      // "status": "状态",
      // "type": "状态",
      "pageSize": 100,
      "pageNum": 1
    }
    if (pageConfigs.isRequest) res = await axiosPost(pageConfigs.VUE_APP_BASE_API + 'dutySystem/yqgl/lettersFind', parameter)
    else res = {}
    list.value = res.data.data
    console.log(list.value,'llllllll')
  }
}

const popup = useTool()
const handleParams = toRef(popup, 'handleParams')

function yqClick(data) {

  let dataJson = JSON.parse(data.location)
  console.log(dataJson,'yqClickyqClickyqClick')
  handleParams.value = JSON.stringify({name: 'importantIntelligence', data: {content:data.yqNr,position:dataJson,id:data.yqId}});
}

</script>

<style scoped lang="scss">

.content {
  height: 800px;
  overflow-y: hidden;

  .item {
    height: 215px;
    font-family: ZiHun;
    background-image: url("../../../assets/img/page/InAndOutFooting/4.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
    padding: 0 60px;

    &-left {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      //padding: 0 0 30px 0px;
      box-sizing: border-box;

      .label {
        font-size: 52px;
      }

      .small {
        color: #147bcf;
        font-size: 48px;

      }
    }

    &-right {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      //padding: 0 0 30px 121px;
      box-sizing: border-box;

      .date {
        font-size: 50px;
        font-family: QTYPECOND-BOOK;
      }

      .state {
        font-size: 45px;
      }

      .yell {
        color: #ffb400;
      }

      .red {
        color: #c73908;
      }

    }
  }

  .iconfont {
    font-size: 55px;
  }

  .icon-dizhi1 {
    color: #de611c
  }

  .icon-shijian {
    margin-right: 20px;
    color: #f1cb65
  }
}

</style>
