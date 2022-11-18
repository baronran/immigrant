<template>
  <div class="base" @click="open">基本信息</div>
</template>

<script setup>
import {defineEmits, ref} from 'vue'

const emit = defineEmits(['click'])
const open = () => emit('click')

</script>

<style scoped lang="scss">
.base {
  width: 372px;
  height: 94px;
  background-color: rgba(42, 92, 255, .3);
  border-radius: 10px;
  border: solid 4px #4b75ff;
  font-size: 72px;
  text-align: center;
  line-height: 94px;
  pointer-events: auto;
  cursor: pointer;

}
</style>
