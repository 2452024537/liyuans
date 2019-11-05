import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = {
      state:{
          count:[
                  {id:1,name:"人间失格1",time:"￥9.9",cool:9.9},
                  {id:2,name:"人间失格2",time:"￥9.8",cool:9.8},
                  {id:3,name:"人间失格3",time:"￥9.7",cool:9.7},
                  {id:4,name:"人间失格4",time:"￥9.6",cool:9.6},
                  {id:5,name:"人间失格5",time:"￥9.9",cool:9.5},
                  {id:6,name:"人间失格6",time:"￥9.9",cool:9.4},
                  {id:7,name:"人间失格7",time:"￥9.3",cool:9.3},
                  {id:8,name:"人间失格8",time:"￥9.2",cool:9.2},
                  {id:9,name:"人间失格9",time:"￥9.1",cool:9.1},
                ],
          fnnn:0,
       },
       mounstion:{
            fns:function(state,n=0){
                return this.$store.state.count.id += n;
            },
            fws:function(state,n=0){
                return this.$store.state.count.id -= n;
            },
       }
}

export default store
       

    
