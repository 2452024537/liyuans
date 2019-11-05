<template>
    <div class='app'>
         <div class='apps'> 
              <ul> 
                 <li @click='fn'>点击下拉</li>
              </ul>
              <ol :class='{active:fsss}'> 
                   
              </ol>
         </div>
    </div>
</template>

<script>

export default{
       name:"one",
       data(){
         return{
             fsss:true,
             node:[
                    
                  ],
           
         }
       },
       methods:{
           fn:function(){
              this.fsss=!this.fsss
           },
      }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style: none;
}
.app{
  width:100%;
  height:auto;
}
.apps{
  width:100%;
  height:auto;
}
.apps ul{
  width:100%;
  height:40px;
  display: flex;
  border:solid 1px #ccc;
  justify-content: center;
  align-items: center;
  background: #f00;
}
.apps ol{
  position: fixed;
  top:40px;
  left:0;
  width:100%;
  height:300px;
  background: #000;
  opacity: 0.8;
  transition: height .5s;
}
.apps .active{
   height:0;
}
</style>