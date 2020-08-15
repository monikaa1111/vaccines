import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import home from '@/views/home'
import Vant from 'vant'
import top from '@/components/top'
import register from '@/views/register'
import 'vant/lib/index.css'
import forget from '@/views/forget'
import modify from '@/views/modify'
import modify1 from '@/views/modify1'
import Personal from '@/views/Personal'
import yyrecord from '@/views/yyrecord'
import details from '@/views/details'
import notification from '@/views/notification'
import appointment from '@/views/appointment'
import Health from '@/views/Health'
import ele from '@/views/ele'
import ewm from '@/views/ewm'
import inquiry from '@/views/inquiry'
import information from '@/views/information'
import inoculation from '@/views/inoculation'
import treeselect from '@/views/treeselect'
Vue.use(Vant);



Vue.use(Router)

export default new Router({
  mode:"hash",
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
      path: '/modify1',
      name: 'modify1',
      component: modify1
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
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
    {
      path: '/Health',
      name: 'Health',
      component: Health
    },
    {
      path: '/inquiry',
      name: 'inquiry',
      component: inquiry
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/inoculation',
      name: 'inoculation',
      component: inoculation
    },
    {
      path: '/treeselect',
      name: 'treeselect',
      component: treeselect
    },
    {
      path: '/ewm',
      name: 'ewm',
      component: ewm
    },
  ]
})
