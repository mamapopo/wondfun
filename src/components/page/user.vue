<template>
    <div class="app">
         <div class="top">
          <i class="i icon iconfont icon-xiayiye6" @click="goback()"></i>
         
          <span >个人信息</span>
      </div>
      <div class="user">

      </div>
    <ul>
        <li><i class=" icon2 iconfont icon-yuyue"></i> 我的预定</li>
        <li><i class=" icon2 iconfont icon-shoucang1 "></i>我的收藏</li>
        <li><i class=" icon2 iconfont icon-xiangguan "></i>相关信息</li>
    </ul>
    <button>退出登录</button>
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
.icon2{
    font-size: .4rem;
    color: seagreen;
}
.i{
    position: absolute;
    margin-left: -2rem;
}
.user{
    width: 100%;
    height: 3rem;
    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505193087&di=b70e5487db8c330f8ccdc25b873e8241&imgtype=jpg&er=1&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F150518%2F14-15051Q44923614.jpg') ;
    background-size: 100% 100%;
    margin-bottom: .3rem;
   

}
ul{
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    font-size: .3rem;
}
li{
    width: 90%;
    list-style: none;
    border-bottom: 1px solid #333;
    margin: 0 auto;
    text-align: left;
    padding: .1rem 0;
}
li:last-child{
    border-bottom: 0;
}
button{
    width: 80%;
    height: .8rem;
    font-size: .3rem;
    background: seagreen;
   border-radius: .1rem;
   color:#fff;
}
</style>

