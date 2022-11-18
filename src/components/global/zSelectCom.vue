<template>
  <div class="z-select">
    <div class="z-select-text" @click="open">{{ val }}</div>
    <div class="z-select-list" v-if="isOn" :style="{top:`${top}px`,left:`${left}px`}">
      <div v-for="(item,index) in list" :key="index" @click="on(index)">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef} from 'vue'

const props = defineProps({list: [Array]})
const list = toRef(props, 'list')
const isOn = ref(false)
const top = ref(0)
const left = ref(0)
const val = ref('请选择')
const emit = defineEmits(['click'])

const on = (index) => {
  val.value = list.value[index].name
  emit('change', index)
  isOn.value == true ? isOn.value = false : isOn.value = true
}

const open = (e) => {
  left.value = e.target.offsetLeft
  top.value = e.target.offsetTop + 120
  isOn.value == true ? isOn.value = false : isOn.value = true
}

</script>

<style scoped lang="scss">
.z-select {
  font-size: 56px;
  font-family: ZiHun;
  pointer-events: auto;

  &-text {
    border: 4px solid rgba(27, 132, 240, 1);
    border-radius: 18px;
    width: 769px;
    height: 120px;
    color: rgb(124, 159, 187);
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    cursor: pointer;
  }

  &-list {
    padding: 20px;
    position: absolute;
    width: 769px;
    //height: 500px;
    border: 1px solid rgba(27, 132, 240, 1);
    box-sizing: border-box;
    overflow-y: scroll;
    background-color: black;
    z-index: 999;

    > div {
      height: 102px;
      line-height: 102px;
      color: #7c9fbb;
      cursor: pointer;


      &:hover {
        background-image: linear-gradient(90deg,
            rgba(57, 152, 196, 0.02) 0%,
            rgba(57, 152, 196, 0.7) 25%,
            rgba(57, 152, 196, 0.3) 75%,
            rgba(57, 152, 196, 0.02) 100%);
      }
    }
  }
}
</style>
