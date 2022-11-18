<template>
    <cal title="境内常驻外国人" @open="open">
        <template v-slot:content>
            <div class="bgm">
                <span class="num">996721<span class="unit">人</span></span>
                <span class="point"><i class="iconfont icon-shangsheng"></i>5%</span>
            </div>
            <div class="cha">
                <div class="echarts" ref="myChartsDom"></div>
                <!-- <barEchart :chartData="chatData" :customOption="customOption"></barEchart> -->
            </div>
        </template>
    </cal>
</template>
  
<script setup>
import * as Echarts from 'echarts'
import { ref, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue'

import barEchart from '@/components/echarts/bar.vue'
import apiJson from "../../../../public/apiJson/AreaSituation"

onMounted(() => {
    chart = Echarts.init(myChartsDom.value);
    initChart()
    //随着屏幕大小调节图表
    window.addEventListener("resize", () => {
        if (chart) chart.resize();
    });
})
const myChartsDom = ref(null)
let chart = null
const emit = defineEmits(['open'])
const open = (style) => emit('open', { style, el: 'checkInAndOutOfVehicles' })
let data = []

let color
let city = [];
apiJson.data= [
    {city:'上海',value:235413},
    {city:'广东',value:201203},
    {city:'山东',value:170389},
    {city:'浙江',value:149328},
    {city:'北京',value:98919},
    {city:'湖南',value:78956},
    {city:'辽宁',value:32513},
]
apiJson.data.map((item, index) => {

    if (index % 2 == 0) {
        color = "#008aff"
    } else {
        color = "#afc7e9"
    }
    city.push(item.city)
    data.push(
        {
            value: item.value,
            itemStyle: {
                color: color
            }
        }
    )
})

function initChart() {

    let option = {
        title: {
    // subtext: '单位：人'
  },
        color: ['#0080f7', '#cfa244', '#33cc0a', '#6959ff',],
        tooltip: {
            trigger: 'axis',
            textStyle: {
                // color: '#fff',
                fontSize: 46,
            },
        },
        legend: {
            // orient: 'vertical',
            top: '25%',
            left: 'right',
            itemGap: 70,
            itemHeight: 35,
            itemWidth: 50,
            textStyle: {
                fontSize: 45,
                fontFamily: 'ZiHun',
                color: '#ffffff',
            }
        },
        yAxis: {
            type: 'value',
            name:'单位：人',
            
            nameTextStyle: {
                color: '#fff' ,
                fontFamily: 'ZiHun',
                fontSize: 50 ,
            } ,
            nameGap: 65 ,
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(127,181,248,0.2)",
                    width: 2.5
                }
            },
            axisLabel: {
                fontSize: 43,
                color: '#eef7ff',
                fontFamily: 'DINPro-Regular',
            }
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: city,
            axisLabel: {
                fontSize: 50,
                color: '#eef7ff',
                margin: 30,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(64,120,222,1)",
                    width: 3,
                }
            },

        },
        series:{
        type: 'bar',
        name:'',
        barWidth: 55,
        
        itemStyle: {
            borderRadius: [15, 15, 0, 0]
        } ,
        label: {
            show: true,
            position: 'top',
            fontFamily: 'QTypeCond-Book',
            fontSize: 46,
            fontWeight: 'bold',
            color: '#ffffff',
        },
        data:data
    }
    };

    chart.setOption(option, true);


}

onBeforeUnmount(() => {
    if (chart) chart.dispose()
})
</script>
  
<style scoped lang="scss">
.bgm {
    width: 2032px;
    height: 317px;
    margin: 0 auto;
    background: url("../../../assets/img/page/SSO/bgm.png") no-repeat center;
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
        color: #ed9d22;
        font-family: 'DIN';
        font-weight: 600;
        font-size: 60px;
        right: 106px;
        top: 147px;

        .iconfont {
            font-size: 60px;
        }
    }
}

.cha {
    height: 600px;
}
</style>
  