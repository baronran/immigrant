<template>
  <div class="filterTool">
    <div class="flex flex-start" @click="test('fly')">
      <i class="iconfont icon-feijichucha"></i>
      <div> 飞机</div>
    </div>
    <div class="flex flex-start" @click="test('ship')">
      <i class="iconfont icon-chuanbo"></i>
      <div>船舶</div>
    </div>
    <div class="flex flex-start" @click="test('train')">
      <i class="iconfont icon-ditie"></i>
      <div> 列车</div>
    </div>
  </div>
</template>

<script setup>
import {useTool} from '../../../store/filterTool.js'
import { ref, toRef, onMounted, watch, nextTick, defineExpose} from "vue";

const popup = useTool()
const handleParams = toRef(popup, 'handleParams')

function test(data) {
  handleParams.value = JSON.stringify({name: data, data: {}});
  // var myframe = document.getElementById('mainIframe');
  // myframe.contentWindow.postMessage(data, 'http://47.93.51.30/ymj/scene/');
}

</script>

<style scoped lang="scss">
.filterTool {
  margin: 0 0 258px 100px;

  > div {
    background-repeat: no-repeat;
    background-size: 535px 123px;
    background-position: center;
    pointer-events: auto;
    width: 605px;
    height: 123px;
    //background-color: rgba(5, 146, 255, 1);
    background-image: url("../../../assets/img/page/home/2.png");
    font-size: 58px;
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 80px;
    box-sizing: border-box;
    color: #acd5f4;
    cursor: pointer;

    .iconfont {
      margin: 0 50px;
      font-size: 58px;
    }

    &:hover {
      background-image: url("../../../assets/img/page/home/1.png");
      background-size: 605px 123px;
      background-position: center;

    }
  }
}
</style>
