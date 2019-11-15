import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false


// 登陆验证函数
const loginConfig = {
  loginAuth: function () {
    // 判断本地存储中是否存有登陆的信息，如果有返回true, 反之，返回false
    if (window.localStorage.record) {
      return true
    } else {
      return false
    }
  }
}
// 导航守卫  前置守卫， 所有的路由都经过他才能走下一个
router.beforeEach((to, from, next) => {
  // console.log(to)
  // 检测到router中的字段返回为true，说明需要登陆验证了
  if (to.matched.some(item => item.meta.requiresAuth)) {
    if (loginConfig.loginAuth()) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath  // 当前路由的路径
        }
      })
    }
  } else {
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
