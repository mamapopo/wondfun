<template>
<div class="app">
   <div id="banner" class="swaper">
       <div id="imgs" class="imgs" @click="goto()">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1562901139,2856947804&fm=27&gp=0.jpg"/>
       <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504599573030&di=f57b7685518cef244528438921b00b78&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F130427%2F240403-13042F6140951.jpg"/>
       
       <img src="http://www.51plain.com/images/img2015/1503010.jpg"/>
       <img src="http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=780a912f91504fc2b652b8468db48d64/d4628535e5dde711c7cb5ed1adefce1b9d1661ff.jpg"/>
        
       </div>
       <ul class="index">
            <li class="select"></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
   </div>
   <div class="check">
       <div class="c1">
         <img src=" https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1891398287,591449280&fm=27&gp=0.jpg"/>
         <span class="btn">活动精选</span>
       </div>
       <div class="c2">
           <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2729433838,3478649386&fm=11&gp=0.jpg" alt="">
           <span class="btn">民宿精选</span>
       </div>
   </div>
   <div class="item" v-for="(i,index) in items" :key="index" @click="buyers(i.img)">
       <img :src="i.img" alt="">
       <span>{{i.text}}</span>
   </div>
   
   <div class="botton"></div>
    <bottom></bottom>
</div>
</template>
<script>

    import bottom from '@/components/common/bottom'
    export default{
        name:'app',
        data(){
            return{
                items:[
                    {
                    img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505183015&di=66eac4cd4664c6aa96b92b2ad4f1c577&imgtype=jpg&er=1&src=http%3A%2F%2Fs16.sinaimg.cn%2Fmw690%2F0065F0Lyzy6ST5Fez9l0f%26amp%3B690",
                    text:"星空帐篷，热气球！一场追星逐日的千岛湖之旅s"
                    },
                    {
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504587742636&di=6783c80caf04e98b6db7cacc82d5312c&imgtype=0&src=http%3A%2F%2Fupload.17u.net%2Fuploadpicbase%2F2015%2F6%2F27%2Faa%2F201506270443463539.jpg",
                        text:"携手驰骋于内蒙古大草原，风吹草地狼图腾"
                    },
                    {
                        img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3739200081,206155634&fm=200&gp=0.jpg",
                        text:"开荒种地，重归自然的怀抱！玩转疯狂的农庄"
                    },
                    {
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504588490463&di=9e2cdee3248db3a195a327cb5808ef92&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fpoi%2F1411%2Fda%2Fda89d45eba1f5816213a9cdb.jpg_r_480x360x95_af589323.jpg",
                        text:'兄弟携手，桐庐浪石金滩一日百舸争流'
                    },{
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504588582424&di=6ab5b13049729cdf2971b31745a56e05&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fc9fcc3cec3fdfc0324d4daaade3f8794a4c22677.jpg",
                        text:'【无人区】十字峡3日荒野求生之旅'
                    }

                ]
            }
        },
        components:{
            bottom
        },
       
        methods:{
            buyers:function(img){
               this.$router.push({path:'/lvxing',query: {img:img}})
            }
        }
    }
</script>
<style scoped>
.app{
    background:#f1f1f1;
    /* font-size: .2rem; */
}
.swaper{
    width:100%;
    height: 2.5rem;
    background: grey;
   margin-bottom: .1rem;
   overflow: hidden;
   position: relative;
}
.imgs{
    font-size: 0;
    width: 400%;
    height: 100%;
    position: relative;
    /* left:-100%; */
}
.imgs img{
    display: inline-block;
    width: 25%;
    height: 100%;
}

.index{
    position: absolute;
    width: 30%;
   z-index: 999;
   font-size: .3rem;
    bottom:0;
    list-style: none;
    margin-bottom: .1rem;
    margin-left: 35%;
    display: flex;
    justify-content: space-between;
}
.index li{
    float: left;
   width:.1rem;
   height: .1rem;
   border-radius: .05rem;
   background: gray;
}
.select{
    background: #fff !important;
}
.check{
    width:95%;
    margin: 0 auto;
    height: 1.5rem;
    background: #fff;
    border-radius: .1rem;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
     font-size: .4em;
     margin-bottom: .1rem;
}
.c1,.c2{
    width: 45%;
    position: relative;
}


.item{
    width: 95%;
    height: 2.5rem;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: .1rem;
    position: relative;

}
.btn{
    position: absolute;
    top: 30%;
    left:10%;
    height: 40%;
    width: 80%;
    font-size: .3rem;
    color:#fff;
    border: .04rem solid #fff;
    border-radius: .1rem;
    text-align: center;
   padding-top: .1rem;
}
img{width: 100%;height:100%;}
.item span{
    width:100%;
    height: .3rem;
    background: rgba(255,255,255,.5);
    color:#FFF;
    text-align: left;
    padding-left: .2rem;
    font-size: .2rem;
    position: absolute;
    left: 0;
    bottom:0;
}
.botton{
     width: 100%;
        height: 1rem;
}
</style>