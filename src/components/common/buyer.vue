<template>
  <div class="app">
      <div class="top">
         
         <span >追星逐日千岛湖之旅</span>
         <div class="icons">

        
          <i class=" icon iconfont icon-xiayiye6" @click="goback()"></i>
         <i class="mright icon-r iconfont icon-20151209tubiaolianxizhuanhuan10"></i>
         <i class=" icon-r iconfont icon-fenxiang"></i>
      </div> </div>
  </div>
</template>
<script>
export default {
    name:'app',
    data(){
        return{
            
        }
    },
    methods:{
        goback:function(){
            history.back(1);
        }
    }
   
}
</script>
<style scoped>
    .app{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    }
    .top{
    width:100%;
    height: .65rem;
    background: #f2f2f2;
    font-size: .4rem;
    color:green;
   position: relative;
}
.icons{
    width: 100%;
    height: 100%;
    font-size: .4rem;
    position: absolute;
    top: 0;
    z-index: 2;
    display: flex;
    
   
}
.icons i{
    font-size: .6rem;
    
}

.mright{
    margin-left: 70%;
}
span{
    display: inline-block;
    width: 70%;
    font-size: .3rem;
    margin-left: 1rem;
}




</style>

