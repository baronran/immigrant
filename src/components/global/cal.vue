<template>
  <div class="card" ref="card" :class="[type?'card-one':'card-two']">
    <z-title :title="title" :type="bk" @click="open"></z-title>
    <div class="card-legend" :style="{width:`${clientWidth}px`}" v-if="type">
      <div class="flex flex-start">
        <slot name="left">
<!--            <div class=" cursor-event">-->
<!--              <el-date-picker-->
<!--                  v-model="timeValue"-->
<!--                  class="input-class"-->
<!--                  style="width:450px;height: 80px;"-->
<!--                  type="daterange"-->
<!--                  range-separator="至"-->
<!--                  start-placeholder="开始日期"-->
<!--                  size="large"-->
<!--                  @change="timeChange"-->
<!--                  popper-class="timeDarkHourBox"-->
<!--                  end-placeholder="结束日期">-->
<!--              </el-date-picker>-->
<!--            </div>-->

        </slot>
      </div>
      <div class="flex flex-end">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef, defineEmits, onMounted, nextTick} from "vue";
import {usePopup} from '../../store/popup.js'
import {get_now_time} from "../../utils/util.js";

const popup = usePopup()
const isPopup = toRef(popup, 'isPopup')
const popupName = toRef(popup, 'popupName')
const popupStyle = toRef(popup, 'popupStyle')
const emit = defineEmits(['click','timeChange'])
const props = defineProps({title: [String], type: [String], bk: [String]})
const title = toRef(props, 'title')
const type = toRef(props, 'type')
const bk = toRef(props, 'bk')
const card = ref()
const clientWidth = ref(0)
const clientHeight = ref(0)
// 标题点击事件
const open = () => {
  isPopup.value = true
  popupName.value = title.value
  popupStyle.value = {height: `${clientHeight.value}px`, width: `${clientWidth.value}px`}
  console.log('popup', isPopup.value)
  // isPopup.value = true
  // emit('open', {height: `${clientHeight.value}px`, width: `${clientWidth.value}px`})
}

const timeValue = ref()
onMounted(() => {
  clientWidth.value = card.value?.clientWidth
  clientHeight.value = card.value?.clientHeight
})

function timeChange(data){
  let timeArr = [ get_now_time(data[0],'','ymd'), get_now_time(data[1],'','ymd')]
  // console.log(timeArr,'eeee');
  emit('timeChange',data)
}

</script>

<style scoped lang="scss">
.card {
  flex: 1;
  height: 100%;
  width: 100%;
  display: grid;
  grid-row-gap: 32px;
  grid-template-rows: 147px 1fr;
  position: relative;
  &-legend {
    display: flex;
    pointer-events: none;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-top: 177px;
    z-index: 888;
  }

  :deep(.el-input__wrapper){
    background-color: #011b33;
    border-style: solid;
    border-width: 1px;
    border-image-source: linear-gradient(0deg, #1b84f0 0%, #4ea2f8 25%, #81bfff 49%, #1b84f0 100%);
    border-image-slice: 1;
  }
  :deep(.el-date-editor .el-range__icon) {
    height: inherit;
    font-size: 44px;
    color: var(--el-text-color-placeholder);
    float: left;
  }

  :deep(.el-date-editor .el-range__close-icon) {
    font-size: 34px;
    color: var(--el-text-color-placeholder);
    height: inherit;
    width: unset;
    cursor: pointer;
  }

  :deep(.el-range-editor--large .el-range-input ){
    color: white;
    font-size: 25px;
  }

  :deep(.el-date-editor .el-range-separator){
    color: white;
    font-size: 25px;
  }


}
</style>
