<template>
  <div class="popup" v-if="isPopup" @click.stop="isPopup=false">
    <div class="popup-back">
      <div class="popup-back-card">
        <transition name="shade" mode="out-in">
          <component :is="popupParams[popupName]" class="com" :style="popupStyle"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, toRef, watch, defineAsyncComponent, defineProps} from "vue";
import {usePopup} from '../../../store/popup.js'
import {standPopup, bureauPopup} from "./config";

const props = defineProps({type: [Number], pageIndex: [Number]})
const type = toRef(props, 'type')
const pageIndex = toRef(props, 'pageIndex')
const popup = usePopup()
const isPopup = toRef(popup, 'isPopup')
const popupName = toRef(popup, 'popupName')
const popupStyle = toRef(popup, 'popupStyle')
const popupParams = ref({stand: standPopup, bureau: bureauPopup}[type.value][pageIndex.value])
const showComponent = ref('')
const toggleIndex = ref(true)
console.log('popupParams', popupParams)
watch(popupName, (n, o) => console.log(n, type.value, pageIndex.value, popupParams))
watch(pageIndex, (n, o) => popupParams.value = {stand: standPopup, bureau: bureauPopup}[type.value][n])
</script>

<style scoped>

</style>
