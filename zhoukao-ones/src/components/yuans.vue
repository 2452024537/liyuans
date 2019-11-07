<template>
     <div class = 'yuans'>
          <section class = 'secto'>
                  <router-view></router-view>
          </section>
          <footer  class = 'footo'>
                  <router-link v-for = "(item,index) in list" :key = 'index' :to = item.name class = 'lio'>{{item.time}}</router-link>
          </footer>
     </div>
</template>
<script>
export default {
       name:"yuans",
       data(){
           return{
                 list:[
                       {name:"/shou",time:"首页"},
                       {name:"/krwu",time:"购物"},
                       {name:"/huio",time:"会员"},
                       {name:"/tusu",time:"图书"},
                       {name:"/kren",time:"个人"},
                      ]
           }
       }
}
</script>
<style>
.yuans{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.secto{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.footo{
    width:100%;
    height:40px;
    display: flex;
    background:pink;
    position: fixed;
    bottom:0;
}
.lio{
    width:20%;
    height:40px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
}
</style>