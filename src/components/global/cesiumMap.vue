<template>
  <iframe
      :src=cesiumUrl
      id="mainIframe"
      ref="mainIframe"
      name="mainIframe"
      width="100%"
      height="100%"
      align="center"
      scrolling="auto"
      frameborder="0"
      allowTransparency="true">
  </iframe>
</template>

<script setup>
import {ref, toRef, watch, defineExpose, onMounted} from "vue";

const cesiumUrl = ref(pageConfigs.cesiumUrl)
const mainIframe = ref()
let iframeWindow = null

const ToEarthFunc = (data) => {
  mainIframe.value.onload = () => {
    iframeWindow.postMessage(data, pageConfigs.cesiumUrl)
  }
}

onMounted(() => iframeWindow = mainIframe.value.contentWindow)
const handleBall = (e) => {
  iframeWindow.postMessage(e, pageConfigs.cesiumUrl)
}
// 球
const initBall = () => {
  // mainIframe.value.onload = () => iframeWindow.postMessage('', pageConfigs.cesiumUrl)
}

// 面
const initFace = () => {
  console.log('allHtml')
  mainIframe.value.onload = () => iframeWindow.postMessage({name: "allHtml",type:"moveTo", data: {}}, pageConfigs.cesiumUrl)
}


defineExpose({ToEarthFunc, handleBall, initBall, initFace})
</script>

<style scoped>
.back {
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
