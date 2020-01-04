<template>
  <div id="app">
     <header class='head'>
             
     </header>
     <section class='sect'>
       <router-view></router-view>
     </section>
     <footer class='foot'>
       <router-link to='/shou' class='li'>首页</router-link>
       <router-link to='/denl' class='li'>登陆</router-link>
       <router-link to='/zuce' class='li'>注册</router-link>
     </footer>
  </div>
</template>
<script>

export default {
  name: 'app',
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
  height:auto;
  font-size: 13px;
}
.head{
  position: fixed;
  top:0px;
  width:100%;
  height:40px;
  background: #000;
}
.sect{
  position: fixed;
  top:45px;
  width:100%;
  height:auto;
}
.foot{
  width:100%;
  height:40px;
  height:#f00;
  display: flex;
  position: fixed;
  bottom:0px;
}
.li{
  width:33%;
  height:40px;
  line-height: 40px;
  text-align: center;
}
</style>
