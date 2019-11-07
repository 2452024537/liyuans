<template>
     <div class = 'denls'>
          <header class = 'headd'><li>登陆</li></header>
          <section class = 'sectd'>
                  <li>账户: <input type = 'text' v-model = 'user'/></li>
                  <li>密码: <input type = 'text' v-model = 'pass'/></li>
                  <li><span @click = 'denlu(user,pass)'>登陆</span></li>
          </section>
     </div>
</template>
<script>
export default {
       name:"denls",
       data(){
           return{
                  user:"",
                  pass:""
           }
       },
       methods:{
           denlu:function(user,pass){
                 this.$axios.get('/denl',{
                      params:{
                          user:user,
                          pass:pass
                      }
                 }).then( res => {
                      if(res.data.mas == 'success'){
                         window.localStorage.record = true;
                         this.$router.push({
                              path:"/shou",
                              query:{
                                    den:this.user
                              }
                         })
                      }
                      else{
                         this.$router.push({
                              path:'/zuces',
                         })
                      }
                 })
           }
       }
       
}
</script>
<style>
.denls{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.headd{
    width:100%;
    height:40px;
    background: pink;
}
.headd li{
    width:100%;
    height:40px;
    text-align: center;
    line-height: 40px;
}
.sectd{
    width:100%;
    height:auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.sectd li{
    width:100%;
    height:60px;
    line-height: 60px;
    margin-left: 15px;
}
.sectd li input{
    display: inline-block;
    width:70%;
    height:28px;
    margin-left: 5px;
    border:solid 1px pink;
}
.sectd li span{
    display: inline-block;
    width:65px;
    height:28px;
    background: pink;
    line-height: 28px;
    text-align: center;
    position: fixed;
    top:210px;
    left:38%;
}
</style>