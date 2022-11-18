<template>
  <cal title="舆情动态">
    <template v-slot:content>
      <div class="item" v-for="(item,index) in 6">
        <div class="item-left">
          <div class="label">{{ addLeadingZeros(index + 1 ) }}</div>
        </div>
        <div class="item-right">
          <div>欧盟被批“双标”对待不同来源地的移民难民</div>
          <div>2022-05-12 14:22:33</div>
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

//添加前导零
function  addLeadingZeros(v){
  if(v >=10) return v
  else return '0'+v

}

</script>

<style scoped lang="scss">
.item {
  display: grid;
  grid-template-columns: 157px 1fr;
  grid-column-gap: 69px;
  font-size: 46px;
  font-family: ZiHun;
  align-items: center;
  padding: 0 46px;
  box-sizing: border-box;

  &-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 119px;
    margin: 18.5px 0;
  }

  .label {
    width: 157px;
    height: 71px;
    line-height: 71px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    font-family: QTypeCond-Book;
    font-size: 46px;
  }

  &:nth-of-type(even) {
    background-color: rgba(98, 162, 212, .2);

    .label {
      background-image: url("../../../assets/img/page/common/5.png");
    }
  }

  &:nth-of-type(odd) {

    .label {
      background-image: url("../../../assets/img/page/common/4.png");
    }
  }
}
</style>
