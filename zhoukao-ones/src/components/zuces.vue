<template>
     <div class = 'zuces'>
          <header class = 'headz'><li>注册</li></header>
          <section class = 'sectz'>
                  <li>账户: <input type = 'text' v-model = 'user'/></li>
                  <li>密码: <input type = 'text' v-model = 'pass'/></li>
                  <li><span @click = 'zhuce'>注册</span></li>
          </section>
     </div>
</template>
<script>
export default{
       name:"zuces",
       data(){
           return{
             user:'',
             pass:''
           }
       },
       methods:{
           zhuce:function(){
               this.$axios.get('/zuce',{
                    params:{
                        user:this.user,
                        pass:this.pass
                    }
               }).then( res => {
                  if(res.data.mass == '注册成功'){
                     this.$router.push('/denls')
                  }
               }
               )
           }
       }
}
</script>
<style>
.zuces{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.headz{
    width:100%;
    height:40px;
    background: pink;
}
.headz li{
    width:100%;
    height:40px;
    text-align: center;
    line-height: 40px;
}
.sectz{
    width:100%;
    height:auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.sectz li{
    width:100%;
    height:60px;
    line-height: 60px;
    margin-left: 15px;
}
.sectz li input{
    display: inline-block;
    width:70%;
    height:28px;
    margin-left: 5px;
    border:solid 1px pink;
}
.sectz li span{
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