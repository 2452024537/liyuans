import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () => import('./components/404NoFound/index.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/personal',
      name: 'personal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Personal.vue')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('./views/Classify.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./components/Detail/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/Login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/Register/index.vue')
    }
  ]
})
