<template>
<div class="app">
    
    <div class="item head">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504609319799&di=968eeb2d34212632921af16e4e2aa1d3&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3201801096%2C749430701%26fm%3D214%26gp%3D0.jpg"/>
    </div>
   <table>
       <tr>
           <td><i class=" iconfont icon-R"></i></td>
           <td><i class=" iconfont icon-jiubei"></i></td>
           <td><i class=" iconfont icon-shan"></i></td>
           <td><i class=" iconfont icon-icontuan"></i></td>
       </tr>
       <tr>
           <td><i class=" iconfont icon-naodongdakai"></i></td>
           <td><i class=" iconfont icon-xue"></i></td>
           <td><i class=" iconfont icon-wanhui"></i></td>
           <td><i class=" iconfont icon-zaochen"></i></td>
       </tr>
   </table>
   <div class="item" v-for="(game,index) in games" :key="index"> 
       <img :src="game.img"/>
       <span>{{game.text}}<i class="icon iconfont icon-xiayi"></i></span>

   </div>
    


    <bottom></bottom>
</div>  
</template>
<script>
import bottom from '@/components/common/bottom'
export default {
  name:'app',
  data(){
      return{
          games:[
              {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505191147&di=a279df08d7c6fd4e14f4080dbf0ff6a8&imgtype=jpg&er=1&src=http%3A%2F%2Fsc.jb51.net%2Fuploads%2Fallimg%2F150814%2F15-150Q4164213962.jpg",text:"嘴巴手指不一样"},
              {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504597631358&di=727894a01bf908fc109f837ffa791be1&imgtype=0&src=http%3A%2F%2Fwww.ahtodayedu.com%2Fuserfiles%2Fimage%2F20130930%2F8a.jpg",text:"猜猜我是谁"},
              {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505192479&di=a8776ba8331a49641d50d7db3b02388d&imgtype=jpg&er=1&src=http%3A%2F%2Fimg2.ph.126.net%2FGW6IPEdBEHjE-dLwNyXBBA%3D%3D%2F1103381908723299962.jpg",text:"踩气球"},
              {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505192575&di=2ab56bb1da095310d809c7f8a3238595&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150710%2Fmp22183761_1436514257192_2_th.jpeg",text:"人生如戏"}
             
             
          ]
      }
  },
  components:{
      bottom
  }
}
</script>
<style scoped>
.app{
    background: #eee;
    font-size: .3rem;
}
img{
    width:100%;
    height:100%;
}
.item{
    margin: 0 auto;
    border-radius:3px;
    border: 1px solid black;
    margin-bottom: .5rem;
    /* box-shadow: 10px 10px 5px #888888; */
    width: 90%;
    font-size: 0;
    height:2.5rem;
    margin-bottom: .8rem;
}
table{
    margin: 0 auto;
    width:90%;
    
}
table i{
    font-size: .5rem;
    
}
table>ul{
    display: flex;
    justify-content: space-around;
    padding:.1rem;
}
table td{
    width:1rem;
    height:1.1rem; 
    margin: 0;
    border-radius: .5rem;
    background: yellowgreen;
}
span{
    font-size: .3rem;
    width: 100%;
    border:1px solid black;
    display: inline-block;
    top: 0;
    left: 0;
    text-align: left;
    height: .5rem;
    background: #fff;
}
.icon{
    font-size: .6rem;
    float: right;
    margin-top: -.1rem;
}
.head{
    height: 2rem;
    margin-bottom: .2rem;
}

</style>


