<template>
  <div>
     <h1> <input type="text" v-model="userVal"> </h1>
     <h1> <input type="text" v-model="pwdVal"> </h1>
     <button @click="btnEvent"> 提交 </button>
  </div>
</template>
<script>


export default {
  data() {
    return {
      userVal: '',
      pwdVal: '',
      paths: '/'
    }
  },
  created() {
    this.paths = this.$route.query.redirect
    // console.log(this.$route.query.redirect, 'query=========1')
  },
  methods: {
    btnEvent() {
      // 如果用户登陆成功就把信息存在本地存储中
      this.$axios('/api/login', {
        params: {
          user: this.userVal,
          pwd: this.pwdVal
        }
      }).then(res => {
        console.log(res, 'res')
        // if (res.data.msg === 'success') {}
        if (res.data.msg === 'success') {
          window.localStorage.record = true
          this.$router.push({
            path: this.paths
          })
        } else {
          this.$router.push({
            path: '/register'
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
input{
  border:1px solid black;
}
</style>
