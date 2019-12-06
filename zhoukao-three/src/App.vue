<template>
      <div class = 'app'>
           <div class = 'head'></div>
           <div class = 'sect'>
                <router-view></router-view>
           </div>
           <div class = 'foot'>
                <router-link to = '/ones' class = 'li'>首页</router-link>
                <router-link to = '/twos' class = 'li'>我的</router-link>
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
.app{
      width:100%;
      height:100px;
      display: flex;
      flex-direction: column;
      font-size: 13px;
}
.sect{
      width:100%;
      height:auto;
      display: flex;
      flex-direction: column;
      font-size: 13px;
}
.foot{
      position: fixed;
      bottom: 0;
      width:100%;
      height:40px;
      background: pink;
      display: flex;
}
.li{
      width:50%;
      height:40px;
      line-height: 40px;
      text-align: center;
}
</style>
