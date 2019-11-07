import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

let den = {
    lu:function(){
       if(window.localStorage.record){
          return true
       }
       else{
          return false
       }
    }
}

router.beforeEach((to,from,next) =>  {
       if(to.matched.some(item => item.meta.de)){
          if(den.lu()){
             next()
          }
          else{
             next({
                 path:'/denls'
             })
          }
       }
       else{
          next()
       }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
