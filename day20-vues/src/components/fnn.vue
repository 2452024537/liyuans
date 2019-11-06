<template>
  <div class="fnn">
       <li v-for = "(item,index) in node" :key = 'index'>{{item.node}}</li>
  </div>
</template>
<script>
export default {
  name:'fnn',
  data(){
      return {
          node:[1,2,3,4]
      }
  },
  computed:{
      fw:function(){
         this.node.forEach((item,index) => {
              console.log(item)
         })
      }
  }
}
</script>

<style>


</style>
