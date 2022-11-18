/* rem */
// (function (design,w) {
//     //获取文档
//     let docEl = w.document.documentElement;
//     refreshRem();
//
//     function refreshRem() {
//        //配置rem
//        docEl.style.fontSize = docEl.clientWidth  * 16 / design +'px'
//
//        //放大
//        /* docuEle.style.transform ="scale(" + docuEle.clientWidth/design+")"; docuEle.style.transformOrigin ="0px 0px"; */
//     }
//     let timer = null;
//     w.addEventListener('resize',function () {
//         clearTimeout(timer);
//         timer = setTimeout(refreshRem,1);
//     },false);
//     //pageshow:事件类似于onload;onload在网页第一次加载是触发,pageshow事件在每次加载页面都会触发.即,onload在网页从六拉起缓存中读取时不触发
//     //oageshow:事件对象中有一个persisted属性判断网页时候是从缓存中取得就返回true,否则false
//     w.addEventListener('pageshow',function (e) {
//         if (e.persisted){
//             clearTimeout(timer);
//             timer = setTimeout(()=>{
//                 refreshRem()
//             },100);
//         }
//     },false)
// })(1920,window)


const baseSize = 16

function setRem() {
  const scale = document.documentElement.clientWidth / 1920
  document.documentElement.style.fontSize = baseSize * scale + 'px'
}

setRem()
window.onresize = function () {
  setRem()
}


/*
document.body.clientWidth;        //网页可见区域宽(body)

document.body.clientHeight;       //网页可见区域高(body)

document.body.offsetWidth;       //网页可见区域宽(body)，包括border、margin等

document.body.offsetHeight;      //网页可见区域宽(body)，包括border、margin等

document.body.scrollWidth;        //网页正文全文宽，包括有滚动条时的未见区域

document.body.scrollHeight;       //网页正文全文高，包括有滚动条时的未见区域

document.body.scrollTop;           //网页被卷去的Top(滚动条)

document.body.scrollLeft;           //网页被卷去的Left(滚动条)

window.screenTop;                     //浏览器距离Top

window.screenLeft;                     //浏览器距离Left

window.screen.height;                //屏幕分辨率的高

window.screen.width;                 //屏幕分辨率的宽

window.screen.availHeight;          //屏幕可用工作区的高

window.screen.availWidth;           //屏幕可用工作区的宽
*/

// window.innerWidth和screen.availWidth
// screen：屏幕。这一类bai取到的是关于屏幕的宽度du和距离，与浏览器无关，zhi应该是获取window对象的属性。
// client：使用区、dao客户区。指的是客户区，当然是指浏览器区域。
// offset：偏移。指的是目标甲相对目标乙的距离。
// scroll：卷轴、卷动。指的是包含滚动条的的属性。
// inner：内部。指的是内部部分，不含滚动条。
// avail：可用的。可用区域，不含滚动条，易与inner混淆。
