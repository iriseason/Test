import Vue from 'vue'
import Router from 'vue-router'

import Home_page from '../components/home_page/Home_page'
import GoodPrice from '../components/goodPrice/GoodPrice'
import GoodEssay from '../components/goodEssay/GoodEssay'
import Goods from '../components/goods/Goods'
import Mine from '../components/mine/Mine'
import Hot from '../components/hot/Hot'
import Login from '../components/login/Login'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/goodPrice', name: 'GoodPrice', component: GoodPrice},
    {path: '/goodEssay', name: 'GoodEssay', component: GoodEssay},
    {path: '/home_page', name: 'Home_page', component:Home_page},
    {path: '/goods', name: 'Goods', component:Goods},
    {path: '/mine', name: 'Mine', component:Mine},
    {path: '/hot', name: 'Hot', component:Hot},
    {path: '/login', name: 'Login', component:Login},
  ]
})
