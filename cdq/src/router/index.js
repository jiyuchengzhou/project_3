import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入header组件
// import header from "@/components/common/header.vue";
// 引入Home组件
import Home from "@/components/Home.vue"
//引入login组件
import login from "@/components/common/login.vue"
// 引入注册组件
import register from "@/components/common/register.vue"
//引入购物车页面
import cart from "@/components/common/cart.vue"
//引入分类页面
import fenlei from "@/components/common/fenlei.vue"
//引入我的页面
import wode from "@/components/common/wode.vue"
//引入商品详情页
import details from "@/components/common/details.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/details",
    component:details
  },
  {
    path:"/wode",
    component:wode
  },
  {
    path:"/fenlei",
    component:fenlei
  },
  {
    path:"/cart",
    component:cart
  },
  {
    path:"/register",
    component:register
  },
  {
    path:"/login",
    component:login
  },
  // Home地址
  {
    path:"/home",
    component:Home
  },
  // header地址
  // {
  //   path:"/header",
  //   component:header
  // },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
