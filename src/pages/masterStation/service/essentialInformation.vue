<template>
  <div className="essentialInformation">
    <z-title title="要情信息"></z-title>
    <div class="essentialInformation-content">
      <Vue3SeamlessScroll :list="list" :hover="true">
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="title">
            <div><i class="iconfont icon-dizhi1"></i>新疆出入境边防检查总站</div>
            <div class="num"><i class="iconfont icon-shijian"></i>2022-03-20 16:46</div>
          </div>
          <div class="text">
            <div>伊犁支队XX派出所发现...</div>
            <div :class="[['success','error'][1]]">{{ ['已签收', '未签收'][1] }}</div>
          </div>
        </div>
      </Vue3SeamlessScroll>
    </div>
  </div>
</template>

<script setup>
import {Vue3SeamlessScroll} from "vue3-seamless-scroll";
import {ref, getCurrentInstance, onMounted} from 'vue'

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
.essentialInformation {
  display: grid;
  grid-template-rows: 147px 1fr;
  grid-row-gap: 52px;

  &-content {
    height: 794px;
    overflow-y: hidden;

    .item {
      height: 220px;
      margin: 25px 0;
      padding: 25px 50px;
      background-color: rgba(55, 131, 224, 0.1);
      border: solid 2px rgba(143, 198, 218, 0.4);
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      .title {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: 4px solid rgba(255, 255, 255, .22);
        font-family: SourceHanSansCN-Bold;
        font-size: 56px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgba(254, 240, 230, 0.6);

        i {
          font-size: 50px;
          margin-right: 20px;
        }

        .icon-dizhi1 {
          color: #d36528
        }

        .icon-shijian {
          color: #ffd45f
        }
        .num{
          font-family: QTypeCond-Book;
          font-size: 56px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #ffffff;
          opacity: 0.7;
        }
      }

      .text {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        font-family: SourceHanSansCN-Medium;
        font-size: 52px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #147bcf;

        .success {
          color: #ffb400
        }

        .error {
          color: #c73908
        }
      }
    }
  }
}

</style>
