<template>
  <div class="checkInAndOut">
    <z-title title="出入境交通工具"></z-title>
    <zSelect :list="areaList" ></zSelect>
    <div class="videoList">
      <div class="videoBox" v-for="(item,index) in 6">
        <div class="video"></div>
        <div class="field"><span>园区A街道主路段</span> <span>30 DAYS</span>  </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

import zSelect from '@/components/global/zSelect.vue'

const {proxy} = getCurrentInstance()
const personnelCategory = ref()
const areaList = ref(['出境', '入境',])
// const openPopup = (e) => {
//   showComponent.value = e;
//   isPopup.value = isPopup.value == true ? isPopup.value = false : isPopup.value = true
// }

onMounted(()=>{})
</script>

<style scoped lang="scss">
.checkInAndOut {
  display: grid;
  grid-template-rows:140px 130px auto;
  grid-row-gap: 52px;

  .videoList{
    height:2120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;

    .videoBox{
      width: 1000px;
      height: 628px;
      background-color: rgba(87, 153, 236, 0.3);
      border-radius: 20px;
      border: solid 1px rgba(156, 178, 226, 0.3);
      padding: 20px;
      box-sizing: border-box;
      .video{
        width: 100%;
        height: 520px;
        background-color: #fffdef;
      }

      .field{
        font-family: MFYueYuan_Noncommercial-Regular;
        font-size: 45px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #eef7ff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        >span:nth-of-type(2){
          font-family: DIN-Light;
          color: #eef7ff;
        }

      }

    }
  }

  :deep(.z-select-list){
    height: auto;
  }


}

</style>
