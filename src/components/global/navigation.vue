<template>
  <div class="leftNav">
    <div class="list" >
      <div class="spanBotto" @click="clickTab(idex)" v-for="(item,idex) in systemList"  >{{item.name}}</div>
      <div class="open" @click="openFun()">展开</div>
    </div>
    <div class="iframeList" v-show="expandStatus">
      <div class="listbox" v-show="idex == act"  v-for="(item,idex) in systemList">
        <div class="mask" :style="{borderTop: item.topHeight+'px solid  '+item.backgroundColor }"></div>
        <iframe frameborder="0" scrolling="no" :src="item.url"></iframe>
      </div>

    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";

let systemList = ref(pageConfigs.iframeList)

let act = ref(null)
//展开状态
let expandStatus = ref(false)


function clickTab(index) {

  let domLeftNav = document.querySelectorAll('.listbox')
  // console.log(domLeftNav,'wwwwwww');
  act.value = index
  domLeftNav[index].style.opacity = 1
}

function openFun(){
  let domLeftNav = document.querySelector('.leftNav')
  expandStatus.value = !expandStatus.value
  if(expandStatus.value){
    domLeftNav.style.left ='0px'
  }else {
    domLeftNav.style.left ='-400px'
    act.value = null
  }

}

</script>

<style scoped lang="scss">
.leftNav{
  position: absolute;
  //height: 2000px;
  //width: 100%;
  //background: rgba(11, 22, 111, 0.7);
  z-index: 3333333;
  top: 50%;
  left: -400px;
  //left: 0;
  transform: translate(0%, -50%);
  display: grid;
  grid-template-columns: auto auto;
  .list{
    width: 400px;
    height: 3240px;
    background: rgba(11, 22, 111, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 50px 0;
    box-sizing: border-box;
    position: relative;
    .spanBotto{
      font-size: 45px;
      font-family: ZiHun;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;
      width: 320px;
      background: rgba(42, 92, 255, 0.7);
      border-radius: 10px;
      margin: 30px 0;
      cursor: pointer;
      text-align: center;
      padding: 0 10px;
    }
  }

  .iframeList{
    margin-left: 200px;
    background: rgba(255,255,255, 0.9);
    position: relative;
    width: 5910px;
    height: 3340px;
    .listbox{
      //padding: 40px;
      //box-sizing: border-box;
      background-color:rgba(11, 22, 111, 1);
      top: 40px;
      left: 55px;
      position: relative;
      transition: all 2s linear ;
      opacity: 0;
      >iframe{
        //width: 3840px;
        //height: 2160px;
        width: 5760px;
        height: 3240px;
        position: absolute;
        top:0;
        //left: 50%;
        //transform: translate(-50%, -50%);
      }
    }

  }

  .open{
    position: absolute;
    top: 50%;
    left: 115%;
    transform: translate(-70%, -50%);
    font-size: 45px;
    cursor: pointer;
    background: rgba(42, 92, 255, 0.68);
    padding: 30px;
    box-sizing: border-box;
    border-radius: 20px;

  }

  .mask{
    width: 5760px;
    height: 3240px;
    border-top: 60px solid rgba(11, 22, 111, 1);
    position: absolute;
    top: 0;
    z-index: 33;
    pointer-events: none;
  }


}
</style>
