<template>
  <div class="count">
    <div class="item flex flex-center" v-for="i,index in list">
      <img :src="getUrl(index)" alt="">
      <div>
        <div class="name">{{i.label}}</div>
        <div class="label"> <AnimatedNumber :from="0" :to="i.num"></AnimatedNumber><span class="point"><i class="iconfont icon-shangsheng"></i>{{i.point}}%</span>  </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref ,onMounted } from 'vue'
let list = ref([
  {label:'查获非法入境',num:58,point:5},
  {label:'查获非法出境',num:48,point:5},
  {label:'查办案件数',num:23,point:5},

])
let getUrl = function(index){
  return new URL('../../../assets/img/page/SCSIBJ2/top'+ index +'.png', import.meta.url).href
}
</script>

<style scoped lang="scss">
.count {
  display: flex;
  justify-content: space-between;
  width: 2840px;
  margin-left: 600px;
  .label {
    font-size: 126px;
    font-family: QTYPECOND-BOOK;
    text-shadow: 0 0 10px rgba(41, 83, 145, .3), 0 0 20px rgba(41, 83, 145, .3), 0 0 30px rgba(41, 83, 145, .3), 0 0 40px rgba(41, 83, 145, .3);
    display: flex;
    align-items: baseline;
    .point{
      color:#ed9d22;
      font-family: 'DIN';
      font-weight: 600;
      font-size: 70px;
      right: 50px;
      top: 192px;
      .iconfont{
        font-size: 76px;
      }
    }
  }

  img {
    width: 224px;
    height: 224px;
    margin-right: 20px;
  }

  .name {
    font-size: 62px;
    color: #c1ddf1;
  }

  .small {
    font-size: 70px;
    background-image: url("../../../assets/img/page/borderSafety/4.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 473px;
    height: 78px;
    text-align: center;
    line-height: 78px;
  }
}
</style>
