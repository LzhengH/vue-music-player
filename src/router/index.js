import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('src/layout/Main'),
    children: [
      {
        path: '',
        redirect: 'discover'
      },
      {
        path: 'discover',
        component: () => import('src/views/discover'),
        children: [
          {
            path: '',
            redirect: 'recommend'
          },
          {
            path: 'recommend',
            component: () => import('src/views/discover/c-views/recommend')
          },
          {
            path: 'toplist',
            component: () => import('src/views/discover/c-views/toplist')
          },
          {
            path: 'playlist',
            component: () => import('src/views/discover/c-views/playlist')
          },
          {
            path: 'djradio',
            component: () => import('src/views/discover/c-views/djradio')
          },
          {
            path: 'artist',
            component: () => import('src/views/discover/c-views/artist')
          },
          {
            path: 'album',
            component: () => import('src/views/discover/c-views/album')
          },
        ]
      }
    ]
  }

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'link-active'
})

export default router
