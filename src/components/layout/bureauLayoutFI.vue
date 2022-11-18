<template>
  <div class="page">
    <layout-header ></layout-header>
    <router-view></router-view>
    <component :is="[cesiumMap,'',echartsMap,echartsMap][pageIndex]" ref="maps"></component>
    <popup type="bureau" :pageIndex="pageIndex"></popup>
    <leftNav></leftNav>
  </div>
</template>

<script setup>
import leftNav from '@/components/global/navigation.vue'
import popup from '../../components/global/popup/popup.vue'
import layoutHeader from './layoutHeader/template4.vue'
import cesiumMap from '../global/cesiumMap.vue'
import echartsMap from '../global/echartsMap.vue'
import {useRouter, useRoute, onBeforeRouteUpdate} from 'vue-router'
import {onMounted, ref, toRef, watch} from 'vue'
import {useTool} from '../../store/filterTool.js'

const tool = useTool()
const handleParams = toRef(tool, 'handleParams')
const router = useRouter()
const route = useRoute()
const pageIndex = ref(0)
const pageParams = {'ExamineFI': 0, 'PLESFI': 1, 'SOEAEAFI': 2}
const maps = ref()

watch(() => handleParams.value, (n, o) => {
  if (n) maps.value.handleBall(JSON.parse(n))
})


onBeforeRouteUpdate(to => {
  let index = pageParams[to.name]
  pageIndex.value = index

})
onMounted(() => {
  let index = pageParams[route.name]

  pageIndex.value = index
  setTimeout(() => maps.value.initFace(), 500)
})
</script>

<style scoped lang="scss">
.page {
  width: 10240px;
  height: 4320px;
  overflow: hidden;
  background-color: black;
}
</style>
