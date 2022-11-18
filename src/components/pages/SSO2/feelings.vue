<template>
  <cal title="舆情动态">
    <template v-slot:content>
      <div class="feelingsBox" >
        <Vue3SeamlessScroll :list="lsit" :singleHeight="singleHeight" :singleWaitTime="4000" :step="10" :hover="true">
        <div class="feelings " v-for="i,index in lsit">
          <!-- <div class="feelings-list">
              <div class="item" v-for="(item, index) in list" :key="index">
                <div class="item-title" :class="[(index + 1) % 2 == 0 ? 'odd' : '']">1</div>
                <div class="item-content">
                  <div class="time">2022-05-12 14:22:33</div>
                  <div class="text">国家移民局辟谣停办护照</div>
                </div>
              </div>
            </div> -->
            <div class="title">
              外国留学生在中国超国民待遇舆情值得关注
            </div>
            <div class="content">
              外国留学生在中国超国民待遇舆情值得关注
            </div>
            <div class="time">
              2022-11-08   12:00
            </div>
            <div class="title feelingspage">
              {{index+1}} / {{page.total}}
            </div>
          </div>
        </Vue3SeamlessScroll>
      </div>
    </template>
  </cal>

</template>

<script setup>
// import 'animate.css';
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { ref,onBeforeUnmount } from 'vue'

let props = defineProps({
  singleHeight:{
    type:Number,
    default:470
  }}
)

let lsit = new Array(33).fill({})
let page=ref({
  pageNo:1,total:33
})
onBeforeUnmount(() => {

})
</script>

<style scoped lang="scss">

.feelingsBox{
  height: 455px;
  overflow: hidden;

  .feelings {
    height: 100%;
    background: url("../../../assets/img/page/SSO/5.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    transition: all 1s ease-in-out;
    transform-style: preserve-3d;
    padding: 0 140px;
    margin: 10px 0;
    box-sizing: border-box;
    .title{
      color: #e0e7ee;
      font-size: 72px;
      font-family: ZiHun;
      text-align: center;
      height: 101px;
      width: 100%;

    }
    .content{
      color: #b9cfe2;
      font-size: 74px;
      font-family: ZiHun;
      text-align: left;
      width: 100%;
      padding: 0 110px;
      height: 190px;
      padding-top: 50px;
      box-sizing: border-box;
    }
    .time{
      color: #bfcfe5;
      font-size: 54px;
      font-family: DIN;
      box-sizing: border-box;
      text-align: right;
      padding-right: 90px;
    }
    .feelingspage{
      font-size: 76px;
      font-family: QTYPECOND-BOOK;
      text-shadow: 0px 0px 76px rgb(41, 83, 145);
    }
  }

}


</style>
