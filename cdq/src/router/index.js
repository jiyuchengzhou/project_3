import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入exam1组件
import exam1 from "../components/exam1.vue";
// 引入header组件
import header from "@/components/common/header.vue";
// 引入footer组件
import footer from "@/components/common/footerIcon.vue";

Vue.use(VueRouter)

const routes = [
  //footer地址
  {
    path:"/footer",
    name:footer,
    component:footer
  },
  //header地址
  {
    path:"/header",
    component:header
  },
  //exam1地址
  {
    path:"/exam1",
    component:exam1
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router