<template>
     <div class = 'box'>
          <div class='sectb'>
            <router-view></router-view>
          </div>
          <div class='footb'>
            <router-link to ='/shou' class='lib'>首页</router-link>
            <router-link to ='/zhan' class='lib'>展示</router-link>
            <router-link to ='/xian' class='lib'>国务</router-link>
            <router-link to ='/huai' class='lib'>会员</router-link>
            <router-link to ='/kren' class='lib'>个人</router-link>
          </div>
     </div>
</template>
<script>
export default {
       name:"box",
}
</script>
<style>
.box{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
}
.footb{
  width:100%;
  height:40px;
  background: #f00;
  display: flex;
  position: fixed;
  bottom: 0;
}
.sectb{
  width:100%;
  height:100%;

}
.lib{
    width:20%;
    height:40px;
    line-height: 40px;
    text-align: center;
}
</style>