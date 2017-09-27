<template>
  <div class="app" @click="shows($event)">
     <i class="icon iconfont icon-shouye" @click="goto()"></i>
     <i class="icon iconfont icon-yuyue" @click="goto('yy')"></i>
     <i class="icon iconfont icon-youxi" @click="goto('game')"></i>
     <i class="icon iconfont icon-wo" @click="goto('user')"></i>
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
      goto:function(url){
          if(url){
                this.$router.push({path:'/'+url})
          }else{
              this.$router.push({path:'/'})
          }
        
      },
      shows:function(event){
        //   console.log(event.target);
        console.log('change');
        event.target.style.color='green';
      }
      
  }
}
</script>

<style scoped>
    .app{
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
    }
    .icon{
       font-size: .8rem;
        color: grey;
    }
</style>


