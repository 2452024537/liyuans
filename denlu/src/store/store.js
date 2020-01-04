import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = {
      state:{
            count:'111111111'
      },
      mounstion:{
            fns:function(){
                return this.state.count + 5
            }
      }
      
}
export default store