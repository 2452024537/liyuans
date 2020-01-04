import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
      {name:"shou",path:"/shou",component:()=>import('./components/shou'),
       children:[
           {name:"denl",path:"/denl",component:()=>import('./components/denl')},
           {name:"zuce",path:"/zuce",component:()=>import('./components/zuce')},
           {name:"denl",path:"/denl",component:()=>import('./components/denl')},
           {name:"zuce",path:"/zuce",component:()=>import('./components/zuce')},
           {name:"zuce",path:"/zuce",component:()=>import('./components/zuce')},
       ]
      },
      {name:"denl",path:"/denl",component:()=>import('./components/denl')},
      {name:"zuce",path:"/zuce",component:()=>import('./components/zuce')},
]
const router = new Router({
      routes
})
export default router