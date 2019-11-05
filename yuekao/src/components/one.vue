<template>
  <div id ="one">
       <div class='head'>
            <li>多点超市</li>
            <li>全球精选</li>
       </div>
       <div class='sele'>
            <li v-for="(item,index) in node" :key='index'>
               <span><img :src="item.img" alt=""></span>
               <p>{{item.name}}</p>
               <p>{{item.time}}<button class='but' @click='fn(item.id)'>+</button></p>
            </li>
       </div>
  </div>
</template>
 
<script>
export default {
  name: 'one',
  data(){
          return{
                   node:[
                           {id:1,img:require('../assets/1.jpg'),name:"进口组:约65克",time:"￥9.90"},
                           {id:2,img:require('../assets/1.jpg'),name:"进口组:约65克",time:"￥9.90"},
                           {id:3,img:require('../assets/1.jpg'),name:"进口组:约65克",time:"￥9.90"},
                           {id:4,img:require('../assets/1.jpg'),name:"进口组:约65克",time:"￥9.90"},
                           {id:5,img:require('../assets/1.jpg'),name:"进口组:约65克",time:"￥9.90"},
                           {id:6,img:require('../assets/1.jpg'),name:"进口组:约65克",time:"￥9.90"},
                           {id:7,img:require('../assets/1.jpg'),name:"进口组:约65克",time:"￥9.90"},
                           {id:8,img:require('../assets/1.jpg'),name:"进口组:约65克",time:"￥9.90"},
                           {id:9,img:require('../assets/1.jpg'),name:"进口组:约65克",time:"￥9.90"},
                        ]
                }
        },
  methods:{
      fn:function(data){
         $.emit('cheek',data)
         console.log(data)
      }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
  list-style: none;
}
#one{
  width:100%;
  height:auto;
  position: fixed;
  top:0;
}
.head{
  width:100%;
  height:40px;
  background: #00f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color:#fff;
  position: fixed;
  top:0;
}
.head li{
  width:50%;
  height:40px;
  line-height: 40px;
  text-align: center;
}
.sele{
  width:100%;
  height:auto;
  position: fixed;
  top:50px;
}
.sele li{
  float: left;
  width:33%;
  height:130px;

}
.sele li span img{
  width:80px;
  height:80px;
  text-align: center;
}
.sele li p {
  font-size: 12px;
  margin-top: 3px;
  text-align: center;
  color:#000;
}
.but{
  height:14px;
  line-height: 14px;
  margin-left: 3px;
}
</style>
