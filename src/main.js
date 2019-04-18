import Vue from 'vue'
import App from './App.vue'
//ajax库
import axios from 'axios'
//weui样式
import 'weui';
// 引入路由对象
import router from './router.js'
//vant样式
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//Vue继承axios的方法
Vue.prototype.$axios = axios;

//发布的时候，代码错误不提醒
Vue.config.productionTip = false

new Vue({
  el: "#app",
  // 挂载路由实例
  router,
  // 渲染App组件
  render: h => h(App),
})
