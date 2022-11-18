<template>
  <div className="epidemic">
    <z-title title="疫情防控专题"></z-title>
    <div class="epidemic-content">
      <div class="title">统计截至2022 / 03 / 26 20:31:56</div>
      <div class="sum flex flex-start align-center">
        <img src="../../../assets/img/page/home/6.png" alt="">
        <div>疫情统计</div>
      </div>
      <div class="sum-list">
        <div class="item">
          <div class="item-title">当日新增</div>
          <div class="item-text">
            <div class="flex flex-start align-center">
              <div>513</div>
              <div>例</div>
            </div>
            <div class="flex flex-end align-center " :class="[['success','error'][0]]">
              <div>较上日</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>0.1%</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-title">现有确诊</div>
          <div class="item-text">
            <div class="flex flex-start align-center">
              <div>513</div>
              <div>例</div>
            </div>
            <div class="flex flex-end align-center " :class="[['success','error'][0]]">
              <div>较上日</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>0.1%</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-title">中高风险地区数量</div>
          <div class="item-text">
            <div class="flex flex-start align-center">
              <div>513</div>
              <div>例</div>
            </div>
            <div class="flex flex-end align-center " :class="[['success','error'][0]]">
              <div>较上日</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>0.1%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="nationwide flex flex-start align-center">
        <img src="../../../assets/img/page/home/6.png" alt="">
        <div>入境疫情统计</div>
        <div class="flex flex-end align-center">
          <div>123</div>
          <div>人</div>
        </div>
      </div>
      <div class="nationwide-list">
        <div class="item">
          <div class="item-title">当日外国人确诊</div>
          <div class="item-text">
            <div class="flex flex-start align-center">
              <div>264290</div>
              <div>例</div>
            </div>
            <div class="flex flex-end align-center " :class="[['success','error'][0]]">
              <div>较上日</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>0.1%</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-title">当日归国人确诊</div>
          <div class="item-text">
            <div class="flex flex-start align-center">
              <div>26457</div>
              <div>例</div>
            </div>
            <div class="flex flex-end align-center " :class="[['success','error'][0]]">
              <div>较上日</div>
              <i class="iconfont icon-shangsheng"></i>
              <div>0.1%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'

const list = ref([{}, {}, {}])

const nationwide = ref([{}, {}])

</script>

<style scoped lang="scss">

.epidemic {
  display: grid;
  grid-template-rows: repeat(1, auto) 767px;
  grid-row-gap: 52px;

  &-content {
    .title {
      height: 124px;
      font-size: 55px;
      font-family: ZiHun;

    }

    .sum {
      font-size: 62px;
      font-family: ZiHun;
      background-image: url("../../../assets/img/page/home/xian.png");
      background-repeat: no-repeat;
      background-size: 100% 10px;
      background-position: center;

      img {
        width: 62px;
        height: 72px;
        margin-right: 50px;
      }

      &-list {
        margin: 30px 0;
        display: flex;
        justify-content: space-between;

        .item {
          width: 542px;
          height: 198px;
          display: grid;
          grid-template-rows: 83px 1fr;
          font-size: 49px;
          font-family: ZiHun;
          border-left: 9px solid rgb(39, 161, 255);
          background-color: rgba(98, 162, 212, .1);
          padding: 21px;
          box-sizing: border-box;

          &-title {
            border-bottom: 5px solid rgba(151, 202, 241, .1);
          }

          &-text {
            display: grid;
            grid-template-columns: 1fr 300px;
            align-items: center;
            height: 111px;

            i {
              font-size: 49px;
            }

            .success {
              color: rgb(213, 149, 57);
            }

            .error {
              color: rgb(74, 154, 245);
            }
          }
        }
      }
    }

    .nationwide {
      font-size: 62px;
      font-family: ZiHun;
      background-image: url("../../../assets/img/page/home/xian.png");
      background-repeat: no-repeat;
      background-size: 80% 10px;
      background-position: center;

      img {
        width: 62px;
        height: 72px;
        margin-right: 50px;
      }

      &-list {
        margin: 30px 0;
        display: flex;
        justify-content: space-between;

        .item {
          width: 846px;
          height: 198px;
          display: grid;
          grid-template-rows: 83px 1fr;
          font-size: 49px;
          font-family: ZiHun;
          border-left: 9px solid rgb(39, 161, 255);
          background-color: rgba(98, 162, 212, .1);
          padding: 21px;
          box-sizing: border-box;

          &-title {
            border-bottom: 5px solid rgba(151, 202, 241, .1);
          }

          &-text {
            display: grid;
            grid-template-columns: 1fr 300px;
            align-items: center;
            height: 111px;

            > div:nth-of-type(1) {
              color: rgb(191, 89, 54)
            }

            i {
              font-size: 49px;
            }

            .success {
              color: rgb(213, 149, 57);
            }

            .error {
              color: rgb(74, 154, 245);
            }
          }
        }
      }
    }
  }
}

</style>
