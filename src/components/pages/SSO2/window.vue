<template>
  <div class="window">
    <div class="top">
      白云边检站成功 <br>查获8名涉嫌非法出入境人
    </div>
    <div class="titles">
      <span class="icon"></span>
      <span class="station">白云边检站</span>
      <span class="state">已签收</span>
      <span class="time">2022-11-08 12:00</span>
      <div class="info">详情:</div>
      <div class="content">外国留学生在中国国民待遇舆情值得关注</div>
    </div>
    <div class="importanttitle">
      相关要情：
    </div>
    <div class="essentialInformation">
      <Vue3SeamlessScroll :list="list" :hover="true">
        <div class="essentialInformationBox">
          <div class="checkitem" v-for="(item, index) in list" :key="index">
            <el-checkbox></el-checkbox>
            <div class="item">
              <div class="icon"></div>
              <div class="title">
                <div><i class="iconfont icon-dizhi1"></i>{{ item.bt }}</div>
                <div><i class="iconfont icon-shijian"></i>{{ item.tbSj }}</div>
              </div>
              <div class="text">
                <div class="ellipsis">{{ item.yqNr }}</div>
                <!--            状态 0另存稿 1未填写 2未发送 3已发送  4待签收 5已签收 6退回-->
                <div :style="{ color: yqzt[item.zt].color }">{{ yqzt[item.zt].text }}</div>
              </div>
            </div>
          </div>

        </div>

      </Vue3SeamlessScroll>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
const list = ref([{
  "tbSj": "2022-11-08 14:20",
  "bt": "上海边检总站",
  "zt": 5,
  "yqNr": "机场边检站查获一名持用骗取证件多次非法出入境的中国内地居民",
}, {
  "tbSj": "2022-11-07 16:20",
  "bt": "云南边检总站",
  "zt": 5,
  "yqNr": "清水河边检站破获一起特大毒品案 缴获冰毒片剂17.2公斤 抓获...",
}, {
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
</script>

<style scoped lang="scss">
.window {
  width: 1307px;
  height: 1556px;
  background: url("../../../assets/img/page/SSO/501659.png") no-repeat center;

  .top {
    width: 100%;
    height: 246px;
    text-align: center;
    font-size: 84px;
    font-family: ZiHun;
    color: #b9cfe2;
    padding-top: 45px;
    box-sizing: border-box;
    background: url("../../../assets/img/page/SSO/3421.png") no-repeat center;
  }

  .titles {
    width: 100%;
    height: 415px;
    font-size: 68px;
    font-family: ZiHun;
    padding: 30px 90px;
    box-sizing: border-box;
    background: url("../../../assets/img/page/SSO/232.png") no-repeat center;

    .icon {
      display: inline-block;
      width: 36px;
      height: 36px;
      background: url("../../../assets/img/page/SSO/16.png") no-repeat center;
    }

    .station {
      font-size: 58px;
      color: #7ca4c6;
    }

    .state {
      font-size: 62px;
      color: #33fabb;
      margin-left: 20px;
    }

    .time {
      font-size: 58px;
      color: #8da8bf;
      float: right;
      font-family: DIN;
    }

    .info {
      font-size: 68px;
      color: #61a0d6;
      margin: 40px 0;
    }

    .contnt {
      font-size: 68px;
      color: #b9cfe2;
    }
  }

  .importanttitle {
    font-size: 62px;
    color: #61a0d6;
    padding: 30px 90px;
  }

  .essentialInformation {
    height: 600px;
    overflow: hidden;
    padding: 0px 90px;
    .checkitem{
      display: grid;
      grid-template-columns: 100px 1fr;
    }
    .item {
      height: 132px;
      margin: 25px 0;
      border: 2px solid #3d5969;
      padding: 25px 50px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      position: relative;
      background: url("../../../assets/img/page/SSO/232.png") no-repeat center;

      .icon {
        width: 22px;
        height: 22px;
        position: absolute;
        top: 15px;
        left: 15px;
        background: url("../../../assets/img/page/SSO/690.png") no-repeat center;
      }

      .title {
        display: flex;
        justify-content: space-between;
        font-size: 30px;
        padding-bottom: 10px;
        color: #fef0e6;
        border-bottom: 1px solid rgba(255, 255, 255, .22);

        i {
          font-size: 30px;
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
        font-size: 30px;
        color: #147bcf;
        .ellipsis{
          width: 85%;
        }
        .success {
          color: #ffb400
        }

        .error {
          color: #c73908
        }


      }
    }
    :deep(.el-checkbox__inner){
      width: 50px;
      height: 50px;
      background: url();
      border: 3px solid #2e5a6f;
      margin-left: 20px;
      margin-top: 119px;
      font-size: 50px;
      color: #61a0d6;
    }
    :deep(.el-checkbox__inner:after){
      border: 5px solid #61a0d6;
      border-left: 0;
      border-top: 0;
      height: 26px;
      left: 13px;
      top: 2px;
      width: 14px;
    }
  }
}
</style>
