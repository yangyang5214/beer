import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Index from '../components/index/Index'
import Bug from '../components/bug/Bug'
import Blog from '../components/blog/Blog'
import Gallery from '../components/gallery/Gallery'
import Me from '../components/me/Me'
import Admin from '../components/admin/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: Index,
        },
      ]
    },
    {
      path: '/home',
      name: '首页',
      component: Home,
      children: [
        {
          path: '/index',
          name: '首页',
          component: Index,
        },
        {
          path: '/gallery',
          name: '相册',
          component: Gallery,
        }, {
          path: '/blog',
          name: '个人博客',
          component: Blog,
        },
        {
          path: '/bug',
          name: 'bug记录',
          component: Bug,
        },
        {
          path: '/me',
          name: '自我介绍',
          component: Me,
        },
        {
          path: '/admin',
          name: '后台管理',
          component: Admin,
        },
      ]
    },
  ]
})
