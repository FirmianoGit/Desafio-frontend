import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/account',
    name: 'UserAccount',
    component: () => import('../views/UserAccount.vue'),
    beforeEnter: (to, from, next) => {
      store.state.user.isLoggedIn ? next() : next({name:'Home'});
    },
  },
  {
    path: "/:pathMatch(.*)*",
    beforeEnter: (to, from, next) => {
      next("/");
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
