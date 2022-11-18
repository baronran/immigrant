<template>
  <!--  <div class="ToLoveTip">-->
  <!--    <z-title title="要情提示" @click="open"></z-title>-->
  <!--    <div class="legend">-->
  <!--      <div class="legend-left">-->
  <!--        <div class="flex flex-center align-center on">本日</div>-->
  <!--        <div class="flex flex-center align-center">本月</div>-->
  <!--        <div class="flex flex-center align-center">本年</div>-->
  <!--      </div>-->
  <!--      <div class="legend-right">-->
  <!--        <div class="flex flex-center align-center on">未处理(30)</div>-->
  <!--        <div class="flex flex-center align-center">处理中(33)</div>-->
  <!--        <div class="flex flex-center align-center">已办结(1280)</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="ToLoveTip-content">-->
  <!--      <div v-for="(item,index) in 4" class="item">-->
  <!--        <div class="item-left">未处理</div>-->
  <!--        <div class="item-right">-->
  <!--          <div>广西边防站发现一起涉嫌走私案件，事件疑似团伙......</div>-->
  <!--          <div>2022-02-23 19:01</div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <cal title="要情提示" type="1">
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>

    </template>
    <template v-slot:right>
      <div class="right-nav cursor-event" :class="{'on':typeStatus==idex}" @click="typeChange(idex)" v-for="(item,idex) in typeList">{{item.name}}({{item.total}} )</div>

    </template>
    <template v-slot:content>
      <div class="content">
        <div v-for="(item,index) in 4" class="item">
          <div class="item-left">未处理</div>
          <div class="item-right">
            <div>广西边防站发现一起涉嫌走私案件，事件疑似团伙......</div>
            <div>2022-02-23 19:01</div>
          </div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
let dateStatus = ref(0)
let typeStatus = ref(0)
let typeList = ref([
  {
    name:'未处理',
    total:0,
  }, {
    name:'处理中',
    total:0,
  },{
    name:'已完结',
    total:0,
  }
  
])

//日期切换
function dateChange(index){
  dateStatus.value = index
  renderChart()
}

// 国家 类型切换
function typeChange(index){
  typeStatus.value = index
  renderChart()
}

</script>

<style scoped lang="scss">
.content {
  font-family: ZiHun;
  padding-top: 190px;

  .item {
    height: 154px;
    display: grid;
    grid-template-columns: 154px 1fr;
    grid-column-gap: 49px;
    margin: 29px 0;

    &-left {
      width: 154px;
      height: 154px;
      border-radius: 50%;
      background-color: rgba(181, 225, 245, .2);
      font-size: 42px;
      line-height: 154px;
      text-align: center;
    }

    &-right {
      height: 120px;
      display: flex;
      justify-content: space-between;
      font-size: 56px;
      line-height: 120px;

      border-bottom: 2px dashed rgb(33, 142, 230);
    }

    &:hover {
      color: rgb(45, 142, 219);

      .item-left {
        color: #fff;
        background-color: rgb(45, 142, 219);
      }
    }
  }
}

</style>
