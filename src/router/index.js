import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import home from '@/views/home'
import Vant from 'vant'
import houtai from '@/views/houtai'
import top from '@/components/top'
import register from '@/views/register'
import 'vant/lib/index.css'
import forget from '@/views/forget'
import modify from '@/views/modify'

Vue.use(Vant);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/top',
      name: 'top',
      component: top
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/houtai',
      name: 'houtai',
      component: houtai
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    }
  ]
})
