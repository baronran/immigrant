<template>
  <div class="count-flop" :key="compKey">
    <div :class="item!='.'?'count-flop-box':'count-flop-point'" v-for="(item, index) in value" :key="index">
      <div v-if="item!='.'" class="count-flop-content" :class="['rolling_' + item]">
        <div v-for="(item2,index2) in numberList" :key="index2" class="count-flop-num">{{item2}}</div>
      </div>
      <div v-else class="count-flop-content">.</div>
    </div>
    <div v-if="suffix" class="count-flop-unit">{{suffix}}</div>
  </div>
</template>

<script setup>
import {ref,watch,onMounted} from "vue";

let props = defineProps(["val","suffix"])

let value = ref([])
let numberList = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
let compKey = ref(0)

watch(()=>props.val, (newVal, oldVal) => {

  value.value = props.val.toString().split("");
  compKey.value += 1;
},{deep: true})

onMounted(()=>{
  value.value = props.val.toString().split("");
})

</script>


<style lang="scss" scoped>
.count-flop {
  //display: inline-block;
  //font-size: 0;
  /* 可更改 */
  //height: 70px;
  //line-height: 70px;
  //font-size: 36px;
  //color: #4898f1;
}

.count-flop > div {
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 100%;

  font-family: QTypeCond-Book;
  font-size: 90px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  margin: 0 7px;

}

.count-flop-box {
  /* 可更改 */
  //margin-right: 5px;
  //width: 36px;
  //border: 1px solid rgba(72, 152, 241, 0.3);
  //line-height: 48px;
  //border-radius: 6px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-image: url("");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.count-flop-point {
  /* 可更改 */
  margin-right: 5px;
  width: 10px;
}

.count-flop-content {
  //font-family: MicrosoftYaHei-Bold;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  animation-fill-mode: forwards !important;
}

.rolling_0 {
  animation: rolling_0 2.1s ease;
}

@keyframes rolling_0 {
  from {
    transform: translateY(-90%);
  }
  to {
    transform: translateY(0);
  }
}

.rolling_1 {
  animation: rolling_1 3s ease;
}

@keyframes rolling_1 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10%);
  }
}

.rolling_2 {
  animation: rolling_2 2.1s ease;
}

@keyframes rolling_2 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20%);
  }
}

.rolling_3 {
  animation: rolling_3 3s ease;
}

@keyframes rolling_3 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30%);
  }
}

.rolling_4 {
  animation: rolling_4 2.1s ease;
}

@keyframes rolling_4 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-40%);
  }
}

.rolling_5 {
  animation: rolling_5 3s ease;
}

@keyframes rolling_5 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}

.rolling_6 {
  animation: rolling_6 2.1s ease;
}

@keyframes rolling_6 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-60%);
  }
}

.rolling_7 {
  animation: rolling_7 3.1s ease;
}

@keyframes rolling_7 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-70%);
  }
}

.rolling_8 {
  animation: rolling_8 2.1s ease;
}

@keyframes rolling_8 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-80%);
  }
}

.rolling_9 {
  animation: rolling_9 3.6s ease;
}

@keyframes rolling_9 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-90%);
  }
}

</style>
