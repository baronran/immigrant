<template>
  <cal title="要情信息">
    <template v-slot:content>
      <div class="item" v-for="(item,index) in 3">
        <div class="item-left">
          <div class="label">新疆出入境边防检查总站</div>
          <div class="small">伊犁支队XX派出所发现...</div>
        </div>
        <div class="item-right">
          <div class="date">2022-05-12 14:22</div>
          <div class="state">已签收</div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

</script>

<style scoped lang="scss">
.item {
  height: 255px;
  font-family: ZiHun;
  background-image: url("../../../assets/img/page/InAndOutFooting/4.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 65px 0;
  display: grid;
  grid-template-columns: 1744px 1fr;

  &-left {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0 0 30px 141px;
    box-sizing: border-box;

    .label {
      font-size: 52px;
    }

    .small {
      color: #147bcf;
      font-size: 48px;

    }
  }

  &-right {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0 0 30px 121px;
    box-sizing: border-box;

    .date {
      font-size: 50px;
      font-family: QTYPECOND-BOOK;
    }

    .state {
      font-size: 45px;
    }
  }
}
</style>
