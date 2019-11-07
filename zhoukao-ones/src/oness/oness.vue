<template>
     <div class = 'oness'>
         <section class = 'sects'>
                  <router-view></router-view>
         </section>
         <footer  class = 'foots'>
                  <router-link v-for = "(item,index) in list" :key = 'index' :to = item.name> </router-link>
         </footer>
     </div>
</template>
<script>
export default {
       name:"oness",
       data(){
           return{
               list:[
                      {name:"/yuans"},
                      {name:"/xians"},
                      {name:"/denls"},
                      {name:"/zuces"},
               ]
           }
       }
}
</script>
<style>
.oness{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.sects{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}

</style>