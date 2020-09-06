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
        component: () => import('src/views/Discover')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
