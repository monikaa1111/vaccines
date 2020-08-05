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
import Personal from '@/views/Personal'
import denglu from '@/pc/denglu'
import register1 from '@/pc/register1'
import yyrecord from '@/views/yyrecord'
import details from '@/views/details'
import notification from '@/views/notification'
import appointment from '@/views/appointment'
import ele from '@/views/ele'



Vue.use(Vant);

Vue.use(Router)

export default new Router({
  mode:"history",
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
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/register1',
      name: 'register1',
      component: register1
    },
    {
      path: '/yyrecord',
      name: 'yyrecord',
      component: yyrecord
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/notification',
      name: 'notification',
      component: notification
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: appointment
    },
    {
      path: '/ele',
      name: 'ele',
      component: ele
    },
    
  ]
})
