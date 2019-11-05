import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
                   {name:"one",path:"/one",component:()=>import('./components/one')},
                   {name:"two",path:"/two",component:()=>import('./components/two')},
                   {name:"thr",path:"/thr",component:()=>import('./components/thr')},
                   {name:"fou",path:"/fou",component:()=>import('./components/fou')},
                   {name:"fiv",path:"/fiv",component:()=>import('./components/fiv')},
               ]
const router = new Router({
      mode:'history',
      routes
})
export default router