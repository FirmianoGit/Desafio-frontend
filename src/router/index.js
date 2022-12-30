import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/SignUp.vue')

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
