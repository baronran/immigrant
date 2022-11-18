<template>
   <cal title="值班领导" >
    <template v-slot:right>
      <!-- <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div> -->

    </template>
    <template v-slot:content>
      <div class="count">
   <div class=" theader" >
    <div class="" >单位</div>
      <div class="text">值班领导</div>
      <div class="text">职位</div>
  </div>
      <div style="height: 700px;overflow: hidden;">
        <Vue3SeamlessScroll :list="list" :style="{height: `700px`}" :hover="true">
        
          <div class="item" v-for="(item,index) in list" :key="index">
            <div class="" >{{item.station}}</div>
            <div class="text">{{item.name}}</div>
            <div class="text">{{item.phone}}</div>
        </div>
        </Vue3SeamlessScroll>
      </div>
  </div>
    </template>
  </cal>
  
</template>

<script setup>
import {Vue3SeamlessScroll} from "vue3-seamless-scroll";
import {ref, getCurrentInstance, onMounted} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()


const list = ref([
  {
    name:'孙二',
    phone:'总站长',
    station:'湖南省总站'
  },{
    name:'张三',
    phone:'副政委',
    station:'广西边检总站'
  },{
    name:'李氏',
    phone:'副总站长',
    station:'湖南边检总站'
  },{
    name:'赵五',
    phone:'总站长',
    station:'山东边检总站'
  },{
    name:'五六',
    phone:'副总站长',
    station:'山西边检总站'
  },{
    name:'王五',
    phone:'政委',
    station:'陕西边检总站'
  }

])
</script>

<style scoped lang="scss">
.theader{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100px;
      line-height: 100px;
      color: #c1d1df;
      font-family: ZiHun;
      border-bottom: 2px solid #86898f;
      font-size: 70px;

}
.item {
      // width: 1341px;
      height: 100px;
      line-height: 100px;
      display: grid;
      font-family: ZiHun;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 39px;
      margin: 10px 0;
      padding: 0 27px;
      box-sizing: border-box;
      font-size: 70px;

      &:nth-of-type(odd) {
        background-color: rgba(82, 172, 235, .2);
        color: #2194f6;
      }
    }
.count {
  // display: flex;
  // justify-content: space-between;
  width: 100%;
  margin: auto;
  margin-bottom: 100px;
  .label {
    font-family: QTypeCond-Book;
    font-size: 138px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
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
    width: 605px;
    height: 108px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .titleName {
    background: url("../../../assets/img/page/home/x.png") no-repeat 100% 100%;
    background-size: 1186px 117px;
    width: 1186px;
    height: 117px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-size: 83px;
    font-family: ZiHun;
  }

  .beOnDutyContent{
    display: flex;
    flex-direction: column;
    font-family: MFYueYuan_Noncommercial-Regular;
    font-size: 65px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    padding: 90px 150px;
    box-sizing: border-box;
    >div{
      margin: 10px 0;
    }
    .nameF{
      color: #c8d7e5;
    }
  }

  :deep(.z-select-list){
    height: auto;
  }
}

</style>
