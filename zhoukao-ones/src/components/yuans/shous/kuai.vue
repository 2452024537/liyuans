<template>
     <div class = 'kuai'>
          {{shos}}
     </div>
</template>
<script>
export default {
       name:"kuai",
       props:['shos']
}
</script>
<style>
.kuai{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
</style>