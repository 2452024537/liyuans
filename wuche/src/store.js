import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
            foodList:[
                        {id:1,name:'西瓜',gold:2,state:0,num:10},
                        {id:2,name:'辣条',gold:5,state:0,num:10},
                        {id:3,name:'炸鸡',gold:16,state:0,num:10},
                        {id:4,name:'啤酒',gold:4,state:0,num:10},
                        {id:5,name:'小龙虾',gold:64,state:0,num:10},
                        {id:6,name:'麻辣烫',gold:20,state:0,num:10},
                        {id:7,name:'火锅',gold:200,state:0,num:10},
                        {id:8,name:'烤鸭',gold:268,state:0,num:10}
                     ],
        shoppingcar:[]
    },
    getters:{
        foodList(state){
            return state.foodList.map(element =>{
                return {
                        id:element.id,
                        name:element.name,
                        gold:"￥"+element.gold
                }
            });
        },
        totalgold(state){
            let toatalgold = 0;
            state.shoppingcar.map(element =>{
                toatalgold += element.gold * element.num;
            });
            return toatalgold;
        }
    },
    mutations:{
        jia(state,item){
            return state.foodList.forEach(element => {
                if(element.id == item.id){
                    element.gold += 100;
                  }
            });
        },
        jian(state,item){
            return state.foodList.forEach(element => {
                if(element.id == item.id){
                    if(element.gold < 100){
                        element.gold = 0;
                    }else{
                        element.gold -= 100;
                    }
                }
            });
        },
        //点击购买按钮
        goumai(state,item){
            //element foodlist里的元素
            return state.foodList.map(element =>{
                //判断点击购买的商品和foodlist里的商品是一致的，
                //确保点击购买的时候不会影响其他的数据
                if(element.id == item.id){
                    if(element.num < 1){
                        element.num = 0;
                    }else{
                        //判断商品数量是否等于0 如果没有就什么也不做
                        if(element.num == 0){
                        }else{
                              if(state.shoppingcar.some(n => n.id === element.id)){
                                state.shoppingcar.forEach(el =>{
                                    if(el.id == item.id){
                                       el.num += 1;
                                      }
                                    });
                              }else{
                                state.shoppingcar.push({
                                    id:element.id,
                                    name:element.name,
                                    gold:element.gold,
                                    state:element.state,
                                    num:1
                                });
                            }
                        }
                        element.num -= 1;
                    }
                }
            });
        },
        //在购物车内进行减的操作
        delitem(state,item){
            return state.shoppingcar.map((element,index) => {
                if(element.id == item.id){
                    if(element.num <= 1){
                        state.shoppingcar.splice(index,1);
                        state.foodList.map(el =>{
                            if(el.id == element.id){
                                el.num += 1;
                            }
                        });
                    }else{
                        state.foodList.map(el =>{
                            if(el.id == element.id){
                                el.num += 1;
                            }
                        });
                        element.num -= 1;
                    }
                }
            })
        },
        //购物车里面的删除操作
        shanchu(state,item){
            return state.shoppingcar.map((element,index)=>{
                if(element.id == item.id){
                    state.foodList.map(el =>{
                        if(element.id == el.id){
                            el.num += element.num;
                            state.shoppingcar.splice(index,1);
                        }
                    });
                }
            });
        }

    },
});