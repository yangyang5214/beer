import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Index from '../components/index/Index'
import Bug from '../components/bug/Bug'
import BlogDetail from '../components/blog/BlogDetail'
import Blog from '../components/blog/Blog'
import GalleryDetail from '../components/gallery/GalleryDetail'
import Gallery from '../components/gallery/Gallery'
import Me from '../components/me/Me'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/beer',
      component: GalleryDetail,
    },
    {
      path: '/blog/detail/*',
      component: BlogDetail,
    },
    {
      path: '/gallery/detail/*',
      component: GalleryDetail,
    },
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        {
          path: '/',
          name: '首页',
          component: Index,
        },
        {
          path: '/gallery',
          name: '相册',
          component: Gallery,
        },
        {
          path: '/blog',
          name: '个人博客',
          component: Blog,
        },
        {
          path: '/bug',
          name: 'bug',
          component: Bug,
        },
        {
          path: '/me',
          name: '自我介绍',
          component: Me,
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
