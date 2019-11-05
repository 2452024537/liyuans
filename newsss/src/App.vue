<template>
    <div class='app'> 
         <ul> 
             <li :class='{active:flll}' v-for='(item,index) in node' :key='index' @click='fn(index)' >{{item.name}}</li>
         </ul>
         <ol>
             <li v-for='(item,index) in node' :key='index' v-show='list==index'>{{item.id}}</li>
         </ol>
    </div>
</template>
<script> 
export default{
       name:"app",
       data(){
             return{
             node:[
                       {name:"0",id:"1",fs:false},
                       {name:"1",id:"2",fs:false},
                       {name:"2",id:"3",fs:false},
                       {name:"3",id:"4",fs:false}
                  ],
            list:0,        
            flll:false
            }
       },
       methods:{
           fn:function(index){
              this.list=index;
              this.node.forEach((val,indexs)=>{
                   if(this.list==indexs){
                      this.flll=true
                   }
                   else{
                      this.flll=false
                   }
              })
           }
       }
}
</script>

<style> 
*{ 
    margin:0px;
    padding:0px;
    list-style: none;
 }
 .app{
     width:100%;
     height:auto;
 }
 .app ul{
     width:100%;
     height:40px;
     line-height:40px;
     display:flex;
    
 }
 .app ul li{
     width:25%;
     height:40px;
     line-height: 40px;
     text-align: center;
     border-right:solid 1px #ccc;
 }
 .app ol{
     width:100%;
     height:300px;
     overflow:hidden;
 }
 .app ol li{
      width:100%;
     height:300px;
     line-height: 300px;
     text-align: center;
 }
 .app .active{
    background: #f00;
 }
</style>