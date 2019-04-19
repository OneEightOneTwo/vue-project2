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

//登录页
import Login from './pages/Login.vue'
//注册页
import Check from './pages/Check.vue'

// 搜索页
import Search from './pages/Search.vue'

// 定义路由
const routes = [
    {
        path: '/classify',
        component: Classify,
        name: 'classify',
    },
    {
        path: '/pagehome',
        component: Pagehome,
        name: 'pagehome',
    },
    {
        path: '/shopping',
        component: Shopping,
        name: 'shopping',
    },
    {
        path: '/mine',
        component: Mine,
        name: 'mine',
    },
    {
        path: '/Login',
        component: Login,
        name: 'Login',
    },
    {
        path: '/Check',
        component: Check,
        name: 'Check',
    },
    // { path: '/detail/:id', component: Detail, name: 'detail' },
    {
        path: '/search',
        component: Search,
        name: 'search'
    },
    // 设置默认重定向
    {
        path: '/',
        redirect: '/Login'
    }
]
// 实例化路由
const router = new VueRouter({
    routes
})



// 暴露路由对象，为后续挂载容器做准备
export default router