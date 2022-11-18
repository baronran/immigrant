<template>
  <cal title="出入境证件签发">
    <template v-slot:left>
    </template>
    <template v-slot:content>
      <div class="parent">
        <div class="item" v-for="i,index in pageData">
          <img class="icon" :src="getUrl(index)" alt="">
          <div class="wordind">
            <span class="label" :style="{'letter-spacing':i.label.length>9?'-5px':''}">{{i.label}}</span>
            <span class="num">{{i.num}}<span class="unit">{{i.unit}}</span></span>
          </div>

<!--          <span class="point"><i class="iconfont icon-shangsheng"></i>{{i.point}}%</span>-->
        </div>
      </div>
    </template>
  </cal>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import apiJson from "../../../../public/apiJson/issuanceOfEntryAndExitDocuments"
import { useRoute} from 'vue-router'
let route = useRoute()

const { proxy } = getCurrentInstance()
const personnelCategory = ref()
const emit = defineEmits(['open'])
const open = (style) => emit('open', { style, el: 'issuanceOfEntryAndExitDocuments' })

let getUrl = function(index){
  return new URL('../../../assets/img/page/SSO/rt1'+index +'.png', import.meta.url).href
}
let pageData = ref([
  {label:'要道数量',num:143259,unit:'条',point:5},
  {label:'河道面积',num:143,unit:'平方公里',point:5},
  {label:'边境辖区面积',num:5035,unit:'平方公里',point:5},
  {label:'边境线长度',num:130,unit:'公里',point:5},
])


onMounted(() => {

})
</script>

<style scoped lang="scss">
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 100px;
  padding-top: 150px;
  span{
    display: inline-block;

  }

  .wordind{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    padding-left: 120px;
    box-sizing: border-box;
  }

  .item{
    height: 328px;
    background: url("../../../assets/img/page/SSO/bgt.png") no-repeat right;
    position: relative;
    display: flex;

    .icon{
      width: 275px;
      height: 319px;
      //left: 65px;
      //position: absolute;
    }
    .label{
      color:#b4d2eb;
      font-family: 'ZiHun';
      font-size: 70px;
      //left: 415px;
      //top: 53px;
    }
    .num{
      color:#fff;
      font-family: 'QTYPECOND-BOOK';
      font-size: 100px;
      display: flex;
    }
    .unit{
      color:#b4d2eb;
      font-family: 'ZiHun';
      font-size: 60px;
      margin-left: 20px;
      margin-top: 40px;
    }
    .point{
      color:#ed9d22;
      font-family: 'DIN';
      font-weight: 600;
      font-size: 60px;
      //right: 50px;
      //top: 192px;
      .iconfont{
        font-size: 60px;
      }
    }
  }
}
</style>
