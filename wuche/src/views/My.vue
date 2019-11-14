<template>
    <div class="my">
        我的
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品</span>
            </div>

            <el-table :data="foodList">
                <el-table-column
                    prop="id"
                    label="编号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="商品名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="gold"
                    label="价格/元">
                </el-table-column>

                <el-table-column
                    label="数量">

                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.num == 0" type="danger">已经售空</el-tag>
                        <div v-if="scope.row.num != 0">{{scope.row.num}}</div>
                    </template>

                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goumai(scope.row)" type="primary" size="">购买</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>购物车(收藏)&nbsp;&nbsp;&nbsp;&nbsp;总价：{{totalgold}}</span>
            </div>

            <el-table :data="shoppingcar">
                <el-table-column
                    prop="id"
                    label="编号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="商品名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="gold"
                    label="价格/元">
                </el-table-column>

                 <el-table-column label="数量" width="180">
                    <template slot-scope="scope">
                        <el-button @click="jian(scope.row)" size="mini" type="danger">-</el-button>
                        <span>{{scope.row.num}}</span>
                        <el-button @click="goumai(scope.row)" size="mini" type="primary">+</el-button>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="shanchu(scope.row)" type="primary" size="">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
    name:"My",
    computed:{
        foodList(){
            return this.$store.state.foodList;
        },
        shoppingcar(){
            return this.$store.state.shoppingcar;
        },
        totalgold(){
            return this.$store.getters.totalgold;
        }
    },
    methods:{
        /**
         * item 传递过来的foodlist中的一个对象
         * state 要修改的状态 它只能是0和1
        */
        goumai(item){
            //item.changstate = state;
            //console.log(event.target.innerHTML)
            return this.$store.commit("goumai",item);
        },
        jian(item){
            return this.$store.commit("delitem",item);
        },
        shanchu(item){
            return this.$store.commit("shanchu",item);
        },
    }
}
</script>