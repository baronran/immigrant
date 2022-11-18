<template>
  <div class="feelings">
    <div class="feelings-title">舆情动态</div>
    <div class="feelings-list">
      <Vue3SeamlessScroll :list="list" :style="{height: `881px`}">
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="item-title" :class="[(index + 1) % 2 ==0?'odd':'']">1</div>
          <div class="item-content">
            <div class="time">2022-05-12 14:22:33</div>
            <div class="text">国家移民局辟谣停办护照</div>
          </div>
        </div>
      </Vue3SeamlessScroll>
    </div>
  </div>
</template>

<script setup>
import {Vue3SeamlessScroll} from "vue3-seamless-scroll";
import {ref} from 'vue'

const list = ref([
  {
    title: "Vue3.0 无缝滚动组件展示数据第1条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第2条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第3条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第4条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第5条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第6条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第7条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第8条",
    date: Date.now(),
  },
  {
    title: "Vue3.0 无缝滚动组件展示数据第9条",
    date: Date.now(),
  },
]);
</script>

<style scoped lang="scss">
.feelings {
  &-title {
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

  &-list {
    height: 881px;
    overflow-y: hidden;

    .item {
      width: 1186px;
      height: 118px;
      display: grid;
      grid-template-columns: 157px 1fr;
      grid-column-gap: 39px;
      margin: 36px 0;
      padding: 0 27px;
      box-sizing: border-box;

      &-title {
        font-size: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("../../../assets/img/page/common/4.png") no-repeat 99% 99%;
        background-position: center;
      }

      .odd {
        background: url("../../../assets/img/page/common/5.png") no-repeat 99% 99%;
        background-position: center;
      }

      &-content {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        .time {
          font-size: 36px;
          opacity: 0.5;
        }

        .text {
          font-family: ZiHun;
          font-size: 42px;
        }
      }

      &:nth-of-type(odd) {
        background-color: rgba(98, 162, 212, .1);
      }
    }
  }
}
</style>
