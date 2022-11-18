
const focus = (app) => {
  app.directive("focus", {
    mounted(el) {
      el.focus();
    },
  });
};

const debounce = (app) => {
  app.directive("debounce", {
    mounted(el, binding) {
      try {
        let fn,
          event = "click",
          time = 500;
        if (typeof binding.value == "function") {
          fn = binding.value;
        } else {
          [fn, event, time] = binding.value;
        }

        let timer;
        el.addEventListener(event, () => {
          timer && clearTimeout(timer);
          timer = setTimeout(() => fn(), time);
        });
      } catch (error) {
        console.log("防抖指令错误", error);
      }
    },
  });
};

const throttle = (app) => {
  app.directive("throttle", {
    mounted(el, binding) {
      try {
        let fn,
          event = "click",
          time = 1500;

        if (typeof binding.value == "function") {
          fn = binding.value;
        } else {
          [fn, event, time] = binding.value;
        }
        /**
         * el.preTime 记录上次触发的时间
         * 每次触发比较nowTime（当前时间） 和 el.preTime 的差是否大于指定的时间段！
         */
        el.addEventListener(event, () => {
          const nowTime = new Date().getTime();
          if (!el.preTime || nowTime - el.preTime > time) {
            console.log(
              !el.preTime,
              nowTime - el.preTime,
              nowTime - el.preTime > time
            );
            el.preTime = nowTime;
            fn();
          }
        });
      } catch (error) {
        console.log("节流指令错误", error);
      }
    },
  });
};

const backgroundImage = (app) =>{
  app.directive('backImage',{
    created:(el,binding,vnode)=>{
      el.style.backgroundImage ='url('+ binding.value+')'
      el.style.backgroundSize = '100% 100%'
      el.style.backgroundRepeat ='no-repeat'
    }
  })
}
//补前导零
const leadingZeros = (app) =>{
  app.directive('leadingZeros',{
    mounted:(el,binding,vnode)=>{
      if(binding.value <= 9) el.innerText  = '0'+binding.value
      else el.innerText = binding.value
    },
    updated:(el,binding,vnode)=>{
      if(binding.value <= 9) el.innerText  = '0'+binding.value
      else el.innerText = binding.value
    }
  })
}

export default (app) => {
  focus(app);
  debounce(app);
  throttle(app);
  backgroundImage(app);
  leadingZeros(app);
};
