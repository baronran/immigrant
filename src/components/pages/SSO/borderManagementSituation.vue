<template>
  <cal title="边境管理态势" @open="open" type="1">
    <template v-slot:left>
      <div class="left-nav cursor-event" :class="{'on':dateStatus==idex}"  @click="dateChange(idex)" v-for="(item,idex) in ['本日','本月','本年']">{{item}}</div>

    </template>
    <template v-slot:right>
      <div class="count">案件总数：{{ allSum   }}</div>
    </template>
    <template v-slot:content>
      <div class="text">
        <div v-for="(item,index) in list" class="item">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-bar">
            <div class="item-bar-val" :style="{width:`${(item.yearOnYear)}%`}"></div>
          </div>
          <div class="item-var">{{item.val}}</div>
          <div class="item-tong">同比<i class="iconfont icon-shangsheng"></i>{{item.yearOnYear}}%</div>
          <div class="item-huan">环比<i class="iconfont icon-jiantouxiajiang"></i>{{item.ringRatio}}%</div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {defineEmits, ref} from "vue";
import {getRandom} from "../../../utils/util.js";
import apiJson from "../../../../public/apiJson/borderManagementSituation"

const emit = defineEmits(['open'])
const open = (style) => emit('open', {style, el: 'borderManagementSituation'})
let allSum = ref(0)
let dateStatus = ref(0)

apiJson.data.map((index)=>{
  allSum.value+=index.val
})
const list = ref(apiJson.data)

function dateChange(index){
  dateStatus.value = index

  list.value = [
    {
      name: '刑事',
      val:getRandom(200,600,),
      yearOnYear:getRandom(1,100,),
      ringRatio:getRandom(1,100,),
    }, {
      name: '涉毒',
      val:getRandom(200,600,),
      yearOnYear:getRandom(1,100,),
      ringRatio:getRandom(1,100,),
    }, {
      name: '涉恐',
      val:getRandom(200,600,),
      yearOnYear:getRandom(1,100,),
      ringRatio:getRandom(1,100,),
    }, {
      name: '涉枪',
      val:getRandom(200,600,),
      yearOnYear:getRandom(1,100,),
      ringRatio:getRandom(1,100,),
    }, {
      name: '走私',
      val:getRandom(200,600,),
      yearOnYear:getRandom(1,100,),
      ringRatio:getRandom(1,100,),
    },
    {
      name: '其他',
      val:getRandom(200,600,),
      yearOnYear:getRandom(1,100,),
      ringRatio:getRandom(1,100,),
    }
  ]
}

</script>

<style scoped lang="scss">
.count {
  font-size: 55px;
  font-family: ZiHun;
  text-align: center; //水平居中
  text-shadow: 0 0 10px rgba(255, 255, 255, .3), 0 0 20px rgba(255, 255, 255, .3), 0 0 30px rgba(255, 255, 255, .3), 0 0 40px rgba(255, 255, 255, .3);
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 110px;
  box-sizing: border-box;

  .item {
    margin: 16px 0;
    display: grid;
    grid-template-columns: 130px 1168px auto auto auto;
    grid-column-gap: 22px;
    align-items: center;
    height: 130px;

    &-name {
      width: 130px;
      height: 130px;
      font-size: 38px;
      font-family: ZiHun;
      line-height: 130px;
      text-align: center;
      background-image: url("../../../assets/img/page/home/3.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    &-var {
      font-size: 48px;
    }

    &-bar {
      height: 25px;
      //background-color: #5b7c9e;
      //border: 25px solid #205ca7;
      background-color: #5b7c9e;
      border: 25px solid #113864;

      &-val {
        transform: initial;
      }

      > div {
        height: 25px;
        background-color: #11c4ff;
      }
    }

    &-tong {
      color: #ed9d22;
      font-size: 43px;

      .iconfont {
        font-size: 43px;
      }
    }

    &-huan {
      color: #15e3f5;
      font-size: 43px;

      .iconfont {
        font-size: 43px;
      }
    }
  }

  .item:nth-of-type(2n) {
    .item-bar {

      height: 25px;
      background-color: #203143;
      border: 25px solid #dcd9cd24;

      > div {
        height: 25px;
        background-color: #dcd9cd;
      }
    }
  }


}
</style>
