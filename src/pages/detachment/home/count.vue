<template>
  <div class="count">
    <zSelect :list="routerList" @change="openChange"></zSelect>
    <div class="item" v-for="(item,index) in list">
      <div class="label">{{item.val}}</div>
      <div class="small">{{item.name}}</div>
    </div>

  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
import zSelect from '@/components/global/zSelect.vue'
const routerList = [
    {path: '/Stand/SSO', name: '天津站'},
  {path: '/Bureau/SSO', name: '北京总局'},
  {path: '/frontierInspectionStation', name: '边检站'},
  {path: '/detachment', name: '支队'},]
const list = ref([
  {
    name:'处警量',
    val:'42391'
  }
])

const openChange = e => {
  router.push({path: routerList[e].path})
}

</script>

<style scoped lang="scss">
.count {
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin: auto;
  margin-bottom: 100px;
  .label {
    font-family: QTypeCond-Book;
    font-size: 138px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .name {
    font-size: 62px;
    color: #c1ddf1;
  }

  .small {
    font-size: 70px;
    background-image: url("../../../assets/img/page/borderSafety/4.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 605px;
    height: 108px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :deep(.z-select-list){
    height: auto;
  }
}

</style>
