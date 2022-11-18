<template>
  <div class="page">
    <layout-header></layout-header>
    <router-view/>
    <cesiumMap ref="maps"></cesiumMap>
    <popup type="stand" :pageIndex="pageIndex"></popup>
    <leftNav></leftNav>
  </div>
</template>

<script setup>
import leftNav from '@/components/global/navigation.vue'
import layoutHeader from './layoutHeader/template1.vue'
import cesiumMap from '../global/cesiumMap.vue'
import echartsMap from '../global/echartsMap.vue'
import popup from '../global/popup/popup.vue'
import {useRouter, useRoute, onBeforeRouteUpdate} from 'vue-router'
import {onMounted, ref, toRef, watch} from 'vue'

const router = useRouter()
const route = useRoute()
const name = toRef(route, 'name')
const pageIndex = ref(0)
const pageParams = {'SSO': 0, 'PLES': 1, 'SCSIBJ': 2, 'SOEAEA': 3}
const maps = ref();

onBeforeRouteUpdate(to => pageIndex.value = pageParams[to.name])
onMounted(() => {
  setTimeout(() => maps.value.initFace(), 500)
  pageIndex.value = pageParams[route.name]
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
