<template>
    <cal title="边境管理态势" @open="open">
        <template v-slot:content>
            <div class="bgm">
                <span class="num">12<span class="unit">个</span></span>
                <span class="point"><i class="iconfont icon-jiantouxiajiang"></i>5%</span>
            </div>
            <div class="cha">
                <div class="item " :class="'col'+i" v-for="item,i in list">
                    <span class="name">{{item.name}}</span>
                    <span class="num">{{item.num}}<span class="point"><i class="iconfont icon-shangsheng"></i>{{item.point}}%</span></span>
                </div>
            </div>
        </template>
    </cal>
</template>
  
<script setup>
import { ref, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue'

import apiJson from "../../../../public/apiJson/AreaSituation"
let list = ref([
    {name:'走私',num:5,point:5},
    {name:'涉枪',num:2,point:5},
    {name:'涉恐',num:0,point:5},
    {name:'刑事',num:2,point:5},
    {name:'涉毒',num:2,point:5},
])
onBeforeUnmount(() => {
})
</script>
  
<style scoped lang="scss">
$left1: 756px;
$top1: 6px;
$top2: 237px;
@mixin pos0(){
    left:756px;
    top: 356px;
    opacity: 1;
    transform:scale(1,1);
}
@mixin pos1(){
    left: 45px;
    top:$top2;
    opacity: 0.8;
    transform: scale(0.8, 0.8);
}
@mixin pos2(){
    left: 204px;
    top: $top1;
    opacity: 0.6;
    transform: scale(0.6, 0.6);
}
@mixin pos3(){
    left: 1333px;
    top: $top1;
    opacity: 0.6;
    transform: scale(0.6, 0.6);
}
@mixin pos4(){
    left: 1471px;
    top:$top2;
    opacity: 0.8;
    transform: scale(0.8, 0.8);
}
.col0{
    @include pos0;
    animation: s0 30s linear 0s infinite normal;
}
@keyframes s0{
    20% {
        @include pos1;
    }
    40% {
        @include pos2;
    }
    60% {
        @include pos3;
    }
    80% {
        @include pos4;
    }
    100% {
        @include pos0;
    }
}
.col1{
    @include pos1;
    animation: s1 30s linear 0s infinite normal;
}
@keyframes s1{
    20% {
        @include pos2;
    }
    40% {
        @include pos3;
    }
    60% {
        @include pos4;
    }
    80% {
        @include pos0;
    }
    100% {
        @include pos1;
    }
}
.col2{
    @include pos2;
    animation: s2 30s linear 0s infinite normal;
}
@keyframes s2{
    20% {
        @include pos3;
    }
    40% {
        @include pos4;
    }
    60% {
        @include pos0;
    }
    80% {
        @include pos1;
    }
    100% {
        @include pos2;
    }
}
.col3{
    @include pos3;
    animation: s3 30s linear 0s infinite normal;
}
@keyframes s3{
    20% {
        @include pos4;
    }
    40% {
        @include pos0;
    }
    60% {
        @include pos1;
    }
    80% {
        @include pos2;
    }
    100% {
        @include pos3;
    }
}
.col4{
    @include pos4;
    animation: s4 30s linear 0s infinite normal;
}
@keyframes s4{
    20% {
        @include pos0;
    }
    40% {
        @include pos1;
    }
    60% {
        @include pos2;
    }
    80% {
        @include pos3;
    }
    100% {
        @include pos4;
    }
}
.bgm {
    width: 2032px;
    height: 317px;
    margin: 0 auto;
    background: url("../../../assets/img/page/SSO/5226.png") no-repeat center;
    position: relative;

    span {
        display: inline-block;
        position: absolute;
    }

    .num {
        color: #fff;
        font-family: 'QTYPECOND-BOOK';
        font-size: 100px;
        left: 1252px;
        top: 117px;
    }

    .unit {
        color: #b4d2eb;
        font-family: 'ZiHun';
        font-size: 60px;
        margin-left: 20px;
        margin-top: 40px;
    }

    .point {
        color: #00a71b;
        font-family: 'DIN';
        font-weight: 600;
        font-size: 60px;
        right: 106px;
        top: 147px;

        
    }
}

.cha {
    height: 650px;
    background: url("../../../assets/img/page/SSO/501673.png") no-repeat center;
    position: relative;
    
    .item{
        width: 672px;
        height: 306px;
        background: url("../../../assets/img/page/SSO/1111.png") no-repeat center;
        position: absolute;
        span{
            display: inline-block;
            position: absolute;
        }
        .name{
            font-family: zihun59hao-chuangcuhei;
            font-size: 88px;
            line-height: 32px;
            letter-spacing: -9px;
            color: #96b7d6; 
	        height: 69px;
            top: 74px;
            left: 50px;
        }
        .num{
            width: 300px;
            text-align: center;
            font-family: QTypeCond-Book;
            font-size: 108px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #eef5ff;
            top: 22px;
            left: 215px;
        }
        .point{
            font-family: DIN;
            font-size: 62px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ed9d22;
            margin-top: 39px;
            margin-left: 20px;
        }
    }
}.iconfont {
            font-size: 60px;
        }
</style>
  