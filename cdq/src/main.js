//https://m.3pet.cn/index.html
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入normalize.css组件
import 'normalize.css/normalize.css'
//1:引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
//引入axios组件
import axios from 'axios'
//2.单独引入mint-ui组件库中样式文件
import "mint-ui/lib/style.css"
//引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/css/swiper.css'
// 配置访问服务器基础路径
axios.defaults.baseURL = 'http://127.0.0.1:4000/';
//3.注册MintUI对象
Vue.use(MintUI)
//注册axios对象
Vue.prototype.axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,//挂载vuex的store实例
  render: h => h(App)
}).$mount('#app')
