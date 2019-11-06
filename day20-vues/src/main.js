import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
let fn = {
    fns:function(){
        if(window.localStorage.record){
           return true
        }
        else{
           return false
        }
    }
}
router.beforeEach((to,form,next)=>{
      if(to.matched.some(item => item.meta.ta)){
         if(fn.fns()){
            next()
         }
         else{
            next({
               path:'/denl'
            })
         }
      }
      else{
        next()
      }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
