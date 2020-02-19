import Vue from "vue";
import VueRouter from "vue-router";

// 引入header组件
// import header from "@/components/common/header.vue";
// 引入exam01组件
import exam01 from "@/components/exam01.vue";
// 引入Home组件
import Home from "@/components/Home.vue";
//引入login组件
import login from "@/components/common/login.vue";
// 引入注册组件
import register from "@/components/common/register.vue";
//引入购物车页面
import cart from "@/components/common/cart.vue";
//引入分类页面
import fenlei from "@/components/common/fenlei.vue";
//引入我的页面
import wode from "@/components/common/wode.vue";
//引入商品详情页
import details from "@/components/common/details.vue";
//引入商品搜索页
// import search from "@/components/search.vue"

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/search",
  //   component: search
  // },
  // {
  //   path:"/exam01",
  //   component:exam01
  // },
  {
    path: "/details",
    component: details
  },
  {
    path: "/wode",
    component: wode
  },
  {
    path: "/fenlei",
    component: fenlei
  },
  {
    path: "/cart",
    component: cart
  },
  {
    path: "/register",
    component: register
  },
  {
    path: "/login",
    component: login
  },
  // 转换路径
  {
    path: "/",
    redirect: "/home"
  },
  // Home地址
  {
    path: "/home",
    component: Home
  }
  // header地址
  // {
  //   path:"/header",
  //   component:header
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
