import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 引入exam1主件
import exam1 from "../components/exam1.vue";

Vue.use(VueRouter)

const routes = [
  //exam1地址
  {
    path:"/exam1",
    component:exam1
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
