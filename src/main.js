import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import './assets/css/flex.css'
import './assets/css/btn.scss'
import './assets/css/popup.scss'
import './assets/css/animation.css'
import './assets/css/font/index.css'
import './assets/css/iconfont/iconfont.css'
import global from './components/global/index'
import * as echarts from 'echarts'
import store from './store/index'
import AnimatedNumber from 'animated-number-vue3'

/* ElementPlus */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

const v = createApp(App)
v.config.globalProperties.$echarts = echarts
// v.config.globalProperties.$Highcharts = Highcharts
v.use(ElementPlus)
v.use(store)
v.use(router)
v.use(global)
v.use(AnimatedNumber)
v.mount('#app')

/* 自定义指令 */
import defineDirectives from "./directive/index";

defineDirectives(v);
