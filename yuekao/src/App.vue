<template>
  <div id="app">
     <div class='cls'>
        <router-link class='ros' to='/one'>
            111
        </router-link>
         <router-link class='ros' to='/two'>
            222
        </router-link>
         <router-link class='ros' to = '/thr'>
            333
        </router-link>
         <router-link class='ros' to = '/fou'>
            444
        </router-link>
         <router-link class='ros' to = '/fiv'>
            555
        </router-link>

        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cls{
  width:100%;
  height:50px;
  background: #f00;
  color:#fff;
  display: flex;
  position: fixed;
  bottom:0;
}
.ros{
  width:20%;
  height:50px;
  text-align: center;
  line-height: 50px;
}
.ros span img{
  width:40px;
  height:30px;
}
.ros p{
  font-size: 12px;
}

</style>
