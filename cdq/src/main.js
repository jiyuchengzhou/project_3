//https://m.3pet.cn/index.html
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入normalize.css组件
import 'normalize.css/normalize.css'
//1:引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
console.log(MintUI);
//2.单独引入mint-ui组件库中样式文件
import "mint-ui/lib/style.css"
//3.注册MintUI对象
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')