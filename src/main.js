// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../src/App.vue'
// 引入路由
import router from './router/index.js'
// 引入elementUI
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// 安装
Vue.use(ElementUI)

// 引入全局的css(公共的样式)
/* eslint-disable*/
// import './assets/css/common.css'

Vue.config.productionTip = false
/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  components: { App },
  // 构建版本
  template: '<App/>'
})
