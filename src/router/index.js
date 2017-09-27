import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/page/Index'
import game from '@/components/page/game'
import yuyue from '@/components/page/yuyue'
import user from '@/components/page/user'
import lvxing from '@/components/page/lvxing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path:'/game',
      name:'game',
      component:game
    },{
      path:'/yy',
      name:'yuyue',
      component:yuyue
    },
    {
      path:'/user',
      name:'user',
      component:user
    },{
      path:'/lvxing',
      name:'lvxing',
      component:lvxing
    }
  ]
})
