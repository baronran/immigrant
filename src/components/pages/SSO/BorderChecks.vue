<template>
  <cal title="边境检查" type="1" @open="open">
    <template v-slot:left>
      <div class="left-nav cursor-event on" @click="dateChange()">本日</div>
      <div class="left-nav cursor-event" @click="dateChange()">本月</div>
      <div class="left-nav cursor-event" @click="dateChange()">本年</div>
    </template>
    <template v-slot:content>
      <div class="content">
        <div v-for="(item,index) in data" class="item">
          <div class="item-left">
            <img v-if="index ==0" src="../../../assets/img/page/borderSafety/b0.png" alt=""/>
            <img v-else-if="index == 1" src="../../../assets/img/page/borderSafety/b1.png" alt=""/>
            <img v-else-if="index == 2" src="../../../assets/img/page/borderSafety/b2.png" alt=""/>
          </div>
          <div class="item-right">
            <div class="top">
              <div class="flag"></div>
              <div class="label">{{ item.content }}</div>
              <div>{{ item.val }}</div>
              <div class="flex flex-center">
                <div class="h">环比<i class="iconfont icon-jiantouxiajiang"></i> {{ item.ringRatio }}%</div>
                <div class="t">同比<i class="iconfont icon-shangsheng"></i> {{ item.yearOnYear }}%</div>
              </div>
            </div>
            <div class="bar"></div>
            <div class="top">
              <div class="flag"></div>
              <div class="label">{{ item.content1 }}</div>
              <div>{{ item.val1 }}</div>
              <div class="flex flex-center">
                <div class="h">环比<i class="iconfont icon-jiantouxiajiang"></i> {{ item.ringRatio1 }}%</div>
                <div class="t">同比<i class="iconfont icon-shangsheng"></i> {{ item.yearOnYear1 }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted, nextTick} from 'vue'
import {getRandom} from "../../../utils/util.js";


const {proxy} = getCurrentInstance()

const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'BorderChecks'})

function  dateChange (){
  data.value = [
    {
      content: '进入边境管理区人数',
      val: getRandom(100,220,)+'人',
      ringRatio: getRandom(0,100,),
      yearOnYear: getRandom(0,100,),
      content1: '离开边境管理区人数',
      val1: getRandom(100,520,)+'人',
      ringRatio1: getRandom(0,100,),
      yearOnYear1: getRandom(0,100,),
    },
    {
      content: '进入边境管理区交通工具数',
      val: getRandom(100,320,)+'俩',
      ringRatio: getRandom(0,100,),
      yearOnYear: getRandom(0,100,),
      content1: '离开边境管理区交通工具数',
      val1: getRandom(100,320,)+'俩',
      ringRatio1: getRandom(0,100,),
      yearOnYear1: getRandom(0,100,),
    },
    {
      content: '协助地方公安遣送出境人员',
      val: getRandom(100,520,)+'人',
      ringRatio: getRandom(0,100,),
      yearOnYear: getRandom(0,100,),
      content1: '接收境外遣返人员',
      val1: getRandom(100,520,)+'人',
      ringRatio1: getRandom(0,100,),
      yearOnYear1: getRandom(0,100,),
    }
  ]
}

const data = ref([
  {
    content: '进入边境管理区人数',
    val: '2610人',
    ringRatio: '13',
    yearOnYear: '1.3',
    content1: '离开边境管理区人数',
    val1: '2610人',
    ringRatio1: '13',
    yearOnYear1: '1.3',
  },
  {
    content: '进入边境管理区交通工具数',
    val: '2610俩',
    ringRatio: '13',
    yearOnYear: '1.3',
    content1: '离开边境管理区交通工具数',
    val1: '2610俩',
    ringRatio1: '13',
    yearOnYear1: '1.3',
  },
  {
    content: '协助地方公安遣送出境人员',
    val: '2610人',
    ringRatio: '13',
    yearOnYear: '1.3',
    content1: '接收境外遣返人员',
    val1: '2610人',
    ringRatio1: '13',
    yearOnYear1: '1.3',
  }
])


</script>

<style scoped lang="scss">
.content {
  padding-top: 190px;
  box-sizing: border-box;
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
        width: 100%;
        height: 6px;
        background-color: rgba(181, 225, 245, 0.5);
        opacity: 0.3;

        &::before {
          content: '';
          display: block;
          position: absolute;
          background-color: rgb(181, 225, 245);
          width: 70px;
          //margin-top: -3px;
          height: 6px;
        }
      }

      .top {
        display: grid;
        grid-template-columns: 75px 760px auto auto;
        text-align: left;

        .flag {
          height: 49px;
          width: 49px;
          border-radius: 50%;
          background-color: rgba(181, 225, 245, .2);

          &::before {
            content: '';
            display: inline-block;
            position: relative;
            left: 10px;
            bottom: 6px;
            height: 11px;
            width: 11px;
            border-radius: 50%;
            border: 5px solid rgba(181, 225, 245, .4);
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
</style>
