<template>
  <div class="basicInformationDetail">
    <z-title title="国家移民管理局"></z-title>
    <img src="../../../assets/img/page/home/logo.png" alt="" class="logo">
    <div class="basicInformationDetail-content">
      <div class="nav">
        <div :class="navIndex==0?'on':''" @click="toggle(0)">概况信息</div>
        <div :class="navIndex==1?'on':''" @click="toggle(1)">领导信息</div>
        <div :class="navIndex==2?'on':''" @click="toggle(2)">机构职责</div>
      </div>
      <div class="survey" v-if="navIndex==0">
        国家移民管理局（中华人民共和国出入境管理局）于2018年4月2日组建成立，是公安部管理的国家局，为副部级。主要职责是：负责全国移民管理工作；负责协调拟订移民和出入境管理政策与规划并协调组织实施，起草相关法律法规草案；负责建立健全签证管理协调机制，组织实施外国人来华口岸签证、入境许可签发管理和签证延期换发；负责外国人来华留学管理、工作有关管理、停留居留和永久居留管理、国籍管理、难民管理；负责出入境边防检查、边民往来管理、边境地区边防管理；负责中国公民因私出入境管理、港澳台居民回内地（大陆）定居审批管理；牵头协调非法入境、非法居留、非法就业外国人治理和非法移民遣返，查处妨害国（边）境管理等违法犯罪行为；承担移民领域国际合作等。
        <br/>
        国家移民管理局领导管理全国出入境边防检查机构、边境管理机构各项工作，指导管理各省、自治区、直辖市公安机关出入境管理机构业务工作。
        <br/>
        国家移民管理局内设机构共设8司1委：综合司、政策法规司、外国人管理司、公民出入境管理司、边防检查管理司、信息科技司、干部人事司、后勤保障司以及机关党委。
        <br/>
        国家移民管理局所属事业单位分别为：出入境管理信息技术研究所、移民事务服务中心、警务保障中心。
        <br/>
        出入境边防检查机构。在对外开放口岸设立出入境边防检查机构，实施出入境人员和交通运输工具的查验管理、口岸限定区域管理，防范查处非法入出境活动等。
        <br/>
        边境管理机构。在沿边地区设立边境管理机构，实施进出边境管理区人员和交通运输工具检查管理、辖区治安管理、边民往来管理，防范查处非法入出境活动，侦办妨害国（边）境管理犯罪案件等。
        <br/>
        公安机关出入境管理机构。在省、市、县公安机关设立出入境管理机构，根据国家移民管理局的授权和委托，承担公民因私出国（境）管理、受理签发公民因私事出入境证件，实施外国人来华停留居留和永久居留的日常管理，签发口岸签证及其他相应的证件，查处出入境违法犯罪活动等。
        <br/>

        办公地址：北京市东长安街14号，邮编：100741
        <br/>

        白桥办公区：北京市东城区白桥大街16号，邮编：100062
        <br/>

        联系电话：010-66265110 ，传真：010-66265027
        <br/>

        办公时间：上午8:00—12:00，下午13:00—17:00；
        <br/>

        上午8:00—12:00，下午13:30—17:30（夏季办公时间）
      </div>
      <div class="content" v-if="navIndex==1">
        <div class="item" v-for="(item,index) in 4">
          <div class="item-left">
            <!-- <img src="../../../assets/img/test.png" alt=""> -->
            <div class="name">许甘露</div>
          </div>
          <div class="item-right">
            <div class="flex flex-between flex-wrap top">
              <div>国家移民管理局(中华人民共和国出入境管理局)党组副书记</div>
              <div>副局长</div>
              <div>一级警监警衔</div>
            </div>
            <div>
              简介：许甘露，男，汉族，1962年1月生，福建同安人，1982年9月加入中国共产党，1979年12月参加工作，厦门大学世界经济专业毕业，在职研究生学历。现任公安部党委委员、副部长，国家移民管理局（中华人民共和国出入境管理局）党组书记、局长，副总警监警衔。
            </div>
          </div>
        </div>
      </div>
      <div class="duty" v-if="navIndex==2">
        综合司（移民事务国际合作司）
        <br/>
        主要职责：负责机关文电、公务、机要、档案、督查督办、安全保密和信访等工作。组织实施审计工作。承担移民领域国际合作与交流。
        <br/>
        政策法规司
        <br/>
        主要职责：开展移民和出入境管理政策研究，起草相关法律法规草案。指导移民和出入境执法以及行政复议应诉、国家赔偿、普法宣传工作。
        <br/>
        外国人管理司
        <br/>
        主要职责：组织实施外国人来华口岸签证签发管理、签证延期换发。组织实施外国人来华留学管理、停留居留管理、外国人来华工作有关管理事宜。承担外国人来华定居审批管理工作。承担难民身份甄别及临时安置、遣返工作。承担非法入境、非法居留、非法就业外国人治理和非法移民遣返的具体协调工作。
        <br/>
        公民出入境管理司
        <br/>
        主要职责：组织实施中国公民因私出入境管理、港澳台居民回内地（大陆）定居审批管理工作。承担国籍审批管理工作。
        <br/>
        边防检查管理司
        <br/>
        主要职责：组织实施出入境边防检查、边民出入境检查、临时入境许可和边境地区出入境通行证签发管理。组织指导边境地区边防管理工作。组织实施边控工作。
        <br/>
        信息科技司
        <br/>
        主要职责：拟订全国移民管理机构信息化建设规划、技术标准并组织实施。组织开展有关重大信息科技项目开发、推广和安全运行管理。承担政务信息化工作。
        <br/>
        干部人事司
        <br/>
        主要职责：指导管理所属队伍党的建设、组织建设、思想政治工作。贯彻实施编制管理的方针政策，组织干部人事调配工作。组织实施表彰奖励、新闻宣传工作。组织开展队伍教育训练。组织实施督察工作。
        <br/>
        后勤保障司
        <br/>
        主要职责：负责局本级及所属机构的预决算、财务管理、政府采购工作。组织实施有关基本建设、物资装备、资产管理等工作。
        <br/>
        机关党委
        <br/>
        主要职责：负责局机关和在京直属单位的党群工作。配合驻公安部纪检监察组开展局本级及所属机构的纪检监察工作。
        <br/>
        出入境管理信息技术研究所
        <br/>
        主要职责：负责协助开展出入境管理科技发展战略研究，开展信息网络、证件、技术装备等重点领域应用技术研究；承担重大科技项目、业务核心软件、关键技术装备研发、建设任务，并开展相关咨询工作；承担国家移民和出入境管理相关信息、通信系统运行维护工作；管理电子出入境证件密钥及关键设备；承担移民和出入境技术、装备、设施的安全质量监督、检测工作；开展出入境证件司法鉴定及服务工作，为国家移民管理系统提供证件鉴别技术支持；承担移民和出入境领域科技人才培养，承办相关技术培训和对外交流合作。
        <br/>
        移民事务服务中心
        <br/>
        主要职责：负责指导推动社会组织、基层组织和涉外企事业单位等开展来华移民定居人员语言、文化培训辅导，促进移民社会融入；组织编印制作面向来华移民定居人员的法律、文化、社会、国情知识读本和视听资料，帮助熟悉适应工作、生活环境；开展国家移民管理政策法律宣传咨询，协助主管部门开展移民管理国际合作交流，服务引进外国人才和智力工作；收集分析国内外移民情况、特点、趋势，提出移民管理政策法规修订调整建议；了解掌握来华移民定居人员意见建议，协助相关主管部门改进服务管理工作；加挂“中国移民管理报社”牌子，编辑出版发行移民管理报纸、期刊，建设维护网络媒体。
        <br/>
        警务保障中心
        <br/>
        主要职责：负责本级和机关委托管理的后勤保障、物业管理和生活服务等工作；承担垂直管理机构来京公务人员的差旅服务协调保障；承担机关委托管理的行政事务性工作；承担机关保卫任务。
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const navIndex = ref(0)
const toggle = (e) => navIndex.value = e;


</script>

<style scoped lang="scss">
.basicInformationDetail {
  width: 2065px;
  height: 3623px;
  display: grid;
  grid-template-rows: 206px 977px 1fr;
  grid-row-gap: 45px;
  font-family: ZiHun;

  .logo {
    width: 2065px;
    height: 977px;
    border-style: solid;
    border-width: 5px;
    border-image-source: linear-gradient(-74deg,
        #b7e0ff 0%,
        rgba(100, 188, 255, 0.8) 50%,
        #1097ff 100%);
    border-image-slice: 1;
  }

  &-content {
    width: 2065px;
    height: 2386px;
    background-image: url("../../../assets/img/page/home/7.png");
    background-repeat: no-repeat;
    background-size: 100% 95%;
    background-position-y: 100px;

    .nav {
      height: 188px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > div {
        cursor: pointer;
        margin-right: 20px;
        width: 266px;
        height: 78px;
        font-size: 50px;
        text-align: center;
        line-height: 78px;
        background-color: rgba(42, 92, 255, .5);
        border-radius: 10px;
        border: solid 4px rgba(75, 117, 255, .5);
        opacity: .6;
      }

      .on {
        opacity: 1;
      }
    }

    .content {
      .item {
        padding: 50px;
        box-sizing: border-box;
        height: 538px;
        display: grid;
        grid-template-columns: 388px 1542px;
        grid-column-gap: 44px;

        &-left {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;

          img {
            width: 360px;
            height: 382px;
          }

          .name {
            height: 56px;
            width: 360px;
            line-height: 56px;
            text-align: center;
            font-size: 36px;
            background-color: rgba(53, 212, 218, .3);
          }

          &::after {
            content: "";
            display: block;
            width: 80px;
            height: 472px;
            position: absolute;
            border: 1px solid #fff;
            border-right: none;
            margin-top: -15px;
            margin-left: -300px;
          }

          &::before {
            content: "";
            display: block;
            width: 80px;
            height: 472px;
            position: absolute;
            border: 1px solid #fff;
            border-left: none;
            margin-top: -15px;
            margin-left: 315px;
          }
        }

        &-right {
          font-size: 48px;
          color: rgb(129, 174, 203);
          display: flex;
          justify-content: space-between;
          flex-direction: column;

          .top {
            //align-content: space-between;

            > div {
              height: 64px;
              padding: 0 20px;
              text-align: center;
              line-height: 64px;
              background-color: rgba(214, 255, 254, .2);
              border: solid 1px rgba(214, 255, 254, .5);
            }
          }
        }
      }
    }

    .survey {
      font-size: 56px;
      color: #c6dae6;
      padding: 70px;
      box-sizing: border-box;
    }

    .duty{
      font-size: 56px;
      color: #c6dae6;
      padding: 70px;
      box-sizing: border-box;
      overflow-y: scroll;
      height: 2123px;
    }
  }
}
</style>
