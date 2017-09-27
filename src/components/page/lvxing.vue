<template>
  <div class="app">
     <buyer></buyer>
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505183015&di=66eac4cd4664c6aa96b92b2ad4f1c577&imgtype=jpg&er=1&src=http%3A%2F%2Fs16.sinaimg.cn%2Fmw690%2F0065F0Lyzy6ST5Fez9l0f%26amp%3B690"/>
    <div>
        <div class="left"><span class="red">【爆款】</span>星空帐篷、热气球！一场追星逐日的千岛湖之旅</div>
        <div class="right">
        <i class="icon iconfont icon-shoucang1"></i>
        </div>
    </div>
    <div class="gg">
        团建元素|<span>协同</span><span>融合</span>
        会务元素|<span>舒适</span><span>聚气</span><br>
        旅行元素|<span>星空</span><span>烧烤</span><span>山水</span>
    </div>
    <div class="main">
        <hr><span>线路介绍</span><hr>
        去腻了千岛湖，住腻了希尔顿，这次来一场不一样的千岛湖之旅
    </div>
  </div>
</template>
<script>
import buyer from '@/components/common/buyer'
export default {
    name:'app',
    data(){
        return{
          
        }
    },
    
     components:{
            buyer
        }
}
</script>

<style scoped>
    img{
        width:100%;
        height: 3rem;
    }
    .app{
        font-size: .3rem;
        text-align: left;
    }
    .left{
        width:80%;
        display: inline-block;
        
    }
    .red{
        color:red;
    }
    .icon{
        font-size: .5rem;
        float: right;
        margin-top: -.7rem;
        margin-right: .3rem;
    }
    .gg{
       width:100%;
        height: 1rem;
        background: yellowgreen;
        padding-left: .2rem;
        margin-top: .3rem;
       
    }
    .gg span{
        display: inline-block;
        border: 1px solid #aaa;
        background: #fff;
        border-radius: .1rem;
        margin-left: .1rem;
    }
    .main{
        width: 90%;
        margin: 0 auto;
        margin-top: .5rem;
    }
   hr{
       display: inline-block;
       height: .04rem;
       width: 30%;
       background: #aaa;
   }
   .main span{
       width: 40%;
       display: inline-block;
       height: .5rem;
       border: 2px solid green;
       text-align: center;
   }
</style>


