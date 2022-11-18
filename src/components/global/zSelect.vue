<template>
  <div class="z-select">
<!--    <div class="z-select-text" @click="open">{{ val }}</div>-->
<!--    <div class="z-select-list" v-if="isOn" :style="{top:`${top}px`,left:`${left}px`}">-->
<!--      <div v-for="(item,index) in list" :key="index" @click="on(index)">{{ item.jgmc }}</div>-->
<!--    </div>-->

<!--    <el-cascader :props="props" placeholder="请选择" @change="changeValue()" v-model="cascaderData" :show-all-levels="false" />-->
    <el-tree-select popper-class="treeSelectZDY"  ref="treeRef" :teleported="false" @change="changeValue" placeholder="请选择" check-strictly :render-after-expand="false"  v-model="cascaderData" lazy :load="lazyLoad" :props="props" />
  </div>
</template>

<script setup>
import { ref, toRef,onMounted,getCurrentInstance} from 'vue'

const { proxy } = getCurrentInstance()

import { commonStore } from "@/store/common";
const store = commonStore();

import {useRouter} from 'vue-router'
const router = useRouter()


import {imosOrgInfoQueryOne} from "../../apis/login.js";
import {returnPath} from "../../utils/common.js";

const isOn = ref(false)
const top = ref(0)
const left = ref(0)
const val = ref('请选择')
const emit = defineEmits(['click'])
const list = ref([])
let cascaderData = ref()
const treeRef = ref()
const props = {
  label: 'label',
  children: 'children',
  isLeaf: 'isLeaf',
}

const lazyLoad = (node, resolve) => {

  if (node.isLeaf) return resolve([])

  listOfInstitutions(node,resolve)

}



onMounted(()=>{
  // let selectLevel = JSON.parse(localStorage.getItem('selectLevel'))
  // if(selectLevel) val.value = selectLevel.jgmc
  // else val.value = '请选择'
  // listOfInstitutions()
})

//机构列表获取
async function listOfInstitutions(node,resolve) {
  let res
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  let parameter = node?.key || userInfo.jgbh
  // console.log(node,parameter,node.key,'nodenodenodenode');
  if (pageConfigs.isRequest) res = await imosOrgInfoQueryOne(parameter)
  else res = {
    "code":200,
    "data":[
      {
        "jgbh":"820000010000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"综合司",
        "jgsx":"12ZJSW",
        "jgsxmc":"总局司委",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820000020000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"政策法规司",
        "jgsx":"12ZJSW",
        "jgsxmc":"总局司委",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820000030000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"外国人管理司",
        "jgsx":"12ZJSW",
        "jgsxmc":"总局司委",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820000040000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"公民出入境管理司",
        "jgsx":"12ZJSW",
        "jgsxmc":"总局司委",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820000050000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"边防检查管理司",
        "jgsx":"12ZJSW",
        "jgsxmc":"总局司委",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820000060000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"信息科技司",
        "jgsx":"12ZJSW",
        "jgsxmc":"总局司委",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820000070000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"干部人事司",
        "jgsx":"12ZJSW",
        "jgsxmc":"总局司委",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820000080000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"后勤保障司",
        "jgsx":"12ZJSW",
        "jgsxmc":"总局司委",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820000090000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"机关党委",
        "jgsx":"12ZJSW",
        "jgsxmc":"总局司委",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820100000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"北京出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820200000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"天津出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820300000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"河北出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820400000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"山西出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820500000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"内蒙古出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820600000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"辽宁出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820700000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"吉林出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820800000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"黑龙江出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"820900000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"上海出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821000000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"江苏出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821100000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"浙江出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821200000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"安徽出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821300000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"厦门出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821400000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"江西出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821500000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"山东出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821600000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"河南出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821700000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"湖北出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821800000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"湖南出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"821900000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"广州出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822000000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"深圳出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822100000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"珠海出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822200000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"广西出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822300000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"海口出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822400000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"重庆出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822500000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"四川出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822600000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"贵州出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822700000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"云南出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822800000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"西藏出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"822900000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"陕西出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"823000000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"甘肃出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"823100000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"青海出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"823200000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"宁夏出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"823300000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"新疆出入境边防检查总站",
        "jgsx":"21BJZZ",
        "jgsxmc":"边检总站",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"826000000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"常备力量第一总队",
        "jgsx":"21CBZD",
        "jgsxmc":"常备力量总队",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"826100000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"常备力量第二总队",
        "jgsx":"21CBZD",
        "jgsxmc":"常备力量总队",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"827000000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"国家移民管理局北京遣返中心",
        "jgsx":"21QFZX",
        "jgsxmc":"遣返中心",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"827100000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"国家移民管理局长春遣返中心",
        "jgsx":"21QFZX",
        "jgsxmc":"遣返中心",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"827200000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"国家移民管理局广州遣返中心",
        "jgsx":"21QFZX",
        "jgsxmc":"遣返中心",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"827300000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"国家移民管理局东兴遣返中心",
        "jgsx":"21QFZX",
        "jgsxmc":"遣返中心",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"827400000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"国家移民管理局瑞丽遣返中心",
        "jgsx":"21QFZX",
        "jgsxmc":"遣返中心",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"829000000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"出入境管理信息技术研究所",
        "jgsx":"21ZSDW",
        "jgsxmc":"局直属单位",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"829100000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"移民事务服务中心",
        "jgsx":"21ZSDW",
        "jgsxmc":"局直属单位",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      },
      {
        "jgbh":"829200000000",
        "jglx":"1",
        "jglxmc":"常设部门",
        "jgmc":"移民局机关警务保障中心",
        "jgsx":"21ZSDW",
        "jgsxmc":"局直属单位",
        "sjjg":"820000000000",
        "sjjgmc":"国家移民管理局",
        "xssx":"1"
      }
    ],
    "msg":""
  };
  if (res.code != 200){
    proxy.$message({ showClose: true, message: res.msg,}); return;
  } else{
    let mechanism = ['边检总站','边防检查站','边检执勤队','边管支队']
    // const { level } = node
    list.value =  res.data.filter((v)=>(mechanism.includes(v.jgsxmc))).map((v)=>({
      path:returnPath(v).path,
      Level:returnPath(v).Level,
      value: v.jgbh,
      label: v.jgmc,
      // leaf: level >= 2,
      ...v
     }))
    resolve(list.value)


  }

}

//机构列表 选择
function changeValue(v){

  let node = treeRef.value.getCurrentNode()
  localStorage.setItem('selectLevel',JSON.stringify(node))
  store.selectLevel = node
  console.log(v,node,'0000000000');
  router.push({path: node.path})
}

</script>

<style scoped lang="scss">
.z-select {
  font-size: 56px;
  font-family: ZiHun;
  pointer-events: auto;

  &-text {
    border: 4px solid rgba(27, 132, 240, 1);
    border-radius: 18px;
    width: 769px;
    height: 120px;
    color: rgb(124, 159, 187);
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    cursor: pointer;
  }

  &-list {
    padding: 20px;
    position: absolute;
    width: 769px;
    height: 500px;
    border: 1px solid rgba(27, 132, 240, 1);
    box-sizing: border-box;
    overflow-y: scroll;
    background-color: black;
    z-index: 999;

    > div {
      height: 102px;
      line-height: 102px;
      color: #7c9fbb;
      cursor: pointer;


      &:hover {
        background-image: linear-gradient(90deg,
            rgba(57, 152, 196, 0.02) 0%,
            rgba(57, 152, 196, 0.7) 25%,
            rgba(57, 152, 196, 0.3) 75%,
            rgba(57, 152, 196, 0.02) 100%);
      }
    }
  }

  .treeSelectZDY{

  }
  :deep(.el-select-dropdown__wrap) {
    min-height: 620px;
  }

  :deep(.el-input) {
    --el-input-height: var(--el-component-size);
    position: relative;
    font-size: var(--el-font-size-base);
    display: inline-flex;
    width: 100%;
    line-height: var(--el-input-height);
    box-sizing: border-box;
    vertical-align: middle;
    width: 769px;
    height: 120px;
    background-color: #011b33;
    border-style: solid;
    border-width: 4px;
    border-image-source: linear-gradient(0deg, #1b84f0 0%, #4ea2f8 25%, #81bfff 49%, #1b84f0 100%);
    border-image-slice: 1;
    border-radius: 50%;
  }
  :deep( .el-input__inner){
    font-family: zihun59hao-chuangcuhei;
    font-size: 56px;
    color: #7c9fbb;
    height: 100%;
  }

  :deep(.el-input__wrapper) {
    display: inline-flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 1px 11px;
    background-color: var(--el-input-bg-color,var(--el-fill-color-blank));
    background-image: none;
    border-radius: var(--el-input-border-radius,var(--el-border-radius-base));
    transition: var(--el-transition-box-shadow);
    background-color: #011b33;
    border-style: solid;
    border-width: 1px;
    border-image-source: linear-gradient(0deg,
        #1b84f0 0%,
        #4ea2f8 25%,
        #81bfff 49%,
        #1b84f0 100%);
    border-image-slice: 1;
    /* border-radius: 50%; */
  }

  :deep(.el-select .el-input .el-select__caret.el-icon) {
    position: relative;
    height: inherit;
    z-index: 2;
    font-size: 45px;
  }

  :deep(.el-tree-node__content) {
    display: flex;
    align-items: center;
    height: auto;
    cursor: pointer;
  }

  :deep(.el-tree-select__popper .el-select-dropdown__item ){
    flex: 1;
    min-width: 769px;
    background: 0 0 !important;
    padding-left: 0;
    height: 90px;
    font-family: zihun59hao-chuangcuhei;
    font-size: 56px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: -4px;
    color: #7c9fbb;
    display: flex;
    align-items: center;
  }

  :deep(.el-tree-node__expand-icon) {
      cursor: pointer;
    color: #1b84f0;
    font-size: 62px;
    transform: rotate(0);
    transition: transform var(--el-transition-duration) ease-in-out;
  }

  :deep(.el-tree){
    background-color: #011b33;
  }
  :deep(.el-popper.is-light){
    background-color: #011b33;
  }
  :deep(.el-tree-node__content:hover) {
    //background-color: var(--el-tree-node-hover-bg-color);
    //background-image: linear-gradient(90deg,
    //    rgba(57, 152, 196, 0.05) 0%,
    //    rgba(57, 152, 196, 0.8) 25%,
    //    rgba(57, 152, 196, 0.8) 100%);
  }
}
</style>

