<template>
  <div id="app">
       <Router-Link to = '/box' class='li'></Router-Link>
       <Router-Link to = '/xia' class='li'></Router-Link>
       <div class = 'foot'>
         <Router-view></Router-view>
       </div>
  </div>
</template>
<script>
export default{
       name:"app",
}
</script>
<style>
*{
  margin:0;
  padding:0;
  list-style: none;
}
#app{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
}
.foot{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
}
</style>
