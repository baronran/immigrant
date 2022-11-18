const pageConfigs = {
  //cesium地址
  cesiumUrl:'http://ymjCesium:9090/scene/',
  // 后台请求地址1
  VUE_APP_BASE_API:'http://192.168.1.21:8082/',
  // 后台请求地址2
  // http://192.168.1.88:9000/exitEntry/general
  VUE_APP_BASE_API2:'http://192.168.1.88/api/',
  //是否请求接口
  isRequest:false,//true false
  //页面定时器
  Timer:5000,

  //嵌入的页面列表
  iframeList:[
    {
      name:'值班管理系统',
      url:'http://192.168.1.250:8072/login',
      topHeight:'70',
      backgroundColor:'#ffffff',
    },
    {
      name:'时空数据关联应用系统',
      url:'http://192.168.1.105/#/login',
      topHeight:'70',
      backgroundColor:'#ffffff',
    }
  ]

}
