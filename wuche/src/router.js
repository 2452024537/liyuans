import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta:{
        isActive:true
      }
    },
    { path:"/info/:id",name:"info",component:() => import('./views/Info.vue'),
    meta:{
      isActive:false
    } },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta:{
        isActive:false
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/My.vue'),
      meta:{
        isActive:false
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue'),
      meta:{
        isActive:false
      }
    }
  ]
})
