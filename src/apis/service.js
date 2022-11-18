import axios from 'axios';

import qs from 'qs';
import { ElMessage } from 'element-plus'

import {useRouter} from "vue-router";
const router = useRouter()
axios.defaults.retry = 5;
axios.defaults.retryDelay = 1000;

const service = axios.create({
  baseURL: pageConfigs.VUE_APP_BASE_API,
  timeout: 0, // 请求超时时间
  // paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'brackets' }),
});

//添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  // console.log(userInfo,'在发送请求之前做些什么');
  // 判断是否存在token,如果存在将每个页面header添加token
  if (userInfo) {
    config.headers["token"] = userInfo.token;
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
  // console.error(response,'ooo')

  return response.data;

}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 302:error.message = '接口重定向了！'; break;
      case 400:error.message = 'token过期，请登录';  router.push({path:'/'}); break; //'请求错误';
      case 401:error.message = '未授权，请登录'; break;
      case 403:error.message = '拒绝访问'; break;
      case 404:error.message = `请求地址出错: ${error.response.config.url}`; break;
      case 408:error.message = '请求超时'; break;
      case 409:error.message = '系统已存在相同数据！'; break;
      case 500:error.message = '服务器内部错误'; break;
      case 501:error.message = '服务未实现'; break;
      case 502:error.message = '网关错误'; break;
      case 503:error.message = '服务不可用'; break;
      case 504:error.message = '网关超时'; break;
      case 505:error.message = 'HTTP版本不受支持'; break;
      default:error.message = '异常问题，请联系管理员！'; break;
    }
  }
  ElMessage({
    message: error || 'Error',
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error);
});

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function axiosGet(url, params) {
  return service.get(url, params,)
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function axiosPost(url, params,config={}) {
  // console.log('post=========')
  let defConfig = {
    header:{
      'Accept':'*/*',
      'Content-Type':'application/json'  //如果写成contentType会报错
    }
  }
  return service.post(url, params,{...config,...defConfig})
}

export default service;
