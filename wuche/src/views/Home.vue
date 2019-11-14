<template>
  <div class="home">
    <div @click="jumpinfo(item.id)" class="card" v-for="(item,index) in dataList" :key="index">
      <div class="cardimg">
        <img src="./../assets/img.jpg" alt="">
      </div>
      <div class="cardtitle">
        {{item.title}}
      </div>
      <div class="cardremark">
        {{item.remark}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
      dataList:[
        {id:1,title:"明华1",remark:"明华12"},
        {id:2,title:"明华2",remark:"明华22"},
        {id:3,title:"明华3",remark:"明华32"},
        {id:4,title:"明华4",remark:"明华42"},
        {id:5,title:"明华5",remark:"明华52"},
        {id:6,title:"明华6",remark:"明华62"},
        {id:7,title:"明华7",remark:"明华72"},
      ]
    }
  },
  methods:{
    jumpinfo(itemid){
      this.$emit("jumpinfo",itemid);
    }
  }
}
</script>
<style scoped lang="scss">
.home{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card{
  border:1px solid #444444;
  border-radius: 10px;
  width:49%;
  height:180px;
  display: flex;
  flex-direction: column;
  padding:0px;
  margin:0px;
  .cardimg{
    width:50%;
    img{
      width:100%;
      height:100px;
    }
  }
}
</style>
