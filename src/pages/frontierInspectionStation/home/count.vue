<template>
  <div class="count">
    <zSelect ></zSelect>
<!--    <div class="item" v-for="(item,index) in list">-->
<!--      <div class="label">{{item.val}}</div>-->
<!--      <div class="small">{{item.name}}</div>-->
<!--    </div>-->
      <div>
        <div class="titleName">当日值班</div>
        <div class="beOnDutyContent">
          <div><span class="nameF">姓名：</span> <span>xxxx</span></div>
          <div><span class="nameF">电话：</span> <span>180642224666</span></div>
          <div><span class="nameF">职务：</span> <span>xxxx</span></div>
        </div>
      </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
import zSelect from '@/components/global/zSelect.vue'


const list = ref([
  {
    name:'视频监控',
    val:'167'
  },{
    name:'当前验放量',
    val:'34'
  },{
    name:'当前人员',
    val:'519'
  },{
    name:'案事件数',
    val:'28'
  },

])
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

  .titleName {
    background: url("../../../assets/img/page/home/x.png") no-repeat 100% 100%;
    background-size: 1186px 117px;
    width: 1186px;
    height: 117px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-size: 83px;
    font-family: ZiHun;
  }

  .beOnDutyContent{
    display: flex;
    flex-direction: column;
    font-family: MFYueYuan_Noncommercial-Regular;
    font-size: 65px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    padding: 90px 150px;
    box-sizing: border-box;
    >div{
      margin: 10px 0;
    }
    .nameF{
      color: #c8d7e5;
    }
  }

  :deep(.z-select-list){
    height: auto;
  }
}

</style>
