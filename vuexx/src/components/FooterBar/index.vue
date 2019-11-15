<template>
  <div class="footer">

      <router-link to="/">首页</router-link>

     <router-link to="/classify">分类</router-link>


     <router-link to="/cart">购物车</router-link>
     <router-link to="/personal">个人中心</router-link>

  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="scss">
.footer {
  width:100%;
  height: .8rem;
  background: red;
  display: flex;
  a {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    &.router-link-exact-active {
      background: red;
      color:#fff;
    }
  }
}
</style>
