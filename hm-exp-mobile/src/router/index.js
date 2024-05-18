import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import Layout from '@/views/Layout'
import Article from '@/views/Article'
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import User from '@/views/User'
import { getToken } from '@/utils/storage'
Vue.use(VueRouter)

const routes = [
  // { path: '/', component: Layout },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/article/:id?', component: Detail },
  {
    path: '/',
    component: Layout,
    redirect: '/articles',
    children: [
      { path: '/articles', component: Article },
      { path: '/collect', component: Collect },
      { path: '/like', component: Like },
      { path: '/user', component: User }
    ]
  }
]

const router = new VueRouter({
  routes
})
const whiteList = ['/login', '/register']
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
