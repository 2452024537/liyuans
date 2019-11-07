<template>
     <div class = 'shou'>
        <header class = 'headu'>
             <keep-alive>
                <component :shos = 'shus' v-for = '(item,index) in list' :key = 'index' :is = "item.name" class = 'liu' :class = '{active:actv == item.fvvv}' @click = 'shou(item.fvvv,item.name)'>
                    {{item.time}}
                </component>
             </keep-alive>
                {{node}}
        </header>
     </div>
</template>
<script>
import kuai from './shous/kuai'
import renb from './shous/renb'
import tuis from './shous/tuis'
export default {
       name:"shou",
       data(){
           return{
                 list:[
                       {name:"kuai",time:"首页",fvvv:0},
                       {name:"renb",time:"热榜",fvvv:1},
                       {name:"tuis",time:"推荐",fvvv:2},
                      ],
                 node:[],
                 shus:[],
                 fnnn:'kuai',
                 actv:0,
           }
       },
       created(){
           this.$axios.get('/shous').then( res => {
                this.node = res.data.shous
                console.log(this.node)
           })

           console.log(this.actv)
       },
       methods:{
           shou:function(indexs,items){
                this.actv = indexs;
                this.fnnn = items

                
           }
       },
       comonents:{
           kuai,
           renb,
           tuis
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
.headu{
    width:100%;
    height:40px;
    display: flex;
}
.liu{
    width:33%;
    height:40px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
}
.active{
    border-bottom:solid 1px #f00;
}
</style>