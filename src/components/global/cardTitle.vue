<template>
  <div class="r" @click="open" :style="style">{{ title }}</div>
</template>

<script setup>
import { toRef, defineEmits, defineExpose} from "vue";
import sm from '../../assets/img/page/common/cardTitle.png'
import lg from '../../assets/img/page/common/title-lg.png'

const emit = defineEmits(['click'])
const props = defineProps({title: [String], type: [String]})
const title = toRef(props, 'title')
const type = toRef(props, 'type')

const style = {backgroundImage: `url(${type.value == 'lg' ? lg : sm})`}
const open = () => emit('click')

defineExpose({open})
</script>

<style scoped lang="scss">
.r {
  width: 100%;
  height: 143px;
  //background-image: url("../../assets/img/page/common/cardTitle.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  font-family: PangMenZhengDao;
  font-style: italic;
  letter-spacing: -4px;
  font-size: 83px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
}
</style>
