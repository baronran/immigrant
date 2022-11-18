<template>
  <cal title="舆情动态">
    <template v-slot:right>
      <!-- <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div> -->

    </template>
    <template v-slot:content>
      <div style="height: 847px;overflow: hidden;">

        <Vue3SeamlessScroll :list="lsit" :singleHeight="847" :singleWaitTime="4000" :step="10" :hover="true">
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
            <div class="title page">
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
let lsit = new Array(33).fill({})
let page=ref({
  pageNo:1,total:33
})
onBeforeUnmount(() => {

})
</script>

<style scoped lang="scss">
.feelings {
  height: 849px;
  background: url("../../../assets/img/page/SSO/5.png") no-repeat center ;
  background-size: 100%;
  position: relative;
  transition: all 1s ease-in-out;
  transform-style: preserve-3d;  
  .title{
    color: #e0e7ee;
    font-size: 72px;
    font-family: ZiHun;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 60px;
  }
  .content{
    color: #b9cfe2;
    font-size: 74px;
    font-family: ZiHun;
    text-align: left;
    position: absolute;
    width: 100%;
    top: 260px;
    box-sizing: border-box;
    padding: 0 230px;
  }
  .time{
    color: #bfcfe5;
    font-size: 54px;
    font-family: DIN;
    position: absolute;
    top: 500px;
    right: 211px;
    box-sizing: border-box;
  }
  .page{
    font-size: 76px;
    top: 648px;
    font-family: QTYPECOND-BOOK;
    text-shadow: 0px 0px 76px rgb(41, 83, 145);
  }
}
</style>
