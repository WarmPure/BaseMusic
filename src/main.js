// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import "vant/lib/index.css";
import Vant from "vant";
Vue.use(Vant);

import "./static/css/common.css";
import "./static/image/icon/iconfont.css";
import "./static/css/reset.css";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
