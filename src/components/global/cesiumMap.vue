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
  console.log('球---------球')
  mainIframe.value.onload = () =>  iframeWindow.postMessage({name: "allHtml", data: {}}, pageConfigs.cesiumUrl)
  iframeWindow.postMessage({name: "allHtml", data: {}}, pageConfigs.cesiumUrl)
}

// 面
const initFace = () => {
  console.log(' 口岸-边境-出入',iframeWindow)
  mainIframe.value.onload = () => iframeWindow.postMessage({name: "BureauSSO",data: {}}, pageConfigs.cesiumUrl)
   iframeWindow.postMessage({name: "BureauSSO",data: {}}, pageConfigs.cesiumUrl)
}

// fly  飞机航线
const airline = () => {
  console.log('fly  飞机航线',iframeWindow)
  mainIframe.value.onload = () => iframeWindow.postMessage({name: "fly",data: {}}, pageConfigs.cesiumUrl)
  iframeWindow.postMessage({name: "fly",data: {}}, pageConfigs.cesiumUrl)
}


defineExpose({ToEarthFunc, handleBall, initBall, initFace,airline})
</script>

<style scoped>
.back {
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
