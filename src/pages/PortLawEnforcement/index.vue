<template>
  <div class="pages">

  </div>
</template>

<script  setup>

import { useRouter } from 'vue-router'
const router = useRouter()
function go(){
  router.push('/PortLawEnforcement')

}
</script>

<style scoped lang="scss">
.pages {
  background-color: red;
  width: 10240px;
  height: 4320px;
  overflow: hidden;
  background:url("../../assets/img/layout/总站-口岸执法执勤态势.jpg");

  &-head {
    background-image: url("../../assets/img/layout/title.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: left;
    position: absolute;
    height: 299px;
    display: grid;
    z-index: 999;
    grid-template-columns: 3665px auto 3665px;

    &-left {
      height: 299px;
      font-size: 94px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding-right: 800px;
      box-sizing: border-box;

      > div {
        background-image: url("../../assets/img/layout/left.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1182px;
        height: 146px;
        text-align: right;
        padding-right: 100px;
        box-sizing: border-box;
        font-family: ZiHun;
        letter-spacing: -5px;
        cursor: pointer;
        line-height: 146px;

        &:hover {
          background-image: url("../../assets/img/layout/left-on.png");
        }
      }
    }

    &-right {
      height: 299px;
      font-size: 94px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding-left: 800px;
      box-sizing: border-box;

      > div {
        background-image: url("../../assets/img/layout/right.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1182px;
        height: 146px;
        text-align: left;
        padding-left: 100px;
        box-sizing: border-box;
        font-family: ZiHun;
        cursor: pointer;
        line-height: 146px;

        &:hover {
          background-image: url("../../assets/img/layout/right-on.png");
        }
      }
    }

    &-content {
      display: flex;
      align-items: center;
      font-size: 180px;
      color: #ade1e0;
      font-family: 'PangMenZhengDao';
      //box-shadow: 0px 6px 4px 0px rgba(5, 29, 53, 0.83);
      text-align: center;

      .img {
        position: absolute;
        width: 2500px;
        height: 180px;
        top: 130px;
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: infinite;
      }

      @keyframes example {
        0% {
          left: 3165px;
          opacity: 0;
        }
        25% {
          opacity: 0.5;
        }
        50% {
          opacity: 1;
        }
        75% {
          opacity: 0.5;
        }
        100% {
          left: 4169px;
          opacity: 0;
        }
      }
    }
  }
}
</style>
