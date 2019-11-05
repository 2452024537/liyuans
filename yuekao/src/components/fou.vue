<template>
   <div id = 'fou'>
        <div class='four' v-for="(item,index) in this.$store.state.count" :key='index'
        >    
             <li><input type="checkbox" >{{item.name}}</li>
             <li>{{item.time}}</li>
             <li class='fw'>
                 <span class='jia' @click='fn'>+</span><span class='shu'>{{item.id}}</span><span class='jian' @click='fw'>-</span>
             </li>
        </div>
   </div>
</template>

<script>
import mock from '../mock'
console.log(mock)
export default{
       name:"fou",
       data(){
           return{
             node:"",
           }
       },
       methods:{
           fv:function(data){
              this.node = data;
              console.log(this.node)
           },
           fn:function(state,n=1){
              return $store.commit(fns)
           },
           fw:function(state,n=1){
              return $store.commit(fws)
           },
       }
}
</script>

<style>
*{
    margin:0;
    padding:0;
    list-style: none;
}
#fou{
    width:100%;
    height:auto;
    position: fixed;
    top:0;
    color:#000;
}
.jia{
    width:15px;
    height:15px;
    border:solid 1px #f00;
    display: inline-block;
}
.jian{
    width:15px;
    height:15px;
    border:solid 1px #f00;
    display: inline-block;
}
.four{
    margin-top: 10px;
    font-size: 13px;
}
</style>