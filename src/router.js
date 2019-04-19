import Vue from 'vue'
import VueRouter from 'vue-router'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)

// 首页
import Pagehome from './pages/Home/Pagehome.vue'
//分类
import Classify from './pages/Home/Classify.vue'
//购物车
import Shopping from './pages/Home/Shopping.vue'
//我的
import Mine from './pages/Home/Mine.vue'


// 定义路由
const routes = [
    {
        path: '/classify', component: Classify, name: 'classify',
    },
    {
        path: '/pagehome', component: Pagehome, name: 'pagehome',
    },
    {
        path: '/shopping', component: Shopping, name: 'shopping',
    },
    {
        path: '/mine', component: Mine, name: 'mine',
    },
    // { path: '/detail/:id', component: Detail, name: 'detail' },
    // { path: '/search', component: Search, name: 'search' },
    // 设置默认重定向
    { path: '/', redirect: '/pagehome' }
]
// 实例化路由
const router = new VueRouter({
    routes
})



// 暴露路由对象，为后续挂载容器做准备
export default router