<template>
  <cal title="出入境证件签发">
    <template v-slot:left>
    </template>
    <template v-slot:content>
      <div class="parent">
        <div class="item" v-for="i,index in pageData">
          <img class="icon" :src="getUrl(index)">
          <span class="label" :style="{'letter-spacing':i.label.length>9?'-5px':''}">{{i.label}}</span>
          <span class="num">{{i.num}}<span class="unit">{{i.unit}}</span></span>
          <span class="point"><i class="iconfont icon-shangsheng"></i>{{i.point}}%</span>
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
let isPLES =  route.name == 'BureauPLES'
const { proxy } = getCurrentInstance()
const personnelCategory = ref()
const emit = defineEmits(['open'])
const open = (style) => emit('open', { style, el: 'issuanceOfEntryAndExitDocuments' })

let getUrl = function(index){
  return new URL('../../../assets/img/page/SSO/rt'+ (isPLES?'1':'')+index +'.png', import.meta.url).href
}
let pageData = ref([])

pageData.value = !isPLES?[
  {label:'普通护照',num:5093,unit:'本',point:5},
  {label:'出入境通行证',num:157,unit:'本',point:5},
  {label:'往来港澳通行证',num:5035,unit:'张',point:5},
  {label:'往来台湾通行证',num:130,unit:'张',point:5},
]:[
  {label:'查获口岸非法出入境',num:6,unit:'人',point:5},
  {label:'依法拦阻涉嫌违法人员',num:22,unit:'人',point:5},
  {label:'境外遣返',num:126,unit:'人',point:5},
  {label:'查获其他违规违法',num:35,unit:'人',point:5},
]
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
    position: absolute;
  }
  .item{
    height: 328px;
    background: url("../../../assets/img/page/SSO/bgt.png") no-repeat right;
    position: relative;
    .icon{
      width: 275px;
      height: 319px;
      left: 65px;
      position: absolute;
    }
    .label{
      color:#b4d2eb;
      font-family: 'ZiHun';
      font-size: 70px;
      left: 415px;
      top: 53px;
    }
    .num{
      color:#fff;
      font-family: 'QTYPECOND-BOOK';
      font-size: 100px;
      left: 415px;
      top: 153px;
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
      right: 50px;
      top: 192px;
      .iconfont{
        font-size: 60px;
      }
    }
  }
}
</style>
