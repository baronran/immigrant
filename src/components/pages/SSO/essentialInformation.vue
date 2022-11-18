<template>
  <div className="essentialInformation">
    <z-title title="要情信息"></z-title>
    <div class="essentialInformation-content">
      <Vue3SeamlessScroll :list="list" :hover="true">
        <div class="essentialInformationBox">
          <div class="item" v-for="(item,index) in list" :key="index">
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
  </div>
</template>

<script setup>
import {Vue3SeamlessScroll} from "vue3-seamless-scroll";
import {ref, getCurrentInstance, onMounted} from 'vue'
import {axiosPost} from "../../../apis/service.js";

const {proxy} = getCurrentInstance()
import {imosOrgInfoQueryOne} from "../../../apis/login.js";

const list = ref([{
  "yqId": "202211021150551870",
  "orgName": "国家移民局",
  "orgNumber": "820000000000",
  "tbSj": "2022-11-02 11:50:55",
  "bcSj": null,
  "bt": "边检处理事件",
  "zt": 3,
  "yqNr": "我是一个兵",
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
  "location": null,
  "receiveOrgNumber": null,
  "receiveOrgName": null,
  "xbBh": null,
  "yqBh": "20221102"
}, {
  "yqId": "202211030913097320",
  "orgName": "",
  "orgNumber": "823300000000",
  "tbSj": "2022-11-03 09:13:10",
  "bcSj": null,
  "bt": "xx事件的处置",
  "zt": 5,
  "yqNr": "<p>具体处置的事项</p>",
  "isDelete": 0,
  "isSend": null,
  "mbGs": null,
  "fsNr": null,
  "level": null,
  "yqMc": "国家移民局要情快报",
  "mbDl": "自然灾害",
  "mbXl": "海啸",
  "mbNr": "<div class=\"createBtn\" id=\"bsl\" data-v-11fd4b88=\"\">报送栏</div><div class=\"createBtn\" id=\"wjsxl\" data-v-11fd4b88=\"\">文件属性栏</div><div class=\"createBtn\" id=\"tbrql\" data-v-11fd4b88=\"\">填报日期栏</div><div class=\"createBtn\" id=\"bcsjl\" data-v-11fd4b88=\"\">报出时间栏</div><div class=\"createBtn\" id=\"zdbtl\" data-v-11fd4b88=\"\">自动标题栏</div><div class=\"createBtn\" id=\"wjbhl\" data-v-11fd4b88=\"\">文件编号栏</div><div class=\"createBtn\" id=\"tbdwl\" data-v-11fd4b88=\"\">填报单位栏</div><div class=\"createBtn\" id=\"nrbtl\" data-v-11fd4b88=\"\">内容标题栏</div><div class=\"createBtn\" id=\"wjnrl\" data-v-11fd4b88=\"\">文件内容栏</div><div class=\"createLine\" id=\"line-up\"></div><div class=\"createLine\" id=\"line-footer\"></div><div class=\"createBtn\" id=\"qfrl\" data-v-11fd4b88=\"\">签发人栏</div><div class=\"createBtn\" id=\"hgrl\" data-v-11fd4b88=\"\">核稿人栏</div><div class=\"createBtn\" id=\"bjrl\" data-v-11fd4b88=\"\">编辑人栏</div>",
  "isFollow": 0,
  "location": "",
  "receiveOrgNumber": null,
  "receiveOrgName": null,
  "xbBh": null,
  "yqBh": "111111"
}]);

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
  else return

  if ( res1.code != 200) {
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
    height: 794px;
    overflow-y: hidden;

    .item {
      height: 220px;
      margin: 25px 0;
      border: 1px solid #3783e0;
      padding: 25px 50px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      .title {
        display: flex;
        justify-content: space-between;
        font-size: 50px;
        padding-bottom: 20px;
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

  .essentialInformationBox {
    height: 794px;
    overflow: hidden;


  }
}

</style>
