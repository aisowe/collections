import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Router)
Vue.use(Antd)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
