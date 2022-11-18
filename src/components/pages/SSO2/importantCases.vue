<template>
    <cal title="重要案事件播报">
        <template v-slot:content>
            <div className="essentialInformation">
                <div class="essentialInformation-content">
                    <Vue3SeamlessScroll :list="list" :hover="true">
                        <div class="essentialInformationBox">
                            <div class="item" v-for="(item, index) in list" :key="index">
                                <div class="title">
                                    <div class="bt" :class="'bordercolor'+item.zt">{{ item.bt }}</div>
                                    <div class="tbsj">{{ item.tbSj }}</div>
                                </div>
                                <div class="text">
                                    <div>{{ item.yqNr }}</div>
                                </div>
                            </div>
                        </div>

                    </Vue3SeamlessScroll>
                </div>
            </div>
        </template>
    </cal>

</template>

<script setup>
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { ref, getCurrentInstance, onMounted } from 'vue'
import { axiosPost } from "../../../apis/service.js";

const { proxy } = getCurrentInstance()
import { imosOrgInfoQueryOne } from "../../../apis/login.js";

const list = ref([{
    "tbSj": "2022-11-08 13:20",
    "bt": "四川边检总站",
    "zt": 0,
    "yqNr": "总站查获一名“法轮功”出境人员",
}, {
    "bt": "广西边检总站",
    "tbSj": "2022-11-07 19:10",
    "yqNr": "崇左边境管理支队破获1起毒品案 缴获毒品海洛因4块约1.4公斤 抓获越南籍犯罪嫌疑人3人",
    "zt": 1,

},  {
    "bt": "陕西省出入境管理局",
    "tbSj": "2022-11-06 11:30",
    "yqNr": "榆林出入境管理部门配合相关警种部门妥善处置一起外国记者非法采访事件",
    "zt": 2,

} ]);

onMounted(() => {
    getDataFun()
})

async function getDataFun(node) {
    let res = null
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // console.log(userInfo);
    if (!userInfo) proxy.$message({ showClose: true, message: '请登陆', });

    let res1, list;
    let parameter = node || userInfo.jgbh

  if (pageConfigs.isRequest) res1 = await imosOrgInfoQueryOne(parameter)
  else return;
    if ( res1.code != 200) {
        proxy.$message({ showClose: true, message: res1.msg, });
        return;
    } else {
        let mechanism = ['边检总站', '边防检查站', '边检执勤队', '边管支队']
        // const { level } = node
        list = res1.data.filter((v) => (mechanism.includes(v.jgsxmc))).map((v) => (v.jgbh))

        let parameter = {
            "orgNumber": userInfo.jgbh,
            "orgNumberList": list,
            // "startTime": "开始时间",
            // "endTime": "结束时间",
            // "status": "状态",
            // "type": "状态",
            "pageSize": 100,
            "pageNum": 1
        }
        console.log(parameter, 'ooooooooo');

        if (pageConfigs.isRequest) res = await axiosPost(pageConfigs.VUE_APP_BASE_API + 'dutySystem/yqgl/lettersFind', parameter)
        else res = {}
        list.value = res.data.data
        console.log(list.value);
    }
}

</script>

<style scoped lang="scss">
.essentialInformation {
    /* display: grid;
    grid-template-rows: 147px 1fr;
    grid-row-gap: 52px; */

    &-content {
        height: 955px;
        overflow-y: hidden;

        .item {
            height: 285px;
            margin: 25px 0;
            // padding: 25px 50px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            background: url("../../../assets/img/page/SSO/bgb.png") no-repeat center;
            .title {
                display: flex;
                justify-content: space-between;
                font-size: 60px;
                padding-bottom: 0px;
                width: 2040px;
                margin: 0 auto;
                padding-left: 130px;
                padding-right: 50px;
                box-sizing: border-box;
                margin-top: 10px;
                color: #147bcf;
                .bt{
                    line-height: 46px;
                    margin-top: 30px;
                    border-bottom: 20px solid;
                    border-image: linear-gradient(to bottom, rgba(140, 38, 52,0) 98.5%, rgb(140, 38, 52), ) 2 2 2 2;
                }
                .bordercolor1{
                    border-image: linear-gradient(to bottom, rgba(140, 38, 52,0) 98.5%, #827c58 ) 2 2 2 2;
                }
                .bordercolor2{
                    border-image: linear-gradient(to bottom, rgba(140, 38, 52,0) 98.5%, #1b9692 ) 2 2 2 2;
                }
                .tbsj{
                    color: #bed2e3;
                    font-size: 48px;
                    padding:2px 20px;
                    height: 60px;
                    margin-top: 20px;
                    background-image: linear-gradient(to bottom , rgb(60, 86, 113),rgba(60, 86, 113,0));
                }
            }

            .text {
                width: 1940px;
                height: 140px;
                margin: 0 auto;
                // padding-top: 20px;
                color: #bed2e3;
                font-size: 60px;
                line-height: 62px;


            }
        }
    }

    .essentialInformationBox {
        height: 955px;
        overflow: hidden;


    }
}
</style>
