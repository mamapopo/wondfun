<template>
  <div class="app">
      <top></top>
    <form action="#">
        <label for="">出行时间：</label>
        <input type="text"><br>
       <label for="">行程安排</label>
       <input type="text"/><br>
        <label for="">活动类型</label>
         <input type="text"/><br>
        <label for="">活动人数：</label>
         <input type="text"/><br>
        <label for="">联系人：</label>
         <input type="text"/><br>
        <label for="">手机号码：</label>
         <input type="text"/><br>

    </form>
    <button>立即预定</button>
  </div>
</template>
<script>
import top from '@/components/common/top'
export default {
  name:'app',
  data(){
      return{

      }
  },
  components:{
      top
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
i,.a{
    position: absolute;
    left:.5rem;
}
input{
    width: 70%;
    height: .5rem;
    margin: .2rem 0;
    border: 1px solid #aaa;
}
form{
   
    margin-top: 1.5rem;
    width:100%;
    font-size: .3rem;
}
td{
    padding-bottom: .2rem;
    
}
.head{
    width: 30%;
}
label{
    margin-left: .1rem;
    
}
button{
    width: 70%;
    height: 1rem;
    background: seagreen;
    font-size: .4rem;
    color:#fff;
    border-radius: .1rem;

}
</style>

