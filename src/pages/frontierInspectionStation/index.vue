<template>
  <div class="pages">
    <div class="pages-head">
      <div class="pages-head-left">
        <div class="on" >勤务态势总览</div>
      </div>
      <div class="pages-head-content">
        <div class="text_gradual_yellew">国家移民管理局一体化综合指挥平台</div>
        <img src="../../assets/img/layout/dian.png" class="img" alt="">
      </div>
      <div class="pages-head-right"> </div>
    </div>
    <router-view></router-view>
    <component :is="cesiumMap" ref="maps"></component>
    <popup type="bureau" :pageIndex="0"></popup>
    <leftNav></leftNav>
  </div>
</template>

<script setup>

import {useRouter, useRoute, onBeforeRouteUpdate} from 'vue-router'
import {onMounted, ref, toRef, watch} from 'vue'
import leftNav from '@/components/global/navigation.vue'
import popup from '@/components/global/popup/popup.vue'
import cesiumMap from '../../components/global/cesiumMap.vue'
import {useTool} from '../../store/filterTool.js'

const tool = useTool()
const handleParams = toRef(tool, 'handleParams')
const router = useRouter()
const route = useRoute()
const maps = ref()

const pageIndex = ref(0)

onMounted(() => {
  setTimeout(() => maps.value.initFace(), 500)
})

</script>

<style scoped lang="scss">
.pages {
  width: 10240px;
  height: 4320px;
  overflow: hidden;
  //background-color: black;
  background-image: url("@/assets/img/page/home/back.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &-head {
    background-image: url("../../assets/img/layout/title.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: left;
    position: absolute;
    height: 299px;
    display: grid;
    z-index: 999;
    grid-template-columns: 3665px auto 3665px;

    &-left {
      height: 299px;
      font-size: 94px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding-right: 800px;
      box-sizing: border-box;

      > div {
        background-image: url("../../assets/img/layout/left.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1182px;
        height: 146px;
        text-align: right;
        padding-right: 100px;
        box-sizing: border-box;
        font-family: ZiHun;
        letter-spacing: -5px;
        cursor: pointer;
        line-height: 146px;

        &:hover {
          background-image: url("../../assets/img/layout/left-on.png");
        }
      }

      .on {
        background-image: url("../../assets/img/layout/left-on.png");
      }
    }

    &-right {
      height: 299px;
      font-size: 94px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding-left: 800px;
      box-sizing: border-box;

      > div {
        background-image: url("../../assets/img/layout/right.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1182px;
        height: 146px;
        text-align: left;
        padding-left: 100px;
        box-sizing: border-box;
        font-family: ZiHun;
        cursor: pointer;
        line-height: 146px;

        &:hover {
          background-image: url("../../assets/img/layout/right-on.png");
        }
      }

      .on {
        background-image: url("../../assets/img/layout/right-on.png");
      }
    }


    &-content {
      display: flex;
      align-items: center;
      font-size: 180px;
      color: #ade1e0;
      font-family: 'PangMenZhengDao';
      //box-shadow: 0px 6px 4px 0px rgba(5, 29, 53, 0.83);
      text-align: center;

      .img {
        position: absolute;
        width: 2500px;
        height: 180px;
        top: 130px;
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: infinite;
      }

      @keyframes example {
        0% {
          left: 3165px;
          opacity: 0;
        }
        25% {
          opacity: 0.5;
        }
        50% {
          opacity: 1;
        }
        75% {
          opacity: 0.5;
        }
        100% {
          left: 4169px;
          opacity: 0;
        }
      }
    }
  }
}
.text_gradual_yellew {
  background: linear-gradient(to bottom, #ffff,#ffff, rgba(36, 175, 255, 0.7),#24afff);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
