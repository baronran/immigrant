<template>
  <div class="checkInAndOut">
    <z-title title="拦阻设施建设情况"></z-title>
    <div class="boxList">
      <div class="listContent">

        <div>
          <div class="item-left">
            <img src="../../../assets/img/page/facilityConstruction/f0.png" alt=""/>
          </div>
          <div class="flex flex-center than">
            <div class="h">环比<i class="iconfont icon-jiantouxiajiang"></i> 20%</div>
            <div class="t">同比<i class="iconfont icon-shangsheng"></i> 20%</div>
          </div>
          <div class="itemrRight">
            <div class="topLeft">
              <div class="bar"></div>
              <div class="flex align-center">
                <div class="flag flex"></div>
                <div class="label">监控</div>
              </div>
            </div>
            <div class="mum">98 <span class="unit">个</span></div>
          </div>
        </div>

        <div>
          <div class="item-left">
            <img src="../../../assets/img/page/facilityConstruction/f1.png" alt=""/>
          </div>
          <div class="flex flex-center than">
            <div class="h">环比<i class="iconfont icon-jiantouxiajiang"></i> 20%</div>
            <div class="t">同比<i class="iconfont icon-shangsheng"></i> 20%</div>
          </div>
          <div class="itemrRight">
            <div class="topLeft">
              <div class="bar"></div>
              <div class="flex align-center">
                <div class="flag flex"></div>
                <div class="label">物理阻拦设施</div>
              </div>
            </div>
            <div class="mum">67 <span class="unit">个</span></div>
          </div>
        </div>

        <div>
          <div class="item-left">
            <img src="../../../assets/img/page/facilityConstruction/f2.png" alt=""/>
          </div>
          <div class="flex flex-center than">
            <div class="h">环比<i class="iconfont icon-jiantouxiajiang"></i> 20%</div>
            <div class="t">同比<i class="iconfont icon-shangsheng"></i> 20%</div>
          </div>
          <div class="itemrRight">
            <div class="topLeft">
              <div class="bar"></div>
              <div class="flex align-center">
                <div class="flag flex"></div>
                <div class="label">技防设施</div>
              </div>
            </div>
            <div class="mum">78 <span class="unit">个</span></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const {proxy} = getCurrentInstance()
const personnelCategory = ref()
const areaList = ref(['楠木山边防检查站', '木山边防检查站',])
// const openPopup = (e) => {
//   showComponent.value = e;
//   isPopup.value = isPopup.value == true ? isPopup.value = false : isPopup.value = true
// }

onMounted(()=>{})
</script>

<style scoped lang="scss">
.checkInAndOut {
  display: grid;
  grid-template-rows:140px auto;
  grid-row-gap: 52px;

  .listContent {
    font-family: ZiHun;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    .item {
      height: 283px;
      display: grid;
      grid-template-columns: 247px 1fr;
      grid-column-gap: 49px;
      margin: 29px 0;

      &-left {
        img {
          width: 247px;
          height: 283px;
        }
      }


    }

    >div{
      display: grid;
      grid-template-columns: 296px 398px auto;
      margin: 0 auto;
      width: 95%;
    }

    .than{
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      font-size: 58px;
      //background-image: linear-gradient(180deg, rgba(85, 201, 255, 0.2) 0%, rgba(85, 201, 255, 0.03) 100%);
      .iconfont {
        font-size: 58px;
      }
    }

    .itemrRight {
      padding: 50px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 780px auto;
      justify-content: space-around;
      flex-direction: column;
      font-size: 58px;
      height: 213px;
      background-image: linear-gradient(180deg,
          rgba(85, 201, 255, 0.2) 0%,
          rgba(85, 201, 255, 0.03) 100%);
      .bar {
        width: 100%;
        height: 1px;
        background-color: rgba(181, 225, 245, 1);
        opacity: 0.3;
        margin-bottom: 50px;
        &::before {
          content: '';
          display: block;
          position: absolute;
          background-color: rgb(181, 225, 245);
          width: 70px;
          margin-top: -3px;
          height: 6px;
        }
      }

      .topLeft {
        flex-direction: column;
        display: flex;

        .flag {
          height: 49px;
          width: 49px;
          border-radius: 50%;
          background-color: rgba(181, 225, 245, .2);
          position: relative;
          &::before {
            content: "";
            display: inline-block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 11px;
            width: 11px;
            border-radius: 50%;
            border: 8px solid #218ee6;
          }
        }

        .label {

          font-family: ZiHun ;
          font-size: 62px;
          font-weight: normal;
          font-stretch: normal;
          margin-left: 20px;
          letter-spacing: 0px;
          color: #dae8f2;
        }

      }

      .mum{
        font-family: QTypeCond-Book;
        font-size: 100px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #fefefe;
        .unit{
          font-family: zihun59hao-chuangcuhei;
          font-size: 56px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #dae8f2;
        }
      }

    }

  }
}

</style>
