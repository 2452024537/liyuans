<template>
  <div class="shou">
        
       <li>账户:<input v-model = 'name'/></li>
       <li>密码:<input v-model = 'age'/></li>
       <button @click = 'fnn'>登陆</button>
       <div v-for = '(item,index) in node' :key = 'index'>
            {{item.name}}
       </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'shou',
  data(){
      return{
         node:[
                    
              ],
        name:'',
        age:''
      }
  },
  created(){
     axios.get('/api/list').then(res => {
           this.node = res.data
     })
     
     
  },
  mounted(){
      
  },
  methods:{
      fnn:function(){
          axios.post('/api/add',{
           name:this.name,
           age:this.age
     }).then(res => {
       
           this.node = res.data
        
     })
      }
  },
}
</script>
<style>
.heads{
  width:100%;
  height:50px;
  background: #000;
}
.active{
   position: fixed;
   top:50px;
   z-index: 999;
}
.liu{
  width:100%;
  height:60px;
  line-height: 40px;
  text-align: center;
}
</style>
