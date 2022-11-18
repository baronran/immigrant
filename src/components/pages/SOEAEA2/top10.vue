<template>
    <cal title="外国人证件签发数Top10" @open="open">
        <template v-slot:content>
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
apiJson.data = [
{city:'美国',value:22},
    {city:'德国',value:15},
    {city:'法国',value:14},
    {city:'英国',value:13},
    {city:'俄罗斯',value:11},
    {city:'澳大利亚',value:7},
    {city:'加拿大',value:6},
    {city:'日本',value:4},
    {city:'韩国',value:3},
    {city:'朝鲜',value:2},
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
            name: '单位：万个',

            nameTextStyle: {
                color: '#fff',
                fontFamily: 'ZiHun',
                fontSize: 70,
                align: 'left',
            },
            nameGap: 95,
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
                interval: 0,
            },
            interval: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(64,120,222,1)",
                    width: 3,
                }
            },

        },
        series: {
            type: 'bar',
            name: '',
            barWidth: 55,

            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.3)',
            },
            itemStyle: {
                borderRadius: [15, 15, 0, 0],
                color: {
                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [{
                        offset: 1, color: 'rgba(0,0,0,0)' // 0% 处的颜色
                    }, {
                        offset: 0.6, color: 'rgba(0,128,247,.5)' // 100% 处的颜色
                    }, {
                        offset: 0, color: '#0080f7' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                show: true,
                position: 'top',
                fontFamily: 'QTypeCond-Book',
                fontSize: 46,
                fontWeight: 'bold',
                color: '#ffffff',
            },
            data: data
        }
    };

    chart.setOption(option, true);


}

onBeforeUnmount(() => {
    if (chart) chart.dispose()
})
</script>
  
<style scoped lang="scss">
.r{
    letter-spacing: 6px;
}
.cha {
    height: 100%;
}
</style>
  