<template>
  <div class="about">
    <el-table :data="foodList" style="width:100%;">
      <el-table-column prop="id" label="编号">

      </el-table-column>
      <el-table-column prop="name" label="名字">

      </el-table-column>
      <el-table-column prop="gold" label="价格/元">

      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="jia(scope.row)" size="mini">+</el-button>
          <el-button @click="jian(scope.row)" size="mini">-</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name:"about",
  //计算属性
  computed:{
    foodList(){
      return this.$store.getters.foodList;
    }
  },
  methods:{
    jia(row){
      this.$store.commit("jia",row);
    },
    jian(row){
      this.$store.commit("jian",row);
    }
  }
}
</script>

