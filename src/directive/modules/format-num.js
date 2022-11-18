//使用该指令可以修改字符串，
// 如使用 v-format.toFixed 保留两位小数、
// v-format.price 将内容变成金额（每三位逗号分隔），
// 可以同时使用，如 v-format.toFixed.price。
export default {
  inserted(el, binding, vnode) {
    returnHtml(el, binding, vnode)
  },
  update (el, binding, vnode) {
    returnHtml(el, binding, vnode)
  },
}


function returnHtml(el, binding, vnode) {
  // console.log(binding,'----')
  const { value, modifiers } = binding
  if (!value) return
  let formatValue = Number(value)
  if (modifiers.toFixed) {
    formatValue = value.toFixed(2)
  }
  console.log(formatValue,'----')
  if (modifiers.price) {
    formatValue = formatNumber(formatValue)
  }
  el.innerText = formatValue
}


function formatNumber (num) {
  num += '';
  let strs = num.split('.');
  let x1 = strs[0];
  let x2 = strs.length > 1 ? '.' + strs[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2
}
