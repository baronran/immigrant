<template>
  <div class="pages">
    <div class="pages-card">
      <div class="header">
        <div class="title">国家移民管理局一体化综合指挥平台</div>
        <img src="../../assets/img/common/5.png" class="left">
        <img src="../../assets/img/common/5.png" class="right">
      </div>
      <div class="content">
        <div class="form">
          <div class="name PangMenZhengDao">
            <div>指挥平台登录</div>
            <div class="bar"></div>
            <div class="login">login</div>
          </div>
          <div class="form-item">
            <div class="label">登录账号</div>
            <input type="text" v-model="userName">
          </div>
          <div class="form-item">
            <div class="label">输入密码</div>
            <input type="password" v-model="passWord">
          </div>
          <div class="form-footer cursor-event" @click="loginFun">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref, getCurrentInstance, onMounted, reactive} from 'vue'
import md5 from 'js-md5';

import leftNav from "@/components/global/navigation.vue"
import {useRouter} from "vue-router";
const router = useRouter()

import {imosOrgInfoQueryOne, login} from "../../apis/login.js";
import {returnPath} from "../../utils/common.js";

const { proxy } = getCurrentInstance()

let passWord = ref( 'ymj@123')
let userName = ref( 'lizhao')

onMounted(()=>{
  // loginFun()
})
//登录
async function loginFun() {
  let res = null;
  passWord.value = passWord.value.trim(); userName.value = userName.value.trim();
  if(!passWord.value) proxy.$message.error({ showClose: true, message:'请输入账户和密码',});
  if(!userName.value) proxy.$message.error({ showClose: true, message: '请输入账户和密码',});

  // 参数
  let parameter = {
    yhbh:userName.value,//'lizhao',
    yhkl:md5(passWord.value)
  }
  if (pageConfigs.isRequest) res = await login(parameter)
  if (res.code != 200){
    proxy.$message({ showClose: true, message: res.msg,}); return;
  } else{
    localStorage.setItem('userInfo',JSON.stringify(res.data))
    // jgsx 取首字母 1是总局 2是总站 3是支队或者边检站 4是大队 5是派出所
    let selectLevel = {
      Level: returnPath(res.data).Level,
      path: returnPath(res.data).path,
    }
    selectLevel = {...selectLevel,...res.data}
    // console.log(selectLevel,'登录---selectLevelselectLevelselectLevel');
    localStorage.setItem('selectLevel',JSON.stringify(selectLevel))
    router.push({path:selectLevel.path})
  }
}
//机构列表获取
async function listOfInstitutions() {
  let res = {};
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  let parameter = '821500000000' //userInfo.jgbh || '000000000000'
  // jgsx 取首字母 1是总局 2是总站 3是支队或者边检站 4是大队 5是派出所
  let path = ['占位的','/Bureau/SSO','/Stand/SSO','/frontierInspectionStation','/detachment']
  // console.log(parameter,'----');
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
    let mechanism = ['边检总站','边防检查站','边检执勤队']
    let listData = res.data.filter((v)=>(mechanism.includes(v.jgsxmc))).map((v)=>({
      path:path[v.jgsx.slice(0,1)],
      Level:v.jgsx.slice(0,1),
      ...v
    }))
    localStorage.setItem('selectLevel',JSON.stringify(listData[0]))
  }

}



</script>

<style scoped lang="scss">
.pages {
  background-image: url("../../assets/img/page/login/1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  &-card {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/page/login/2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    align-items: center;

    box-sizing: border-box;

    .header {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      padding-top: 650px;

      .title {
        text-align: center;
        font-family: PangMenZhengDao;
        font-size: 260px;
        box-shadow: 0px 7px 9px 1px rgba(5, 29, 53, 0.96);
        text-shadow: 0 0 100px #ade1e0
      }

      @keyframes left {
        0% {
          opacity: 0;
          left: 800px
        }
        30% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          left: -500px
        }
      }

      .right {
        animation-name: right;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        z-index: 80;
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 80;
      }

      @keyframes right {
        0% {
          opacity: 0;
          right: 800px
        }
        30% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          right: -500px
        }
      }
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .form {
        width: 2306px;
        height: 1647px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;

        .name {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          font-size: 144px;

          .bar {
            width: 1001px;
            height: 8px;
            background-color: #88aade;
            margin: 20px 0;
          }

          .login {
            letter-spacing: 29px;
          }
        }

        &-item {
          display: grid;
          grid-template-columns: 1fr 1854px;
          grid-column-gap: 50px;
          align-items: center;
          line-height: 226px;

          .label {
            font-family: SourceHanSansCN-Regular;
            font-size: 90px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 25px;
            letter-spacing: 5px;
            color: rgba(148, 208, 255, 1);
          }

          input {
            width: 1854px;
            height: 226px;
            border-radius: 113px;
            border: solid 5px rgba(32, 163, 245, .4);
            background-color: rgba(32, 163, 245, .1);
            font-size: 74px;
            padding: 0 90px;
            color: #32a4fc;
          }
        }

        &-footer {
          width: 1398px;
          height: 226px;
          background-color: rgba(19, 94, 176, 1);
          border-radius: 113px;
          font-size: 105px;
          text-align: center;
          line-height: 226px;
        }
      }
    }

  }
}
</style>
