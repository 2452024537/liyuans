<template>
     <div class = 'app'>
          <oness></oness>
     </div>
</template>
<script>
import oness from './oness/oness.vue'
export default {
       name:"app",
       components:{
             oness
       }
}
</script>
<style>
*{
  margin:0;
  padding:0;
  list-style: none;
}
.app{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    font-size: 13px;
}
</style>