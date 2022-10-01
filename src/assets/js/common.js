import FastClick from './fastclick';

document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + "px";

window.addEventListener(
  "load",
  function() {
    FastClick.attach(document.body);
  },
  false
);

document.documentElement.addEventListener(
  "touchmove",
  function(e) {
    if(e.touches.length > 1) {
      e.preventDefault();
    }
  }
)

// fix: ios input多次点击input才focus start=========================
// https://blog.csdn.net/weixin_44343557/article/details/121728819?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121728819-blog-126125157.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121728819-blog-126125157.pc_relevant_default&utm_relevant_index=2
FastClick.prototype.focus = function(targetElement) {
  targetElement.focus();
};
const ver=navigator.userAgent.match(/cpu iphone os (.*?) like mac os/);

if(!ver){//非IOS系统

  // 引入fastclick 做相关处理
  FastClick.attach(document.body);
}
else {
  if(parseInt(ver[1])< 11){
      // 引入fastclick 做相关处理
      FastClick.attach(document.body);
  }
}

// fix: ios input多次点击input才focus end=========================
