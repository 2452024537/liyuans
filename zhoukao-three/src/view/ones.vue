<template>
      <div class = 'ones'>
           <div class = 'heado'>首页</div>
           <div class = 'secto'>
                <div class = 'secto-banner'>
                     <div class = 'swiper-container'>
                          <div class = 'swiper-wrapper'>
                               <div class = 'swiper-slide' v-for = '(item,index) in bann' :key = 'index'>
                                    <img src="item.name" alt="">
                               </div>
                          </div>
                     </div>
                </div>
                <div class = 'secto-lianbs'> 
                     <li v-for = '(item,index) in lian' :key = 'index'>
                         <span></span>
                         <p>{{item.name}}</p>
                     </li>
                </div>
           </div>
      </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import axios from 'axios';
export default{
       name:"ones",
       data(){
           return{
               bann:[],
               linn:[]
           }
       },
       created(){
           axios.get('/banners').then( res => {
                 this.bann = res.data.val
           })
           axios.get('/lianbss').then( res => {
                 this.lian = res.data.val
           })
           new Swiper('.swiper-container',{
               autoplay:true,
               loop:true
           })
       }
}
</script>
<style>
.ones{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.heado{
    width:100%;
    height:40px;
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
}
.secto{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.secto-banner{
    width:100%;
    height:200px;
}
.swiper-container{
    width:100%;
    height:200px;
}
.swiper-wrapper{
    width:100%;
    height:200px;
}
.swiper-slide{
    width:100%;
    height:200px;
}
.swiper-slide img{
    width:100%;
    height:200px;
}
.secto-lianbs{
    width:100%;
    height:auto;
    display: flex;
    flex-wrap: wrap;
}
.secto-lainbs li{
    width:25%;
    height:auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.secto-lianbs li span{
    display: inline-block;
    width:50px;
    height:50px;
    background: pink;
    border-radius: 50%;
}
</style>
