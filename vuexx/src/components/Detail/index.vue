<template>
  <div class="detail">
     <h1 v-if="detailMsg.length"> 
        {{detailMsg[0].skuName}}
        <img :src="detailMsg[0].images" alt="">
     </h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      detailMsg: []
    }
  },
  created() {
    console.log(this.$route.params.id)
    this.getData()
  },
  methods: {
    getData() {
      this.$axios.get('/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        this.detailMsg = res.data.list
        console.log(res.data.list, 'res')
      })
    } 
  }
}
</script>
<style lang="scss" scoped>
 img {
   width: 200px;
   height: 200px;
 }
</style>
