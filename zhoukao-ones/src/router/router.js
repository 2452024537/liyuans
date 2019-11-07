import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//路由表的配置
const routes = [
      //一级路由
      {path:'/',redirect:'/yuans'},
      {path:'/yuans',redirect:'/shou'},
      {path:'/yuans',name:'yuans',component:() => import ('../components/yuans.vue'),
       //二级路由
       children:[
                 {path:'/shou',name:'shou',component:() => import ('../components/yuans/shou.vue'),
                  //三级路由
                  children:[
                            {path:'/kuai',name:'kuai',component:() => import ('../components/yuans/shous/kuai.vue'),
                             meta:{
                                de:true
                              },
                             },
                            {path:'/renb',name:'renb',component:() => import ('../components/yuans/shous/renb.vue'),
                             meta:{
                                de:true
                             },
                            },
                            {path:'/tuis',name:'tuis',component:() => import ('../components/yuans/shous/tuis.vue'),
                             meta:{
                                de:true
                             },
                            },
                  ] 
                 },
                 {path:'/krwu',name:'krwu',component:() => import ('../components/yuans/krwu.vue'),
                  meta:{
                    de:true
                  },
                 },
                 {path:'/huio',name:'huio',component:() => import ('../components/yuans/huio.vue'),
                  meta:{
                    de:true
                  },
                 },
                 {path:'/tusu',name:'tusu',component:() => import ('../components/yuans/tusu.vue'),
                  meta:{
                    de:true
                  },
                 },
                 {path:'/kren',name:'kren',component:() => import ('../components/yuans/kren.vue'),
                  meta:{
                    de:true
                  },
                 },
       ]
      },
      {path:'/xians',name:'xians',component:() => import ('../components/xians.vue'),
      },
      {path:'/denls',name:'denls',component:() => import ('../components/denls.vue'),
      
      },
      {path:'/zuces',name:'zuces',component:() => import ('../components/zuces.vue'),
      },
]
//在实例里注册
const router = new Router({
      mode:'history',
      routes
})
//导出路由表哈
export default router