<template>
  <div>
    <h1>注册页面</h1>
     <h1> <input type="text" v-model="userVal"> </h1>
     <h1> <input type="text" v-model="pwdVal"> </h1>
     <button @click="btnEvent"> 注册 </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userVal: '',
      pwdVal: ''
    }
  },
  created() {
    console.log(this.$route.query.redirect, 'query=========1')
  },
  methods: {
    btnEvent() {
      console.log(this.userVal, this.pwdVal, 'val')
      // 如果用户登陆成功就把信息存在本地存储中
      if (this.userVal && this.pwdVal) {
       this.$axios.get('/api/register', {
         params: {
           user: this.userVal,
           pwd: this.pwdVal
         }
       }).then(res => {
         console.log(res, 'res------register')
        //  this.$router.push({
        //    path: '/login'
        //  })
       }) 
        

        // this.$router.push({
        //   path: this.$route.query.redirect
        // })
      }
    }
  },
}
</script>
<style lang="scss">
input{
  border:1px solid black;
}
  
</style>
