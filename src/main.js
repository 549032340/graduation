// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import global from './components/global.js'
// import array from './common/array.js'

// 路由守卫
import './permission'

// view-design
import 'view-design/dist/styles/iview.css';
import iview from "./utils/iview.js";
Vue.use(iview);

// 引入svg图标
import './icons'

// 全局引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// jstopdf
import html2pdf from "./utils/html2pdf.js"
Vue.use(html2pdf)

// 引入权限方法
import {
  checkArray
} from './common/array.js'
Vue.config.productionTip = false

// 权限控制代码
Vue.directive('display-key', {
  inserted(el, binding) {
    let displayKey = binding.value; //获取到displayKey,如果有才进行判断
    if (displayKey) {
      let hasPermission = checkArray(displayKey)
      // 如果没有权限，则删除dom节点
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error('需要传key')
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // components: {
  //   App
  // },
  template: '<App/>'
})
