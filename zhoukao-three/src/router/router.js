import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const routes = [
      {path:"/ones",name:"ones",component:() => import('./view/ones')},
      {path:"/twos",name:"twos",component:() => import('./view/twos')},
]
const router = new Router({
      routes
})
export default{
       router
}