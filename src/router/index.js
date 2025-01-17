import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: 'Resources',
  //   name: 'Resources',
  //   component: Resources
  // },
  // {
  //   path: 'pricing',
  //   name: 'pricing',
  //   component: pricing
  // },
  // {
  //   path: 'contact',
  //   name: 'contact',
  //   component: contact
  // },
  {
    path: '/Sign',
    name: 'Sign',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
