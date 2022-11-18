<template>
  <cal title="要情信息" >
    <template v-slot:content>
      <div class="essentialInformation-content">
      <Vue3SeamlessScroll :list="list" :hover="true">
        <div class="essentialInformationBox">
          <div class="item" v-for="(item,index) in list" :key="index">
            <div class="icon"></div>
            <div class="title">
              <div><i class="iconfont icon-dizhi1"></i>{{ item.bt }}</div>
              <div><i class="iconfont icon-shijian"></i>{{ item.tbSj }}</div>
            </div>
            <div class="text">
              <div>{{ item.yqNr }}</div>
              <!--            状态 0另存稿 1未填写 2未发送 3已发送  4待签收 5已签收 6退回-->
              <div :style="{color:yqzt[item.zt].color}">{{ yqzt[item.zt].text }}</div>
            </div>
          </div>
        </div>

      </Vue3SeamlessScroll>
    </div>
    </template>
  </cal>

</template>

<script setup>
import {Vue3SeamlessScroll} from "vue3-seamless-scroll";
import {ref, getCurrentInstance, onMounted} from 'vue'
import {axiosPost} from "../../../apis/service.js";

const {proxy} = getCurrentInstance()
import {imosOrgInfoQueryOne} from "../../../apis/login.js";

const list = ref([{
  "tbSj": "2022-11-08 14:20",
  "bt": "上海边检总站",
  "zt": 5,
  "yqNr": "机场边检站查获一名持用骗取证件多次非法出入境的中国内地居民",
},{
  "tbSj": "2022-11-07 16:20",
  "bt": "云南边检总站",
  "zt": 5,
  "yqNr": "清水河边检站破获一起特大毒品案 缴获冰毒片剂17.2公斤 抓获...",
},{
  "tbSj": "2022-11-07 09:20",
  "bt": "陕西省出入境管理局",
  "zt": 4,
  "yqNr": "榆林出入境管理部门配合相关警种部门妥善处置一起外国记者非...",
},]);

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
onMounted(() => {
  getDataFun()
})

async function getDataFun(node) {
  let res = null
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  // console.log(userInfo);
  if (!userInfo) proxy.$message({showClose: true, message: '请登陆',});

  let res1, list;
  let parameter = node || userInfo.jgbh

  if (pageConfigs.isRequest) res1 = await imosOrgInfoQueryOne(parameter)
  else return;
  if (res1.code != 200) {
    proxy.$message({showClose: true, message: res1.msg,});
    return;
  } else {
    let mechanism = ['边检总站', '边防检查站', '边检执勤队', '边管支队']
    // const { level } = node
    list = res1.data.filter((v) => (mechanism.includes(v.jgsxmc))).map((v) => (v.jgbh))

    let parameter = {
      "orgNumber": userInfo.jgbh,
      "orgNumberList": list,
      // "startTime": "开始时间",
      // "endTime": "结束时间",
      // "status": "状态",
      // "type": "状态",
      "pageSize": 100,
      "pageNum": 1
    }
    console.log(parameter, 'ooooooooo');

    if (pageConfigs.isRequest) res = await axiosPost(pageConfigs.VUE_APP_BASE_API + 'dutySystem/yqgl/lettersFind', parameter)
    else res = {}
    list.value = res.data.data
    console.log(list.value);
  }
}

</script>

<style scoped lang="scss">
.essentialInformation {
  display: grid;
  grid-template-rows: 147px 1fr;
  grid-row-gap: 52px;

  &-content {
    //height: 794px;
    height: 455px;
    overflow-y: hidden;

    .item {
      height: 220px;
      margin: 25px 0;
      border: 2px solid #3d5969;
      padding: 25px 50px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      position: relative;
      .icon{
        width: 22px;
        height: 22px;
        position: absolute;
        top: 40px;
        left: 20px;
        background:url("../../../assets/img/page/SSO/690.png") no-repeat center;
      }
      .title {
        display: flex;
        justify-content: space-between;
        font-size: 50px;
        padding-bottom: 20px;
        color: #fef0e6;
        border-bottom: 1px solid rgba(255, 255, 255, .22);

        i {
          font-size: 50px;
          margin: 0 20px;
        }

        .icon-dizhi1 {
          color: #d36528
        }

        .icon-shijian {
          color: #ffd45f
        }
      }

      .text {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        font-size: 50px;
        color: #147bcf;

        .success {
          color: #ffb400
        }

        .error {
          color: #c73908
        }


      }
    }
  }
  //
  //.essentialInformationBox {
  //  height: 794px;
  //  overflow: hidden;
  //
  //}
}

</style>
