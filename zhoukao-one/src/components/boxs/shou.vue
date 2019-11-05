<template>
     <div class = 'shou'>
          <div class='sects'>
            <router-view></router-view>
          </div>
          <div class='footbs'> 
            
               <router-link to = '/guan' class='libs'>关注</router-link>
               <router-link to = '/rens' class='libs'>热榜</router-link>
               <router-link to = '/tuis' class='libs'>推荐</router-link>
    
            <ol>
               <router-view></router-view>
            </ol>
          </div>
     </div>
</template>
<script>
export default {
       name:"shou",
       data(){
           return{
               node:[
                   {name:"/guan",time:"关注",list:[
                        {
                            listo:"林婚后说的是的地方shou?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                        {
                            listo:"林婚后说的是的地方shou?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                        {
                            listo:"林婚后说的是的地方shou?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                        {
                            listo:"林婚后说的是的地方shou?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                   ]},
                   {name:"/rens",time:"热榜",list:[
                        {
                            listo:"林婚后说的是的地方rens?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                        {
                            listo:"林婚后说的是的地方rens?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                        {
                            listo:"林婚后说的是的地方rens?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                        {
                            listo:"林婚后说的是的地方rens?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                   ]},
                   {name:"/tuis",time:"推荐",list:[
                        {
                            listo:"林婚后说的是的地方tuis?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                        {
                            listo:"林婚后说的是的地方tuis?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                        {
                            listo:"林婚后说的是的地方tuis?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                        {
                            listo:"林婚后说的是的地方tuis?",
                            listt:"地方地方法官法官同意同意他好好干活干活飒飒大苏打反对法的方法灌灌风格风格风格"
                        },
                   ]},
               ]

           }
       }
}
</script>
<style>
.shou{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.footbs{
    width:100%;
    height:40px;
    position: fixed;
    top:10px;
}
.libs{
    width:33%;
    height:40px;
    line-height: 40px;
    text-align: center;
}
</style>