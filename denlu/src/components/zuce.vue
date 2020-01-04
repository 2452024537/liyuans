<template>
  <div class="zuce">
       
  </div>
</template>
<script>
export default {
  name: 'zuce',
  data(){
      return{
         node:[],
         fv:"",
         fc:""
      }
  },
  created(){
      this.node = this.$route.query.fw;
  },
  methods:{
      fws:function(){
          this.node.forEach((val,i)=>{
              if(val.zhan==this.fv&&val.pass==this.fc){
                 this.$router.push({
                    path:"/zuce"
                 })
              }
              else{
                 this.node.push({zhan:this.fv,pass:this.fc});
                 this.$router.push({
                    path:"/denl",
                    query:{
                       zhu:this.node
                    }
                 })
              }
          })
      }
  }
}
</script>
<style>

</style>