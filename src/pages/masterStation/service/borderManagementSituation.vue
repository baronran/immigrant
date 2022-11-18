<template>
  <div className="borderManagementSituation">
    <z-title title="边境管理态势"></z-title>
    <div className="legend">
      <div className="legend-left">
        <div className="flex flex-center align-center on">本日</div>
        <div className="flex flex-center align-center">本月</div>
        <div className="flex flex-center align-center">本年</div>
      </div>
      <div className="legend-right">
        案件总数：500
      </div>
    </div>
    <div class="borderManagementSituation-text">
      <div v-for="(item,index) in list" class="item">
        <div class="item-name">{{item.name}}</div>
        <div class="item-bar">
          <div class="item-bar-val" :style="{width:`${(index + 1) * 10}%`}"></div>
        </div>
        <div class="item-var">578.45</div>
        <div class="item-tong">同比<i class="iconfont icon-shangsheng"></i>11.3%</div>
        <div class="item-huan">同比<i class="iconfont icon-jiantouxiajiang"></i>11.3%</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const list = ref([
  {
    name:'刑事',
  },{
    name:'涉毒',
  },{
    name:'涉恐',
  },{
    name:'涉枪',
  },{
    name:'走私',
  }
])
</script>

<style scoped lang="scss">
.borderManagementSituation {
  display: grid;
  grid-template-rows: repeat(1, auto) 767px;
  grid-row-gap: 52px;

  .legend {
    display: flex;
    justify-content: space-between;
    font-size: 50px;
    position: absolute;
    width: 2062px;
    margin-top: 174px;

    &-left {
      display: flex;
      justify-content: flex-start;

      > div {
        width: 173px;
        height: 79px;
        background-color: rgba(117, 195, 255, .2);;
        border-radius: 10px;
        border: solid 4px #87cbff;
        margin-right: 20px;
        opacity: .7;
      }

      .on {
        opacity: 1;
      }
    }

    &-right {
      font-size: 55px;
      font-family: ZiHun;
      text-align: center; //水平居中
      text-shadow: 0 0 10px rgba(255, 255, 255, .3), 0 0 20px rgba(255, 255, 255, .3), 0 0 30px rgba(255, 255, 255, .3), 0 0 40px rgba(255, 255, 255, .3);
    }
  }

  &-text {
    font-family: ZiHun;
    .item {
      margin: 20px 0;
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
        font-family: ZiHun;
      }

      &-bar {
        height: 25px;
        background-color: #5b7c9e;
        border: 25px solid #205ca7;

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
  }
}

</style>
