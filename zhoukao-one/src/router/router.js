import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
      {path:"/box",name:"box",component:() => import('../components/tap/box'),
       children:[
             {path:"/shou",name:"shou",component:() => import('../components/boxs/shou'),
              children:[
                {path:"/guan",name:"guan",component:() => import('../components/guan/guan')},
                {path:"/rens",name:"rens",component:() => import('../components/guan/rens')},
                {path:"/tuis",name:"tuis",component:() => import('../components/guan/tuis')},
             ]
             },
             {path:"/zhan",name:"zhan",component:() => import('../components/boxs/zhan')},
             {path:"/xian",name:"xian",component:() => import('../components/boxs/xian')},
             {path:"/huai",name:"huai",component:() => import('../components/boxs/huai')},
             {path:"/kren",name:"kren",component:() => import('../components/boxs/kren')},
       ]
      },
      {path:"/xia",name:"xia",component:() => import('../components/tap/xia')},
]

const router = new Router({
      routes
})

export default router
