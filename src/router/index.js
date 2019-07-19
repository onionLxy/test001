import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入组件
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'

Vue.use(VueRouter)
// 实例化路由
const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home', component: Home}
  ]
})
// 导航守卫
router.beforeEach((to, from, next) => {
// 判断访问的是否为登陆页面
  if (to.path === '/login') {
    next()
  } else {
    // 如果要进入的不是登陆页，则判断是否已经登陆过，通过是否在本地存了token
    let token = localStorage.getItem('token')
    token ? next() : next('/login')
  }
})
// 导出路由
export default router
