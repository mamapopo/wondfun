<template>
    <div class="app">
         <div class="top">
          <i class="icon iconfont icon-xiayiye6" @click="goback()"></i>
         
          <span >线路制定</span>
      </div>
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
.top{
    width:100%;
    height: .7rem;
    background: #f2f2f2;
    font-size: .4rem;
    color:seagreen;
    display: flex;
    justify-content: space-around;
}
.icon{
    font-size: .8rem;
    margin-top: -0.1rem;
    margin-left:-0.3rem;
}
i{
    position: absolute;
    left:.5rem;
}
</style>

