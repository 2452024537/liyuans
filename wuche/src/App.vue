<template>
  <div class="app">
    <el-button type="primary">跳转</el-button>
    <router-link to="/home">首页</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/about">消息</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/my">我的</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/news">新闻</router-link>&nbsp;&nbsp;&nbsp;&nbsp;

    <!-- <keep-alive>
      <router-view  v-if="$route.meta.isActive"></router-view>
    </keep-alive> -->
    <router-view @jumpinfo="jumpinfo"></router-view>
  </div>
</template>
<script>

export default {
  name:"app",
  methods:{
    jumpinfo(itemid){
      this.$router.push({
        name:"info",
        params:{
          id:itemid
        }
      });
    }
  }
}
</script>
