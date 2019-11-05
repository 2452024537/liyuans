<template>
    <div class='app'> 
    {{fss}}
         <select v-model='infss'>
             <option v-for='(item,index) in node' :key='index' @click='fn(index)'>
                  {{item.fnn}}
             </option>
         </select>
         <select>
             <option v-for='(item,index) in fxx' :key='index'>
                  {{item}}
             </option>
         </select>
    </div>
</template>
<script> 
export default{
       name:"app",
       data(){
         return{
            node:[
                    {
                       fnn:"山西",
                       city:['忻州市','太原市','晋城市']
                    },
                    {
                       fnn: '河北省',
                       city: ['邯郸市', '石家庄', '保定市', '雄安']
                     }
                 ],
            fxx:[],
            fss:0
         }
       },
       methods:{
          fn:function(index){
             this.fss = index;
             fxx.push(this.node);
             
          }
       }
}
</script>
<style>
*{
  margin:0;
  padding:0;
  list-style: none;
}
</style>