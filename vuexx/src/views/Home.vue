<template>
  <div class="home">
     <ul @click="bindDetailEvent(item)" v-for="(item, index) in listArr" :key="index">
       <li> 
         <img :src="item.images" alt="">
         <span> {{ item.skuName }} </span>
       </li>
     </ul>
  </div>
</template>
<script>
export default {
  name: 'homeComponents',
  data() {
    return {
      listArr: []
    }
  },
  components: {
  },
  created() {
    this.getData()
  },
  methods: {
    bindDetailEvent(item) {
     // 跳转详情页面
     this.$router.push({
       path: `/detail/${item.skuId}`
     })
    },
    getData() {
      this.$axios('/api/list').then(res => {
        this.listArr = res.data.list.data.skuInfo
      })
    } 
  },
}
</script>
<style lang="scss">
  .home {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    ul {
      width: 48%;
      height: 200px;
      text-align: center;
      img {
        width: 100%;
        height: 80%;
      }
    }
  }
</style>
