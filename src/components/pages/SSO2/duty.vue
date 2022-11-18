<template>
   <cal title="值班领导" >
    <template v-slot:content>
      <div class="count">
         <div class="theader" >
          <div class="" >单位</div>
            <div class="text">值班人员</div>
            <div class="text">职务</div>
        </div>
        <div class="beOnDutyContent"  >
          <Vue3SeamlessScroll :list="list"  :hover="true">
            <div class="item" v-for="(item,index) in list" :key="index">
              <div class="" >{{item.station}}</div>
              <div class="text">{{item.name}}</div>
              <div class="text">{{item.phone}}</div>
            </div>
          </Vue3SeamlessScroll>
      </div>
      </div>
    </template>
  </cal>

</template>

<script setup>
import {Vue3SeamlessScroll} from "vue3-seamless-scroll";
import {ref, getCurrentInstance, onMounted} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()


const list = ref([
  {
    name:'孙二',
    phone:'总站长',
    station:'湖南省总站'
  },{
    name:'张三',
    phone:'副政委',
    station:'广西边检总站'
  },{
    name:'李氏',
    phone:'副总站长',
    station:'湖南边检总站'
  },{
    name:'赵五',
    phone:'总站长',
    station:'山东边检总站'
  },{
    name:'五六',
    phone:'副总站长',
    station:'山西边检总站'
  },{
    name:'王五',
    phone:'政委',
    station:'陕西边检总站'
  }

])
</script>

<style scoped lang="scss">
.count {
  .beOnDutyContent{
    margin-top: 30px;
    height: 330px;
    overflow: hidden;
  }
  .theader{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100px;
    line-height: 100px;
    color: #c1d1df;
    font-family: ZiHun;
    border-bottom: 2px solid #86898f;
    font-size: 70px;

  }
  .item {
    // width: 1341px;
    height: 100px;
    line-height: 100px;
    display: grid;
    font-family: ZiHun;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 39px;
    margin: 10px 0;
    padding: 0 27px;
    box-sizing: border-box;
    font-size: 70px;

    &:nth-of-type(odd) {
      background-color: rgba(82, 172, 235, .2);
      color: #2194f6;
    }
  }
}
</style>
